"use client";
import { FaUser, FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { usePathname } from "next/navigation";
import { useState } from "react";
import classNames from "classnames";
import Link from "next/link";
import useStore from "@/app/store";

export default function SideBar() {
  const pathname = usePathname();
  const {user} = useStore();
  const [openDropdown, setOpenDropdown] = useState(null);

  const sidebarLinks = [
    { name: "Dashboard", path: "/admin/dashboard" },
    
    {
      name: "Users Management",
      prePath: "/admin/user_management/",
      path: "/admin/user_management/all_users",
      dropdown: [
        {
          name : "All Users",
          url : "/admin/user_management/all_users",

        },
        {
          name : "Verify Users",
          url: "/admin/user_management/verify_users"
        },
        { 
          name: "Activity Logs",
          url: "#"
        }
      ],
    },
    
    { 
      name: "Auction Management",
      prePath: "/admin/auction_management",
      path: "/admin/auction_management/approve_auction",
       dropdown: [
        {
          name : "Approve Auction",
          url : "/admin/auction_management/approve_auction",

        },
        {
          name : "Schedule Auction",
          url: "/admin/auction_management/schedule_auction"
        },
        { 
          name: "Monitor Live Auction",
          url: "#"
        }
       ] 
    },

    { 
      name: "Financial Management",
      prePath: "/admin/payment_history",
      path: "/admin/payment_history",
       dropdown: [
        {
          name : "Payment History",
          url : "/admin/payment_history",

        },
        {
          name : "Manage Subscriptions",
          url: "#"
        },
        { 
          name: "Revenue Reports",
          url: "#"
        }
       ] 
      },

    { 
      name: "Message",
      path: "/admin/message" 
    },

    { 
      name: "Admins Management",
      prePath: "/admin/admin_management",
      path: "/admin/admin_management",
     },

    { name: "LOG OUT", className: "bg-[#EF6509] text-white text-center rounded-2xl flex justify-center" },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(index);
  };

  const triggerBtn = "flex items-center gap-2 text-[16px] rounded-t-xl p-4 cursor-pointer";
  const activeBtn = "bg-[#35318E] text-white";
  const sideBg = "bg-[#E1E3E1]";

  return (
    pathname.startsWith("/admin") && (
      <div className="fixed w-2/6 h-[100vh] left-0 top-28 overflow-scroll bg-[#F7F9FB]">
        <div className="p-6 flex flex-col gap-2 bg-[#35318E] text-white">
          <div className="flex items-center gap-4 font-semibold">
            <FaUser /> <small>{user?.firstName} {user?.lastName}</small>
          </div>
          <div className="flex items-center gap-4">
            <FaRegEnvelope /> <small>{user?.email}</small>
          </div>
          <div className="flex items-center gap-4">
            <FiPhone /> <small>{user?.phoneNumber}</small>
          </div>
        </div>
        <ul className={`relative flex flex-col gap-2 text-[16px] py-6 px-3 overflow-scroll`}>
          {sidebarLinks.map((link, index) => (
            <li key={index} className="rounded-xl overflow-hidden">
                <Link
                  href={link.path ? link.path : ""}
                  className={classNames({ [activeBtn]: pathname.startsWith(link.path) }, triggerBtn, link.className)}
                  onClick={() => toggleDropdown(link.prePath)}
                >
                  {link.name}
                  {link.dropdown && <MdOutlineArrowDropDown />}
                </Link>

              {(openDropdown === link.prePath && link.dropdown) && (
                <div className="flex flex-col text-[16px] px-2 py-4 bg-[#B7A5F9] w-full text-black">
                  {link.dropdown?.map((item, idx) => (
                    <Link href={item?.url} key={idx} className={classNames({ "text-orange-600": pathname.startsWith(item?.url) }, {"p-4 cursor-pointer" : true} )}>{item.name}</Link>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
      </div>
    )
  );
}
