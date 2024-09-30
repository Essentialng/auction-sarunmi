"use client";
import Image from "next/image";
import MobileNav from "./mobileNav";
import Link from "next/link";
import { useState } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaUserLarge } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";


export default function NavBar(){
    const [active, setActive] = useState("Home");
    const [menuToggle, setMenuToggle] = useState(false)
    const pathname = usePathname()
    const menuContents =["Home","Auctions","Cars","Properties","Others Categories","About"];
   

    const nav_btn = "cursor-pointer hover:bg-[#FFB485] px-3 py-2 rounded-xl"
    return(
        <div className="fixed top-0 right-0 w-full bg-[#35318E] py-[1rem] 2xl:px-[4rem] xl:px-[4rem] px-[1rem] 
        flex flex-col gap-[1rem] text-[16px] font-[500] overflow-visible z-50"
        >
            <div className="flex justify-between items-center text-white">
                <div className="flex gap-1 items-center">
                    <TiThMenu size={30} color="white"
                    className="2xl:hidden xl:hidden"
                    onClick={()=> setMenuToggle(true)}
                    />
                    <Link className="cursor-pointer" href="/">
                        <Image src="/logo.png" width={120} height={59}/>
                    </Link>
                </div>
                {pathname !== '/sign-up' && pathname !== '/login' && 
                <div className="2xl:flex xl:flex hidden gap-2 w-1/4">
                    <input 
                    placeholder="Search auctions"
                    className="w-5/6 px-4 py-2 border-[#B1B1B1] rounded-md
                     text-[12px] text-[#6C6C6C] font-[400] bg-white outline-none border-none" type="text" />
                    <span className=" rounded-lg bg-[#EF6509] px-4 py-2 cursor-pointer">Search</span>
                </div>
                }
                <div className="2xl:flex xl:flex hidden gap-6 text-center items-center ">
                {pathname === '/login' && 
                        <small className="font-bold text-[14px]">Don’t  have an account?</small>
                    }
                {pathname !== '/sign-up' && 
                    <Link href="/sign-up" className=" rounded-lg border px-4 py-2 cursor-pointer">Sign Up</Link>
                }
                    <div className="flex items-center gap-4">
                    {pathname === '/sign-up' && 
                        <small className="font-bold text-[14px]">Already have an account?</small>
                    }
                    {pathname !== "/login" &&
                        <Link href="/login" className=" rounded-lg bg-[#EF6509] px-4 py-2 cursor-pointer">Login</Link>
                    }
                    <div className="flex gap-3 items-center text-[#EF6509] cursor-pointer">
                        <div className="border border-[#EF6509] p-2 rounded-full">
                            <FaUser color="white"/>
                        </div>
                        <p>JAMES OLAYINKA</p>
                        <IoIosArrowDown color="#EF6509"/>
                    </div>
                    </div>
                </div>
                <FaUserLarge size={25} color="white"
                className="2xl:hidden xl:hidden"/>
            </div>
            <div className="2xl:hidden xl:hidden flex justify-center gap-3 items-center py-2 px-4 w-full bg-white rounded-2xl">
                <IoIosSearch size={30}/>
                <input 
                placeholder="Search auctions"
                className="w-full  px-4 border-[#B1B1B1] rounded-md
                    text-[18px] text-[#6C6C6C] font-[400] bg-white outline-none border-none" type="text" 
                    />
            </div>
            <div className="text-white 2xl:flex xl:flex hidden justify-between">
            {pathname !== '/sign-up' && pathname !== '/login' && 
                <div className="flex items-center justify-between w-1/2">
                    {menuContents.map((menu, index)=>(
                        <div>
                        {
                        menu !== "Others Categories" ? 
                        <Link 
                        href={
                            menu !== "Home" ?
                             `${menu.toLowerCase()}`
                              : "/" 
                            } 
                            className={classNames(nav_btn,{
                            "bg-[#FFB485]" :  active === `${menu}`
                            })}
                            onClick={()=>setActive(menu)}
                            >
                                {menu}
                        </Link> :
                        <div className={classNames(
                            `${nav_btn} flex gap-2 items-center`,{
                                "bg-[#FFB485]" :  active === `${menu}`
                            })}
                            onClick={()=>setActive(menu)}
                            >
                        <Link href="categories">Others Categories</Link>
                        <MdKeyboardArrowDown size={14}/>
                    </div>
                    }
                        </div>
                        
                    ))}
                </div>
                }
                {pathname !== '/sign-up' && pathname !== '/login' && 
                <div className="flex gap-12">
                    <Link href="/our-valuers" className={nav_btn}>Our Valuers</Link>
                    <Link href="/vendors" className={nav_btn}>Our Vendors</Link>
                </div>
                }
            </div>
            {menuToggle && <MobileNav setMenuToggle = {setMenuToggle}/>}
        </div>
    )
}