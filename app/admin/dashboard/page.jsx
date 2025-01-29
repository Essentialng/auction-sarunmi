import Image from "next/image"
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { VscBell } from "react-icons/vsc";
import { LiaEnvelopeOpenTextSolid } from "react-icons/lia";
import { HiOutlineCog6Tooth } from "react-icons/hi2";
import { IoSearchOutline } from "react-icons/io5";


export default function DashBoard(){

    const userData = [
        {
          name: "Olufemi Chris",
          email: "olufemichris23@gmail.com",
          phone: "+2348199977444",
          subscription: "Premium",
        },
        {
          name: "John Doe",
          email: "johndoe@example.com",
          phone: "+1234567890",
          subscription: "Standard",
        },
        {
          name: "Jane Smith",
          email: "janesmith@example.com",
          phone: "+9876543210",
          subscription: "Premium",
        },
        {
          name: "James Bond",
          email: "jamesbond@mi6.com",
          phone: "+1122334455",
          subscription: "VIP",
        },
      ];

    return(
        <div className="w-full border mt-32 pl-24 py-6">
            <div className="w-11/12 ml-auto border rounded-lg shadow-2xl py-8 px-12 flex flex-col gap-4">
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

                <div className="grid grid-cols-6 gap-8">
                    <div className="col-span-2 flex flex-col gap-4">
                        {userData.map((data, index)=>(
                        <div key={index} className="flex flex-col gap-2 bg-gray-100 rounded-xl py-8">
                            <div className="flex justify-center gap-8 ">
                                <div className="rounded-full border h-fit overflow-hidden">
                                    <Image width={50} height={50}/>
                                </div>
                                <div className="flex flex-col text-sm">
                                    <p className="text-lg font-medium">{data?.name}</p>
                                    <div className="flex items-center gap-4">
                                        <FaRegEnvelope size={12}/>
                                        <small>{data?.email}</small>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <FiPhone size={12}/>
                                        <small>+{data?.phone}</small>
                                    </div>
                                    <div>
                                        <small>Subscription: <strong>{data?.subscription}</strong></small>
                                    </div>
                                </div>
                            </div>
                            <div className="flex itmes-center justify-center gap-4 text-[16px] font-normal px-6 mt-4">
                                <button className="w-1/2 border-black text-[#464D77] border rounded-xl py-2">CONFIRM PAYMENT</button>
                                <button className="w-1/3 bg-[#EF6509] text-white rounded-xl py-2">VERIFY</button>
                            </div>
                        </div>
                        ))}
                    </div>
                    <div className="col-span-4 flex flex-col gap-4  h-fit">
                        <div className="flex items-center justify-between">
                            <div className="w-full flex flex-col gap-2">
                                <p>Free Users </p>
                                <small>200 members stats</small>
                            </div>
                            <div className="w-full flex gap-2 items-center border rounded-xl px-4">
                                <IoSearchOutline/>
                                <small>Search</small>
                                <input type="text" className="py-4 w-full outline-none" />
                            </div>
                        </div>
                        table
                    </div>
                </div>
            </div>
        </div>
    )
}