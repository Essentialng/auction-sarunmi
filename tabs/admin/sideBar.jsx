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
  const [toggleBtn, setToggleBtn] = useState("dashboard");
  const [openDropdown, setOpenDropdown] = useState(null);

  const sidebarLinks = [
    { name: "Dashboard", path: "/admin/dashboard" },
    {
      name: "Users Management",
      dropdown: ["All Users", "Verify Users", "Activity Logs"],
    },
    { name: "Auction Management", dropdown: [] },
    { name: "Financial Management", dropdown: [] },
    { name: "Content Management", dropdown: [] },
    { name: "Message" },
    { name: "Admins Management" },
    { name: "Analytics", dropdown: [] },
    { name: "Help & Support" },
    { name: "LOG OUT", className: "bg-[#EF6509] text-white text-center rounded-2xl" },
  ];

  const toggleDropdown = (index) => {
    setOpenDropdown(openDropdown === index ? null : index);
  };

  const triggerBtn = "flex items-center gap-2 text-[16px] rounded-t-xl p-4 cursor-pointer";
  const activeBtn = "bg-[#35318E] text-white";
  const sideBg = "bg-[#E1E3E1]";

  return (
    pathname.startsWith("/admin") && (
      <div className="absolute w-2/6 h-[100vh] left-0 top-28 overflow-scroll z-30">
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
        <ul className={`flex flex-col gap-4 text-[16px] py-6 px-3 ${sideBg}`}>
          {sidebarLinks.map((link, index) => (
            <li key={index} className="px-2">
              {link.path ? (
                <Link
                  href={link.path}
                  className={classNames({ [activeBtn]: pathname.startsWith(link.path) }, triggerBtn, link.className)}
                  onClick={() => setToggleBtn(link.name)}
                >
                  {link.name}
                </Link>
              ) : (
                <div className={classNames({ [activeBtn]: toggleBtn === link.name }, triggerBtn)} onClick={() => toggleDropdown(index)}>
                  <p>{link.name}</p>
                  {link.dropdown && <MdOutlineArrowDropDown />}
                </div>
              )}
              {openDropdown === index && link.dropdown?.length > 0 && (
                <div className="flex flex-col gap-2 text-[16px] px-2 py-4 bg-[#B7A5F9] w-full">
                  {link.dropdown.map((item, idx) => (
                    <p key={idx}>{item}</p>
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
