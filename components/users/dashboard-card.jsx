"use client";
import { useState, useEffect } from "react";
import SliderProduct from "./dashboardSlider";
import useStore from "@/app/store";
import { axiosInstance } from "@/package/axios";

export default function DashboardCrad(){
 

    return(
    <div >
        <SliderProduct products={bidData}/>
    </div>
        
    )
}