import Image from "next/image";
import classnames from "classnames";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";

export function AuctionItems({auctions, page}){

    const btn_class = "bg-[#EF6509] text-white 2xl:text-[15px] xl:text-[15px] md:text-[15px] text-[12px] font-[500] px-5 py-2 rounded-lg hover:bg-[#35318E] hover:shadow-black shadow-sm"
    return(
        <div className={classnames({
            "grid md:grid-cols-2 grid-cols-1 gap-4 relative" : true,
            "2xl:grid-cols-4 xl:grid-cols-4" : page !== "categories",
             "2xl:grid-cols-3 xl:grid-cols-3" : page === "categories"
            })}>
            {auctions?.map((item, index)=>(
            <div
            key={index} 
            className="flex flex-col gap-2 items-center hover:scale-95 transition-all duration-500 ease-in-out">
                <div className={classnames({
                    "w-1/3 text-center py-4 rounded-[10px] border border-[#7BC27A] font-[700] shadow-md ": true,
                    "border-[#FF9354] text-[#FF9354]": item.status === "Upcoming Auction",
                    })}>
                    <p>00:00:00:00</p>
                </div>
                <div className={classnames({
                    "py-4 px-[20px] rounded-[10px] items-center flex flex-col gap-10 border border-[#7BC27A] font-[700] shadow-md": true,
                    "border-[#FF9354]": item.status === "Upcoming Auction",
                    })}>
                    <div className="relative">
                        <Image src={item.image} width={260} height={170}/>
                    </div>
                    <div className="flex flex-col gap-4"> 
                        <div className={classnames(
                            {
                                "flex justify-between items-center text-[14px] font-[400] text-[#7BC27A]" : true,
                                "text-[#FF7B58]" : item.status === "Upcoming Auction"

                            })}>
                            <div className="flex gap-2 items-center">
                                <FaCircle size={10}/>
                                <small>{item.status}</small>
                            </div>
                            <div>
                                <IoIosCheckmarkCircleOutline size={16}/>
                            </div>
                        </div>
                        <div>
                            <h4 className="text-[16px] font-[700]">{item.type}</h4>
                            <small className="text-[14px] font-[400]">
                            {item.detail}
                            </small>
                        </div>
                        <div className="flex gap-4 text-[14px]">
                            <span className="font-[400]">Retail Value:</span>
                            <h4 className="font-[700]">N 4,000,000.00</h4>
                        </div>
                    </div>
                    {
                    item.status === "Upcoming Auction" ?
                        <button className={btn_class}>JOIN AUCTION</button> :
                        <div className="flex gap-3">
                        <button className={btn_class}>VIEW AUCTION</button>
                        <button className={btn_class}>PRE BID</button>
                        </div>
                    }
                    
                </div>
            </div>
            ))}
        </div>
    )
};

