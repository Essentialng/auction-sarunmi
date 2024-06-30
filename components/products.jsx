import { FaAngleRight } from "react-icons/fa6";
import { RiArrowDownSFill } from "react-icons/ri";
import { AuctionItems } from "./auction_items";

export default function Products({page, headline, detail, category, style, data}){
    return(
        <div className="flex flex-col gap-8 2xl:px-[4rem] xl:px-[4rem] px-[1rem] py-[10rem] ">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <span>Home</span>
                    <FaAngleRight size={14}/>
                    <span className="text-[#EF6509]">{page}</span>
                </div>
                <div className="relative items-center justify-center h-[56vh] overflow-hidden rounded-3xl">
                    <div className="relative px-[5rem] text-white flex flex-col justify-center h-full w-2/3 z-30 font-[700]">
                        <p className="text-[32px] ">{headline}</p>
                        <small className="text-[24px] w-3/4">{detail}</small>
                    </div>
                    <div className={`${style} absolute top-[-2rem] right-[-10rem] w-full h-[60vh] z-10`}>
                        
                    </div>
                    <div className="absolute h-full w-full bg-gradient-to-r from-[#35318E] to-[#9D8CED] opacity-60 right-0 top-0 z-20"/>
                </div>
            </div>
            <div className="flex justify-between bg-[#35318E] rounded-2xl px-12 py-4 text-white">
                <div className="flex gap-2 items-center">
                    <span>{category}</span>
                    <RiArrowDownSFill size={18} color="gray"/>
                </div>
                <div className="flex gap-2 items-center">
                    <p className="pr-4">Location:</p>
                    <div className="flex items-center gap-2 border broder-white px-12 py-4 rounded-md">
                        <span>Lagos</span>
                        <RiArrowDownSFill size={18} color="gray"/>
                    </div>
                </div>
                <div className="flex gap-2 items-center">
                    <p className="pr-4">Sort:</p>
                    <div className="flex items-center gap-2 border broder-white px-12 py-4 rounded-md">
                        <span>Ending soon</span>
                        <RiArrowDownSFill size={18} color="gray"/>
                    </div>
                </div>
            </div>
            <AuctionItems auctions = {data}/>
        </div>
    )
}