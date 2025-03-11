"use client";
import Header from "@/components/admin/dashboardHeader";
import { BroadcastMessages, MessageDetails, MessageHistory } from "@/components/admin/messageSection";

export default function Message(){
    return(
        <div className="mt-28 h-fit w-10/12 ml-auto p-12 flex flex-col gap-4">
            <Header
                topic={"Welcome Back"}
                link={"Messages"}
                />
            <div className="grid grid-cols-7 gap-8">
                <div className="h-fit col-span-2 border shadow-md rounded-2xl">
                    <BroadcastMessages/>
                    <MessageHistory/>
                </div>
                <div className="col-span-5 border shadow-md rounded-2xl p-8">
                    <MessageDetails/>
                </div>
            </div>
        </div>
    )
}