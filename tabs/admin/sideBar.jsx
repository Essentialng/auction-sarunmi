"use client";
import { FaUser } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { usePathname } from 'next/navigation';
import { useState } from "react"; 
import classNames from "classnames";

export default function SideBar() {
  const pathname = usePathname(); // Get the current path using usePathname
    const [toggleBtn, setToggleBtn] = useState("dashboard");
    const [userManagement, setUserManagement] = useState(null);

  const path = [
    "/admin/dashboard",
    "/admin/approve_auction",
    "/admin/user_management/all_users",
    "/admin/user_management/verify_users",
    "/admin/admin_management",
    "/admin/notification",
    "/admin/payment_history",

  ];

  const activateBtn = (param, index) =>{
    setToggleBtn(param);
    setUserManagement(index)
  }

  const triggerBtn = "flex items-center gap-2 text-[16px] rounded-t-xl p-4 cursor-pointer";
  const liStyle = "px-2";
  const activeBtn = "bg-[#35318E] text-white"
  const sideBg = "bg-[#E1E3E1]"

  return (
    <>
      {path.includes(pathname) && (
        <div className="absolute w-2/6 h-[100vh] left-0 top-28  overflow-scroll z-30">
          <div className="p-6 flex flex-col gap-2 bg-[#35318E] text-white ">
            <div className="flex items-center gap-4 font-semibold">
              <FaUser />
              <small>JAMES OLAYINKA </small>
            </div>
            <div className="flex items-center gap-4">
              <FaRegEnvelope />
              <small>jamesyinka@gmail.com</small>
            </div>
            <div className="flex items-center gap-4">
              <FiPhone />
              <small>+2348199977444 </small>
            </div>
          </div>
          <ul className={`flex flex-col justify-center gap-4 text-[16px] py-6 px-3 ${sideBg}`}>
            
            <li 
            className={classNames(
                {[activeBtn] : toggleBtn == "dashboard"},
                triggerBtn
            )}
            onClick={()=>activateBtn("dashboard", null)}
            >
                Dashboard
            </li>

            <li className="relative flex flex-col px-2">
              <div 
              className={classNames(
                {[activeBtn] : toggleBtn == "usersManagement"},
                triggerBtn
                )} 
              onClick={()=>activateBtn("usersManagement", 1)}
              >
                <p>Users Management</p>
                <MdOutlineArrowDropDown />
              </div>
              {userManagement == 1 &&
              <div className="flex flex-col gap-6  text-[16px] px-2 py-4 bg-[#B7A5F9] w-full ">
                <p>All Users</p>
                <p>Verify Users</p>
                <p>Activity Logs</p>
              </div>
              }
            </li>

            <li className={liStyle}>
              <div className={triggerBtn}>
                <p>Auction Management</p>
                <MdOutlineArrowDropDown />
              </div>
            </li>
            <li className={liStyle}>
              <div className={triggerBtn}>
                <p>Financial Management</p>
                <MdOutlineArrowDropDown />
              </div>
            </li>
            <li className={liStyle}>
              <div className={triggerBtn}>
                <p>Content Management</p>
                <MdOutlineArrowDropDown />
              </div>
            </li>
            <li className={liStyle}>
                <div className={triggerBtn}>
                Message
                </div>
            </li>
            <li className={liStyle}>
                <div className={triggerBtn}>
                Admins Management
                </div>
            </li>
            <li className={liStyle}>
              <div className={triggerBtn}>
                <p>Analytics</p>
                <MdOutlineArrowDropDown />
              </div>
            </li>
            <div className={triggerBtn}>
              <li className={liStyle}>Help & Support</li>
            </div>
            <div className={triggerBtn}>
              <li className={`${liStyle} bg-[#EF6509] w-full text-white text-center rounded-2xl p-4`}>LOG OUT</li>
            </div>
          </ul>
        </div>
      )}
    </>
  );
}
