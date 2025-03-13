"use client";
import { axiosInstance } from "@/package/axios";
import useStore from "@/app/store";
import { useState, useEffect } from "react";
import { BiCheckDouble } from "react-icons/bi";
import { dateFormat, timeFormat } from "@/utils/methods";



export default function Notification(){
  const {user} = useStore();
  const [notifications, setNotifications] = useState([]);

  const getNotifications= async()=>{

    try{
      const response =  await axiosInstance.get(`/notification?userId=${user.id}`);
      const data = await response.data;
      if(response.status == 200){
        setNotifications(data.notifications);
      }
    }catch(error){
      console.log(error)
    }
  };

  useEffect(()=>{
    getNotifications();
  },[]);


  const MessageComponent = (message) => {
    return (
      <p dangerouslySetInnerHTML={{ __html: message }} />
    );
  };

    return(
        <main className=" bg-white flex flex-col gap-8 h-full">
          <section className="mb-4 px-6 py-6 bg-[#FFFFFF] h-2/3 shadow-xl border rounded-2xl overflow-hidden">
            <h2 className="text-2xl font-bold pb-2">Notification</h2>
            <hr className="outline-slate-400 border-y-2"/>
            <div className=" rounded-lg py-4 h-full overflow-y-scroll">
              <ul className="space-y-6 h-full overflow-y-scroll">
                {notifications?.map((notification, index)=>(
                <li className="flex justify-between items-center cursor-pointer hover:bg-slate-100 p-2">
                  <div className="flex items-center space-x-2">
                    <span>🔔</span>
                    {/* <BiCheckDouble color="green"/> */}
                    <p>{MessageComponent(notification?.message)}</p>
                  </div>
                  <div className="flex flex-col items-center text-sm">
                    <span>{dateFormat(notification.createdAt)}</span>
                    <span className="text-xs text-gray-400">{timeFormat(notification.createdAt)}</span>
                  </div>
                </li>
                ))}
              </ul>
            </div>
          </section>

          {/* Notification Setting */}
          <section>
            <h2 className="text-xl font-bold text-[#EF6509]">Notification Setting</h2>
            
            <div className="mt-4 p-4 rounded-lg flex items-center justify-between shadow-xl">
              <p>Turn on notifications to receive bid updates via email or SMS.</p>
              <button className="relative inline-flex items-center h-6 rounded-full w-11 bg-gray-300 focus:outline-none">
                <span className="inline-block w-4 h-4 transform bg-white rounded-full"></span>
              </button>
            </div>
          </section>
        </main>
    )
}