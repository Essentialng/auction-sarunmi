"use client";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Sliders from "@/components/users/sliders"; 
import { calculateTimeLeft, calculateDays } from '@/utils/methods';
import { useRouter } from 'next/navigation';
import {BidDetails, Details, Images} from './dashBoardCards';
import { responsive } from '@/utils/responsivenes';
import BiddersList from './listOfBidders';
import { useState } from 'react';



export default function SliderProduct({ products, bidProducts }) {

  const router = useRouter();
  const [isOpen, setIsOpen] = useState(null);
 

  const handleViewAuction = (data) => {
    localStorage.setItem('auctionData', JSON.stringify(data)); 
    router.push('/description');  
  };

  const item = products?.some(product=>product?.bid)

  return (
    <div className="flex flex-col gap-8 py-4 px-[1rem]">
      <Sliders 
      infinite= {false}
      slidesToShow= {2.5}
      slideMargin= {40}
      slidesToScroll= {1}
      autoplay= {true} 
      responsive={responsive}
      >
        {products?.map((product, index) => {

          const timeLeft = item ? calculateTimeLeft(product?.bid?.item?.startTime, product?.bid?.item?.endTime) : calculateTimeLeft(product?.startTime, product?.endTime)
          const auctionDuration = item ? calculateDays(product?.bid?.item?.startTime, product?.bid?.item?.endTime) : calculateDays(product?.startTime, product?.endTime)
          const status = item ? product?.bid?.item?.status : product?.status
          const image = item ? product?.bid?.item?.images[0] : product?.images[0]
          const name = item ? product?.bid?.item?.name : product?.name
          const description = item ? product?.bid?.item?.details : product?.details
          const yourBid = item ? product?.bid?.item?.price?.toLocaleString() : product?.price?.toLocaleString()
          const currentBid = product?.highestBid?.amount?.toLocaleString() 

          return(
            <>
          <div 
          key={index} 
          className={`xl:px-12 px-2 ${bidProducts && "cursor-pointer"}`}
          onClick={()=>setIsOpen(index)}
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
                  product={product} 
                  handleViewAuction = {handleViewAuction} 
                  />
                </div>
              </div>
            </div>
          </div>
          
          {(isOpen !== null && bidProducts) &&
            <BiddersList
            bids ={product.bids}
            setIsOpen={setIsOpen}                />
          }

          </>
          )
        })}
      </Sliders>
    </div>
  );
}
