import Image from "next/image";
import classnames from "classnames"
import { FaArrowRight } from "react-icons/fa6";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";


export  default function Auctions(){
    const auctions = 
        {
            "cars": [
                {
                    "image": "/car-one.png",
                    "status": "Live Auction",
                },
                {
                    "image": "/car-two.png",
                    "status": "Live Auction",
                },
                {
                    "image": "/car-three.png",
                    "status": "Live Auction",
                },
                {
                    "image": "/car-four.png",
                    "status": "Upcoming Auction",
                },

            ],
            "properties": [
                {
                    "image": "/property-one.png",
                    "status": "Live Auction",
                },
                {
                    "image": "/property-two.png",
                    "status": "Live Auction",
                },
                {
                    "image": "/property-three.png",
                    "status": "Upcoming Auction",
                },
                {
                    "image": "/property-four.png",
                    "status": "Live Auction",
                },
        ],
            "electronics": [
                {
                    "image": "/electronic-one.png",
                    "status": "Live Auction",
                },
                {
                    "image": "/electronic-two.png",
                    "status": "Live Auction",
                },
                {
                    "image": "/eletronic-three.png",
                    "status": "Upcoming Auction",
                },
                {
                    "image": "/eletronic-four.png",
                    "status": "Live Auction",
                },
        ]
        }

        const btn_class = "bg-[#EF6509] text-white text-[16px] font-[500] px-5 py-2 rounded-lg hover:bg-[#35318E] hover:shadow-black shadow-sm"
    
    return(
        <div className="px-[4rem] py-24">
            <h1 className="text-[30px] font-[700] py-12">Top Auctions</h1>
            <div className="flex flex-col gap-20">
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between ">
                        <span className="text-[24px] font-[600]">Cars</span>
                        <small className="text-[20px] font-[500] text-[#EF6509]">View all</small>
                    </div>
                    <div className="flex gap-4 relative">
                        {auctions.cars.map((car)=>(
                        <div className="flex flex-col gap-2 items-center hover:scale-95 transition-all duration-500 ease-in-out">
                            <div className={classnames({
                                "w-1/3 text-center py-4 rounded-[10px] border border-[#7BC27A] font-[700] shadow-md ": true,
                                "border-[#FF9354] text-[#FF9354]": car.status === "Upcoming Auction",
                                })}>
                                <p>00:00:00:00</p>
                            </div>
                            <div className={classnames({
                                "py-4 px-[20px] rounded-[10px] items-center flex flex-col gap-10 border border-[#7BC27A] font-[700] shadow-md": true,
                                "border-[#FF9354]": car.status === "Upcoming Auction",
                                })}>
                                <div className="relative">
                                    <Image src={car.image} width={260} height={170}/>
                                </div>
                                <div className="flex flex-col gap-4"> 
                                    <div className={classnames(
                                        {
                                            "flex justify-between items-center text-[14px] font-[400] text-[#7BC27A]" : true,
                                            "text-[#FF7B58]" : car.status === "Upcoming Auction"

                                        })}>
                                        <div className="flex gap-2 items-center">
                                            <FaCircle size={10}/>
                                            <small>{car.status}</small>
                                        </div>
                                        <div>
                                            <IoIosCheckmarkCircleOutline size={16}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[16px] font-[700]">Toyota Camry</h4>
                                        <small className="text-[14px] font-[400]">
                                        This 2018 Toyota Camry has been
                                        a joy to drive, offering exceptional reliability ..
                                        </small>
                                    </div>
                                    <div className="flex gap-4 text-[14px]">
                                        <span className="font-[400]">Retail Value:</span>
                                        <h4 className="font-[700]">N 4,000,000.00</h4>
                                    </div>
                                </div>
                                {
                                car.status === "Upcoming Auction" ?
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
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between ">
                        <span className="text-[24px] font-[600]">Properties</span>
                        <small className="text-[20px] font-[500] text-[#EF6509]">View all</small>
                    </div>
                    <div className="flex gap-4 relative">
                        {auctions.properties.map((car)=>(
                        <div className="flex flex-col gap-2 items-center  hover:scale-95 
                        transition-all duration-500 ease-in-out">
                            <div className={classnames({
                                "w-1/3 text-center py-4 rounded-[10px] border border-[#7BC27A] font-[700] shadow-md ": true,
                                "border-[#FF9354] text-[#FF9354]": car.status === "Upcoming Auction",
                                })}>
                                <p>00:00:00:00</p>
                            </div>
                            <div className={classnames({
                                "py-4 px-[20px] rounded-[10px] items-center flex flex-col gap-10 border border-[#7BC27A] font-[700] shadow-md": true,
                                "border-[#FF9354]": car.status === "Upcoming Auction",
                                })}>
                                <div className="relative">
                                    <Image src={car.image} width={260} height={170}/>
                                </div>
                                <div className="flex flex-col gap-4"> 
                                    <div className={classnames(
                                        {
                                            "flex justify-between items-center text-[14px] font-[400] text-[#7BC27A]" : true,
                                            "text-[#FF7B58]" : car.status === "Upcoming Auction"

                                        })}>
                                        <div className="flex gap-2 items-center">
                                            <FaCircle size={10}/>
                                            <small>{car.status}</small>
                                        </div>
                                        <div>
                                            <IoIosCheckmarkCircleOutline size={16}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[16px] font-[700]">3 Bedroom House</h4>
                                        <small className="text-[14px] font-[400]">
                                        This home boasts a spacious living area, a modern kitchen, and
                                         a serene ...
                                        </small>
                                    </div>
                                    <div className="flex gap-4 text-[14px]">
                                        <span className="font-[400]">Retail Value:</span>
                                        <h4 className="font-[700]">N 4,000,000.00</h4>
                                    </div>
                                </div>
                                {
                                car.status === "Upcoming Auction" ?
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
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex justify-between ">
                        <span className="text-[24px] font-[600]">Electronics</span>
                        <small className="text-[20px] font-[500] text-[#EF6509]">View all</small>
                    </div>
                    <div className="flex gap-4 relative">
                        {auctions.electronics.map((car)=>(
                        <div className="flex flex-col gap-2 items-center hover:scale-95 transition-all duration-500 ease-in-out">
                            <div className={classnames({
                                "w-1/3 text-center py-4 rounded-[10px] border border-[#7BC27A] font-[700] shadow-md ": true,
                                "border-[#FF9354] text-[#FF9354]": car.status === "Upcoming Auction",
                                })}>
                                <p>00:00:00:00</p>
                            </div>
                            <div className={classnames({
                                "py-4 px-[20px] rounded-[10px] items-center flex flex-col gap-10 border border-[#7BC27A] font-[700] shadow-md": true,
                                "border-[#FF9354]": car.status === "Upcoming Auction",
                                })}>
                                <div className="relative">
                                    <Image src={car.image} width={260} height={170}/>
                                </div>
                                <div className="flex flex-col gap-4"> 
                                    <div className={classnames(
                                        {
                                            "flex justify-between items-center text-[14px] font-[400] text-[#7BC27A]" : true,
                                            "text-[#FF7B58]" : car.status === "Upcoming Auction"

                                        })}>
                                        <div className="flex gap-2 items-center">
                                            <FaCircle size={10}/>
                                            <small>{car.status}</small>
                                        </div>
                                        <div>
                                            <IoIosCheckmarkCircleOutline size={16}/>
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className="text-[16px] font-[700]">Toyota Camry</h4>
                                        <small className="text-[14px] font-[400]">
                                        This 2018 Toyota Camry has been
                                        a joy to drive, offering exceptional reliability ..
                                        </small>
                                    </div>
                                    <div className="flex gap-4 text-[14px]">
                                        <span className="font-[400]">Retail Value:</span>
                                        <h4 className="font-[700]">N 4,000,000.00</h4>
                                    </div>
                                </div>
                                {
                                car.status === "Upcoming Auction" ?
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
                </div>
            </div>
        </div>
    )
}