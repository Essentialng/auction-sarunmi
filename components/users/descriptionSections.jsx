import { FaArrowRight } from "react-icons/fa6";
import { calculateTimeLeft, calculateDays, calculateTimeToStart } from "@/utils/methods";
import useStore from "@/app/store";
import { Rings } from "react-loading-icons";
import PaystackButtonComponent from "@/components/users/paystack";
import { axiosInstance } from "@/package/axios";
import { useState } from "react";
import { Toast } from '@/package/alert';
import classNames from "classnames";
import { FaEye } from "react-icons/fa";
import { PiWarningCircleBold } from "react-icons/pi";



export function ProductImages({products, setActiveImage, activeImage}){

    return(
        <div className="col-span-3 flex flex-col xl:grid xl:grid-cols-4 gap-6">

            
            <div className="flex xl:grid xl:grid-flow-row grid-cols-1 flex-row xl:flex-col items-center xl:gap-20 gap-8 w-full col-span-1 order-2 xl:order-1 justify-center xl:justify-start
            max-h-[100px] xl:max-h-[500px] overflow-x-auto xl:overflow-y-auto scrollbar-thin scrollbar-thumb-gray-400 scrollbar-track-gray-100">

                {products?.images?.map((image, index) => (
                activeImage !== image && (
                    <div
                    key={index}
                    className="relative flex border border-[#FF9354] rounded-2xl h-full w-full items-center justify-center cursor-pointer overflow-hidden max-w-[80px]"
                    onClick={() => setActiveImage(image)}
                    >
                    <img src={image} className="rounded-md object-cover h-20 w-20" alt="Product thumbnail" />
                    </div>
                )
                ))}

            </div>

            {/* Main Image */}
            <div className="w-full col-span-3 p-4 flex justify-center items-center h-full order-1 xl:order-2">
                <img src={activeImage} className="rounded-md w-full object-contain xl:max-h-[400px] max-h-[350px]" alt="Product main image" />
            </div>

        </div>
    )
};




export function ProductDescription({setProductVerification, descriptions}){
    const [previewImage, setPreviewImage] = useState(null);

  const handleViewImage = (imageUrl) => {
    setPreviewImage(imageUrl);
  };

  const closePreview = () => {
    setPreviewImage(null);
  };


    return(
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
            <ul className="space-y-4 p-2 shadow-xl border-black border rounded-xl overflow-hidden">
                {Object.entries(descriptions).map(([key, value], index) => {
                const formattedKey = key.replace(/([A-Z])/g, ' $1').trim();

             return (
            <li
              key={index}
              className="w-full border-b py-1 border-b-black flex justify-between items-center"
            >
              <strong className="font-bold">{formattedKey}:</strong>
              {typeof value === 'string' && value.startsWith('https://') ? (
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => handleViewImage(value)}
                >
                  View
                </button>
              ) : (
                <span>{value}</span>
              )}
            </li>
            );
            })}
        </ul>
                {previewImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={closePreview}
        >
          <img src={previewImage} alt="Preview" className="max-h-[90%] max-w-[90%] rounded" />
        </div>
      )}
                </div>
            </div>
        </div>
    </div>
    )
};





