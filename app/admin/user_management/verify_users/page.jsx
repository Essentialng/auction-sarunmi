import Image from "next/image"
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";
import { IoSearchOutline } from "react-icons/io5";
import Table from "@/components/admin/table";
import Header from "@/components/admin/dashboardHeader";

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

    const header = ["Date Joined", "Name", "Email", "Status"]

    const contents = [
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
            email: "olufemichris23@gmail.com",
            status: "Active",
        },
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
            email: "olufemichris23@gmail.com",
            status: "Inactive",
        },
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
            email: "olufemichris23@gmail.com",
            status: "Active",
        },
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
            email: "olufemichris23@gmail.com",
            status: "Active",
        },
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
            email: "olufemichris23@gmail.com",
            status: "Inactive",
        },
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
            email: "olufemichris23@gmail.com",
            status: "Inactive",
        },
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
            email: "olufemichris23@gmail.com",
            status: "Active",
        },
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
            email: "olufemichris23@gmail.com",
            status: "Inactive",
        },
    ]


    return(
        <div className="w-full border mt-28 p-6">
            <div className="w-10/12 ml-auto border rounded-lg shadow-2xl py-8 px-12 flex flex-col gap-4">
                
                <Header/>

                <div className="grid grid-cols-6 gap-8">
                    <div className="col-span-2 flex flex-col gap-4">
                        {userData.map((data, index)=>(
                        <div key={index} className="flex flex-col gap-2 bg-gray-100 rounded-xl py-8">
                            <div className="flex justify-center gap-8 ">
                                <div className="rounded-full border h-fit overflow-hidden">
                                    <Image alt="" width={50} height={50}/>
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
                        <Table header={header} contents={contents}/>
                    </div>
                </div>
            </div>
        </div>
    )
}