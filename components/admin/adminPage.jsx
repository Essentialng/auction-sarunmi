
import { IoIosSearch } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import Table from "@/components/admin/table";
import Header from "@/components/admin/dashboardHeader";
import { FaUsers } from "react-icons/fa6";
import classNames from "classnames";
import { TiArrowSortedDown } from "react-icons/ti";
import { useState } from "react";

export default function AdminPage({cards, header, contents, topic, content, link}){
        const [searchQuery, setSearchQuery] = useState("");
        const [sortBy, setSortBy] = useState("firstName");
        const [sortOrder, setSortOrder] = useState("asc");

    const options = [
        { label: "name", value: "firstName" },
        { label: "email", value: "email" },
        { label: "status", value: "status" },
        { label: "subscription", value: "subscriptionType" },
        { label: "date", value: "createdAt" },
        { label: "login", value: "lastLogin" },
    ];



    const filteredContents = contents ? contents?.filter(content => 
        content?.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content?.lastName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content?.email?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        content?.status?.toLowerCase().includes(searchQuery.toLowerCase())
    ) : []

    const sortedContents = [...filteredContents]?.sort((a, b) => {
        let valA = a[sortBy]?.toString().toLowerCase();
        let valB = b[sortBy]?.toString().toLowerCase();

        if (valA < valB) return sortOrder === "asc" ? -1 : 1;
        if (valA > valB) return sortOrder === "asc" ? 1 : -1;
        return 0;
    });

    const totalUsers = cards && cards[0]?.count
    return(
        <div className="w-full h-[68rem] mt-28 p-6">
            <div className="w-10/12  ml-auto border rounded-lg shadow-2xl py-8 2xl:px-12 px-8 flex flex-col gap-4">
                <Header
                topic={topic}
                content={content}
                link={link}
                />
                <div className="grid grid-cols-4 items-center 2xl:gap-8 gap-4">
                    {cards?.map((card, index)=>(
                        card?.name !== "Standard Subscribers" && card?.name !== "Premium Subscribers" && (
                        <div key={index} className="flex justify-between  border-[#FFB485] shadow-[#FFB485] shadow-sm rounded-2xl py-8 2xl:px-8 px-4">
                            <div 
                            className={classNames({
                                "h-fit p-3 rounded-xl" : true,
                                "bg-[#B7A5F9]" : index % 2 == 0,
                                "bg-[#FFA687]" : index % 2 != 0,
                                })}
                                >
                                <FaUsers size={20} color="white"/>
                            </div>
                            <div className="flex flex-col text-end ">
                                <h4 className="text-2xl font-bold text-end">{card?.count}</h4>
                                <p className="text-sm font-normal">{card?.name}</p>
                                <small className="text-[#EF6509] text-[8px]">{card?.percent}% <small className="text-black">Total percentage</small><small className="text-black">{card.date}</small></small>
                            </div>
                        </div>
                        )
                    ))}
                </div>
                <div className="flex justify-between items-center gap-2">
                    <div className="flex flex-col">
                        <p>{link}</p>
                        <small>{totalUsers} members stats</small>
                    </div>
                    <div className="flex items-center gap-12">
                        <div className="flex items-center gap-2 px-4 border rounded-xl">
                            <IoIosSearch/>
                            <small>Search</small>
                            <input 
                            type="text" 
                            className="text-xl p-4 outline-none"
                            value={searchQuery}
                            onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        {link == "All Users" ?
                         <div className="flex items-center gap-2">
                            <small>Sort by:</small>
                            <div className="flex items-center gap-4 px-4 border rounded-xl">
                                <select 
                                name="" id="" 
                                className="w-32 text-xl p-4 outline-none"
                                value={sortBy}
                                onChange={(e) => setSortBy(e.target.value)}
                                >
                                    {options.map((option, index)=>(
                                    <option value={option.value}>{option.label}</option>
                                ))}
                                </select>
                            </div>
                         </div>
                         :
                         <>
                            <div className="flex items-center gap-2 border rounded-xl py-3 px-6">
                                <small>Export CSV</small>
                                <IoCloudUploadOutline/>
                            </div>
                            
                            <button className="py-3 px-6 bg-[#EF6509] text-white rounded-xl">ADD NEW ADMIN</button>
                        </>
                        }
                    </div>
                </div>
                <Table header={header} contents={sortedContents}/>

            </div>
        </div>
    )
}