"use client";
import { FaAngleRight } from "react-icons/fa6";
import Products from "@/components/users/products";
import FooterCard from "@/components/users/footerCard";
import { useEffect, useState, useCallback } from "react";
import useStore from "@/app/store";
import { useParams } from "next/navigation";
import useFetchProducts from "@/utils/category";
import { axiosInstance } from "@/package/axios";
import { productFilter, locationFilter, amountFilter } from "@/utils/methods";


export default function Page(){
    const {id} = useParams();
    const {categories} = useStore();

    const { cars, fetchAllProduct,user} = useStore();
    const { filter, loading, error, fetchProducts } = useFetchProducts();
    const [others, setOthers] = useState([]);
    const [auctions, setAuctions] = useState([]);
    const [models, setModels] = useState([]);
    const [filterItems, setFilterItems] = useState([]);
           
        const fetchOthers = async(id)=>{
            try{
                const response = await axiosInstance.post(`/others`, {id :parseInt(id)})
                const data = await response.data;
                if(response.status == 200){
                const items = data.data.map(other => other.items).flat();
                setFilterItems(items)
                setOthers(items);
                 
                }
            }catch(error){
                console.log(error)
            }
        };

        const fetchAuction = async()=>{
            try{
              const response = await axiosInstance.post("/listing", {id: parseInt(id)})
              const data = await response.data;
              if(response.status == 200){
                setAuctions(data.items)
                setFilterItems(data.items)
                setModels(data.models);
              }
            }catch(error){
              console.log(error)
            }
        }



    const othersFilter = useCallback((id)=>{
        const filtered = productFilter(filterItems, id);
        setAuctions(filtered);
    },[auctions]);

    const locationHandler = useCallback((location)=>{
        const items = locationFilter(filterItems, location);
        setAuctions(items);
    },[auctions]);


    const amountFiltering = useCallback((range)=>{
        if(range == "All"){
            setAuctions(auctions)
        }{
        const items = amountFilter(filterItems, range)
        setAuctions(items)
    }
    },[auctions]);



    useEffect(() => {
        fetchAuction(id)
        }, [user]);

    return(
        <div className="flex flex-col relative pt-[10rem] ">

            <div className="flex flex-col xl:px-[4rem] px-[1rem]">
                <div className="flex items-center  xl:gap-4 gap-2 xl:text-[14px] md:text-[10px] text-[8px]">
                    <span>Home</span>
                    <FaAngleRight size={14}/>
                    <span className="text-[#EF6509]">Listings</span>
                </div>
            </div>

            <div className="xl:px-[4rem] px-[1rem]">
                {/* <OtherCategories
                handleFetchProducts={othersFilter}
                categories={categories}
                filter={filter}
                id={id}
                fetchOthers={fetchOthers}
                /> */}
                <div className="">
                    <Products 
                    page="" 
                    headline="" 
                    detail="" 
                    category={models} 
                    style="" 
                    data={auctions}
                    productsFiter={othersFilter}
                    locationHandler={locationHandler}
                    amountFiltering={amountFiltering}
                    link={true}
                    onPage = {true}
                    />
                </div>
            </div>
            
            <div className="mb-24 w-full">
                <FooterCard/>            
            </div>
        </div>
    )
}