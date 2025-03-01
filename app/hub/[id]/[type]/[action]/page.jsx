"use client";
import React, {useState, useEffect} from 'react';
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
import SideBard from '@/components/users/mobileHubSide';
import { useParams } from "next/navigation";
import useStore from '../../../../store';
import { useRouter } from 'next/navigation';


const Hub = () => {

  const {user, clearUser} = useStore();
  const {id, type, action} = useParams();
  const router = useRouter()
  
  const [toggle, setToggle] = useState(action)
  const [product, setProduct] = useState({name : "Car", index : 1})
  const [dropDown, setDropDown] = useState(false)
  
  const handleClick = (name, index)=>{
    setProduct({name:name, index:index})
  }
  
  const navBtn = "block text-lg text-start font-semibold"

  
  return (
    <div className="min-h-screen flex flex-col lg:px-24 mt-40">
      <div className="lg:grid grid-cols-5 gap-12">

        <SideBard 
        setToggle={setToggle} 
        toggle={toggle} 
        type={type}
        handleClick={handleClick}
        product={product}
        />
        
        <aside className="relative hidden bg-white col-span-1  lg:flex flex-col gap-6">
          <div className="lg:block hidden space-y-4 text-white bg-[#35318E] rounded-2xl p-4 mb-4">
            <div className='flex flex-col gap-4 text-[16px]'>
                <div className='flex gap-2 items-center'>
                    <FaUser/>
                    <p className="font-bold">{user?.firstName} {user?.lastName}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <FaRegEnvelope/>
                <p className="text-sm">{user?.phoneNumber}</p>
                </div>
                <div className='flex gap-2 items-center'>
                    <FiPhone/>
                <p className="text-sm">{user?.email}</p>
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

            {type !== "bidder" &&
            <button 
            className={`${navBtn} ${toggle == "revenue" && "text-orange-500"}`}
            onClick={()=>setToggle("revenue")}
            >
              My Revenue
            </button>
            }

            <button 
            className={`${navBtn} ${toggle == "notification" && "text-orange-500"}`}
            onClick={()=>setToggle("notification")}
            >Notification
            </button>

            {type !== "bidder" &&
            <div className='flex flex-col gap-4'>
              <button 
              className={`flex items-center justify-between ${navBtn} ${toggle == "upload" && "text-orange-500"}`}
              onClick={()=>{
                setDropDown(!dropDown)
                setToggle("upload")
              }}
              >
                <small className='text-lg w-full'>Upload Product</small>
                <>
                {!dropDown ?
                <FaAngleRight/>
                :
                <FaAngleDown/>
                }
                </>
              </button>

              {dropDown &&
              <div className='flex flex-col gap-4 text-[#1E2420]'>
                <button 
                className={`text-start ${product.name == "Car" && "text-orange-500"}`}
                onClick={()=>handleClick("Car", 1)}
                >
                  Car
                </button>
                <button 
                className={`text-start ${product.name == "Property" && "text-orange-500"}`}
                onClick={()=>handleClick("Property", 2)}
                >
                  Properties
                  </button>
                <button 
                className={`text-start ${product.name == "Others" && "text-orange-500"}`}
                onClick={()=>handleClick("Others", 3)}
                >
                  Others
                </button>
              </div>
                }
            </div>
            }
              
            <button 
            className={`${navBtn} ${toggle == "history" && "text-orange-500"}`}
            onClick={()=>setToggle("history")}
            >
              History
            </button>

          </nav>
          
          <button 
          className=" bg-orange-500 text-white px-4 py-3 w-full rounded-xl"
          onClick={()=>{
             clearUser()
             router.push("/")
            }}
          >
            LOG OUT
            </button>
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
            <ProfileOverview user={user}/>
        </div>
        }
        {toggle === "upload" &&
        <div className='col-span-4'>
            <Page 
            product = {product} 
            id={id}
            handleClick={handleClick}
            />
        </div>
        }
      </div>
    </div>
  );
};

export default Hub;
