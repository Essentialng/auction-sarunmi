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

    const icons = "p-2 rounded-[50%] border border-white cursor-pointer hover:scale-90"
    return(
        <div className="flex flex-col gap-20 ">
            <div className="relative flex flex-col justify-center items-center gap-8 py-10 px-20 text-white text-[20px]
            rounded-2xl bg-gradient-to-r to-[#9D8CED] from-[#35318E] font-[500] text-center mx-72">
                <p>
                    Join now to explore a diverse range of items such as used cars, home appliances, gadgets, 
                    and much more through our 100% online auction platform.
                </p>
                <div className="flex gap-4 py-2 px-4 justify-center items-center
                 bg-[#EF6509] rounded-2xl w-1/2 cursor-pointer hover:opacity-85">
                    <span>REGISTER & START BIDDING</span>
                    <FaArrowRight size={20}/>
                </div>
            </div>
            <div className="relative flex gap-56 justify-between py-10 bg-[#676E68] text-white px-[4rem] font-[400]">
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
                                <li>{values}</li>
                            ))}
                        </ul>
                    ))}
                </div>
                <div className="w-1/2 flex flex-col gap-4 text-[#EF6509] text-[20px] font-[500]">
                    <p>CONNECT WITH US</p>
                    <div className="flex gap-4">
                        <FaTwitter size={38} color="#EF6509" className={icons}/>
                        <FaInstagram size={38} color="#EF6509" className={icons}/>
                        <FaInstagram size={38} color="#EF6509" className={icons}/>
                    </div>
                </div>
            </div>
        </div>
    )
}