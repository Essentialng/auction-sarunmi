"use client";
import { AuctionItems } from "./auction_items";
import {  useEffect } from "react";
import Link from "next/link";
import useStore from "@/app/store";

export default function Auctions() {

  const {fetchAllProduct, cars, properties, others, user} = useStore()


  useEffect(() => {
    fetchAllProduct();
  }, []);


  const itemsData = [
    {
      name: "Cars",
      link: "/cars",
      data: cars,
    },
    {
      name: "Properties",
      link: "/properties",
      data: properties,
    },
    {
      name: "Electronics",
      link: "/categories",
      data: others,
    },
  ];

  const header = "xl:text-[24px] text-[18px] font-[600]";
  const small = "xl:text-[20px] text-[14px] font-[500] text-[#EF6509]";

  return (
    <div className="lg:px-[4rem]  px-[2rem] py-24 bg-gray-100">
          <h1 className="lg:text-[30px] text-[22px] font-[700] py-12">
            Top Auctions
          </h1>
          <div className="flex flex-col gap-20">
            {itemsData.map((items, index) => (
              (items?.data?.length != 0 &&
              <section className="flex flex-col gap-6" key={index}>
                <div className="flex justify-between ">
                  <span className={header}>{items.name}</span>
                  <Link href={items.link} className={small}>
                    View all
                  </Link>
                </div>
                <AuctionItems auctions={items.data} />
              </section>
              )
            ))}
          </div>
        
    </div>
  );
}
