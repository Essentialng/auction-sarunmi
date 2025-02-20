"use client";
import { FaAngleRight } from "react-icons/fa6";
import { BiSolidRightArrow } from "react-icons/bi";
import Products from "@/components/users/products";
import FooterCard from "@/components/users/footerCard";
import { useState, useEffect } from "react";
import SleiderProduct from "@/components/users/slideProducts";
import useStore from "@/app/store";



export default function Page(){
    const {fetchAllProduct, others, cars, products, categories, fetchCategory} = useStore()
    const [filter, setFilter] = useState("");

    useEffect(() => {
        if(products){
        fetchAllProduct();
        fetchCategory();
        }
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
                <div className="col-span-1 2xl:flex xl:flex hidden flex-col gap-8">
                    <p className="text-[#EF6509] text-600 text-[24px]">Other Categories</p>
                    <ul className="flex flex-col gap-4">
                        {categories.map((value, index)=>(
                            <li key={index} className="flex items-center gap-12 cursor-pointer">
                                {value.name}
                                <BiSolidRightArrow size={10} color={value.name === filter && "#EF6509"}/>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="col-span-3 ">
                    <Products 
                    page="categories" 
                    headline="" 
                    detail="" 
                    category={categories} 
                    style="" data={others}
                    />
                </div>
            </div>
            
            <div className="mb-24 w-full">
                <FooterCard/>            
            </div>
        </div>
    )
}