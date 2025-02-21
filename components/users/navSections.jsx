import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import classNames from "classnames";
import { IoIosArrowForward } from "react-icons/io";


export function Logo({setMenuToggle}){
    return( 
    <div className="flex gap-1 items-center">
        <TiThMenu size={30} color="white"
        className="xl:hidden"
        onClick={()=> setMenuToggle(true)}
        />
        <Link className="cursor-pointer" href="/">
            <Image src="/logo.png" alt="" width={120} height={59}/>
        </Link>
    </div>
    )
}

export function Search(){
    return(
        <div className="2xl:flex xl:flex hidden gap-2 w-1/4">
            <input 
            placeholder="Search auctions"
            className="w-5/6 px-4 py-2 border-[#B1B1B1] rounded-md
                text-[12px] text-[#6C6C6C] font-[400] bg-white outline-none border-none" type="text" />
            <span className=" rounded-lg bg-[#EF6509] px-4 py-2 cursor-pointer">Search</span>
        </div>
    )
}


export function Authentications({user, account, signUp, already, login}){
    return(
    <div className="2xl:flex xl:flex hidden gap-6 text-center items-center ">
        {account && 
            <small className="font-bold text-[14px]">Don’t  have an account?</small>
        }
        {signUp &&
            <Link href="/register" className=" rounded-lg border px-4 py-2 cursor-pointer">Sign Up</Link>
        }
        <div className="flex items-center gap-4">
            {already && 
                <small className="font-bold text-[14px]">Already have an account?</small>
            }
            {login && 
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
)
}


export function MobileSearch(){
    return(
        <div className="2xl:hidden xl:hidden flex justify-center gap-3 items-center py-2 px-4 w-full bg-white rounded-2xl">
            <IoIosSearch size={30}/>
            <input 
            placeholder="Search auctions"
            className="w-full  px-4 border-[#B1B1B1] rounded-md
                text-[18px] text-[#6C6C6C] font-[400] bg-white outline-none border-none" type="text" 
                />
        </div>
    )
};


export function NavLink({menuContents, active, nav_btn, setActive, categories}){
    
    return(
        <div className="flex items-center justify-between w-1/2">
                    {menuContents.map((menu, index)=>(
                        <div key={index}>

                        {menu !== "Others Categories" ? 
                            <Link 
                            href={menu !== "Home" ? `/${menu.toLowerCase()}` : "/"} 
                            className={classNames(nav_btn,{
                                "bg-[#FFB485]" :  active === `${menu}`})}
                            onClick={()=>setActive(menu)}
                                >
                                    {menu}
                            </Link> :
                            <div className=" relative group contain">
                                <div className={classNames(
                                    `${nav_btn}  flex gap-2 items-center`,{
                                        "bg-[#FFB485]" :  active === `${menu}`
                                    })}
                                    onClick={()=>setActive(menu)}
                                    >
                                <div className="flex items-center gap-2">Others Categories <IoIosArrowDown/></div>
                                </div>
                                <div 
                                className=" drop w-full hidden absolute border-[#35318E] top-10 bg-[#35318E] group-hover:block group-focus-within:block py-8 hover:block z-50">
                                    {categories.map((item, index)=>(
                                    <div key={index} className="relative group">
                                        <Link href={`/categories/${item.id}`} className={`flex justify-between items-center p-4 cursor-pointer hover:bg-[#8474DA]`}>
                                            <small className="text-[12p6]">{item?.name}</small>
                                            <IoIosArrowForward/>
                                        </Link>
                                    </div> 
                                    ))}
                                </div>
                            </div>
                        }
                    </div>
                        
                    ))}
                </div>
    )
}