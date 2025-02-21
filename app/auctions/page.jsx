"use client";
import Products from "@/components/users/products"
import { useState, useEffect } from "react";
import useStore from "../store";
import { axiosInstance } from "@/package/axios";


export default function Page(){

  const {
    fetchAllProduct, 
    products, 
    categories, 
    fetchCategory, 
    
    categoryName,
    loading} = useStore();

    const [auctions, setAuctions] = useState([])

  useEffect(() => {
    // if(products){
    // fetchCategory();
    // }
    fetchAuction()
    }, []);


    const fetchAuction = async()=>{
        try{
          const response = await axiosInstance.get("/auctions")
          const data = await response.data;
          if(response.status == 200){
            setAuctions(data.data)
          }
        }catch(error){
          console.log(error)
        }
    }
        
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