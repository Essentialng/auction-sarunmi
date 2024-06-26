import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { GiBuyCard } from "react-icons/gi";
import { MdOtherHouses } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { MdCategory } from "react-icons/md";



export default function MobileNav(){
    const nav_btn = "cursor-pointer hover:bg-[#FFB485] px-3 py-2 rounded-xl flex gap-2 items-center"
    return(
        <div className="2xl:hidden hidden top-0 right-0 flex flex-col gap-8 w-full h-full
         border z-50 bg-cover bg-center bg-no-repeat backdrop-blur-lg">
           
            <div className="flex flex-col gap-12 w-4/5 h-[100vh] bg-white lg:py-12 lg:px-12 overflow-y-scroll">
                <div className="flex gap-4 items-center border-b border-gray-500 py-8 px-4">
                    <IoClose size={30} 
                    className="2xl:hidden"
                    />
                    <Image src="/logo.png" width={100} height={59}
                    className="py-4 px-6 w-1/2 rounded-2xl bg-[#35318E]"
                    />
                </div>
                <div className="flex flex-col gap-8 lg:text-[20px] text-[14px] px-2">
                    <div className={nav_btn}>
                        <IoMdHome size={25}/>
                        <span>Home</span>
                    </div>
                    <div className={nav_btn}>
                        <GiBuyCard size={25}/>
                        <span>Auctions</span>
                    </div>
                    <div className={nav_btn}>
                        <FaCar size={25}/>
                        <span>Cars</span>
                    </div>
                    <div className={nav_btn}>
                        <MdOtherHouses size={25}/>
                        <span>Properties</span>
                    </div>
                    <div className={nav_btn}>
                        <MdCategory size={25}/>
                        <div className={` flex gap-2 items-center `}>
                            <span>Others Categories</span>
                            <MdKeyboardArrowDown size={30}/>
                        </div>
                    </div>
                    <hr className="border-2"/>
                    <span className={nav_btn}>About</span>
                    <span className={nav_btn}>Our Valuers</span>
                    <span className={nav_btn}>Our Vendors</span>
                </div>
            </div>
        </div>
    )
}