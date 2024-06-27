"use client"
import {Items} from "./auction_items";
import { cars, properties, electronics } from "@/app/items";
import MobileItems from "./mobileAuction";



export  default function Auctions(){

     const btn_class = "bg-[#EF6509] text-white text-[16px] font-[500] px-5 py-2 rounded-lg hover:bg-[#35318E] hover:shadow-black shadow-sm"
     const header = "2xl:text-[24px] text-[18px] font-[600]";
     const small = "2xl:text-[20px] text-[14px] font-[500] text-[#EF6509]"
    
    return(
          
            <div className="2xl:px-[4rem] px-[1rem] py-24 bg-gray-100">
                <h1 className="2xl:text-[30px] text-[22px] font-[700] py-12">Top Auctions</h1>
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between ">
                            <span className={header}>Cars</span>
                            <small className={small}>View all</small>
                        </div>
                        <Items auctions={cars}/>
                        <MobileItems auctions = {cars}/>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between ">
                            <span className={header}>Properties</span>
                            <small className={small}>View all</small>
                        </div>
                        <Items auctions={properties}/>
                        <MobileItems auctions = {properties}/>
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between ">
                            <span className={header}>Electronics</span>
                            <small className={small}>View all</small>
                        </div>
                        <Items auctions={electronics}/>
                        <MobileItems auctions = {electronics}/>
                    </div>
                </div>
            </div>
    )
}

