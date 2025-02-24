import { FaArrowRight } from "react-icons/fa6";
import { calculateTimeLeft, calculateDays } from "@/utils/methods";
import useStore from "@/app/store";
import { useEffect } from "react";


export function ProductImages({products, setActiveImage, activeImage}){


    return(
        <div className=" col-span-3 xl:grid xl:grid-cols-4 gap-16">
          <div className="flex xl:flex-col items-center gap-4 space-y-4 w-full col-span-1">

            {products?.images?.map((image, index)=>(
                (activeImage != image) &&(
              <div
              key={index}
                className="flex border border-[#FF9354] rounded-2xl h-32 w-28 items-center cursor-pointer"
                onClick={() => setActiveImage(image)}
              >
                <img src={image} className="rounded-md object-cover w-full h-auto" alt="BMW front view" />
              </div>
              )
            ))}
          </div>

          <div className="w-full h-full col-span-3 p-6 flex justify-center items-center">
              <img src={activeImage} height={50} width={50} className="rounded-md w-full object-cover h-auto" alt="BMW main image"/>
          </div>
        </div>
    )
}


export function ProductDescription({setProductVerification, descriptions}){
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
                <ul className="space-y-2 p-2 shadow-xl border-black border rounded-xl overflow-hidden">
                    {Object.entries(descriptions).map(([key, value], index)=>(
                    <li key={index} className="w-full border-b py-1 border-b-black flex justify-between"><strong className="font-bold">{key}:</strong> {value}</li>
                ))}
                </ul>
                </div>
            </div>
        </div>
    </div>
    )
}


export function ProductAuction({products, bids, amount, handleChange, disableBtn,watchListHandler, bidHandler }){

    const {user} = useStore();

  
    const isInWatchlist = user ? products?.watchlist?.some(check => check.userId == user.id) : false;    

    return(
    <>
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
                        <span className="ml-2">₦{bids ? bids : products.price?.toLocaleString()}</span>
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
                            className={`border border-white py-3 rounded-md w-full ${isInWatchlist && "bg-gray-200"}`}
                            onClick={() => watchListHandler(products.id)}
                            disabled={isInWatchlist}
                        >
                            Add to Watchlist
                        </button>
                        
                        <button
                            className="bg-[#EF6509] hover:bg-[#e25d08] py-3 rounded-md w-full"
                            onClick={() => bidHandler(products.id)}
                            disabled={disableBtn}
                        >
                            Bid
                        </button>
                        </div>

                </div>
            </div>
        </div>
    </>
    )
}