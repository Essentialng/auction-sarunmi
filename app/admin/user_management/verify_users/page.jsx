"use client";
import { IoSearchOutline } from "react-icons/io5";
import Table from "@/components/admin/table";
import Header from "@/components/admin/dashboardHeader";
import UserCard from "@/components/admin/usersCard";
import useStore from "@/app/store";
import { useEffect } from "react";

export default function DashBoard(){
    const {allUsers, fetchUsers, subscribers} = useStore();

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
    ];

    useEffect(()=>{
        fetchUsers()
    },[])


    return(
        <div className="w-full border mt-28 p-6">
            <div className="w-10/12 ml-auto border rounded-lg shadow-2xl py-8 px-12 flex flex-col gap-8">
                
                <Header
                topic={"Users Management"}
                content={"User Management  "}
                link={"Verify Users"}
                />

                <div className="grid grid-cols-6 gap-8">
                    <UserCard userData={subscribers}/>
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