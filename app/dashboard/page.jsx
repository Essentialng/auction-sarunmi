"use client";
import { AuctionItems } from "@/components/users/auction_items";
import useStore from "../store";
import { useState, useEffect } from "react";
import SliderProduct from "@/components/users/dashboardSlider";
import NoParticipation from "@/components/users/warning";
import { axiosInstance } from "@/package/axios";


export default function Dashboard(){

    const {user, fetchWatchList, watchList, products} = useStore();
    const [bidData, setBidData]= useState([]);
    const [userProducts, setUserProduct] = useState([]);
    
    const fetchBids = async()=>{
        try{
            const response = await axiosInstance.get(`/bid?userId=${user.id}`);
            const data = await response.data;
            if(response.status == 200){
            setBidData(data.userBids)
            }
        }catch(error){
            console.log(error)
        }
    };

    const fetchUserProducts = async()=>{
        try{
            const response = await axiosInstance.get(`/salesOrBid?userId=${user.id}`);
            const data = await response.data;
            if(response.status == 200){
            setUserProduct(data.item)
            
            }
        }catch(error){
            console.log(error)
        }
    }



   
    useEffect(()=>{
        if(user){
        fetchWatchList(user?.id)
        fetchBids()
        fetchUserProducts()
    } 
    },[user]);

    
    return(
        <div className="2xl:px-16 xl:px-12 px-2 py-44 flex flex-col gap-44">
           
           {userProducts?.length != 0 &&
            <div className="flex flex-col gap-12">
                <h1 className="text-[#EF6509] xl:text-[24px] text-[16px] font-semibold">
                Your Product on Bid/Sale
                </h1>
                
                <SliderProduct
                products={userProducts}
                bidProducts = {true}
                />
            </div>
            }

            {(bidData?.length != 0 && bidData) &&
            <div className="flex flex-col gap-12">
                <h1 className="text-[#EF6509] xl:text-[24px] text-[16px] font-semibold">
                    Auctions You’re Participating In
                </h1>
                
                <SliderProduct
                products={bidData}
                bidProducts = {false}
                />
            </div>
            }
          
            {watchList?.length != 0 &&
            <div className="flex flex-col gap-12">
                <h1 className="text-[#EF6509] text-[24px] font-semibold">My Watchlist</h1>
                <AuctionItems auctions={watchList.items}/>
            </div>
              }
            {(
                (bidData?.length == 0 || !bidData)
                 && (watchList?.length == 0 || !watchList)
                  && (userProducts?.length == 0 || !userProducts))
                   &&
            <NoParticipation/>
            }
        </div>
    )
}