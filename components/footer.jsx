import { FaArrowRight } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";

export default function Footer(){
    const footer = [
        {
            "header" : "ABOUT US",
            "data" : [ 
                "About Essential",
                "Essential E-Blog",
                "FAQs",
                "Contact Us",
                "Orders & Shipping",
                "Payment"
                ]
        },
        {
            "header" : "INFORMATION",
            "data" : [ 
                "Terms to use",
                "Privacy policy",
                "Partnership",
                "Site Map",
                ]
        }
    ]

    const otherService = [
        "Essential Properties",
        "Essential Jobs",
        "Essential Bookings",
        "Essential Foods",
        "Essential Rentals"
    ]

    const icons = "p-2 rounded-[50%] border border-white cursor-pointer hover:scale-90"
    return(
        <div className="flex flex-col gap-20 ">
            <div className="footer relative py-10 px-20 text-white text-[20px]
            rounded-2xl font-[500] text-center mx-72 overflow-hidden">
                <div className="relative z-50 w-full flex flex-col justify-center items-center gap-8">
                    <p>
                        Join now to explore a diverse range of items such as used cars, home appliances, gadgets, 
                        and much more through our 100% online auction platform.
                    </p>
                    <div className="relative flex gap-4 py-2 px-4 justify-center items-center
                    bg-[#EF6509] rounded-2xl w-1/2 cursor-pointer hover:opacity-85">
                        <span>REGISTER & START BIDDING</span>
                        <FaArrowRight size={20}/>
                    </div>
                </div>
                <div className="absolute w-full h-full top-0 right-0 bg-gradient-to-r to-[#9D8CED] from-[#35318E] z-10 opacity-90"/>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center px-[4rem]">
                <p className="text-[24px] font-[600] text-[#EF6509]">Our Other Services</p>
                <div className="w-full flex justify-between">
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
            </div>
            <div className="relative  bg-[#676E68] text-white px-[4rem] font-[400]">
                <div className="flex gap-56 justify-between border-b-2 border-white py-10">
                    <div className="w-full flex flex-col gap-2 text-[16px] ">
                        <Image src="/logo.png" width={150} height={59}/>
                        <p>We pride ourselves on being pioneers in the online marketplace, driven by a commitment
                            to excellence and customer satisfaction.
                        </p>
                    </div>
                    <div className="w-full flex justify-between">
                        {footer.map((items, index)=>(
                            <ul key={index} className="flex flex-col gap-4 text-[14px] font-[400] text-white cursor-pointer">
                                <li className="text-[24px] font-[700] text-[#EF6509] pb-4">{items.header}</li>
                                {items.data.map((values)=>(
                                    <li>
                                        {values}
                                    </li>
                                ))}
                            </ul>
                        ))}
                    </div>
                    <div className="w-1/2 flex flex-col gap-4 text-[#EF6509] text-[20px] font-[500]">
                        <p>CONNECT WITH US</p>
                        <div className="flex gap-4">
                            <FaTwitter size={38} color="#EF6509" className={icons}/>
                            <FaInstagram size={38} color="#EF6509" className={icons}/>
                            <FaFacebookF size={38} color="#EF6509" className={icons}/>
                        </div>
                    </div>
                </div>
                <div className="w-full flex justify-center gap-10 text-[14px] py-10">
                    <a href="#">Cookies Policy</a>
                    <a href="#">Terms and condition</a>
                    <a href="#">Copyright</a>
                </div>
            </div>
        </div>
    )
}