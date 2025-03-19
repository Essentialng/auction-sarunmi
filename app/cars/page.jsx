"use client";
import Products from "@/components/users/products"
import { useState, useEffect, useCallback } from "react";
import { axiosInstance } from "@/package/axios";
import { productFilter, locationFilter, amountFilter } from "@/utils/methods";

export default function Page(){

    const [cars, setCars] = useState([]);
    const [models, setModels] = useState([]);
    const [filterItems, setFilterItems] = useState([]);
    const [locationNums, setLocationNums] = useState([]);


    const fetchCars = async()=>{
        try{
            const response = await axiosInstance.get(`/cars`)
            const data = await response.data;
            if(response.status == 200){
            const items = data.data.map(car => car.items).flat();
            setFilterItems(items)
            setCars(items);
            setModels(data.data); 
            }
        }catch(error){
            console.log(error)
        }
    };

    
    const carFilter = useCallback((id)=>{
        const filteredCars = productFilter(filterItems, id);
        setCars(filteredCars);
    },[cars]);

    const locationHandler = useCallback((location)=>{
        const items = locationFilter(filterItems, location);
        setCars(items);
    },[cars])

    const amountFiltering = useCallback((range)=>{
        if(range == "All"){
            setCars(cars)
        }{
        const items = amountFilter(filterItems, range)
        setCars(items)
    }
    },[cars])

    
     
    useEffect(() => {
        fetchCars()
        }, []);
        

    return(
        <>
            <Products 
            page="Cars" 
            headline="Find Your Dream Car!"
            detail="Discover a wide selection of vehicles to suit every 
            taste, budget and bid with confidence."
            category={models}
            style="cars"
            data={cars}
            productsFiter={carFilter}
            locationHandler={locationHandler}
            amountFiltering={amountFiltering}
            />
            
        </>
    )
}