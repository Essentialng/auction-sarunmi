"use client"
import {AuctionItems} from "./auction_items";
import { cars, properties, electronics } from "@/app/items";
import MobileAuctions from "./mobileAuction";



export  default function Auctions(){

    const header = "2xl:text-[24px] xl:text-[24px] text-[18px] font-[600]";
    const small = "2xl:text-[20px] xl:text-[20px] text-[14px] font-[500] text-[#EF6509]"
    
    return(
          
            <div className="2xl:px-[4rem]  px-[1rem] py-24 bg-gray-100">
                <h1 className="2xl:text-[30px] xl:text-[30px] text-[22px] font-[700] py-12">Top Auctions</h1>
                <div className="flex flex-col gap-20">
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between ">
                            <span className={header}>Cars</span>
                            <small className={small}>View all</small>
                        </div>
                        <AuctionItems auctions={cars}/>
                        {/* <MobileAuctions auctions = {cars}/> */}
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between ">
                            <span className={header}>Properties</span>
                            <small className={small}>View all</small>
                        </div>
                        <AuctionItems auctions={properties}/>
                        {/* <MobileAuctions auctions = {properties}/> */}
                    </div>
                    <div className="flex flex-col gap-6">
                        <div className="flex justify-between ">
                            <span className={header}>Electronics</span>
                            <small className={small}>View all</small>
                        </div>
                        <AuctionItems auctions={electronics}/>
                        {/* <MobileAuctions auctions = {electronics}/> */}
                    </div>
                </div>
            </div>
    )
}

