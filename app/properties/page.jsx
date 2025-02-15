"use client";
import Products from "@/components/users/products"
import { useState, useEffect } from "react";
import { axiosInstance } from "@/utils/axios";
import useStore from "../store";



export default function Page(){
    const {fetchAllProduct, properties, products} = useStore()
    const categories = []
    
    useEffect(() => {
        if(products){
        fetchAllProduct();
        }
    }, []);

    return(
        <>
            <Products 
            page="Property" 
            headline="Find Your Perfect Property"
            detail="Explore a diverse range of properties to suit every need and 
            budget. Secure and transparent bidding process for peace of mind."
            category={categories}
            style="properties"
            data={properties}/>
        </>
    )
}