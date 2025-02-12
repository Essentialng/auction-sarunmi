"use client";
import Products from "@/components/users/products"
import { useState, useEffect } from "react";
import { axiosInstance } from "@/utils/axios";




export default function Page(){

    const [data, setData] = useState([]);
    
    const fetchCars = async()=>{
        try{
            const response = await axiosInstance.get("properties");
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
            page="Property" 
            headline="Find Your Perfect Property"
            detail="Explore a diverse range of properties to suit every need and 
            budget. Secure and transparent bidding process for peace of mind."
            category="Properties"
            style="properties"
            data={data}/>
        </>
    )
}