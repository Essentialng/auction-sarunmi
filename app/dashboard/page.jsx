"use client";
import DashboardCrad from "@/components/users/dashboard-card";
import { AuctionItems } from "@/components/users/auction_items";
import useStore from "../store";
import { useState, useEffect } from "react";
import { axiosInstance } from "@/utils/axios";

export const data = 
            [
                {
                    "image": "/car-one.png",
                    "status": "Live Auction",
                    "type" : "Toyota Camry",
                    "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
                },
                {
                    "image": "/car-two.png",
                    "status": "Live Auction",
                    "type" : "Toyota Camry",
                    "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
                },
                {
                    "image": "/car-three.png",
                    "status": "Live Auction",
                    "type" : "Toyota Camry",
                    "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
                },
                {
                    "image": "/car-four.png",
                    "status": "Upcoming Auction",
                    "type" : "Toyota Camry",
                    "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
                },

            {
                "image": "/property-one.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/property-two.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/property-three.png",
                "status": "Upcoming Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/property-four.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/electronic-one.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/electronic-two.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/eletronic-three.png",
                "status": "Upcoming Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
            {
                "image": "/eletronic-four.png",
                "status": "Live Auction",
                "type" : "Toyota Camry",
                "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
            },
    ]
export default function Dashboard(){

    const {user} = useStore()
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
  

    const fetchUserProductHandler = async ()=>{
        setLoading(true);
        try{
            const response = await axiosInstance.post("getUserProducts",
                { id: user?.id }
            )
            const data = await response.data;
            if(response.status == 200){
                setProducts(data)
            }
        }catch(error){
            console.log(error);
        }finally{
            setLoading(false);
        }
    }


    useEffect(()=>{
        if(user){
            fetchUserProductHandler()
        }
    },[user]);

    return(
        <div className="xl:px-24 px-4 py-44 flex flex-col gap-44">
            <div className="flex flex-col gap-12">
                <h1 className="text-[#EF6509] text-[24px] font-semibold">Auctions You’re Participating In</h1>
                <DashboardCrad products={products}/>
            </div>
            <div className="flex flex-col gap-12">
            <h1 className="text-[#EF6509] text-[24px] font-semibold">My Watchlist</h1>
                <AuctionItems auctions={data}/>
            </div>
        </div>
    )
}