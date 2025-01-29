import { FaUser } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";

export default function SideBar(){
    return(
        <div className="fixed w-1/5 h-[100vh] left-0 top-32 z-50">
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
        </div>
    )
}