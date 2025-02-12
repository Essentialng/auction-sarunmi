
"use client";
import Products from "@/components/users/products"
import { useState, useEffect } from "react";
import { axiosInstance } from "@/utils/axios";



export default function Page(){

        const [data, setData] = useState([]);
    
        const fetchCars = async()=>{
            try{
                const response = await axiosInstance.get("others");
                const data = await response.data;
    
                if(response.status == 200){
                    setData(data?.data);
                }
            }catch(error){
                console.log(error)
            }
        }

        useEffect(()=>{
            fetchCars();
        })

    return(
        <>
            <Products 
            page="Other Categories" 
            headline=""
            detail="Discover a wide selection of vehicles to suit every 
            taste, budget and bid with confidence."
            category="categories"
            style="cars"
            data={data}/>
        </>
    )
}























// "use client";
// import { FaAngleRight } from "react-icons/fa6";
// import { BiSolidRightArrow } from "react-icons/bi";
// import Sliders from "@/components/users/sliders";
// import Products from "@/components/users/products";
// import FooterCard from "@/components/users/footerCard";
// import { useState } from "react";
// import SliderProduct from "@/components/users/slideProducts";

// const data = 
//             [
//                 {
//                     "image": "/car-one.png",
//                     "status": "Live Auction",
//                     "type" : "Toyota Camry",
//                     "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
//                 },
//                 {
//                     "image": "/car-two.png",
//                     "status": "Live Auction",
//                     "type" : "Toyota Camry",
//                     "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
//                 },
//                 {
//                     "image": "/car-three.png",
//                     "status": "Live Auction",
//                     "type" : "Toyota Camry",
//                     "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
//                 },
//                 {
//                     "image": "/car-four.png",
//                     "status": "Upcoming Auction",
//                     "type" : "Toyota Camry",
//                     "detail" : "This 2018 Toyota Camry has been a joy to drive, offering exceptional reliability .."
//                 },

//             {
//                 "image": "/property-one.png",
//                 "status": "Live Auction",
//                 "type" : "Toyota Camry",
//                 "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
//             },
//             {
//                 "image": "/property-two.png",
//                 "status": "Live Auction",
//                 "type" : "Toyota Camry",
//                 "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
//             },
//             {
//                 "image": "/property-three.png",
//                 "status": "Upcoming Auction",
//                 "type" : "Toyota Camry",
//                 "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
//             },
//             {
//                 "image": "/property-four.png",
//                 "status": "Live Auction",
//                 "type" : "Toyota Camry",
//                 "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
//             },
//             {
//                 "image": "/electronic-one.png",
//                 "status": "Live Auction",
//                 "type" : "Toyota Camry",
//                 "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
//             },
//             {
//                 "image": "/electronic-two.png",
//                 "status": "Live Auction",
//                 "type" : "Toyota Camry",
//                 "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
//             },
//             {
//                 "image": "/eletronic-three.png",
//                 "status": "Upcoming Auction",
//                 "type" : "Toyota Camry",
//                 "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
//             },
//             {
//                 "image": "/eletronic-four.png",
//                 "status": "Live Auction",
//                 "type" : "Toyota Camry",
//                 "detail" : "This home boasts a spacious living area, a modern kitchen, and a serene ..."
//             },
//     ]

// const categories = [
//     "Furniture",
//     "Phones",
//     "Laptops",
//     "Home Appliances",
//     "Digital Camera"
// ]

// export default function Page(){

//     const [filter, setFilter] = useState("Furniture")
//     return(
//         <div className="flex flex-col relative pt-[10rem] ">
//             <div className="flex flex-col gap-4 2xl:px-[4rem] xl:px-[4rem] px-[1rem]">
//                 <div className="flex items-center 2xl:gap-4 xl:gap-4 gap-2 2xl:text-[14px] xl:text-[14px] md:text-[10px] text-[8px]">
//                     <span>Home</span>
//                     <FaAngleRight size={14}/>
//                     <span className="text-[#EF6509]">Categories</span>
//                 </div>
//             </div>
//            <SliderProduct data={data} header="Top Auctions"/>
//             <div className="2xl:grid xl:grid block grid-cols-4 pt-24 2xl:px-[4rem] xl:px-[4rem] px-[1rem]">
//                 <div className="col-span-1 2xl:flex xl:flex hidden flex-col gap-8">
//                     <p className="text-[#EF6509] text-600 text-[24px]">Other Categories</p>
//                     <ul className="flex flex-col gap-4">
//                         {categories.map((value, index)=>(
//                             <li key={index} className="flex items-center gap-12 cursor-pointer">
//                                 {value}
//                                 <BiSolidRightArrow size={10} color={value === filter && "#EF6509"}/>
//                             </li>
//                         ))}
//                     </ul>
//                 </div>
//                 <div className="col-span-3">
//                     <Products page="categories" headline="" detail="" category="funiture" style="" data={data}/>
//                 </div>
//             </div>
//             <div className="mb-24 w-full">
//                 <FooterCard/>            
//             </div>
//         </div>
//     )
// }