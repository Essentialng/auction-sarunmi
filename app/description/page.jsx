"use client";
import ProductVerify from "@/components/users/productVerify"
import { useState, useEffect } from "react";
import Link from "next/link";
import { highestAmount } from "@/utils/methods";
import { axiosInstance } from "@/package/axios";
import useStore from "../store";
import { Toast } from "@/package/alert";
import { ProductImages, ProductDescription, ProductAuction } from "@/components/users/descriptionSections";
import { AuctionItems } from "@/components/users/auction_items";
import NotificationHandler from "@/utils/notification";


export default function Page(){
  const {user, cars, properties, others, auctions, fetchAllProduct} = useStore()
  const [productVerification, setProductVerification] = useState(false);
  const [products, setProducts] = useState({})
  const [descriptions, setDescriptions] = useState({})
  const [amount, setAmount] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);
  const [bids, setBids] = useState(null)
  const [activeImage, setActiveImage] = useState("");
  const [bidLoading, setBidLoading] = useState(false);
  const [watchListLoading, setWatchListLoading] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setAmount(value);
    setDisableBtn(false);
  };

  const watchListHandler= async(itemId)=>{
    setWatchListLoading(true);
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
    }finally{
      setWatchListLoading(true);
    }
  }


  const bidHandler= async(itemId, name)=>{
    setBidLoading(true);

    const endpoint = "/bid";
    const body = {
      userId: user.id,
      itemId: itemId,
      amount: Number(amount)
    }

    try{
      const response = await axiosInstance.post(endpoint, body);
      if(response.status == 201){
        Toast.fire({
            icon: "success",
              title:response.data.message ,
          });

          const message = `Another user has outbid you on <strong>${name}</strong>. Place a higher bid now to stay in the lead!`;
          NotificationHandler({
            userId : user.id, 
            itemId : itemId,
            message : message, 
            type : "bid" 
          })
      };

    }catch(error){
      console.log(error)
      const errorMessage = error.response.data
      
      Toast.fire({
        icon: "error",
        title: errorMessage.message,
      });
    }finally{
      setBidLoading(false);
      fetchBid();
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
    const selectedImage = dictionaryData.images[0]
    setActiveImage(selectedImage)
    setProducts(dictionaryData);
    setDescriptions(dictionaryData.details);
    if(auctions.length == 0){
      fetchAllProduct()
    }
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
        <ProductImages 
        products={products}
        setActiveImage={setActiveImage}
        activeImage={activeImage}
        />
        <ProductDescription 
        setProductVerification={setProductVerification}
        descriptions={descriptions}
         />
    </div>
    <ProductAuction
    products={products}
    bids={bids}
    amount={amount}
    handleChange={handleChange}
    disableBtn={disableBtn}
    bidHandler={bidHandler}
    watchListHandler={watchListHandler}
    bidLoading={bidLoading}
    watchListLoading={watchListLoading}
    />
    <div className="flex flex-col gap-12  py-12">
      <p className="text-[#EF6509] text-[24px]  font-semibold">Similar Auctions</p>
      <AuctionItems
      auctions={
        products.categoryId == 1 ? cars
        : products.categoryId == 2 ? properties
        : others
      }
      />
    </div>
    <div className="flex flex-col gap-12  py-12 text-center">
      <p className="text-[#EF6509] text-[24px] font-semibold">YOU MAY ALSO LIKE</p>
      <AuctionItems
      auctions={
        auctions
      }
      />
    </div>
  </div>
</div>

    )
}