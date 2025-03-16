import React, {useState} from 'react';
import Notification from '@/components/users/notification';
import History from '@/components/users/history';
import ProfileOverview from '@/components/users/profilePreview';
import Page from "@/components/users/upload"
import { FaUser } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
// import { useSearchParams } from 'next/navigation'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";
import { RiMenuSearchLine } from "react-icons/ri";


export default function SideBar({setToggle, toggle, type, product, handleClick }){

    //   const [product, handleClick] = useState("Car")
      const [menu, setMenu] = useState(false);
    
      const toggleHandling = (value)=>{
        setToggle(value)
        setMenu(false)
      }

      const navBtn = "block text-lg text-start font-semibold";

    return(

    <div className='lg:hidden block'>
        
        <div 
        className='lg:hidden block w-fit p-2 bg-black mx-4'
        onClick={()=>setMenu(!menu)}
        >
            <RiMenuSearchLine size={30} color='white'/>
        </div>
        
        {menu &&
        <nav className="flex flex-col gap-6 space-y-2 p-6 rounded-xl shadow-lg border text-[16px] font-medium">
        <button 
            className={`${navBtn} ${toggle == "profile" && "text-orange-500"}`}
            onClick={()=>toggleHandling("profile")}
            >
                Profile
            </button>

            {type !== "bidder" &&
            <button 
            className={`${navBtn} ${toggle == "revenue" && "text-orange-500"}`}
            onClick={()=>toggleHandling("revenue")}
            >
                My Revenue
            </button>
            }

            <button 
            className={`${navBtn} ${toggle == "notification" && "text-orange-500"}`}
            onClick={()=>toggleHandling("notification")}
            >Notification
            </button>

            {type !== "bidder" &&
            <div className='flex flex-col gap-4'>
                <button 
                className={`flex items-center justify-between ${navBtn} ${toggle == "upload" && "text-orange-500"}`}
                onClick={()=>toggleHandling("upload")}
                >
                <small className='text-lg w-full'>Upload Product</small>
                <>
                {toggle !== "upload" ?
                <FaAngleRight/>
                :
                <FaAngleDown/>
                }
                </>
                </button>
                {toggle == "upload" &&
                <div className='flex flex-col gap-4 text-[#1E2420]'>
                    <button 
                    className={`text-start ${product.name == "Car" && "text-orange-500"}`}
                    onClick={()=>handleClick("Car", 1)}
                    >
                    Car
                    </button>
                    <button 
                    className={`text-start ${product.name == "Properties" && "text-orange-500"}`}
                    onClick={()=>handleClick("Properties", 2)}
                    >
                    Properties
                    </button>
                    <button 
                    className={`text-start ${product.name == "Others" && "text-orange-500"}`}
                    onClick={()=>handleClick("Others", null)}
                    >
                    Others
                    </button>
                </div>
                    }
            </div>
            }
            </nav>
        }
    </div>
    )
}