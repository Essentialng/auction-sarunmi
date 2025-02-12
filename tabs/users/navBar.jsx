"use client";
import Image from "next/image";
import MobileNav from "./mobileNav";
import Link from "next/link";
import { useState, useEffect } from "react";
import { TiThMenu } from "react-icons/ti";
import { FaUserLarge } from "react-icons/fa6";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { usePathname } from "next/navigation";
import classNames from "classnames";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import useStore from "@/app/store";
import { FaAngleRight } from "react-icons/fa6";


export default function NavBar(){
const {user, getUser} = useStore()
    const [active, setActive] = useState("Home");
    
    const [menuToggle, setMenuToggle] = useState(false)
    const pathname = usePathname()
    const menuContents =["Home","Auctions","Cars","Properties","Others Categories","About"];
    const categories = [
        {
            name:"Frniture", 
            link:"", 
            class:"furniture", 
            nest:[
                "Home",
                "Office",
                "Outdoor",
                "Cabinets",
                "Decorative"
            ]
        },
        {name:"Personal Electronics", link:"", class:"personal-elect"},
        {name:"Home Entertainment", link:"", class:"home-ent"},
        {name:"House Appliance", link:"", class:"house-app"},
        {name:"Office Appliance", link:"", class:"office-app"},
        {name:"Personal Care Electronics", link:"", class:"personal-elect"},
        {name:"Kitchen Electronics", link:"", class:"kitchen-elect"},
        {name:"Others", link:"", class:"others"},
    ]
   
    useEffect(()=>{
        if(!user){
        getUser()
    }
    },[user])

    const nav_btn = "cursor-pointer hover:bg-[#FFB485] px-3 py-2 rounded-xl"
    return(
        <div className="fixed top-0 right-0 w-full bg-[#35318E] py-4 xl:px-[4rem] px-[1rem] 
        flex flex-col gap-4 text-[16px] font-[500] overflow-visible z-50 "
        >
            <div className="flex justify-between items-center text-white ">
                <div className="flex gap-1 items-center">
                    <TiThMenu size={30} color="white"
                    className="2xl:hidden xl:hidden"
                    onClick={()=> setMenuToggle(true)}
                    />
                    <Link className="cursor-pointer" href="/">
                        <Image src="/logo.png" alt="" width={120} height={59}/>
                    </Link>
                </div>
                {pathname !== '/register' && pathname !== '/login' && 
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
                {!user && 
                    <Link href="/register" className=" rounded-lg border px-4 py-2 cursor-pointer">Sign Up</Link>
                }
                    <div className="flex items-center gap-4">
                    {pathname === '/register' && 
                        <small className="font-bold text-[14px]">Already have an account?</small>
                    }
                    {!user &&
                        <Link href="/login" className=" rounded-lg bg-[#EF6509] px-4 py-2 cursor-pointer">Login</Link>
                    }
                    { user && 
                    <div className="flex gap-3 items-center text-[#EF6509] cursor-pointer">
                        <div className="border border-[#EF6509] p-2 rounded-full">
                            <FaUser color="white"/>
                        </div>
                        <p>{user.firstName} {user.lastName}</p>
                        <IoIosArrowDown color="#EF6509"/>
                    </div>
                    }
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
            {pathname !== '/register' && pathname !== '/login' && 
                <div className="flex items-center justify-between w-1/2">
                    {menuContents.map((menu, index)=>(
                        <div key={index}>
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
                        <div className="relative group">
                            <div className={classNames(
                                `${nav_btn}  flex gap-2 items-center`,{
                                    "bg-[#FFB485]" :  active === `${menu}`
                                })}
                                onClick={()=>setActive(menu)}
                                >
                            <Link href="categories">Others Categories </Link>
                            </div>
                            {/* <div 
                            className=" hidden absolute w-[250px] border-[#35318E] top-10 bg-[#35318E] group-hover:block group-focus-within:block py-8 hover:block z-50">
                                {categories.map((item, index)=>(
                                <div key={index} className="relative group">
                                    <div className={`${item?.class} flex justify-between items-center p-4`}>
                                        <small className="text-[12p6]">{item?.name}</small>
                                        <FaAngleRight/>
                                    </div>
                                    <div className="absolute top-0 right-[-15.6rem] w-full flex flex-col bg-[#B7A5F9]">
                                        {item?.nest?.map((detail, index)=>(
                                            <small key={index} className="p-4">{detail}</small>
                                        ))}
                                    </div>   
                                </div> 
                                ))}
                            </div> */}
                        </div>
                    }
                        </div>
                        
                    ))}
                </div>
                }
                {pathname !== '/register' && pathname !== '/login' &&
                <> 
                {!user ?
                <div className="flex gap-12">
                    <Link href="/our-valuers" className={nav_btn}>Our Valuers</Link>
                    <Link href="/vendors" className={nav_btn}>Our Vendors</Link>
                </div>
                :
                <Link 
                href={`/hub/${user?.id}/${user?.type}/profile`} 
                className="bg-[#EF6509] px-4 py-2 rounded-2xl text-center">
                    Upload Product to Auction
                </Link>
                }
                </>
                }
            </div>
            {menuToggle && <MobileNav setMenuToggle = {setMenuToggle}/>}
        </div>
    )
}