export function ProductAuction({products, bids, amount, handleChange, disableBtn,watchListHandler, bidHandler, bidLoading, watchListLoading }){

    const {user} = useStore();
    const [loading, setLoading] = useState(false);
    
    const paymentHandler = async()=>{
        setLoading(true);
        const endpoint = "/payment"
        const body = {
            "amount": Number(products?.soldPrice),
            "userId": user?.id,
            "id": products?.id,
            "status": "pending"   
        }
        try{
            const response = await axiosInstance.post(endpoint, body);
            const data = await response.data;
            if(response.status == 200){
                Toast.fire({
                    icon: "success",
                    title: data.message
                })
                const flatData = {
                    ...data.data,
                    ...data.data.item 
                  };
                delete flatData.item;
                localStorage.setItem("auctionData", JSON.stringify(flatData));
                window.location.reload();
            }
        }catch(error){
            Toast.fire({
                icon: "error",
                title: "the bidder for this item, try again!",
            })
        }finally{
        setLoading(false);
        }
    }

  
    const isInWatchlist = user ? products?.watchlist?.some(check => check.userId == user.id) : false; 
    const userProduct = user ? products?.userId == user?.id : false 
    const endTime = calculateTimeLeft(products.endTime) 
    const toStart = calculateTimeToStart(products.startTime) 
    const timeStatus = endTime == "00:00:00:00" ? true : false;
    const payOffBtn = products?.payOff && endTime

    const dataItems = [
        { label: "Time Left", value: endTime },
        { label: "Bid Status", value: "Ongoing" },
        // { label: "Starting Bid", value: `₦${products?.price?.toLocaleString()}` },
        { label: "Current Bid", value: `₦${bids?.length > 0 ? bids[0] : "0.00"}`},
        { label: "Auction Duration", value: calculateDays(products.startTime, products.endTime) },
        { label: "Sale Name", value: `${products?.user?.firstName?.toUpperCase()} ${products?.user?.lastName?.toUpperCase()}`, isBold: true },
        { label: "Sale Location", value: products?.location },
        { label : "Status", value: products?.status?.toUpperCase(), isBold: true}
      ];

      const styles = {
        container: "space-y-4",
        label: "font-semibold",
        value: "ml-2",
        boldValue: "ml-2 font-bold",
        iconContainer: "flex items-center gap-2"
      };

    return(
    <>
        <div className="w-full mt-24">
            <div className="bg-gray-50 p-4 rounded-t-2xl shadow-xl xl:pb-24 pb-12">
                <h2 className="text-lg font-bold mb-4 border-b border-[#EF6509]">Description</h2>
                <p>{products.description}</p>
            </div>
        </div>
        <div className={classNames({
            "text-white p-6 mb-12 rounded-b-2xl" : true,
            "bg-[#554AA2] " : !products?.soldPrice,
            "bg-gray-500" : products?.soldPrice
        })}>

            <div className="flex xl:flex-row flex-col xl:gap-0 gap-8 justify-between">
                <div className={styles.container}>
                    {dataItems.map((item, index) => (
                        <div key={index}>
                        <span className={styles.label}>{item.label}:</span>
                        <span className={item.isBold ? styles.boldValue : styles.value}>{item.value}</span>
                        </div>
                    ))}
                </div>

                {(!products?.soldPrice || products?.bidderId != user?.id) ?
                <div className=" xl:w-1/3">
                    <div className="flex flex-col gap-2">
                        <label htmlFor="lastName">Enter amount</label>
                        <input 
                        type="number" 
                        placeholder="Type amount" 
                        min={products.price}
                        disabled={(timeStatus && !toStart) || !user || userProduct}
                        className="w-full px-4 py-4 rounded-md text-black text-center"
                        value={amount} 
                        onChange={handleChange}
                        />
                        <small>(Starting bid  ₦{products?.price?.toLocaleString()})</small>
                    </div>

                    
                    <div className="flex justify-between w-full gap-8 pt-6">
                        <button
                            className={`border border-white py-3 rounded-md w-full flex items-center justify-center ${isInWatchlist && "bg-gray-200"}`}
                            onClick={() => watchListHandler(products.id)}
                            disabled={isInWatchlist || (timeStatus) || userProduct}
                        >
                            {watchListLoading ? <Rings width={30} height={30}/> : "Add to Watchlist"}
                        </button>
                        
                        { !products?.payOff ?
                        <button
                            className={
                                ` ${disableBtn || (timeStatus && !toStart) || userProduct ? 
                                    "bg-gray-300 hover:bg-gray-300" : 
                                    "bg-[#EF6509] hover:bg-[#e25d08]"} 
                                    py-3 rounded-md w-full flex items-center justify-center`}
                            onClick={() => bidHandler(products.id, products.name)}
                            disabled={disableBtn || (timeStatus && !toStart) || userProduct || bidLoading}
                        >
                            
                           {bidLoading ? <Rings width={30} height={30}/> :  "Bid"}
                        </button>
                        :
                        <div className="relative flex flex-col items-center gap-2">
                            <button className="bg-[#EF6509] hover:bg-[#e25d08] py-3 px-4  rounded-md w-full 
                            flex items-center justify-center font-semibold">
                                <PaystackButtonComponent
                                price={products?.payOff}
                                className={"absolute bg-transparent w-full h-12 "}
                                onSuccess={paymentHandler}
                                />
                            ₦{ products?.payOff?.toLocaleString() }
                            </button>
                           
                        </div>
                    }
                    </div>

                    { products?.payOff &&
                    <div className="w-full justify-end relative flex gap-1 items-center font-semibold text-xs">
                        <div className="w-fit relative group">
                            <PiWarningCircleBold className="cursor-pointerrounded-full" />
                            <div className="absolute border bg-white w-[200px] text-black p-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                                <small>
                                    Pay Off allows you to secure a listed product immediately by offering an amount before the auction begins. If your Pay Off price 
                                    meets the seller's expectations, the product can be yours without waiting for the auction to start.
                                </small>
                            </div>
                        </div>
                        <small>BUY NOW OFF AUCTION</small>
                    </div>
                    }

                    {products?.paymentAmount &&
                    <strong>This product has been sold out</strong>
                    }
                </div>
                :
                <div className="flex flex-col">
                    <button 
                    className={classNames({
                        "relative flex items-center justify-center  rounded-xl h-1/2 p-4 font-semibold shadow-xl hover:scale-95 transition-transform duration-500 ease-in-out cursor-pointer" : true,
                        "bg-orange-500": (!loading && !products?.paymentAmount),
                        "bg-gray-400": loading || products?.paymentAmount 

                    })}
                    disabled={loading || products?.paymentAmount}
                    >
                    <PaystackButtonComponent
                    price={50000}
                    className={"absolute bg-transparent w-full h-12 "}
                    onSuccess={paymentHandler}
                    />
                            {loading ? <Rings width={30} height={30}/> : products?.paymentAmount ? "Payment Done" : "Make Payment Now"}
                    </button>
                    <small>You won the bid with: <strong className="border-b">{Number(products?.soldPrice).toLocaleString()}</strong></small>
                </div>
                }
            </div>
        </div>
    </>
    )
}