"use client"
import {AuctionItems} from "./auction_items";
// import {   electronics } from "@/app/items";
import { useState } from "react";
import { axiosInstance } from "@/utils/axios";
import { useEffect } from "react";
import Link from "next/link";

export  default function Auctions(){

    const [cars, setCars] = useState([]);
    const [properties, setProperties] = useState([]);
    const [others, setOthers] = useState([]);
    const [fetchItems, setFetchItems] = useState(false);

    // const fetchCars = async()=>{
    //     try{
    //         const response = await axiosInstance.get("cars");
    //         const data = await response.data;

    //         if(response.status == 200){
    //             setCars(data?.data);
    //         }
    //     }catch(error){
    //         console.log(error)
    //     }
    // }

    // const fetchProperties = async ()=>{
    //     try{
    //         const response = await axiosInstance.get("properties");
    //         const data = await response.data;

    //         if(response.status == 200){
    //             setProperties(data?.data);
    //         }
    //     }catch(error){
    //         console.log(error)
    //     }
    // }

    // const fetchOthers = async ()=>{
    //     try{
    //         const response = await axiosInstance.get("others");
    //         const data = await response.data;

    //         if(response.status == 200){
    //             setOthers(data?.data);
    //         }
    //     }catch(error){
    //         console.log(error)
    //     }
    // }


    useEffect(()=>{

        if(!fetchItems){
        fetchCars();
        fetchProperties();
        fetchOthers();
        }

    },[])

    const itemsData = [
        {
            name: "Cars",
            link: "/cars",
            data: cars
        },
        {
            name: "Properties",
            link: "/properties",
            data: properties
        },
        {
            name: "Electronics",
            link: "/categories",
            data: others
        },
    ]


    const header = "2xl:text-[24px] xl:text-[24px] text-[18px] font-[600]";
    const small = "2xl:text-[20px] xl:text-[20px] text-[14px] font-[500] text-[#EF6509]"
    
    return(
          
            <div className="2xl:px-[4rem]  px-[1rem] py-24 bg-gray-100">
                <h1 className="2xl:text-[30px] xl:text-[30px] text-[22px] font-[700] py-12">Top Auctions</h1>
                <div className="flex flex-col gap-20">
                   
                   {itemsData.map((items, index)=>(
                    <section className="flex flex-col gap-6">
                        <div className="flex justify-between ">
                            <span className={header}>{items.name}</span>
                            <Link href={items.link} className={small}>View all</Link>
                        </div>
                        <AuctionItems auctions={items.data}/>
                    </section>
                   ))}
                    
                </div>
            </div>
    )
}

