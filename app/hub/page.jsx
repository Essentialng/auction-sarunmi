"use client";
import React, {useState} from 'react';
import Notification from '@/components/notification';
import History from '@/components/history';
import ProfileOverview from '@/components/profilePreview';
import Page from "@/components/upload"
import { FaUser } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { useSearchParams } from 'next/navigation'
import { FaAngleRight } from "react-icons/fa6";
import { FaAngleDown } from "react-icons/fa6";


const Hub = () => {
  
  const searchParams = useSearchParams()
  const user = searchParams.get('user');
  const action = searchParams.get('action');

  const [toggle, setToggle] = useState(action)
  const [product, setProduct] = useState("Car")

  const navBtn = "block text-lg text-start font-semibold"

  return (
    <div className="min-h-screen flex flex-col px-24 mt-40">
      <div className="grid grid-cols-5 gap-12">
        <aside className="col-span-1  flex flex-col gap-6">
          <div className="space-y-4 text-white bg-[#35318E] rounded-2xl p-4 mb-4">
            <div className='flex flex-col gap-4 text-[16px]'>
                <div className='flex gap-2 items-center'>
                    <FaUser/>
                    <p className="font-bold">JAMES OLAYINKA</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaRegEnvelope/>
                <p className="text-sm">+2348199977444</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <FiPhone/>
                <p className="text-sm">jamesyinka@gmail.com</p>
                </div>
            </div>
          </div>

          <nav className="flex flex-col gap-6 space-y-2 p-6 rounded-xl shadow-lg border text-[16px] font-medium">

            <button 
            className={`${navBtn} ${toggle == "profile" && "text-orange-500"}`}
            onClick={()=>setToggle("profile")}
            >
              Profile
            </button>

            <button 
            className={`${navBtn} ${toggle == "revenue" && "text-orange-500"}`}
            onClick={()=>setToggle("revenue")}
            >
              My Revenue
            </button>

            <button 
            className={`${navBtn} ${toggle == "notification" && "text-orange-500"}`}
            onClick={()=>setToggle("notification")}
            >Notification
            </button>

            <div className='flex flex-col gap-4'>
              <button 
              className={`flex items-center justify-between ${navBtn} ${toggle == "upload" && "text-orange-500"}`}
              onClick={()=>setToggle("upload")}
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
                  className={`text-start ${product == "Car" && "text-orange-500"}`}
                  onClick={()=>setProduct("Car")}
                  >
                    Car
                  </button>
                  <button 
                  className={`text-start ${product == "Properties" && "text-orange-500"}`}
                  onClick={()=>setProduct("Properties")}
                  >
                    Properties
                    </button>
                  <button 
                  className={`text-start ${product == "Others" && "text-orange-500"}`}
                  onClick={()=>setProduct("Others")}
                  >
                    Others
                  </button>
                </div>
                  }
            </div>

            <button 
            className={`${navBtn} ${toggle == "history" && "text-orange-500"}`}
            onClick={()=>setToggle("history")}
            >
              History
            </button>

          </nav>

          <button className="bg-orange-500 text-white px-4 py-3 w-full rounded-xl">LOG OUT</button>
        </aside>
        {toggle === "notification" &&
        <div className='col-span-4'>
            <Notification/>
        </div>
        }
        {toggle === "history" &&
        <div className='col-span-4'>
            <History/>
        </div>
        }
        {toggle === "profile" &&
        <div className='col-span-4'>
            <ProfileOverview/>
        </div>
        }
        {toggle === "upload" &&
        <div className='col-span-4'>
            <Page product = {product}/>
        </div>
        }
      </div>
    </div>
  );
};

export default Hub;
