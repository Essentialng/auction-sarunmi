"use client";
import Products from "@/components/users/products"
import { useState, useEffect } from "react";
import useStore from "../store";


export default function Page(){

  const {
    fetchAllProduct, 
    products, 
    categories, 
    fetchCategory, 
    auctions,
    categoryName,
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
            category={categoryName}
            style="auctions"
            data={auctions}/>            
        </div>
    )
}