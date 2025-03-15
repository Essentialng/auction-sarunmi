"use client";
import { calculateTimeLeft, calculateDays } from '@/utils/methods';
import { useRouter } from 'next/navigation';
import {BidDetails, Details, Images} from './dashBoardCards';
import BiddersList from './listOfBidders';
import { useState } from 'react';
import { MdArrowForwardIos } from "react-icons/md";
import { MdArrowBackIos } from "react-icons/md";
import classNames from 'classnames';


export default function SliderProduct({ products, bidProducts }) {

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(null);
  const [navigate, setNavigate] = useState(0);
 

  const handleViewAuction = (data) => {
    localStorage.setItem('auctionData', JSON.stringify(data)); 
    router.push('/description');  
  };

  const item = products?.some(product=>product?.bid);
  const timeLeft = item ? calculateTimeLeft(products[navigate]?.bid?.item?.startTime, products[navigate]?.bid?.item?.endTime) : calculateTimeLeft(products[navigate]?.startTime, products[navigate]?.endTime)
  const timeLeft_r = item ? calculateTimeLeft(products[navigate + 1]?.bid?.item?.startTime, products[navigate + 1]?.bid?.item?.endTime) : calculateTimeLeft(products[navigate + 1]?.startTime, products[navigate + 1]?.endTime)
  const auctionDuration = item ? calculateDays(products[navigate]?.bid?.item?.startTime, products[navigate]?.bid?.item?.endTime) : calculateDays(products[navigate]?.startTime, products[navigate]?.endTime)
  const auctionDuration_r = item ? calculateDays(products[navigate + 1]?.bid?.item?.startTime, products[navigate + 1]?.bid?.item?.endTime) : calculateDays(products[navigate + 1]?.startTime, products[navigate + 1]?.endTime)
  const status = item ? products[navigate]?.bid?.item?.status : products[navigate]?.status
  const status_r = item ? products[navigate + 1]?.bid?.item?.status : products[navigate + 1]?.status
  const image = item ? products[navigate]?.bid?.item?.images[navigate] : products[navigate]?.images[navigate]
  const image_r = item ? products[navigate + 1]?.bid?.item?.images[navigate + 1] : products[navigate + 1]?.images[navigate + 1]
  const name = item ? products[navigate]?.bid?.item?.name : products[navigate]?.name
  const name_r = item ? products[navigate + 1]?.bid?.item?.name : products[navigate + 1]?.name
  const description = item ? products[navigate]?.bid?.item?.details : products[navigate]?.details
  const description_r = item ? products[navigate + 1]?.bid?.item?.details : products[navigate + 1]?.details
  const yourBid = item ? products[navigate]?.bid?.item?.price?.toLocaleString() : products[navigate]?.price?.toLocaleString()
  const yourBid_r = item ? products[navigate + 1]?.bid?.item?.price?.toLocaleString() : products[navigate + 1]?.price?.toLocaleString()
  const currentBid = products[navigate]?.highestBid?.amount?.toLocaleString() 
  const currentBid_r = products[navigate + 1]?.highestBid?.amount?.toLocaleString() 
  
  const productLength = products?.length

  const navigationBtn = "p-2 bg-black text-gray-300 flex items-center justify-center rounded-xl border"
  return (
    <div className="flex flex-col gap-8 py-4 sm:px-[1rem] px-2">
          <div className='w-full relative flex xl:flex-row flex-col sm:gap-0 gap-4 items-center justify-between'>
            
            <button 
            className={classNames({
              "bg-gray-300 text-gray-50" : navigate == 0,
              [navigationBtn] : true,
              "sm:block hidden" : true
              })} 
              disabled={navigate == 0}
              onClick={()=>setNavigate(navigate + 1)}
              >
              <MdArrowBackIos size={35}/>
            </button>

            <div className='w-full flex items-center gap-0'>

              <div 
              className={`w-full px-2 ${bidProducts && "cursor-pointer"}`}
              onClick={()=>setIsOpen(products[navigate])}
              >
                <div className="w-full xl:py-12 py-2">
                  <div className="flex-col gap-8 flex items-center justify-center">
                    <Images
                    image={image}
                    />
                    <div className="w-full xl:grid grid-cols-7 flex flex-col gap-1 xl:px-6 px-2">
                      <Details
                      name={name}
                      description={description}
                      />
                      <BidDetails
                      timeLeft={timeLeft} 
                      auctionDuration={auctionDuration} 
                      status={status} 
                      yourBid={yourBid} 
                      currentBid={currentBid} 
                      item={item} 
                      product={products} 
                      handleViewAuction = {handleViewAuction} 
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

          
            {products[navigate + 1] &&
            <div 
            className={`w-full px-2 ${bidProducts && "cursor-pointer sm:block hidden"}`}
            onClick={()=>setIsOpen(products[navigate + 1])}
            >
              <div className="w-full xl:py-12 py-2">
                <div className="flex-col gap-8 flex items-center justify-center">
                  <Images
                  image={image_r}
                  />
                  <div className="w-full xl:grid grid-cols-7 flex flex-col gap-1 xl:px-6 px-2">
                    <Details
                    name={name_r}
                    description={description_r}
                    />
                    <BidDetails
                    timeLeft={timeLeft_r} 
                    auctionDuration={auctionDuration_r} 
                    status={status_r} 
                    yourBid={yourBid_r} 
                    currentBid={currentBid_r} 
                    item={item} 
                    product={products} 
                    handleViewAuction = {handleViewAuction} 
                    />
                  </div>
                </div>
              </div>
            </div>
            }
            <div className='flex items-center gap-4'>
              <button 
              className={classNames({
                "bg-gray-300 text-gray-50" : navigate == 0,
                [navigationBtn] : true,
                "sm:hidden block" : true
                })} 
                disabled={navigate == 0}
                onClick={()=>setNavigate(navigate + 1)}
                >
                <MdArrowBackIos size={35}/>
              </button>
              <button className={classNames({
                "bg-gray-300 text-gray-50" : navigate + 1 == productLength,
                [navigationBtn] : true,
                })} 
                disabled={navigate + 1 == productLength}
                onClick={()=>setNavigate(navigate - 1)}
                >
                <MdArrowForwardIos size={35}/>
              </button>
            </div>
          </div>
          {(isOpen !== null && bidProducts) &&
            <BiddersList
            items ={isOpen}
            setIsOpen={setIsOpen}                
            />
          }

         
         
    </div>
  );
}
