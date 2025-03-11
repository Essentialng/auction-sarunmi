
import { IoIosSearch } from "react-icons/io";
import { IoCloudUploadOutline } from "react-icons/io5";
import Table from "@/components/admin/table";
import Header from "@/components/admin/dashboardHeader";

export default function AdminPage({cards, header, contents, topic, content, link}){

    

    return(
        <div className="w-full h-[68rem] mt-28 p-6">
            <div className="w-10/12  ml-auto border rounded-lg shadow-2xl py-8 px-12 flex flex-col gap-4">
                <Header
                topic={topic}
                content={content}
                link={link}
                />
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
                <Table header={header} contents={contents}/>

            </div>
        </div>
    )
}