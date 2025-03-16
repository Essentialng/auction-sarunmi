import classNames from "classnames";
import { formatText } from "@/utils/methods";
import { TbCurrencyNaira } from "react-icons/tb";
import { useState } from "react";

export function BidDetails({ 
    timeLeft, 
    auctionDuration, 
    status, 
    yourBid, 
    currentBid, 
    item, 
    product, 
    handleViewAuction 
}) {
    return (
        <div className="col-span-4 border shadow-xl flex flex-col justify-between 
        p-6 text-center rounded-xl font-semibold text-[14px]">
            <div className='flex flex-col gap-3'>
                <h2 className="text-[24px]">Bid Details</h2>
                <div className="flex justify-between items-center">
                    <small className="font-normal">Time Left:</small>
                    <small>{timeLeft}</small>
                </div>
                <div className="flex justify-between items-center">
                    <small className="font-normal">Auction Duration:</small>
                    <small>{auctionDuration}</small>
                </div>
                <div className="flex justify-between items-center">
                    <small className="font-normal">Bid Status:</small>
                    <small>{status}</small>
                </div>
                <div className="flex justify-between items-center">
                    <small className="font-normal">Your Bid:</small>
                    <small className="flex items-center"><TbCurrencyNaira/> {yourBid}</small>
                </div>
                <div className="flex justify-between items-center mb-8">
                    <small className="font-normal">Current Bid:</small>
                    <small className="flex items-center"><TbCurrencyNaira/> {currentBid ? currentBid : "----"}</small>
                </div>
            </div>
            <button 
                onClick={() => handleViewAuction(item || product)} 
                className={classNames(
                    "py-2 rounded-xl w-5/6 mx-auto",
                    { "bg-[#C6CBC7] text-[#979998]": timeLeft === "00:00:00:00" },
                    { "bg-[#EF6509] text-white": timeLeft !== "00:00:00:00" }
                )}
                disabled={timeLeft === "00:00:00:00"}
            >
                SUBMIT A NEW BID
            </button>
        </div>
    );
};


export function Details({ name, description }) {

    const [allContents, setAllContents] = useState(false);

    return (
        <div className="col-span-3 border shadow-xl flex flex-col gap-3 py-6 px-4 text-center rounded-xl font-semibold text-[14px]">
            <h2 className="text-[24px]">Details</h2>
            <div className={`flex flex-col gap-2 h-32 overflow-y-hidden ${allContents && "h-fit"} `}>
                <div className="flex justify-between items-center">
                    <small className="font-normal">Name:</small>
                    <small>{name}</small>
                </div>
            
                    {description && Object.keys(description).length > 0 && (
                        Object.entries(description).map(([key, value], index) => (
                            <div key={index} className="flex justify-between gap-12 items-center">
                            <small className="font-normal">{formatText(key)}:</small>
                            <small className="truncate">{key === "ProofOfOwnership" ? "YES" : value}</small>
                            </div>
                        ))
                    )}
                </div>

            {!allContents ?
            <span 
            className="pt-8 text-[16px] text-[#FF9354] cursor-pointer"
            onClick={(()=>setAllContents(true))}
            >
                See All
            </span>
            :
            <span 
            className="pt-8 text-[16px] cursor-pointer"
            onClick={(()=>setAllContents(false))}
            >
                Show less
            </span>
            }

        </div>
    );
}

export function Images({image}){
    return(
        <div className="sm:w-[400px] sm:h-[300px] w-full h-full rounded-xl overflow-hidden">
            <img
            src={image}
            className="w-full h-full"
            alt={"Product Image"}
            />
        </div>
    )
}

