import Image from "next/image";
import Items from "./items";
import classnames from "classnames";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { FaArrowRight } from "react-icons/fa6";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";


export  default function Auctions(){
    const cars = 
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

            ]


        const  properties = [

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
        ]


        const electronics = [
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
        

        const btn_class = "bg-[#EF6509] text-white text-[16px] font-[500] px-5 py-2 rounded-lg hover:bg-[#35318E] hover:shadow-black shadow-sm"
    
    return(
        <div className="px-[4rem] py-24 bg-gray-100">
            <h1 className="text-[30px] font-[700] py-12">Top Auctions</h1>
            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between ">
                        <span className="text-[24px] font-[600]">Cars</span>
                        <small className="text-[20px] font-[500] text-[#EF6509]">View all</small>
                    </div>
                    <Items auctions={cars}/>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between ">
                        <span className="text-[24px] font-[600]">Properties</span>
                        <small className="text-[20px] font-[500] text-[#EF6509]">View all</small>
                    </div>
                    <Items auctions={properties}/>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between ">
                        <span className="text-[24px] font-[600]">Electronics</span>
                        <small className="text-[20px] font-[500] text-[#EF6509]">View all</small>
                    </div>
                    <Items auctions={electronics}/>
                </div>
            </div>
        </div>
    )
}