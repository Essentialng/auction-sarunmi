"use client";
import Sliders from "@/components/users/sliders";
import classnames from "classnames"
import Image from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

export default function SleiderProduct({data, header}){
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
        <Sliders slideShow ={4} margin ={4} scroll ={1} play ={false} responsive={responsive}>
            {data.map((item, index)=>(
            <div
            key={index} 
            className="flex flex-col gap-2 items-center hover:scale-95 transition-all duration-500 ease-in-out mx-5">
                <div className={classnames({
                    "w-1/3 self-center text-center py-4 rounded-[10px] border border-[#7BC27A] font-[700] shadow-md ": true,
                    "border-[#FF9354] text-[#FF9354]": item.status === "Upcoming Auction",
                    })}
                    >
                    <p>00:00:00:00</p>
                </div>
                <div className={classnames({
                    "py-4 px-[20px] rounded-[10px] items-center flex flex-col gap-10 border border-[#7BC27A] font-[700] shadow-md": true,
                    "border-[#FF9354]": item.status === "Upcoming Auction",
                    })}>
                    <div className="relative">
                        <Image src={item.image} width={260} height={170}/>
                    </div>
                    <div className="flex flex-col gap-4"> 
                        <div className={classnames(
                            {
                                "flex justify-between items-center text-[14px] font-[400] text-[#7BC27A]" : true,
                                "text-[#FF7B58]" : item.status === "Upcoming Auction"

                            })}>
                            <div className="flex gap-2 items-center">
                                <FaCircle size={10}/>
                                <small>{item.status}</small>
                            </div>
                            <div>
                                <IoIosCheckmarkCircleOutline size={16}/>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-[16px] font-[700]">{item.type}</h4>
                            <small className="text-[14px] font-[400]">
                            {item.detail}
                            </small>
                        </div>
                        <div className="flex gap-4 text-[14px]">
                            <span className="font-[400]">Retail Value:</span>
                            <h4 className="font-[700]">N 4,000,000.00</h4>
                        </div>
                    </div>
                    {
                    item.status === "Upcoming Auction" ?
                        <button className={btn_class}>JOIN AUCTION</button> :
                        <div className="flex gap-3">
                        <button className={btn_class}>VIEW AUCTION</button>
                        <button className={btn_class}>PRE BID</button>
                        </div>
                    }
                    
                </div>
            </div>
            ))}
        </Sliders>
    </div>
    )
}