"use client";
import Products from "@/components/users/products"
import { useState, useEffect } from "react";
import { axiosInstance } from "@/utils/axios";



export default function Page(){

        const [data, setData] = useState([]);
    
        const fetchCars = async()=>{
            try{
                const response = await axiosInstance.get("cars");
                const data = await response.data;
    
                if(response.status == 200){
                    setData(data?.data);
                }
            }catch(error){
                console.log(error)
            }
        }

        useEffect(()=>{
            fetchCars();
        })

    return(
        <>
            <Products 
            page="Cars" 
            headline="Find Your Dream Car!"
            detail="Discover a wide selection of vehicles to suit every 
            taste, budget and bid with confidence."
            category="Cars"
            style="cars"
            data={data}/>
        </>
    )
}