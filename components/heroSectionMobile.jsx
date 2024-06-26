"use client";
import React from "react";
import Image from "next/image";
import classnames from "classnames"
import  Sliders  from "./sliders";
import { FaArrowRight } from "react-icons/fa6";

export default function HeroSectionMobile(){
    const hero_section = [ 
        {
            "title": "From rare finds to everyday  ",
            "orange_text": "essentials:",
            "details": "Start bidding now for your properties, cars, electronics etc.",
            "image1": "https://res.cloudinary.com/dxsvadizj/image/upload/v1718290591/building.png",
            "image2": "https://res.cloudinary.com/dxsvadizj/image/upload/v1718290583/full-light.png",
            "image3": "https://res.cloudinary.com/dxsvadizj/image/upload/v1718290557/generator.png",
            "button": "REGISTER & START BIDDING",
            "cards":[
                {
                "title": "SIGN UP",
                "details":"Join the bidding frenzy: Sign up for auctions now!",
            },
            {
                "title": "SEARCH",
                "details":"Discover what you're looking for: search now",
            },
            {
                "title": "BID",
                "details":"Bid with confidence: start bidding today!",
            },
        ]
        },
        {
            "title": "Appliance Auctions: Upgrade",
            "title2": "Your Home with ",
            "fr_orange_text": "Top-Quality Deals!:",
            "details": "Discover unbeatable deals on top-quality home appliances at our appliance auctions, perfect for upgrading your home with style and savings. Bid now and transform your living space into the haven of your dreams!",
            "image": "https://res.cloudinary.com/dxsvadizj/image/upload/v1718290608/machines.png",
            "image3": "",
            "button": "CATEGORIES"
        },
        {
            "title": "Gadget Galore:",
            "orange_text": " Explore Tech",
            "title2": "and Score Big Savings!",
            "bf_orange_text": "Treasures",
            "details": "Dive into a world of tech wonders at our gadget auctions, where you can uncover coveted gadgets and secure fantastic savings. Don't miss out on the opportunity to elevate your tech game while keeping your budget intact!",
            "image": "https://res.cloudinary.com/dxsvadizj/image/upload/v1718290624/iphones.png",
            "button": "CATEGORIES"
        }
    ]
    
    return(
        <div className="2xl:hidden block ">
            <Sliders slideShow = {1} margin = {40} scroll = {1} play = {true} className="h-[80vh] relative">
            
            {hero_section.map((hero, index)=>(
            <div
            key={index} 
            className={classnames({
                "bg-gradient-to-r from-[#9D8CED] to-[#35318E]" : index === 0,
                "bg-gradient-to-r from-[#83DE7D] to-[#8474DA]" : index === 1,
                "bg-gradient-to-r from-[#6B5EC1] to-[#FF9354]" : index === 2,
                "h-[85vh] px-[2rem]" : true,
                })}>
                <div className="block  h-full">
                <div className="h-full flex flex-col justify-center lg:w-5/6 md:w-full">

                    <div className=" w-full text-white font-[700] ">
                        <div>
                            <p className={classnames({
                                "lg:text-[26px] md:text-[12px] " : index === 0,
                                "lg:text-[28px] md:text-[18px] leading-none" : index === 1 || index === 2
                            })}>
                                {hero.title} 
                                <span className="text-[#EF6509]">{hero.orange_text}</span>
                            </p>
                        </div>
                        <div className=" w-full">
                            <div className="lg:text-[35px] md:text-[25px] ">
                                <small >
                                    <small className="text-[#EF6509]">{hero.bf_orange_text} </small>
                                    {hero.title2}
                                    <small className="text-[#EF6509]">{hero.fr_orange_text}</small>
                                </small>
                            </div>
                            <div className={classnames({
                                
                                "py-[3rem]": index === 1 || index === 2,
                                "pb-[3rem]" : true
                            })}>
                                <small className={classnames({
                                    "text-[20px] font-[700]": index === 0
                                    })}>{hero.details}
                                </small>
                            </div>
                        </div>
                    </div>
                    <div className=" relative text-left bg-[#EF6509] rounded-[10px] px-[2rem] py-[10px] items-center
                     text-white w-4/5 cursor-pointer text-[12px] font-[500] flex justify-between
                      hover:bg-[#35318E] hover:shadow-white shadow-md" >
                        <span>{hero.button}</span>
                        <FaArrowRight size={20}/>
                    </div>

                </div>
                </div>
            </div>
            ))}
            
            </Sliders>
        </div>
    )
}