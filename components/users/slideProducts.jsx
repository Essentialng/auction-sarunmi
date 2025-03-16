"use client";
import Sliders from "@/components/users/sliders";
import classnames from "classnames"
import Image from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { AuctionItems } from "./auction_items";


export default function SliderProduct({data, header}){
    const btn_class = "bg-[#EF6509] text-white 2xl:text-[16px] xl:text-[16px] text-[12px] font-[500] px-5 py-2 rounded-lg hover:bg-[#35318E] hover:shadow-black shadow-sm"
    const responsive = [
         {
           breakpoint: 1034,
           settings: {
             slidesToShow: 2.5,
             slidesToScroll: 1,
             infinite: false,
             dots: false
           }
         },
         {
           breakpoint: 840,
           settings: {
             slidesToShow: 2,
             slidesToScroll: 1,
             initialSlide: 2,
             infinite: false,
             dots: false
           }
         },
         {
           breakpoint: 480,
           settings: {
             slidesToShow: 1,
             slidesToScroll: 1,
             infinite: false,
             dots: false
           }
         }
       ]
    return(
        <div className=" flex flex-col gap-8 pt-20 2xl:px-[4rem] xl:px-[4rem] px-[1rem]">
        <p className="2xl:text-[24px] xl:text-[24px] md:text-[24px] text-[18px] font-[600] text-[#EF6509]">{header}</p>
        <AuctionItems auctions={data}/>
    </div>
    )
}