"use client";
import ProductVerify from "@/components/users/productVerify"
import { FaArrowRight } from "react-icons/fa6";
import { useState } from "react";


export default function Page(){

  const [productVerification, setProductVerification] = useState(false);
  const [mainImage, setMainImage] = useState("/car-one.png");
  const [products, setProducts] = useState([
    "/car-four.png",
    "/car-three.png",
    "/car-two.png"
  ])

  const handleImageClick = (newImage, index) => {
    
    products[index] = mainImage
    setMainImage(newImage);
  };

  return(
<div className="xl:p-8 bg-gray-100 mt-32 xl:px-24 px-4 xl:py-0 py-8 relative">

  {productVerification &&
  <ProductVerify 
  setProductVerification={setProductVerification} 
  productVerification={productVerification}
  />
  }
  
  <div className="text-sm gap-4 flex item-center mb-4 text-gray-600">
    <small className="hover:underline">Home</small> 
    <small className="hover:underline">Auctions</small> 
    <small>BMW</small>
  </div>

  <div className="">
    <div className="xl:grid xl:grid-cols-5 flex flex-col gap-12 xl:items-center">
        <div className=" col-span-3 xl:grid xl:grid-cols-4 gap-16">
        <div className="flex xl:flex-col items-center gap-4 space-y-4 w-full col-span-1">
              <div
                className="flex border border-[#FF9354] rounded-2xl h-32 w-28 items-center cursor-pointer"
                onClick={() => handleImageClick("/car-four.png", 0)}
              >
                <img src={products[0]} className="rounded-md object-cover w-full h-auto" alt="BMW front view" />
              </div>
              <div
                className="flex items-center border border-[#FF9354] rounded-2xl h-32 w-28 cursor-pointer"
                onClick={() => handleImageClick("/car-three.png", 1)}
              >
                <img src={products[1]} className="rounded-md object-cover w-full h-auto" alt="BMW side view" />
              </div>
              <div
                className="flex items-center border border-[#FF9354] rounded-2xl h-32 w-28 cursor-pointer"
                onClick={() => handleImageClick("/car-two.png", 2)}
              >
                <img src={products[2]} className="rounded-md object-cover w-full h-auto" alt="BMW rear view" />
              </div>
            </div>

            <div className="w-full h-full col-span-3 p-6 flex justify-center items-center">
                <img src={mainImage} height={50} width={50} className="rounded-md w-full object-cover h-auto" alt="BMW main image"/>
            </div>
        </div>
        <div className="flex flex-col gap-8 xl:col-span-2">

        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-end justify-end">
              <button 
              className="flex gap-2 items-center text-white p-2 bg-[#017B23] rounded-xl "
              onClick={
                ()=>setProductVerification(true)
              }
              >
                View verification page
                <FaArrowRight color="white"/>
              </button>
            </div>
            <div className="bg-gray-50 py-4 xl:px-12 px-4 rounded-2xl border border-[#EF6509]">
              <h2 className="text-lg font-semibold mb-4 text-center py-2">Specification</h2>
              <ul className="space-y-2 p-2 shadow-xl border-black border rounded-xl overflow-hidden">
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Colors:</span> White</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Lot Number:</span> 123456</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">VIN:</span> ABC123XYZ456</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Odometer:</span> 50,000 miles</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Primary Damage:</span> None</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Cylinder:</span> 6</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Transmission:</span> Automatic</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Drive:</span> AWD</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Fuel:</span> Gasoline</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Vehicle Type:</span> SUV</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Years Used:</span> 3 Years</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Location:</span> California, USA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full mt-24">
        <div className="bg-gray-50 p-4 rounded-t-2xl shadow-xl xl:pb-24 pb-12">
            <h2 className="text-lg font-semibold mb-4 border-b border-[#EF6509]">Vehicle Description</h2>
            <p>
            I'm offering my well-maintained 2016 BMW 3 Series for auction. This car delivers the perfect blend of luxury and performance with its powerful 
            engine, smooth handling, and premium interior loaded with advanced features. I’ve thoroughly enjoyed every drive, appreciating its reliability 
            and exhilarating performance. If you’re looking for a high-quality driving experience, this BMW is the perfect choice.
            </p>
        </div>
    </div>
    <div className="bg-[#554AA2] text-white p-6 mb-12 rounded-b-2xl">
        <div className="flex xl:flex-row flex-col xl:gap-0 gap-8 justify-between">
            <div className="space-y-4">
                <div>
                <span className="font-semibold">Time Left:</span>
                <span className="ml-2">00:00:00:00</span>
                </div>
                <div>
                <span className="font-semibold">Bid Status:</span>
                <span className="ml-2">Ongoing</span>
                </div>
                <div>
                <span className="font-semibold">Current Bid:</span>
                <span className="ml-2">₦4,000,000.00</span>
                </div>
                <div>
                <span className="font-semibold">Auction Duration:</span>
                <span className="ml-2">3 Days [1 day left]</span>
                </div>
            </div>

            <div className="space-y-4 xl:w-1/3">
                <div className="flex flex-col gap-2">
                    <label htmlFor="lastName">Enter amount</label>
                    <input type="number" placeholder="Type amount" className="w-full px-4 py-4 rounded-md text-black text-center" />
                </div>
                <div className="flex justify-between w-full gap-8">
                <button className="border border-white  py-3 rounded-md w-full">Add to Watchlist</button>
                <button className="bg-[#EF6509] hover:bg-[#e25d08] py-3 rounded-md w-full">Bid</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>

    )
}