"use client";
import React from "react";
import Image from "next/image";
import classnames from "classnames"
import  Sliders  from "./sliders";
import { FaArrowRight } from "react-icons/fa6";
import Link from "next/link";

export default function Hero(){
    const hero_section = [ 
        {
            "title": "From rare finds to everyday  ",
            "orange_text": "essentials:",
            "details": "Start bidding now for your properties, cars, electronics etc.",
            "image1": "https://res.cloudinary.com/dxsvadizj/image/upload/v1718290591/building.png",
            "image2": "https://res.cloudinary.com/dxsvadizj/image/upload/v1718290583/full-light.png",
            "image3": "https://res.cloudinary.com/dxsvadizj/image/upload/v1718290557/generator.png",
            "button": "REGISTER & START BIDDING",
            "link" : "/register",
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
            "button": "CATEGORIES",
            "link" : "/categories",
        },
        {
            "title": "Gadget Galore:",
            "orange_text": " Explore Tech",
            "title2": "and Score Big Savings!",
            "bf_orange_text": "Treasures",
            "details": "Dive into a world of tech wonders at our gadget auctions, where you can uncover coveted gadgets and secure fantastic savings. Don't miss out on the opportunity to elevate your tech game while keeping your budget intact!",
            "image": "https://res.cloudinary.com/dxsvadizj/image/upload/v1718290624/iphones.png",
            "button": "CATEGORIES",
            "link" : "/categories",
        }
    ]
    
    return(
        <div className="2xl:block xl:block hidden">
            <Sliders slideShow = {1} margin = {40} scroll = {1} play = {true} speed = {500} className="h-[80vh] relative">
            
            {hero_section.map((hero, index)=>(
            <div
            key={index} 
            className={classnames({
                "bg-gradient-to-r from-[#9D8CED] to-[#35318E]" : index === 0,
                "bg-gradient-to-r from-[#83DE7D] to-[#8474DA]" : index === 1,
                "bg-gradient-to-r from-[#6B5EC1] to-[#FF9354]" : index === 2,
                "2xl:h-[85vh] xl:h-[85vh] md:h-[50vh] sm:h-[60vh] justify-center flex px-[4rem]" : true,
                })}>
                <div className="flex justify-center items-center h-full">
                <div className="flex flex-col gap-12">

                    <div className="2xl:w-[922px] xl:w-[822px] w-full text-white font-[700] ">
                        <div>
                            <p className={classnames({
                                "2xl:text-[36px] xl:text-[36px] lg:text-[30px]" : index === 0,
                                "2xl:text-[48px] xl:text-[48px] lg:text-[36px] leading-none" : index === 1 || index === 2
                            })}>
                                {hero.title} 
                                <span className="">{hero.orange_text}</span>
                            </p>
                        </div>
                        <div className="2xl:w-[600px] xl:w-[600px] w-full">
                            <div className="text-[45px] ">
                                <small >
                                    <small className="text-[#EF6509]">{hero.bf_orange_text} </small>
                                    {hero.title2}
                                    <small className="text-[#EF6509]">{hero.fr_orange_text}</small>
                                </small>
                            </div>
                            <div className={classnames({
                                
                                "py-[3rem]": index === 1 || index === 2
                            })}>
                                <small className={classnames({
                                    "text-[20px] font-[700]": index === 0
                                    })}>{hero.details}
                                </small>
                            </div>
                            <div className="2xl:flex xl:flex hidden gap-[2rem] w-[1000px]  ">
                                    {hero.cards?.map((card, cardIndex) => (
                                        <div key={cardIndex} 
                                        className="bg-[#6B5EC1] bg-opacity-45 rounded-[20px] shadow-black-300
                                        shadow-md w-full px-[1rem] py-[2rem]  z-50 my-[5rem] flex flex-col gap-4">
                                            <p className="text-center text-[#FFB485] text-[20px]">{card.title}</p>
                                            <small className="text-[14px]">{card.details}</small>
                                        </div>
                                    ))}
                            </div>

                        </div>
                    </div>
                    
                    <Link
                    href={hero.link} 
                    className=" text-left bg-[#EF6509] rounded-[10px] px-[2rem] py-[10px] items-center
                     text-white 2xl:w-2/5 xl:w-2/5 w-3/5 cursor-pointer text-[16px] font-[500] flex justify-between
                      hover:bg-[#35318E] hover:shadow-white shadow-md" >
                        <span>{hero.button}</span>
                        <FaArrowRight size={20}/>
                    </Link>

                </div>

                <div className="2xl:flex xl:flex relative w-[1000px]  h-full right-0 py-[10rem] z-10 hidden">
                    {
                    index === 0 
                    ? <div className="w-[470px]">
                        <Image alt=""
                        className="absolute 2xl:left-[-4rem] xl:left-[1rem] left-[-10rem] 2xl:top-[4rem] xl:top-[15rem] z-30" 
                        src={ hero.image1} width={270} height={270}/>
                        <Image alt=""
                        className="absolute 2xl:right-[4rem] xl:right-[2rem] right-[12rem] 2xl:top-[9rem] xl:top-[18rem] z-50" 
                        src={ hero.image2} width={270} height={270}/>
                        <Image alt=""
                        className="absolute 2xl:left-[0rem] xl:left-[7rem] left-[-4rem] 2xl:bottom-[4rem] xl:bottom-[23rem] bottom-[30rem] z-10" 
                        src={ hero.image3} width={270} height={270}/>
                      </div>
                      
                    : 
                    <div className="absolute w-[800px] right-2 top-[-4rem]">
                        {
                        index === 1 ?
                        <Image alt=""className="relative 2xl:right-[-4rem] xl:right-[-10rem] 2xl:top-[4rem] xl:top-[20rem]" 
                        src={ hero.image} width={670} height={270}/> :
                        <Image alt=""className="relative right-[-22rem] 2xl:top-[4rem] xl:top-[15rem]" 
                        src={ hero.image} width={520} height={270}/>
                        }
                    </div>
                    }

                </div>
                </div>
            </div>
            ))}
            
            </Sliders>
        </div>
    )
}