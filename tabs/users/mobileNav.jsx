import Image from "next/image";
import { MdKeyboardArrowDown } from "react-icons/md";
import { IoClose } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { GiBuyCard } from "react-icons/gi";
import { MdOtherHouses } from "react-icons/md";
import { FaCar } from "react-icons/fa";
import { MdCategory } from "react-icons/md";
import Link from "next/link";



export default function MobileNav({setMenuToggle}){
    const nav_btn = "cursor-pointer hover:bg-[#FFB485] px-3 py-2 rounded-xl flex gap-2 items-center"
    const menuContents = [
        {"icon" : <IoMdHome size={25}/>, "value" : "Home"},
        {"icon" : <GiBuyCard size={25}/>, "value" : "Auctions"},
        {"icon" : <FaCar size={25}/>, "value" : "Cars"},
        {"icon" : <MdOtherHouses size={25}/>, "value" : "Properties"},
        {"icon" :  <MdCategory size={25}/>, "value" : "Others Categories"},
    ]
    return(
        <div className="2xl:hidden xl:hidden top-0 right-0 absolute w-full
          z-50 bg-cover bg-center bg-no-repeat backdrop-blur-2xl h-[100vh]">
           
            <div className="flex flex-col gap-12 w-4/5 h-[100vh] bg-white lg:py-12 lg:px-12 overflow-y-scroll">
                <div className="flex gap-4 items-center border-b border-gray-500 py-8 px-4">
                    <IoClose size={30} 
                    className="2xl:hidden"
                    onClick={()=>setMenuToggle(false)}
                    />
                    <Image src="/logo.png" width={80} height={59}
                    className="py-4 px-6 w-1/2 rounded-2xl bg-[#35318E]"
                    />
                </div>
                <div className="flex flex-col gap-8 lg:text-[20px] text-[14px] px-2">
                    {
                    menuContents.map((menu, index)=>(
                    <>
                        {menu.value !== "Others Categories" ?
                    
                    <Link href={
                        menu.value !== "Home" ?
                         `${menu.value.toLowerCase()}`
                          : "/" 
                        }  
                        className={nav_btn}
                        onClick={()=>setMenuToggle(false)}
                        >
                        {menu.icon}
                        <span>{menu.value}</span>
                    </Link>
                    :
                    <Link 
                    href="categories" 
                    className={nav_btn}
                    onClick={()=>setMenuToggle(false)}
                    >
                        <MdCategory size={25}/>
                        <div className={` flex gap-2 items-center `}>
                            <span>Others Categories</span>
                            <MdKeyboardArrowDown size={30}/>
                        </div>
                    </Link>
                        }
                    </>
                    ))}
                   
                    <hr className="border-2"/>
                    <Link 
                    href="/about" 
                    className={nav_btn}
                    onClick={()=>setMenuToggle(false)}
                    >About</Link>
                    <Link 
                    href="/our-valuers" 
                    className={nav_btn}
                    onClick={()=>setMenuToggle(false)}
                    >Our Valuers</Link>
                    <Link 
                    href="/vendors"
                    className={nav_btn}
                    onClick={()=>setMenuToggle(false)}
                    >Our Vendors</Link>
                </div>
            </div>
        </div>
    )
}