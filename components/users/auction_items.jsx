"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import classNames from "classnames";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import Loading from "@/tabs/admin/loading";
import useStore from "@/app/store";
import { useRouter } from 'next/navigation';
import { calculateTimeToStart, calculateTimeLeft } from "@/utils/methods";


export function AuctionItems({ auctions, page }) {
  const router = useRouter();

  const {loading} = useStore();
  const btn_class =
    "bg-[#EF6509] text-white 2xl:text-[15px] xl:text-[15px] md:text-[15px] text-[12px] font-[500] px-5 py-2 rounded-lg hover:bg-[#35318E] hover:shadow-black shadow-sm";


  useEffect(() => {
    const timer = setInterval(() => {
      setStateUpdated(prev => !prev); 
    }, 3000); 

    return () => clearInterval(timer);
  }, []);

  const handleViewAuction = (data) => {
    localStorage.setItem('auctionData', JSON.stringify(data)); 
    if (window.location.pathname === '/description') {
      window.scrollTo(0, 0);
      window.location.reload();
    } else {
      router.push('/description');
    }
  };

  const [stateUpdated, setStateUpdated] = useState(false);

  return (
    
      <div
        className={classNames({
          "grid md:grid-cols-2 grid-cols-1 gap-4 relative": true,
          "2xl:grid-cols-4 xl:grid-cols-4": page !== "categories",
          "2xl:grid-cols-3 xl:grid-cols-3": (page === "categories"),
        })}
      >
        {auctions?.map((item, index) => {
          const timeLeft = calculateTimeLeft(item.endTime);
          const timeToStart = calculateTimeToStart(item.startTime);
          page !== "Auctions" && timeToStart
          return (
            <div key={index}>
              <div className="flex flex-col gap-2 items-center justify-center hover:scale-95 transition-all duration-500 ease-in-out">
                <div
                  className={classNames({
                    "w-1/3 text-center py-4 rounded-[10px] border border-[#7BC27A] font-[700] shadow-md ": true,
                    "border-[#989FA1]" : timeLeft == "00:00:00:00",
                    "border-[#FF9354] ": timeToStart,
                  })}
                >
                  <p>{timeToStart ? timeToStart : timeLeft}</p>
                </div>
                <div
                  className={classNames({
                    "py-4 px-[20px] rounded-[10px] items-center flex flex-col gap-10 border border-[#7BC27A] font-[700] shadow-md h-fit": true,
                    "border-[#989FA1]" : timeLeft == "00:00:00:00",
                    "border-[#FF9354]": timeToStart,
                  })}
                >
                  <div className="relative">
                    <Image src={item.images[0]} width={260} height={170} alt="" />
                  </div>
                  <div className="flex flex-col gap-4">
                    <div
                      className={classNames({
                        "flex justify-between items-center text-[14px] font-[400] text-[#7BC27A]": true,
                        "text-[#989FA1]": timeLeft == "00:00:00:00",
                        "text-[#FF7B58]": timeToStart,
                      })}
                    >
                      <div className="flex gap-2 items-center">
                        <FaCircle size={10} />
                        <small>
                          {timeToStart ? "Upcoming Auction" : 
                          timeLeft == "00:00:00:00" ? 
                          "Ended Auction" : "Live Auction"}
                        </small>
                      </div>
                      <div>
                        <IoIosCheckmarkCircleOutline size={16} />
                      </div>
                    </div>
                    <div>
                      <h4 className="text-[16px] font-[700]">{item.type}</h4>
                      <small className="text-[14px] font-[400]">
                        {item.description?.length > 50
                          ? `${item.description.substring(0, 100)}...`
                          : item.description}
                      </small>
                    </div>
                    <div className="flex gap-4 text-[14px]">
                      <span className="font-[400]">Retail Value:</span>
                      <h4 className="font-[700] flex items-center"><TbCurrencyNaira size={16}/> {item.price.toLocaleString()}</h4>
                    </div>
                  </div>
                  {!timeToStart ? (
                    <button 
                      className={`${timeLeft === "00:00:00:00" ? "bg-gray-200 text-[#989FA1] hover:bg-gray-200 shadow-none" : "bg-[#FF9354]"} ${btn_class}`}
                      onClick={()=>handleViewAuction(item)}
                      disabled={timeLeft == "00:00:00:00"}
                      >
                      {timeLeft == "00:00:00:00" ? "AUCTION ENDED" : "JOIN AUCTION"}
                    </button>
                  ) : (
                    <div className="flex gap-3">
                      <button className={btn_class}
                      >VIEW AUCTION</button>
                      <button className={btn_class} onClick={()=>handleViewAuction(item)}>PRE BID</button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        
        {loading && <Loading/>}
      </div>
      
  );
}
