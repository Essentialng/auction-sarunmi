"use state";
import Image from "next/image";
import Link from "next/link";

export default function NavBar(){
    return(
        <nav className="bg-[#35318E] py-[1rem] px-[4rem] flex flex-col gap-[2rem] text-[16px] font-[500]">
            <div className="flex justify-between items center text-white">
                <Image src="/logo.png" width={150} height={59}/>
                <div className="flex gap-2 w-1/4">
                    <input 
                    placeholder="Search auctions"
                    className="w-5/6 bg-[#F4FDFF] px-4 py-2 border-[#B1B1B1] rounded-md
                     text-[12px] text-[#6C6C6C] font-[400]" type="text" />
                    <span className=" rounded-lg bg-[#EF6509] px-4 py-2 cursor-pointer">Search</span>
                </div>
                <div className="flex gap-6 text-center items-center ">
                    <span className=" rounded-lg border px-4 py-2 cursor-pointer">Sign Up</span>
                    <span className=" rounded-lg bg-[#EF6509] px-4 py-2 cursor-pointer">Login</span>
                </div>
            </div>
            <div className="text-white flex justify-between">
                <div className="flex justify-between w-1/2">
                    <span className="cursor-pointer hover:bg-[#FFB485] px-3 py-3">Home</span>
                    <span className="cursor-pointer hover:bg-[#FFB485] px-3 py-3">Auctions</span>
                    <span className="cursor-pointer hover:bg-[#FFB485] px-3 py-3">Cars</span>
                    <span className="cursor-pointer hover:bg-[#FFB485] px-3 py-3">Properties</span>
                    <span className="cursor-pointer hover:bg-[#FFB485] px-3 py-3">Others Categories</span>
                    <span className="cursor-pointer hover:bg-[#FFB485] px-3 py-3">About</span>
                </div>
                <div className="flex gap-12">
                    <span className="cursor-pointer hover:bg-[#FFB485] px-3 py-3">Our Valuers</span>
                    <span className="cursor-pointer hover:bg-[#FFB485] px-3 py-3">Our Vendors</span>
                </div>
            </div>
        </nav>
    )
}