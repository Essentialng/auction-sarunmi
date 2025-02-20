"use client";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Sliders from "@/components/users/sliders"; // Slider component
import { formatText, calculateTimeLeft, calculateDays } from '@/utils/methods';
import { useRouter } from 'next/navigation';

export default function SleiderProduct({ products }) {

  const router = useRouter();

  const responsive = [
    {
      breakpoint: 1034,
      settings: {
        slidesToShow: 2.5,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 840,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        initialSlide: 2,
        infinite: false,
        dots: false
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: false,
        dots: false
      }
    }
  ];

  const handleViewAuction = (data) => {
    localStorage.setItem('auctionData', JSON.stringify(data)); 
    router.push('/description');  
  };

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
        {products?.userBids?.map((product, index) => (
          <div key={index} className="px-12">
            <div className="w-full xl:py-12 py-2">
              <div className="flex-col gap-8 flex items-center justify-center">
                <div className="w-[400px] h-[300px] rounded-xl overflow-hidden">
                  <img
                    src={product?.item?.images[0]}
                    className="w-full h-full"
                    alt={product?.item?.name || "Product Image"}
                  />
                </div>
                <div className="w-full xl:grid grid-cols-7 flex flex-col gap-1 xl:px-6 px-2">
                  <div className="col-span-3 border shadow-xl flex flex-col gap-3 p-6 text-center rounded-xl font-semibold text-[14px]">
                    <h2 className="text-[24px]">Details</h2>
                    <div className="flex justify-between items-center">
                      <small className="font-normal">Name:</small>
                      <small>{product?.item?.name}</small>
                    </div>
                    {Object.entries(product?.item?.details).map(([key, value], index)=>(
                    <div className="flex justify-between gap-12 items-center">
                      <small className="font-normal">{formatText(key)}:</small>
                      <small className=' truncate'>{key == "ProofOfOwnership" ? "YES" : value}</small>
                    </div>
                    ))}
                    <span href="" className="pt-8 text-[16px] text-[#FF9354]">See All</span>
                  </div>
                  <div className="col-span-4 border shadow-xl flex flex-col gap-3 p-6 text-center rounded-xl font-semibold text-[14px]">
                    <h2 className="text-[24px]">Bid Details</h2>
                    <div className="flex justify-between items-center">
                      <small className="font-normal">Time Left:</small>
                      <small>{calculateTimeLeft(product?.item?.startTime, product?.item?.endTime)}</small>
                    </div>
                    <div className="flex justify-between items-center">
                      <small className="font-normal">Auction Duration:</small>
                      <small>{calculateDays(product?.item?.startTime, product?.item?.endTime)}</small>
                    </div>
                    <div className="flex justify-between items-center">
                      <small className="font-normal">Bid Status:</small>
                      <small>Ongoing</small>
                    </div>
                    <div className="flex justify-between items-center">
                      <small className="font-normal">Your Bid:</small>
                      <small>{product?.item?.price?.toLocaleString()}</small>
                    </div>
                    <div className="flex justify-between items-center mb-8">
                      <small className="font-normal">Current Bid:</small>
                      <small>N {product?.highestBid?.amount?.toLocaleString()}</small>
                    </div>
                    <button onClick={()=>{handleViewAuction(product?.item)}} className="py-2 rounded-xl bg-[#EF6509] w-5/6 text-white mx-auto">SUBMIT A NEW  BID</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Sliders>
    </div>
  );
}
