import { VscBell } from "react-icons/vsc";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import Link from "next/link";


export default function Header({topic, content, link}){
    
    return(
        <div className="flex justify-between items-center border p-4 rounded-xl shadow-md">
            <div className="flex flex-col gap-2 text-xl font-medium">
                <p>{topic}</p>
                <div className="flex items-center gap-4 text-sm font-normal text-[#1E2420]">
                    {content &&
                    <>
                        <small>{content} </small>
                        {">"}
                    </>
                    }
                    <small className="text-[#EF6509]">{link}</small>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-end gap-4">
                    <Link href={"/admin/notification"} className="hover:text-[#EF6509]">
                        <VscBell size={24}/>
                    </Link>
                    <Link href={"/admin/message"} className="hover:text-[#EF6509]">
                        <LiaEnvelopeOpenTextSolid size={24}/>
                    </Link>
                    <HiOutlineCog6Tooth size={24}/>
                </div>
                <div>
                    <small>11 June, 2024 </small>
                    <small>12:42 PM</small>
                </div>
            </div>
        </div>
    )
}