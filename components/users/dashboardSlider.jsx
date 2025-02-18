"use client";
import Sliders from "@/components/users/sliders";

export default function SleiderProduct({products}){


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
       ]

    return(
        <div className=" flex flex-col gap-8 py-4  px-[1rem]">
        <Sliders slideShow ={2} margin ={4} scroll ={1} play ={false} responsive={responsive}>
        {products?.map((item, index)=>(
        <div key={index} className="px-12">
            <div className="w-full xl:py-12 py-2">
                <div className="flex-col gap-8 flex items-center justify-center">
                    <div className="w-[300px] h-[300px] rounded-xl overflow-hidden">
                        <img src={item?.image[0]} className="w-full h-full" alt=""/>
                    </div>
                    <div className="w-full xl:grid grid-cols-5 flex flex-col gap-8 xl:px-6 px-2">
                        <div className="col-span-2 border shadow-xl flex flex-col gap-3 p-6 text-center rounded-xl font-semibold text-[14px]">
                            <h2 className="text-[24px]">{item?.productType} details</h2>
                            <div className="flex justify-between items-center">
                                <small className="font-normal">Name:</small>
                                <small >{item?.productName}</small>
                            </div>
                            <div className="flex justify-between items-center">
                                <small className="font-normal">Colors:</small>
                                <small >{item?.color}</small>
                            </div>
                            <div className="flex justify-between items-center">
                                <small className="font-normal">Location:</small>
                                <small >{item?.location}</small>
                            </div>
                            <div className="flex justify-between items-center">
                                <small className="font-normal">Fuel:</small>
                                <small >{item?.fuel}</small>
                            </div>
                            <div className="flex justify-between items-center">
                                <small className="font-normal">Year Used:</small>
                                <small >{item?.yearsUsed}</small>
                            </div>
                            <span href="" className="pt-8 text-[16px] text-[#FF9354]">See All</span>
                        </div>
                        <div className="col-span-3 border shadow-xl flex flex-col gap-3 p-6 text-center rounded-xl font-semibold text-[14px]">
                            <h2 className="text-[24px]">Bid details</h2>
                            <div className="flex justify-between items-center">
                                <small className="font-normal">Time Left::</small>
                                <small>00:00:00</small>
                            </div>
                            <div className="flex justify-between items-center">
                                <small className="font-normal">Auction Duration::</small>
                                <small>3 days [1 day left]</small>
                            </div>
                            <div className="flex justify-between items-center">
                                <small className="font-normal">Bid Status::</small>
                                <small>Ongoing</small>
                            </div>
                            <div className="flex justify-between items-center">
                                <small className="font-normal">Your Bid::</small>
                                <small>N 4,000,000.00</small>
                            </div>
                            <div className="flex justify-between items-center mb-8">
                                <small className="font-normal">Current Bid::</small>
                                <small>N 5,500,000.00</small>
                            </div>
                            <button className="py-2 rounded-xl bg-[#EF6509] w-5/6 text-white mx-auto ">See All</button>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            ))}
        </Sliders>
    </div>
    )
}