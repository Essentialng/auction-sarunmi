import { FaUser } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa6";
import { TfiLock } from "react-icons/tfi";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { useState } from "react";


export default function Profile(){
    
    return(
        <div className="p-8 border shadow-xl col-span-4 flex flex-col gap-8">
            <div className="border-b-2">
                <p>Profile Overview</p>
            </div>
            <div className="grid grid-cols-2 gap-8 text-[20px] font-medium">
                <div className="px-8 py-4 col-span-1 flex flex-col gap-4 rounded-lg shadow-lg">
                    <div className="border-b-2 font-semibold py-4">
                        <p>Account Details</p>
                    </div>
                    <div className="flex gap-2">
                        <div className="p-2 rounded-full border border-[#EF6509] h-fit">
                            <FaUser color="#EF6509"/>
                        </div>
                        <div className="flex flex-col gap-2">
                            <small>James Olayinka</small>
                            <small>+23481998374</small>
                            <small>No address</small>
                        </div>
                    </div>
                    <div className="w-full flex items-end justify-end pt-12">
                        <button className="w-1/4 bg-[#EF6509] rounded-lg p-3 text-white text-[16px] ">EDIT</button>
                    </div>
                </div>
                <div className="px-8 py-4 col-span-1 flex flex-col gap-4 rounded-lg shadow-lg">
                    <div className="border-b-2  py-4 font-semibold">
                        <p>Email</p>
                    </div>
                    <div className="flex gap-2">
                        <FaRegEnvelope color="#EF6509"/>
                        <div className="flex flex-col gap-2">
                            <small>jamesyinka@gmail.com</small>
                            <small>Verified</small>
                        </div>
                    </div>
                    <div className="w-full flex items-end justify-end pt-12">
                        <button className="w-2/5 bg-[#EF6509] rounded-lg p-3 text-white text-[16px] ">UPDATE EMAIL</button>
                    </div>
                </div>
                <div className="px-8 py-4 col-span-1 flex flex-col gap-4 rounded-lg shadow-lg">
                    <div className="border-b-2  py-4 font-semibold">
                        <p>Password</p>
                    </div>
                    <div className="flex gap-2">
                        <TfiLock color="#EF6509"/>
                        <div className="flex flex-col gap-2">
                            <small>Current Password</small>
                            <small>***********</small>
                        </div>
                    </div>
                    <div className="w-full flex items-end justify-end pt-12">
                        <button className="w-2/4 bg-[#EF6509] rounded-lg p-3 text-white text-[16px] ">CHANGE PASSWORD</button>
                    </div>
                </div>
                <div className="px-8 py-4 col-span-1 flex flex-col gap-4 rounded-lg shadow-lg">
                    <div className="border-b-2  py-4 font-semibold">
                        <p>Subscription</p>
                    </div>
                    <div className="flex gap-2">
                        <MdOutlineWorkspacePremium color="#EF6509"/>
                        <div className="flex flex-col gap-2">
                            <small>Premium Membership</small>
                            <small>20,000.00</small>
                        </div>
                    </div>
                    <div className="w-full flex items-end justify-between pt-12">
                    <button className="border-[#EF6509] border rounded-lg p-3 text-[#EF6509] text-[16px]">BECOME A VENDOR</button>
                        <button className=" bg-[#EF6509] rounded-lg p-3 text-white text-[16px] px-4">RENEW</button>
                    </div>
                </div>
            </div>
        </div>
    )
}