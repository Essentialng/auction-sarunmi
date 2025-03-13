"use client";
import React, {useState, useEffect} from 'react';
// import { useSearchParams } from 'next/navigation'
import SideBard from '@/components/users/mobileHubSide';
import { useParams } from "next/navigation";
import useStore from '../../../../store';
import { useRouter } from 'next/navigation';
import {SideLink, ToggleContent, UserInfo} from '@/tabs/users/sideLinks';

const Hub = () => {

  const {user, clearUser, initializeUser} = useStore();
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
          
          <UserInfo user={user}/>
         
          <SideLink 
            navBtn={navBtn}
            toggle={toggle}
            setToggle={setToggle}
            type={type}
            product={product}
            handleClick={handleClick}
            dropDown={dropDown}
            setDropDown={setDropDown}
          />
          
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
        <ToggleContent 
          toggle={toggle} 
          user={user} 
          initializeUser={initializeUser} 
          product={product} 
          handleClick={handleClick} 
          id={id} 
        />
      </div>
    </div>
  );
};

export default Hub;
