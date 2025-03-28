import Link from "next/link";
import { TiThMenu } from "react-icons/ti";
import Image from "next/image";
import { FaUser } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import classNames from "classnames";
import { IoIosArrowForward } from "react-icons/io";
import DropDown from "./userProfile";
import { useState } from "react";
import { IoIosClose } from "react-icons/io";


export function Logo({setMenuToggle, setActivate}){

    const menuLink = ()=>{
        setMenuToggle(true);
        setActivate(false);
    }
    return( 
    <div className="flex gap-1 items-center">
        <TiThMenu size={30} color="white"
        className="lg:hidden"
        onClick={menuLink}
        />
        <Link className="cursor-pointer" href="/">
            <Image src="/logo.png" alt="" width={120} height={59}/>
        </Link>
    </div>
    )
}

export function Search({ searchTerm, handleSearchChange, filteredAuctions, setFilteredAuctions, setSearchTerm }) {

    const clearSearch=()=>{
        setSearchTerm("");
        setFilteredAuctions([])
    }


    return (
        <div className="lg:flex hidden gap-2 2xl:w-1/4 xl:w-1/3 relative z-50">
            <input
                placeholder="Search auctions"
                className="w-5/6 px-4 py-2 border-[#B1B1B1] rounded-md text-[12px] text-[#6C6C6C] 
                font-[400] bg-white outline-none border-none"
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
            />
            <span className=" rounded-lg bg-[#EF6509] px-4 py-2 cursor-pointer">Search</span>
            {searchTerm.length > 0 && filteredAuctions.length > 0 && (
            <div className="w-full max-h-96 overflow-y-scroll absolute bg-white border py-8 top-12 rounded-xl shadow-lg text-[#6C6C6C] z-50">
                <div className="absolute top-2 right-4 hover:text-red-600">
                    <IoIosClose
                    onClick={clearSearch}/>
                </div>
                <ul className="search-preview flex flex-col">
                    {filteredAuctions.map(auction => (
                        <Link
                        href={`/categories/${auction.id}`} 
                        className="p-4 hover:bg-[#B1B1B1] hover:text-black" key={auction.id}
                        onClick={clearSearch}>
                            {auction.name}
                        </Link>
                    ))}
                </ul>
            
            </div>
        )}
        </div>
    );
}



export function Authentications({user, account, signUp, already, login, dropLinks}){
    const [activate, setActivate] = useState(false);

    return(
    <div className="relative xl:flex hidden gap-4 text-center justify-center items-center min-w-1/6 max-w-2/7">
        {account && 
            <small className="font-bold text-[14px] w-full text-nowrap">Don’t  have an account?</small>
        }
        {signUp &&
            <Link href="/register" className=" rounded-lg border px-4 py-2 cursor-pointer w-full">Sign Up</Link>
        }
       
        <div className={classNames({
            "flex items-center gap-4 w-full": true,
            "hidden" : account
            })}>
            {already && 
                <small className="font-bold text-[14px]">Already have an account?</small>
            }
            {login && 
                <Link href="/login" className=" rounded-lg bg-[#EF6509] px-4 py-2 cursor-pointer">Login</Link>
            }
            { user && 
            <div className="relative w-full">
                <div 
                className="relative flex gap-3 items-center text-[#EF6509]  text-wrap truncate whitespace-nowrap overflow-hidden text-ellipsis"
               >
                    <div className={classNames({
                        "relative flex items-center justify-center border  rounded-full overflow-hidden w-10 h-10" : true,
                        "border-[#EF6509] p-2" : !user?.profilePicture,
                        "border-[#B1B1B1]" : user?.profilePicture
                        })}>
                        {!user.profilePicture ?
                        <FaUser color="white"/>
                        :
                        <Link href="/dashboard">
                            <img src={user?.profilePicture} alt="" className="w-full h-full object-cover rounded-full cursor-pointer" />
                        </Link>
                    }
                    </div>
                    <p 
                    className="truncate whitespace-nowrap overflow-hidden text-ellipsis min-w-0 max-w-[120px] cursor-pointer"
                    onClick={()=>setActivate(!activate)}
                    >
                        {user.firstName} {user.lastName}</p>
                    <IoIosArrowDown color="#EF6509"/>
                </div>
                {activate &&
                <DropDown 
                dropLinks={dropLinks} 
                user={user}
                setActivate={setActivate}
                />
                }
            </div>
            }
        </div>
    </div>
)
}


