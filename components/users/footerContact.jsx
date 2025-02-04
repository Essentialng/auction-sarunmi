
import { FaTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import Image from "next/image";


export default function FooterContact(){
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
        <div className="relative  bg-[#676E68] text-white 2xl:px-[4rem] xl:px-[4rem] px-[2rem] font-[400]">
            <div className="flex 2xl:flex-row xl:flex-row flex-col 2xl:gap-56 xl:gap-56 gap-12 justify-between 
            border-b-2 border-white py-10"
            >
                <div className="2xl:w-full xl:w-full w-2/3 flex flex-col gap-6 text-[16px] ">
                    <Image src="/logo.png" width={150} height={59} alt=""/>
                    <p>We pride ourselves on being pioneers in the online marketplace, driven by a commitment
                        to excellence and customer satisfaction.
                    </p>
                </div>
                <div className="w-full flex 2xl:flex-row xl:flex-row flex-col gap-12 justify-between">
                    {footer.map((items, index)=>(
                        <ul key={index} className="flex flex-col 2xl:gap-4 xl:gap-4 gap-2 text-[14px] font-[400] text-white cursor-pointer">
                            <li className="2xl:text-[24px] xl:text-[24px] text-[18px] font-[700] text-[#EF6509] 2xl:pb-4 xl:pb-4 pb-2">{items.header}</li>
                            {items.data.map((values)=>(
                                <li key={index}>
                                    {values}
                                </li>
                            ))}
                        </ul>
                    ))}
                </div>
                <div className="2xl:w-1/2 xl:w-1/2 w-3/4 flex flex-col gap-4 text-[#EF6509] 2xl:text-[20px] xl:text-[20px] text-[14px] font-[500]">
                    <p className=" text-nowrap">CONNECT WITH US</p>
                    <div className="flex gap-4">
                        <FaTwitter size={38} color="#EF6509" className={icons}/>
                        <FaInstagram size={38} color="#EF6509" className={icons}/>
                        <FaFacebookF size={38} color="#EF6509" className={icons}/>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center 2xl:gap-10 xl:gap-10 gap-4 2xl:text-[14px] xl:text-[14px] text-[10px] py-10">
                <a href="#" >Cookies Policy</a>
                <a href="#" >Terms and condition</a>
                <a href="#" >Copyright</a>
            </div>
        </div>
    )
}