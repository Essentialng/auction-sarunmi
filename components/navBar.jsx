"use state";
import Image from "next/image";
import MobileNav from "./mobileNav";
import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import { FaUserLarge } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";

export default function NavBar(){
    const nav_btn = "cursor-pointer hover:bg-[#FFB485] px-3 py-2 rounded-xl"
    return(
        <nav className="fixed top-0 right-0 w-full bg-[#35318E] py-[1rem] 2xl:px-[4rem] px-[2rem] 
        flex flex-col gap-[1rem] text-[16px] font-[500] overflow-visible z-50"
        >
            <div className="flex justify-between items-center text-white">
                <div className="flex gap-4 items-center">
                    <TiThMenu size={30} color="white"
                    className="2xl:hidden"
                    />
                    <Image src="/logo.png" width={150} height={59}/>
                </div>
                <div className="2xl:flex hidden gap-2 w-1/4">
                    <input 
                    placeholder="Search auctions"
                    className="w-5/6 bg-[#F4FDFF] px-4 py-2 border-[#B1B1B1] rounded-md
                     text-[12px] text-[#6C6C6C] font-[400]" type="text" />
                    <span className=" rounded-lg bg-[#EF6509] px-4 py-2 cursor-pointer">Search</span>
                </div>
                <div className="2xl:flex hidden gap-6 text-center items-center ">
                    <span className=" rounded-lg border px-4 py-2 cursor-pointer">Sign Up</span>
                    <span className=" rounded-lg bg-[#EF6509] px-4 py-2 cursor-pointer">Login</span>
                </div>
                <FaUserLarge size={25} color="white"
                className="2xl:hidden"/>
            </div>
            <div className="2xl:hidden flex justify-center gap-3 items-center py-2 px-4 w-full bg-white rounded-2xl">
                <IoIosSearch size={30}/>
                <input 
                placeholder="Search auctions"
                className="w-full bg-[#F4FDFF] px-4 border-[#B1B1B1] rounded-md
                    text-[18px] text-[#6C6C6C] font-[400]" type="text" 
                    />
            </div>
            <div className="text-white 2xl:flex hidden justify-between">
                <div className="flex justify-between w-1/2">
                    <span className={nav_btn}>Home</span>
                    <span className={nav_btn}>Auctions</span>
                    <span className={nav_btn}>Cars</span>
                    <span className={nav_btn}>Properties</span>
                    <div className={`${nav_btn} flex gap-2 items-center`}>
                        <span>Others Categories</span>
                        <MdKeyboardArrowDown size={14}/>
                    </div>
                    <span className={nav_btn}>About</span>
                </div>
                <div className="flex gap-12">
                    <span className={nav_btn}>Our Valuers</span>
                    <span className={nav_btn}>Our Vendors</span>
                </div>
            </div>
            <MobileNav/>
        </nav>
    )
}