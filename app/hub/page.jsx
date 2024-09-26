import React from 'react';
import Notification from '@/components/notification';
import History from '@/components/history';
import ProfileOverview from '@/components/profilePreview';
import Page from "@/components/upload"
import { FaUser } from "react-icons/fa6";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";


const Hub = () => {
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

          <nav className="flex flex-col gap-6 space-y-2 px-12 py-6 rounded-xl shadow-lg border text-[16px] font-medium">
            <a href="#" className="block text-lg font-semibold">Profile</a>
            <a href="#" className="block text-lg font-semibold">My Revenue</a>
            <a href="#" className="block text-lg font-semibold text-orange-500">Notification</a>
            <a href="#" className="block text-lg font-semibold">Upload Product</a>
            <a href="#" className="block text-lg font-semibold">History</a>
          </nav>

          <button className="bg-orange-500 text-white px-4 py-3 w-full rounded-xl">LOG OUT</button>
        </aside>
        {/* <div className='col-span-4'>
            <Notification/>
        </div> */}
        {/* <div className='col-span-4'>
            <History/>
        </div> */}
        {/* <div className='col-span-4'>
            <ProfileOverview/>
        </div> */}
        <div className='col-span-4'>
            <Page/>
        </div>
      </div>
    </div>
  );
};

export default Hub;
