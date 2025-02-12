"use client";
import Products from "@/components/users/products"
import { useState, useEffect } from "react";
import { axiosInstance } from "@/utils/axios";



export default function Page(){


    const [allData, setAllData] = useState([]);

    const fetchAllData = async () => {
      try {
        const [carsRes, propertiesRes, othersRes] = await Promise.all([
          axiosInstance.get("cars"),
          axiosInstance.get("properties"),
          axiosInstance.get("others"),
        ]);
  
        const cars = carsRes?.data?.data || [];
        const properties = propertiesRes?.data?.data || [];
        const others = othersRes?.data?.data || [];
  
        setAllData([...cars, ...properties, ...others]);
      } catch (error) {
        console.log(error);
      }
    };
  
    useEffect(() => {
      fetchAllData();
    }, []);
  
        
    return(
        <>
            <Products 
            page="Auctions" 
            headline="Discover Exceptional Deals on Premium Items"
            detail="Bid now on exclusive products and unbeatable offers 
            in our live auctions."
            category="All Auctions"
            style="auctions"
            data={allData}/>
        </>
    )
}