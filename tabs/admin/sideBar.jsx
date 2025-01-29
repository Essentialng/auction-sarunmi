import { FaUser } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { MdOutlineArrowDropDown } from "react-icons/md";


export default function SideBar(){

    const activeBtn = "flex items-center gap-2 text-[16px] py-3 rounded-xl"
    const liStyle = "px-2"
    return(
        <div className="fixed w-1/5 h-[100vh] left-0 top-32 z-50 overflow-scroll">
            <div className="p-6 flex flex-col gap-2 bg-[#35318E] text-white ">
                <div className="flex items-center gap-4 font-semibold">
                    <FaUser/>
                    <small>JAMES OLAYINKA </small>
                </div>
                <div className="flex items-center gap-4">
                    <FaRegEnvelope/>
                    <small>jamesyinka@gmail.com</small>
                </div>
                <div className="flex items-center gap-4">
                    <FiPhone/>
                    <small>+2348199977444 </small>
                </div>
            </div>
            <ul className="flex flex-col gap-6 text-[16px] py-6 px-3 bg-[#E1E3E1]">
                <li className={liStyle}>Dashboard</li>
                <li className="relative flex flex-col gap-4">
                    <div className={activeBtn}>
                        <p>Users Management</p>
                        <MdOutlineArrowDropDown/>
                    </div>
                    <div className="flex flex-col gap-6 text-[16px] px-2">
                        <p>All Users</p>
                        <p>Verify Users</p>
                        <p>Activity Logs</p>
                    </div>
                </li>
                <li className={liStyle}>
                    <div className={activeBtn}>
                        <p>Auction Management</p>
                        <MdOutlineArrowDropDown/>
                    </div>
                </li>
                <li className={liStyle}>
                    <div className={activeBtn}>
                        <p>Financial Management</p>
                        <MdOutlineArrowDropDown/>
                    </div>
                </li>
                <li className={liStyle}>
                    <div className={activeBtn}>
                        <p>Content Management</p>
                        <MdOutlineArrowDropDown/>
                    </div>
                </li>
                <li className={liStyle}>Message</li>
                <li className={liStyle}>Admins Management</li>
                <li className={liStyle}>
                    <div className={activeBtn}>
                        <p>Analytics</p>
                        <MdOutlineArrowDropDown/>
                    </div>
                </li>
                <li className={liStyle}>Help & Support</li>
            </ul>
        </div>
    )
}