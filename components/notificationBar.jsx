
import { VscBell } from "react-icons/vsc";
import { BsToggle2Off } from "react-icons/bs";

export default function NotificationBar(){
    return(
        <div className="col-span-4 flex flex-col gap-12">
            <div className="h-[400px] px-8 border shadow-xl rounded-xl py-4 overflow-y-hidden">
                <div className="text-[20px] font-medium w-full border-b-2 py-2">
                    <p>Notification</p>
                </div>
                <div className="h-full py-12 overflow-y-scroll">
                    <div className="flex items-center gap-4 text-[16px]">
                        <VscBell color="#EF6509"/>
                        <small>The auction has ended, and you’ve won Bungalow! Get ready to claim your it.</small>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <p className="text-[#EF6509] text-[24px] font-semibold">Notification Settion</p>
                <div className="w-full px-8 flex justify-between items-center  shadow-md text-[20px] font-medium py-2">
                    <small>Turn on notifications to receive bid updates via email or SMS.</small>
                    <BsToggle2Off size={32} className="cursor-pointer"/>
                </div>
            </div>
        </div>
    )
}