"use client";
import Products from "@/components/users/products"
import { useState, useEffect } from "react";
import { axiosInstance } from "@/utils/axios";
import useStore from "../store";
import Loading from "@/tabs/admin/loading";


export default function Page(){

  const {
    fetchAllProduct, 
    products, 
    categories, 
    fetchCategory, 
    auctions,
    loading} = useStore();

  useEffect(() => {
    if(products){
    fetchAllProduct();
    fetchCategory();
    }
    }, []);
        
    return(
        <div>
            <Products 
            page="Auctions" 
            headline="Discover Exceptional Deals on Premium Items"
            detail="Bid now on exclusive products and unbeatable offers 
            in our live auctions."
            category={categories}
            style="auctions"
            data={auctions}/>            
        </div>
    )
}