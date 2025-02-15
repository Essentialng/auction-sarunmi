"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import Loading from "@/tabs/admin/loading";
import useStore from "@/app/store";


export function AuctionItems({ auctions, page }) {

  const {loading} = useStore();
  const btn_class =
    "bg-[#EF6509] text-white 2xl:text-[15px] xl:text-[15px] md:text-[15px] text-[12px] font-[500] px-5 py-2 rounded-lg hover:bg-[#35318E] hover:shadow-black shadow-sm";

  const calculateTimeLeft = (endTime) => {
    const now = new Date();
    const end = new Date(endTime);
    const timeDiff = end - now;

    if (timeDiff <= 0) return "00:00:00:00"; // Auction has ended

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days}:${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  const calculateTimeToStart = (startTime) => {
    const now = new Date();
    const start = new Date(startTime);
    const timeDiff = start - now;

    if (timeDiff <= 0) return null; // Auction has started or passed

    const days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

    return `${days}:${hours < 10 ? "0" : ""}${hours}:${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`;
  };

  useEffect(() => {
    const timer = setInterval(() => {
      // Trigger a re-render every 30 seconds (adjust based on your needs)
      setStateUpdated(prev => !prev); // Example of triggering state change every 30s
    }, 3000); // Update every 30 seconds for better performance

    return () => clearInterval(timer);
  }, []);

  const [stateUpdated, setStateUpdated] = useState(false);

  return (
    <div
      className={classnames({
        "grid md:grid-cols-2 grid-cols-1 gap-4 relative": true,
        "2xl:grid-cols-4 xl:grid-cols-4": page !== "categories",
        "2xl:grid-cols-3 xl:grid-cols-3": page === "categories",
      })}
    >
      {auctions?.map((item, index) => {
        const timeLeft = calculateTimeLeft(item.endTime);
        const timeToStart = calculateTimeToStart(item.startTime);
        page !== "Auctions" && timeToStart
        return (
          <Link key={index} href="/description">
            <div className="flex flex-col gap-2 items-center hover:scale-95 transition-all duration-500 ease-in-out">
              <div
                className={classnames({
                  "w-1/3 text-center py-4 rounded-[10px] border border-[#7BC27A] font-[700] shadow-md ": true,
                  "border-[#FF9354] ": timeToStart,
                })}
              >
                <p>{timeToStart ? timeToStart : timeLeft}</p>
              </div>
              <div
                className={classnames({
                  "py-4 px-[20px] rounded-[10px] items-center flex flex-col gap-10 border border-[#7BC27A] font-[700] shadow-md h-fit": true,
                  "border-[#FF9354]": timeToStart,
                })}
              >
                <div className="relative">
                  <Image src={item.images[0]} width={260} height={170} alt="" />
                </div>
                <div className="flex flex-col gap-4">
                  <div
                    className={classnames({
                      "flex justify-between items-center text-[14px] font-[400] text-[#7BC27A]": true,
                      "text-[#FF7B58]": timeToStart,
                    })}
                  >
                    <div className="flex gap-2 items-center">
                      <FaCircle size={10} />
                      <small>{timeToStart ? "Upcoming Auction" : item.status}</small>
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
                {item.status === "Upcoming Auction" ? (
                  <button className={btn_class}>JOIN AUCTION</button>
                ) : (
                  <div className="flex gap-3">
                    <button className={btn_class}>VIEW AUCTION</button>
                    <button className={btn_class}>PRE BID</button>
                  </div>
                )}
              </div>
            </div>
          </Link>
        );
      })}
      
      {loading && <Loading/>}
    </div>
  );
}
