import { VscBell } from "react-icons/vsc";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { HiOutlineCog6Tooth } from "react-icons/hi2";


export default function Header(){
    
    return(
        <div className="flex justify-between items-center">
            <div className="flex flex-col gap-2">
                <p>Users Management</p>
                <div className="flex items-center gap-4">
                    <small>Users Management </small>
                    {">"}
                    <small>Verify Users</small>
                </div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="flex items-center justify-end gap-4">
                    <VscBell size={24}/>
                    <LiaEnvelopeOpenTextSolid size={24}/>
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