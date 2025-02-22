"use client";
import Products from "@/components/users/products"
import { useState, useEffect, useCallback } from "react";
import { axiosInstance } from "@/package/axios";



export default function Page(){

    const [property, setProperty] = useState([]);
    const [models, setModels] = useState([]);
    const [filterItems, setFilterItems] = useState([]); 
    

    const fetchProperties = async()=>{
        try{
            const response = await axiosInstance.get(`/properties`)
            const data = await response.data;
            if(response.status == 200){
            const items = data.data.map(property => property.items).flat();
            setFilterItems(items)
            setProperty(items);
            setModels(data.data); 
            }
        }catch(error){
            console.log(error)
        }
    };
    
    useEffect(() => {
        fetchProperties()
    }, []);


    const propertyFilter = useCallback((id)=>{
            const filteredProperties = productFilter(filterItems, id);
            setProperty(filteredProperties);
        },[property]);
    
    const locationHandler = useCallback((location)=>{
        const items = locationFilter(filterItems, location);
        setProperty(items);
    },[property])

    return(
        <>
            <Products 
            page="Property" 
            headline="Find Your Perfect Property"
            detail="Explore a diverse range of properties to suit every need and 
            budget. Secure and transparent bidding process for peace of mind."
            category={models}
            style="properties"
            data={property}
            productsFiter={propertyFilter}
            locationHandler={locationHandler}
            />
        </>
    )
}