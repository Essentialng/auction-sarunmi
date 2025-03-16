"use client";
import Header from "@/components/admin/dashboardHeader"
import { FaArrowTrendUp } from "react-icons/fa6";
import { FaArrowTrendDown } from "react-icons/fa6";
import { IoIosArrowDropdown } from "react-icons/io";
import Static from "@/components/admin/staticTable";
import AuctionStat from "@/components/admin/auctionStat";
import DonutChart from "@/components/admin/Charts";
import TrafficOverviewChart from "@/components/admin/lineChart";
import { MdOutlineEditCalendar } from "react-icons/md";
import { TbSpeakerphone } from "react-icons/tb";
import Activity from "@/components/admin/activity";
import { Card, Revenue } from "@/components/admin/dashBoardSections";
import { axiosInstance } from "@/package/axios";
import { useState, useEffect } from "react";
import useStore from "@/app/store";


export default function UserManagement(){
    const {fetchAllProduct, auctions, fetchUsers, allUsers} = useStore();

    const recentActivity = [
        {
            auction : "Vintage Car",
            description : "New Auction",
            status: "Active",
            date: "12th Jun"
        },
        {
            auction : "House",
            description : "Auction Completed",
            status: "Active",
            date: "12th Jun"
        },
        {
            auction : "Sarah Ben",
            description : "Renew  Subscription",
            status: "Active",
            date: "12th Jun"
        },
        {
            auction : "Chris Evan",
            description : "Violation of auction rules",
            status: "Active",
            date: "Suspended"
        },
    ];



    useEffect(()=>{
        fetchUsers();
        fetchAllProduct();
    },[])


    return(
    <div className="w-full border mt-28 py-6 h-fit">
         <div className="w-10/12 ml-auto border rounded-lg shadow-2xl py-6 2xl:px-12 px-10 flex flex-col gap-4">
            <Header
            topic={"Welcome Back"}
            link={"Dashbord"}
            />

            <div className="grid grid-cols-4 items-center 2xl:gap-8 gap-4">
                {allUsers?.cards?.map((card, index)=>(
                    <Card card={card} index={index}/>
                ))}
            </div>
            <div className="grid grid-cols-12 2xl:gap-8 gap-4">
                <div className="col-span-6  p-8 bg-[#F7F9FB] rounded-xl">
                    <div className="mb-4 text-base font-bold">
                        <p>Users</p>
                        <div className="flex items-center gap-1 font-normal text-sm text-[#7E7E7E]">
                            <small>User Stats</small>
                            <IoIosArrowDropdown size={18}/>
                        </div>
                    </div>
                    <Static stats={allUsers?.userBar}/>
                </div>
                <div className="col-span-3 p-8 bg-[#F7F9FB] rounded-xl">
                    <div className="mb-4">
                        <p>Auctions</p>
                        <small>Auction Stats</small>
                    </div>
                    <AuctionStat auctions={auctions}/>
                </div>
                <Revenue/>
            </div>
            <div className="grid grid-cols-6 2xl:gap-8 gap-4">
                <div className="col-span-4 flex flex-col gap-4">
                    <TrafficOverviewChart/>
                    <div className="p-4 bg-[#F7F9FB] rounded-xl">
                        <p>Post Update</p>
                        <div className="flex items-center justify-between">
                            <small>Share Important Announcement </small>
                            <TbSpeakerphone size={25}/>
                        </div>
                    </div>
                </div>
                <div className="col-span-2 p-8 text-center bg-[#F7F9FB] rounded-xl">
                    <div className="mb-4">
                        <h2>Recent Activity</h2>
                    </div>
                    <Activity recentActivity={recentActivity}/>
                </div>
            </div>
        </div>
    </div>
    )
}