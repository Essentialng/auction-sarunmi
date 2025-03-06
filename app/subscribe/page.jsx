"use client";
import Background from "@/components/users/backgroundImg";
import { SubscriptionCard } from "@/components/users/subsribeSection";
import { useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import classNames from "classnames";

export default function SubscriptionPage() {

    const [index, setIndex] = useState(0);
    const navigation = "rounded-lg p-2";


  return (
    <div className="px-24 py-12 grid grid-cols-5 mt-28">
      <div className="flex items-center justify-center col-span-3 gap-12 border rounded-2xl shadow-2xl py-12">
      <button 
      className={classNames({
        [navigation]: true,
        "bg-[#0000001A]" : index < 1,
        "bg-black" : index > 0
        })} 
        disabled={index < 1}
        onClick={()=>setIndex(index - 1)}
        >
        <RiArrowLeftSLine 
         size={40} 
         color="#C6CBC7" 
         />
        </button>

        <SubscriptionCard index={index}/>

        <button 
        className={classNames({
        [navigation]: true,
        "bg-[#0000001A]" : index == 2,
        "bg-black" : index < 2
    })} 
        disabled={index == 2}
        onClick={()=>setIndex(index + 1)}
        >
            <RiArrowRightSLine 
            size={40} 
            color="#C6CBC7" 
            onClick={()=>setIndex(index + 1)}
            />
         </button>
      </div>
      <Background />
    </div>
  );
}
