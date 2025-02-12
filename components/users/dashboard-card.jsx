"use client";
import { useState } from "react";
import SleiderProduct from "./dashboardSlider";

export default function DashboardCrad({products}){
    
    return(
    <div >
        <SleiderProduct products={products}/>
    </div>
        
    )
}