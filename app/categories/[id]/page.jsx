"use client";
import { FaAngleRight } from "react-icons/fa6";
import Products from "@/components/users/products";
import FooterCard from "@/components/users/footerCard";
import { useEffect, useState, useCallback } from "react";
import SliderProduct from "@/components/users/slideProducts";
import useStore from "@/app/store";
import { useParams } from "next/navigation";
import useFetchProducts from "@/utils/category";
import OtherCategories from "@/tabs/users/otherCategory";
import { axiosInstance } from "@/package/axios";
import { productFilter, locationFilter, amountFilter } from "@/utils/methods";


export default function Page(){
    const {id} = useParams();
    const {categories} = useStore();

    const { cars, fetchAllProduct,user} = useStore();
    const { filter, loading, error, fetchProducts } = useFetchProducts();
    const [others, setOthers] = useState([]);
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
                setModels(data.data); 
                }
            }catch(error){
                console.log(error)
            }
        };



    const othersFilter = useCallback((id)=>{
        const filteredCars = productFilter(filterItems, id);
        setOthers(filteredCars);
    },[others]);

    const locationHandler = useCallback((location)=>{
        const items = locationFilter(filterItems, location);
        setOthers(items);
    },[others]);


    const amountFiltering = useCallback((range)=>{
        if(range == "All"){
            setProperty(others)
        }{
        const items = amountFilter(filterItems, range)
        setOthers(items)
    }
    },[others]);



    useEffect(() => {
        fetchOthers(id)
        fetchAllProduct();
        }, [user]);

    return(
        <div className="flex flex-col relative pt-[10rem] ">

            <div className="flex flex-col gap-4 2xl:px-[4rem] xl:px-[4rem] px-[1rem]">
                <div className="flex items-center 2xl:gap-4 xl:gap-4 gap-2 2xl:text-[14px] xl:text-[14px] md:text-[10px] text-[8px]">
                    <span>Home</span>
                    <FaAngleRight size={14}/>
                    <span className="text-[#EF6509]">Categories</span>
                </div>
            </div>

            <SliderProduct 
            data={cars} 
            header="Top Auctions"
            />

            <div className=" xl:grid block grid-cols-4 pt-24  xl:px-[4rem] px-[1rem]">
                <OtherCategories
                handleFetchProducts={othersFilter}
                categories={categories}
                filter={filter}
                id={id}
                fetchOthers={fetchOthers}
                />
                <div className="col-span-3 ">
                    <Products 
                    page="categories" 
                    headline="" 
                    detail="" 
                    category={models} 
                    style="" 
                    data={others}
                    productsFiter={othersFilter}
                    locationHandler={locationHandler}
                    amountFiltering={amountFiltering}
                    />
                </div>
            </div>
            
            <div className="mb-24 w-full">
                <FooterCard/>            
            </div>
        </div>
    )
}