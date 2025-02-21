"use client";
import Products from "@/components/users/products"
import { useState, useEffect } from "react";
import { axiosInstance } from "@/package/axios";
import useStore from "../store";



export default function Page(){
    const {fetchAllProduct, properties, products, models, fetModels} = useStore()
    const categories = []
    
    useEffect(() => {
        if(products){
        fetchAllProduct();
        }
        fetModels(2)
    }, []);

    return(
        <>
            <Products 
            page="Property" 
            headline="Find Your Perfect Property"
            detail="Explore a diverse range of properties to suit every need and 
            budget. Secure and transparent bidding process for peace of mind."
            category={models}
            style="properties"
            data={properties}/>
        </>
    )
}