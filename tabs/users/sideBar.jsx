import { FaUser } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";


export default function SideBar(){
    
    return(
        <div className="flex flex-col gap-8  text-[16px]">
            <div className="p-6 flex flex-col gap-2 bg-[#35318E] rounded-xl text-white ">
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
            <ul className="flex flex-col gap-3 border shadow-xl py-8 px-12 rounded-xl font-medium">
                <li className="cursor-pointer">Profile</li>
                <li className="cursor-pointer">Notification</li>
                <li className="cursor-pointer">History</li>
            </ul>
            <div>
                <button className="w-full bg-[#EF6509] rounded-xl text-white font-medium py-3">LOG OUT</button>
            </div>
        </div>
    )
}