export function MobileSearch({searchTerm, handleSearchChange, filteredAuctions, setFilteredAuctions, setSearchTerm}){

    const clearSearch=()=>{
        setSearchTerm("");
        setFilteredAuctions([])
    }

    return(
        <div className="w-full relative lg:hidden block">
            <div className="flex justify-center gap-3 items-center py-2 px-4 w-full bg-white rounded-2xl">
                
                <IoIosSearch size={30}/>
                <input 
                placeholder="Search auctions"
                className="w-full  px-4 border-[#B1B1B1] rounded-md
                    text-[18px] text-[#6C6C6C] font-[400] bg-white outline-none border-none" 
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}    />
            </div>
            
            {searchTerm.length > 0 && filteredAuctions.length > 0 && (
                <div className="w-full absolute bg-white border py-8 top-12 rounded-xl shadow-lg text-[#6C6C6C] z-50">
                
                    <ul className="search-preview flex flex-col">
                        {filteredAuctions.map(auction => (
                            <Link
                            href={`/categories/${auction.id}`} 
                            className="p-4 hover:bg-[#B1B1B1] hover:text-black" key={auction.id}
                            onClick={clearSearch}>
                                {auction.name}
                            </Link>
                        ))}
                    </ul>
                
                </div>
            )}
        </div>

    )
};


export function NavLink({menuContents, active, nav_btn, setActive, categories}){
    
    const [isModel, setIsModel] = useState(null)

    return(
        <div className="flex items-center justify-between 2xl:w-1/2 xl:w-2/3 ">
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
                        className=" drop w-full max-h-[450px] hidden absolute border-[#35318E] top-10 bg-[#35318E] 
                        text-[18px] group-hover:block group-focus-within:block py-4 hover:block  z-50"
                        >
                            {categories.map((item, index)=>(
                            <div key={index} className="relative group">
                                <div 
                                onClick={()=>setIsModel(index)}
                                className={`category flex justify-between items-center p-4 cursor-pointer
                                     hover:bg-[#8474DA] ${isModel == index && "bg-[#8474DA]"}`}
                                >
                                    <small>{item?.name}</small>
                                    <IoIosArrowForward/>
                                </div>

                                {isModel == index &&
                                <div className="model absolute bg-[#8474DA] top-0 left-44 w-full max-h-[400px] overflow-y-scroll">
                                {item?.model?.map((value, num )=>(
                                     <Link
                                     href={`/categories/${value.categoryId}`} 
                                     onClick={()=>setIsModel(null)}
                                     >
                                    <div className="relative px-4 py-[13px] text-white hover:bg-orange-300 hover:text-black w-full cursor-pointer ">
                                       
                                            <small>{value?.name}</small>
                                       
                                    </div>
                                    </Link>
                                ))}
                                </div>
                                }
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


export function UploadLink({setActivate}){

    const [activateDropDown, setActivateDropDown] = useState(false);

    return(
        <div className="w-full" >
            <div 
            className="py-4 hover:bg-[#B7A5F9] w-full px-8 flex justify-between items-center cursor-pointer"
            onClick={()=>setActivateDropDown(!activateDropDown)}
            >
            Upload Product
            <IoIosArrowDown />
            </div>

            {activateDropDown &&
            <div
            onClick={()=>setActivate(false)} 
            className="relative  bg-[#B7A5F9] w-full flex flex-col">
                <a href={`/hub/${user?.id}/${user?.type}/profile`} className="py-3 px-8 hover:bg-[#A192F5]">
                Cars
                </a>
                <a href={`/hub/${user?.id}/${user?.type}/profile`} className="py-3 px-8 hover:bg-[#A192F5]">
                Properties
                </a>
                <a href={`/hub/${user?.id}/${user?.type}/profile`} className="py-3 px-8 hover:bg-[#A192F5]">
                Others
                </a>
            </div>
            }
        
        </div>
    )
}