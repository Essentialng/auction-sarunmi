"use client";
import SideBar from "@/tabs/users/sideBar";
import NotificationBar from "@/components/users/notificationBar";
import Profile from "@/components/users/profileBar";
import { useState } from "react";

export default function Page(){
    const [active, setActive] = useState("notification")
    const renderHandling = () => {
        switch (active) {
          case 'profile':
            return <Profile />;
          case 'notification':
            return <NotificationBar />;
        //   case 'profile':
        //     return <Profile />;
          default:
            return <NotificationBar />; // default component
        }
      };
    return(
        <div className="grid grid-cols-5 px-24 py-44 gap-12">
            <div className="col-span-1">
                <SideBar/>
            </div>
            {/* <NotificationBar/> */}
            {renderHandling()}
        </div>
    )
}