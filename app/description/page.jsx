"use client";
import ProductVerify from "@/components/users/productVerify"
import { FaArrowRight } from "react-icons/fa6";
import { useState, useEffect } from "react";
import Link from "next/link";
import { calculateTimeLeft, calculateDays, highestAmount } from "@/utils/methods";
import { axiosInstance } from "@/utils/axios";
import useStore from "../store";
import { Toast } from "@/utils/alert";

export default function Page(){
  const {user} = useStore()
  const [productVerification, setProductVerification] = useState(false);
  const [mainImage, setMainImage] = useState("/car-one.png");
  const [products, setProducts] = useState({})
  const [descriptions, setDescriptions] = useState({})
  const [amount, setAmount] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);
  const [bids, setBids] = useState(null)


  const handleImageClick = (newImage, index) => {
    
    products[index] = mainImage
    setMainImage(newImage);
  };

  const handleChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    setDisableBtn(false);
  };

  const watchListHandler= async(itemId)=>{
    try{
      const response = await axiosInstance.post(`watchlist`,
        {userId : user.id, itemId : itemId}
      );
      if(response.status == 201){
        Toast.fire({
            icon: "success",
            title: response.data.message,
          });
      }
    }catch(error){
      const errorMessage = error.response.data

      Toast.fire({
        icon: "error",
        title: errorMessage.message,
      });
    }
  }


  const bidHandler= async(itemId)=>{
    try{
      const response = await axiosInstance.post(`bid`,
        {userId : user.id, itemId : itemId, amount: Number(amount)}
      );
      if(response.status == 201){
        Toast.fire({
            icon: "success",
              title:toLocaleString(response.data.message) ,
          });
      }
    }catch(error){
      const errorMessage = error.response.data

      Toast.fire({
        icon: "error",
        title: errorMessage.message,
      });
    }
  }
  

  const fetchBid = async()=>{
    try{
      const response = await axiosInstance.get(`bid?itemId=${products.id}`);
      const data = await response.data;
      if(response.status == 200){
        const amount = highestAmount(data.bids)
        setBids(amount.toLocaleString())

      }
    }catch(error){
      console.log(error)
    }
  }

  useEffect(()=>{
    const data = localStorage.getItem("auctionData");
    const dictionaryData = JSON.parse(data);

    setProducts(dictionaryData);
    setDescriptions(dictionaryData.details);
  },[])

  
  useEffect(()=>{
    if(Object.keys(products).length != 0){
    fetchBid()
    }
  },[products])


  return(
<div className="xl:p-10 bg-gray-100 mt-28 xl:px-24 px-4  py-8 relative">

  {productVerification &&
  <ProductVerify 
  setProductVerification={setProductVerification} 
  productVerification={productVerification}
  />
  }
  
  <div className=" gap-4 flex item-center mb-4 text-gray-600">
    <Link href="/" className="hover:underline text-sm">Home</Link> 
    <Link href="/dashboard" className="hover:underline text-sm">Auctions</Link> 
    <small>{products.name}</small>
  </div>

  <div className="">
    <div className="xl:grid xl:grid-cols-5 flex flex-col gap-12 xl:items-center">
        <div className=" col-span-3 xl:grid xl:grid-cols-4 gap-16">
        <div className="flex xl:flex-col items-center gap-4 space-y-4 w-full col-span-1">

          {products?.images?.map((image, index)=>(
            <div
            key={index}
              className="flex border border-[#FF9354] rounded-2xl h-32 w-28 items-center cursor-pointer"
              onClick={() => handleImageClick("/car-four.png", 0)}
            >
              <img src={image} className="rounded-md object-cover w-full h-auto" alt="BMW front view" />
            </div>
          ))}
        </div>

        <div className="w-full h-full col-span-3 p-6 flex justify-center items-center">
            <img src={products.images ? products?.images[0] : ""} height={50} width={50} className="rounded-md w-full object-cover h-auto" alt="BMW main image"/>
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
                {Object.entries(descriptions).map(([key, value], index)=>(
                <li key={index} className="w-full border-b py-1 border-b-black flex justify-between"><strong className="font-bold">{key}:</strong> {value}</li>
              ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full mt-24">
        <div className="bg-gray-50 p-4 rounded-t-2xl shadow-xl xl:pb-24 pb-12">
            <h2 className="text-lg font-semibold mb-4 border-b border-[#EF6509]">Vehicle Description</h2>
            <p>{products.description}</p>
        </div>
    </div>
    <div className="bg-[#554AA2] text-white p-6 mb-12 rounded-b-2xl">
        <div className="flex xl:flex-row flex-col xl:gap-0 gap-8 justify-between">
            <div className="space-y-4">
                <div>
                <span className="font-semibold">Time Left:</span>
                <span className="ml-2">{calculateTimeLeft(products.endTime)}</span>
                </div>
                <div>
                <span className="font-semibold">Bid Status:</span>
                <span className="ml-2">Ongoing</span>
                </div>
                <div>
                <span className="font-semibold">Current Bid:</span>
                <span className="ml-2">₦{bids}</span>
                </div>
                <div>
                <span className="font-semibold">Auction Duration:</span>
                <span className="ml-2">{calculateDays(products.startTime, products.endTime)}</span>
                </div>
            </div>

            <div className="space-y-4 xl:w-1/3">
                <div className="flex flex-col gap-2">
                    <label htmlFor="lastName">Enter amount</label>
                    <input 
                    type="number" 
                    placeholder="Type amount" 
                    className="w-full px-4 py-4 rounded-md text-black text-center"
                    value={amount} // Bind the state value to the input field
                    onChange={handleChange}
                     />
                </div>
                <div className="flex justify-between w-full gap-8">
                <button 
                className="border border-white  py-3 rounded-md w-full"
                onClick={()=>watchListHandler(products.id)}>Add to Watchlist</button>
                <button 
                className="bg-[#EF6509] hover:bg-[#e25d08] py-3 rounded-md w-full"
                onClick={()=>bidHandler(products.id)}
                disabled={disableBtn}>
                  Bid
                </button>
                
                </div>
            </div>
        </div>
    </div>
  </div>
</div>

    )
}