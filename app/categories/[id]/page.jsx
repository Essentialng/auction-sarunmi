"use client";
import { FaAngleRight } from "react-icons/fa6";
import Products from "@/components/users/products";
import FooterCard from "@/components/users/footerCard";
import { useEffect } from "react";
import SleiderProduct from "@/components/users/slideProducts";
import useStore from "@/app/store";
import { useParams } from "next/navigation";
import useFetchProducts from "@/utils/category";
import OtherCategories from "@/tabs/users/otherCategory";



export default function Page(){
    const {id} = useParams();
    
    const { cars, products, categories, fetchCategory} = useStore();
    const { filter, loading, error, fetchProducts } = useFetchProducts();



    const handleFetchProducts = (categoryId) => {
          fetchProducts(categoryId);
      };


    useEffect(() => {
        if(products){
        fetchCategory();
        };
        fetchProducts(id)
        }, []);

    return(
        <div className="flex flex-col relative pt-[10rem] ">

            <div className="flex flex-col gap-4 2xl:px-[4rem] xl:px-[4rem] px-[1rem]">
                <div className="flex items-center 2xl:gap-4 xl:gap-4 gap-2 2xl:text-[14px] xl:text-[14px] md:text-[10px] text-[8px]">
                    <span>Home</span>
                    <FaAngleRight size={14}/>
                    <span className="text-[#EF6509]">Categories</span>
                </div>
            </div>

            <SleiderProduct 
            data={cars} 
            header="Top Auctions"
            />

            <div className=" xl:grid block grid-cols-4 pt-24  xl:px-[4rem] px-[1rem]">
                <OtherCategories
                handleFetchProducts={handleFetchProducts}
                categories={categories}
                filter={filter}
                />
                <div className="col-span-3 ">
                    <Products 
                    page="categories" 
                    headline="" 
                    detail="" 
                    category={categories} 
                    style="" 
                    data={filter}
                    fetchProducts={handleFetchProducts}
                    />
                </div>
            </div>
            
            <div className="mb-24 w-full">
                <FooterCard/>            
            </div>
        </div>
    )
}