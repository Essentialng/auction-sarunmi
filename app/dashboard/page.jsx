"use client";
import { AuctionItems } from "@/components/users/auction_items";
import useStore from "../store";
import { useState, useEffect } from "react";
import SleiderProduct from "@/components/users/dashboardSlider";
import NoParticipation from "@/components/users/warning";


export default function Dashboard(){

    const {user, fetchWatchList, watchList, products} = useStore();
    const [bidData, setBidData]= useState([]);
    
    const fetchBids = async()=>{
        try{
            const response = await axiosInstance.get(`bid?userId=${user.id}`);
            const data = await response.data;
            if(response.status == 200){
            setBidData(data)
            }
        }catch(error){
            console.log(error)
        }
    }

   
    useEffect(()=>{
        if(user){
        fetchWatchList(user?.id)
        fetchBids()
    } 
    },[user]);


    return(
        <div className="xl:px-24 px-4 py-44 flex flex-col gap-44">
           
           {bidData?.length != 0 &&
            <div className="flex flex-col gap-12">
                <h1 className="text-[#EF6509] xl:text-[24px] text-[16px] font-semibold">
                    Auctions You’re Participating In
                </h1>
                
                <SleiderProduct
                products={bidData}
                />
            </div>
            }
          
            {watchList?.length != 0 &&
            <div className="flex flex-col gap-12">
                <h1 className="text-[#EF6509] text-[24px] font-semibold">My Watchlist</h1>
                <AuctionItems auctions={watchList.items}/>
            </div>
              }
            {bidData == 0 && watchList == 0 &&
            <NoParticipation/>
            }
        </div>
    )
}