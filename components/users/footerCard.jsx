import { FaArrowRight } from "react-icons/fa6";

export default function FooterCard(){
    return(
        <div className="footer relative py-10 xl:px-20 px-4 text-white 2xl:text-[20px] xl:text-[18px] text-[16px]
        rounded-2xl font-[500] text-center xl:mx-72 mx-4 overflow-hidden">
            <div className="relative z-40 w-full flex flex-col justify-center items-center gap-8">
                <p>
                    Join now to explore a diverse range of items such as used cars, home appliances, gadgets, 
                    and much more through our 100% online auction platform.
                </p>
                <div className="relative flex gap-4 py-2 px-4 justify-center items-center
                bg-[#EF6509] rounded-2xl w-1/2 cursor-pointer hover:opacity-85">
                    <small>REGISTER & START BIDDING</small>
                    <FaArrowRight size={20}/>
                </div>
            </div>
            <div className="absolute w-full h-full top-0 right-0 bg-gradient-to-r to-[#9D8CED] from-[#35318E] z-10 opacity-90"/>
        </div>
    )
}