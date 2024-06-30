"use client";
import { FaArrowRight } from "react-icons/fa6";
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FooterContact from "./footerContact";


const otherService = [
    "Essential Properties",
    "Essential Jobs",
    "Essential Bookings",
    "Essential Foods",
    "Essential Rentals"
]
export default function Footer(){
    
    
    return(
        <div className="flex flex-col gap-20 ">
            <div className="footer relative py-10 2xl:px-20 xl:px-20 px-4 text-white text-[20px]
            rounded-2xl font-[500] text-center 2xl:mx-72 xl:mx-72 mx-4 overflow-hidden">
                <div className="relative z-40 w-full flex flex-col justify-center items-center gap-8">
                    <p>
                        Join now to explore a diverse range of items such as used cars, home appliances, gadgets, 
                        and much more through our 100% online auction platform.
                    </p>
                    <div className="relative flex gap-4 py-2 px-4 justify-center items-center
                    bg-[#EF6509] rounded-2xl 2xl:w-1/2 xl:w-1/2 cursor-pointer hover:opacity-85">
                        <small>REGISTER & START BIDDING</small>
                        <FaArrowRight size={20}/>
                    </div>
                </div>
                <div className="absolute w-full h-full top-0 right-0 bg-gradient-to-r to-[#9D8CED] from-[#35318E] z-10 opacity-90"/>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center 2xl:px-[4rem] xl:px-[4rem] px-[2rem]">
                <p className="text-[24px] font-[600] text-[#EF6509]">Our Other Services</p>
                <div className="w-full 2xl:flex xl:flex hidden justify-between">
                    {otherService.map((service, index)=>(
                        <div 
                        key={index}
                        className="flex gap-2 px-3 py-4 shadow-xl rounded-xl items-center hover:scale-95 cursor-pointer">
                            <small className="text-[16px] font-[400]">{service}</small>
                            <div className="flex gap-2 bg-[#EF6509] rounded-2xl px-2 py-1 text-white items-center">
                                <span className="">Explore</span>
                                <FaArrowRight size={20} className="p-1 border border-white rounded-[50%]"/>
                            </div>
                        </div>
                    ))}
                </div>
                <OtherServiceMobile/>
            </div>
            <FooterContact/>
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
        <div className="w-full 2xl:hidden xl:hidden block justify-between">
        <Slider {...settings}>
        {otherService.map((service, index)=>(
            <div 
            key={index}
            className="flex gap-2 px-3 py-4 shadow-2xl rounded-2xl items-center hover:scale-95 cursor-pointer">
                <small className="text-[16px] font-[400]">{service}</small>
                <div className="flex gap-2 bg-[#EF6509] rounded-2xl px-2 py-1 text-white items-center">
                    <span className="">Explore</span>
                    <FaArrowRight size={20} className="p-1 border border-white rounded-[50%]"/>
                </div>
            </div>
        ))}
        </Slider>
    </div>
    )
}