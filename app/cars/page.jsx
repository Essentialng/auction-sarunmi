"use client";
import Products from "@/components/users/products"
import { useState, useEffect } from "react";
import useStore from "../store";


export default function Page(){

    const {fetchAllProduct, cars, products, models, fetModels} = useStore()

        
    useEffect(() => {
    if(products){
    fetchAllProduct();
    }
    fetModels(1)
    }, []);
        

    return(
        <>
            <Products 
            page="Cars" 
            headline="Find Your Dream Car!"
            detail="Discover a wide selection of vehicles to suit every 
            taste, budget and bid with confidence."
            category={models}
            style="cars"
            data={cars}/>
        </>
    )
}