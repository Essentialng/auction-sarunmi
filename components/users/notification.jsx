"use client";
import { axiosInstance } from "@/package/axios";
import useStore from "@/app/store";
import { useState, useEffect } from "react";
import { BiCheckDouble } from "react-icons/bi";
import { dateFormat, timeFormat } from "@/utils/methods";
import { Rings } from "react-loading-icons";


export default function Notification(){
  const {user} = useStore();
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(false);


  const getNotifications= async()=>{
    setLoading(true);
    try{
      const response =  await axiosInstance.get(`/notification?userId=${user.id}`);
      const data = await response.data;
      if(response.status == 200){
        setNotifications(data.notifications);
      }
    }catch(error){
      // console.log(error)
    }finally{
      setLoading(false);
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
        <main className=" bg-white flex flex-col gap-8 h-full sm:px-0 px-4 sm:py-0 py-8">

          <section className="mb-4 sm:px-6 px-2 py-6 bg-[#FFFFFF] h-2/3 shadow-xl border rounded-2xl overflow-hidden">
            <h2 className="text-2xl font-bold pb-2">Notification</h2>
            <hr className="outline-slate-400 border-y-2"/>
            <div className=" rounded-lg py-4 h-full overflow-y-scroll">

              {loading ? 
              <div className="w-full h-full flex items-center justify-center">
                <Rings width={30} heigth={30} className="bg-[#EF6509] rounded-full h-8"/>
              </div>
              :
              <ul className="space-y-6 h-full overflow-y-scroll">
                {notifications?.map((notification, index)=>(
                <li className="flex sm:gap-0 gap-8 justify-between items-center sm:text-[16px] text-[12px] cursor-pointer hover:bg-slate-100 p-2">
                  <div className="flex sm:text-base text-[10px] items-center space-x-2">
                    <span>🔔</span>
                    <p>{MessageComponent(notification?.message)}</p>
                  </div>
                  <div className="sm:w-1/6 w-1/5 flex flex-col items-end sm:text-sm text-[8px]">
                    <span>{dateFormat(notification.createdAt)}</span>
                    <span className="sm:text-xs text-[6px] text-gray-400">{timeFormat(notification.createdAt)}</span>
                  </div>
                </li>
                ))}
              </ul>
              }
            </div>
          </section>

         
          <section>
            <h2 className="text-xl font-bold text-[#EF6509] sm:px-6 px-2">Notification Setting</h2>
            <div className="mt-4 py-4 sm:px-6 px-2 sm:text-base text-xs rounded-lg flex gap-8 items-center justify-between shadow-xl">
              <p>Turn on notifications to receive bid updates via email or SMS.</p>
              <button className="relative inline-flex items-center h-6 rounded-full w-11 bg-gray-300 focus:outline-none">
                <span className="inline-block w-4 h-4 transform bg-white rounded-full"></span>
              </button>
            </div>
          </section>

        </main>
    )
}