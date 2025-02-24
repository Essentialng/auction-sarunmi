"use client";
import ProductVerify from "@/components/users/productVerify"
import { useState, useEffect } from "react";
import Link from "next/link";
import { highestAmount } from "@/utils/methods";
import { axiosInstance } from "@/package/axios";
import useStore from "../store";
import { Toast } from "@/package/alert";
import { ProductImages, ProductDescription, ProductAuction } from "@/components/users/descriptionSections";

export default function Page(){
  const {user} = useStore()
  const [productVerification, setProductVerification] = useState(false);
  const [products, setProducts] = useState({})
  const [descriptions, setDescriptions] = useState({})
  const [amount, setAmount] = useState('');
  const [disableBtn, setDisableBtn] = useState(true);
  const [bids, setBids] = useState(null)
  const [activeImage, setActiveImage] = useState("");


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
    const selectedImage = dictionaryData.images[0]
    setActiveImage(selectedImage)
    setProducts(dictionaryData);
    console.log(dictionaryData)
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
    />

    <div>
      <p>Similar Auctions</p>
    </div>
  </div>
</div>

    )
}