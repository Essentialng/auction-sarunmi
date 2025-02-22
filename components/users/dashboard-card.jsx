"use client";
import { useState, useEffect } from "react";
import SleiderProduct from "./dashboardSlider";
import useStore from "@/app/store";
import { axiosInstance } from "@/package/axios";

export default function DashboardCrad(){
 

    return(
    <div >
        <SleiderProduct products={bidData}/>
    </div>
        
    )
}