"use client";
import { FaArrowRight } from "react-icons/fa6";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FooterCard from "./footerCard";



const otherService = [
    "Essential Properties",
    "Essential Jobs",
    "Essential Bookings",
    "Essential Foods",
    "Essential Rentals"
]
export default function Footer(){
    
    
    return(
        <div className="flex flex-col gap-20 py-24 ">
           <FooterCard/>
            <div className="flex flex-col gap-4 justify-center items-center sm:px-[4rem] md:px-[2rem]">
                <p className="2xl:text-[24px] xl:text-[20px] font-[600] text-[#EF6509]">Our Other Services</p>
                <div className="w-full lg:flex hidden justify-between">
                    {otherService.map((service, index)=>(
                        <div 
                        key={index}
                        className="flex gap-2 px-3 py-4 shadow-xl rounded-xl items-center hover:scale-95 cursor-pointer">
                            <small className="2xl:text-[16px] xl:text-[14px] font-[400]">{service}</small>
                            <div className="flex gap-2 bg-[#EF6509] rounded-2xl px-2 py-1 text-white items-center">
                                <span className="">Explore</span>
                                <FaArrowRight size={20} className="p-1 border border-white rounded-[50%]"/>
                            </div>
                        </div>
                    ))}
                </div>
                <OtherServiceMobile/>
            </div>
            {/* <FooterContact/> */}
        </div>
    )
}


function OtherServiceMobile(){
   
    const settings = {
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        slideMargin: 40,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
        responsive: [
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1.5,
                slidesToScroll: 1
              }
            },
            {
              breakpoint: 370,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
        
      };
    return(
        <div className="w-full  lg:hidden block justify-between">
        <Slider {...settings}>
        {otherService.map((service, index)=>(
            <div 
            key={index}
            className="flex gap-2 px-3 py-4 shadow-2xl rounded-2xl items-center hover:scale-95 cursor-pointer">
                <div>
                <small className="text-[16px] font-[400]">{service}</small>
                </div>
                <div className="w-3/4 flex gap-2 bg-[#EF6509] rounded-2xl px-2 py-1 text-white items-center">
                    <span className="">Explore</span>
                    <FaArrowRight size={20} className="p-1 border border-white rounded-[50%]"/>
                </div>
            </div>
        ))}
        </Slider>
    </div>
    )
}