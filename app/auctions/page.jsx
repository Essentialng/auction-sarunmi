import { FaAngleRight } from "react-icons/fa6";

export default function Page(){
    return(
        <div className="2xl:px-[4rem] xl:px-[4rem] px-[1rem] pt-[10rem] ">
            <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                    <span>Home</span>
                    <FaAngleRight size={14}/>
                    <span className="text-[#EF6509]">Auctions</span>
                </div>
                <div className="relative items-center justify-center h-[56vh] overflow-hidden rounded-3xl">
                    <div className="relative px-[5rem] text-white flex flex-col justify-center h-full w-2/3 z-30 font-[700]">
                        <p className="text-[32px] ">Discover Exceptional Deals on Premium Items</p>
                        <small className="text-[24px] w-3/4">Bid now on exclusive products and unbeatable offers 
                        in our live auctions.</small>
                    </div>
                    <div className="auctions absolute top-[-2rem] right-[-10rem] w-full h-[60vh] z-10">
                        
                    </div>
                    <div className="absolute h-full w-full bg-gradient-to-r from-[#35318E] to-[#9D8CED] opacity-60 right-0 top-0 z-20"/>
                </div>
            </div>
        </div>
    )
}