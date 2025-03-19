"use client";
import { AuctionItems } from "./auction_items";
import {  useEffect } from "react";
import Link from "next/link";
import useStore from "@/app/store";
import { axiosInstance } from "@/package/axios";
import { useState } from "react";


export default function Auctions() {

  const {fetchAllProduct, cars, properties, others, carsCount, propertiesCount, othersCount, user} = useStore()

  const [auctions, setAuctions] = useState([])
  
  
      const fetchAuction = async()=>{
        try{
          const response = await axiosInstance.get("/listing")
          const data = await response.data;
          if(response.status == 200){
            setAuctions(data.items)
          }
        }catch(error){
          console.log(error)
        }
    }

  useEffect(() => {
    fetchAllProduct();
    fetchAuction();
  }, []);


  const itemsData = [
    {
      name: "Cars",
      link: "/cars",
      data: cars,
      count: carsCount,
    },
    {
      name: "Properties",
      link: "/properties",
      data: properties,
      count: propertiesCount,
    },
    {
      name: "Electronics",
      link: "/categories",
      data: others,
      count: othersCount,
    },
  ];

  const header = "sm:text-[24px] text-[18px] font-[600]";
  const small = "sm:text-[20px] text-[14px] font-[500] text-[#EF6509]";

  return (
    <div className="lg:px-[4rem] flex flex-col gap-24  px-[2rem] py-24 bg-gray-100">


      {auctions.length != 0 &&
       <div>
          <h1 className="lg:text-[30px] text-[22px] font-[700] py-12">
            Recent Listings
          </h1>
          <div>
              <AuctionItems auctions={auctions} link={true}/>
          </div>
      </div>
      }



      <div>
          <h1 className="lg:text-[30px] text-[22px] font-[700] py-12">
            Top Auctions
          </h1>
          <div className="flex flex-col gap-20">
            {itemsData.map((items, index) => (
              (items?.data?.length != 0 &&
              <section className="flex flex-col gap-6" key={index}>
                <div className="flex justify-between ">
                  <span className={header}>{items.name} <small className="text-base px-4 py-1 bg-gray-200 rounded-lg font-normal shadow-md">{items.count} Ads</small></span>
                  <Link href={items.link} className={small}>
                    View all
                  </Link>
                </div>
                <AuctionItems auctions={items.data} count={items.count} />
              </section>
              )
            ))}
          </div>
      </div>
     
    </div>
  );
}
