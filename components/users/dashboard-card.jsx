"use client";
import { useState, useEffect } from "react";
import SleiderProduct from "./dashboardSlider";
import useStore from "@/app/store";
import { axiosInstance } from "@/package/axios";

export default function DashboardCrad(){
    const {user} = useStore();

    const [bidData, setBidData]= useState([]);
    
    const fetchBids = async()=>{
        try{
            const response = await axiosInstance.get(`bid?userId=${user.id}`);
            const data = await response.data;
            if(response.status == 200){
            setBidData(data)
            }
        }catch(error){
            console.log(error)
        }
    }

    useEffect(()=>{
        if(user){
        fetchBids()
    }
    },[user])

    return(
    <div >
        <SleiderProduct products={bidData}/>
    </div>
        
    )
}