import Header from "@/components/admin/dashboardHeader"
import { FaUsers } from "react-icons/fa6";
import { IoIosSearch } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import Table from "@/components/admin/table";


export default function VerifyUsers(){

    const cards = [
        {
            icon : <FaUsers size={20} color="white"/>,
            total : 10,
            name : "Total Admins",
            percent : "5%",
            date : "vs last month",
            color : "#B7A5F9"
        },
        {
            icon : <FaUsers size={20} color="white"/>,
            total : 4,
            name : "Active Admins",
            percent : "5%",
            date : "vs last month",
            color : "#FFA687"
        },
        {
            icon : <FaUsers size={20} color="white"/>,
            total : 6,
            name : "Inactive Admins",
            percent : "5%",
            date : "vs last month",
            color : "#B7A5F9"
        },
        {
            icon : <FaUsers size={20} color="white"/>,
            total : 2,
            name : "Pending Admins",
            percent : "5%",
            date : "vs last month",
            color : "#FFA687"
        },
    ]

    const header = [
        "Date Joined",
        "Name",
        "Email",
        "Status",
        "Subscription Type",
        "Last Login"
    ]

    const content = [
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
          email: "olufemichris23@gmail.com",
          lastLogin: "09-06-24",
          subscription: "Premium",
          status: "Active",
        },
        {
            dateJoined: "2022-01-01",
            name: "John Doe",
          email: "johndoe@example.com",
          lastLogin: "09-06-24",
          subscription: "Standard",
          status: "Active",
        },
        {
            dateJoined: "2022-01-01",
            name: "Jane Smith",
          email: "janesmith@example.com",
          lastLogin: "09-06-24",
          subscription: "Standard ",
          status: "Inactive",
        },
        {
            dateJoined: "2022-01-01",
            name: "James Bond",
          email: "jamesbond@mi6.com",
          lastLogin: "09-06-24",
          subscription: "Basic ",
          status: "Active",
        },
      ];


    return(
        <div className="w-full border mt-28 py-6">
            <div className="w-10/12 ml-auto border rounded-lg shadow-2xl py-8 px-12 flex flex-col gap-4">
                <Header/>
                <div className="grid grid-cols-4 items-center gap-8">
                    {cards.map((card, index)=>(
                        <div key={index} className="flex justify-between  border-[#FFB485] shadow-[#FFB485] shadow-sm rounded-2xl p-8">
                            <div className={`h-fit p-3 rounded-xl bg-[${card.color}]`}>
                                {card.icon}
                            </div>
                            <div className="flex flex-col ">
                                <h4 className="text-2xl font-bold text-end">{card.total}</h4>
                                <p className="text-sm font-normal">{card.name}</p>
                                <small className="text-[#EF6509] text-[12px]">{card.percent} <small className="text-black">{card.date}</small></small>
                            </div>
                        </div>
                    ))}
                </div>
                <div className="flex justify-between items-center gap-2">
                    <div className="flex flex-col">
                        <p>All Admins</p>
                        <small>10 members stats</small>
                    </div>
                    <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2 px-4 border rounded-xl">
                            <IoIosSearch/>
                            <small>Search</small>
                            <input type="text" className="text-xl p-4 outline-none"/>
                        </div>
                        <div className="flex items-center gap-2 border rounded-xl py-3 px-6">
                            <small>Export CSV</small>
                            <IoCloudUploadOutline/>
                        </div>
                        <button className="py-3 px-6 bg-[#EF6509] text-white rounded-xl">ADD NEW ADMIN</button>
                    </div>
                </div>
                <Table header={header} contents={content}/>

            </div>
        </div>
    )
}