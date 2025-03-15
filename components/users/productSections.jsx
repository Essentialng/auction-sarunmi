import { FaAngleRight } from "react-icons/fa6";
import { RiArrowDownSFill } from "react-icons/ri";
import { AuctionItems } from "./auction_items";

const filter_con = "flex 2xl:flex-row xl:flex-row md:flex-row flex-col gap-2 2xl:items-center xl:items-center md:items-center";
const filter_text = "flex items-center gap-2 border broder-white bg-[#35318E] outline-none 2xl:px-12 xl:px-12 md:px-12 px-2 2xl:py-4 xl:py-4 md:py-4 py-1 rounded-md";

export function Header({page, headline, detail, style}){
    return(
    <>
        {page !== "categories" &&
        <div className="flex flex-col gap-4">
            <div className="flex items-center 2xl:gap-4 xl:gap-4 gap-2 2xl:text-[14px] xl:text-[14px] md:text-[10px] text-[8px]">
                <span>Home</span>
                <FaAngleRight size={14}/>
                <span className="text-[#EF6509]">{page}</span>
            </div>
            <div className="relative items-center justify-center 2xl:h-[56vh] xl:h-[56vh]
                h-[20vh] overflow-hidden rounded-3xl"
                >
                <div className="relative 2xl:px-[5rem] xl:px-[5rem] px-2 text-white 
                flex flex-col justify-center h-full 2xl:w-2/3 xl:w-2/3 w-full z-30 font-[700]"
                >
                    <p className="2xl:text-[32px] xl:text-[32px] md:text-[24px] text-[18px] text- ">{headline}</p>
                    <small className="2xl:text-[24px] xl:text-[24px] md:text-[18px] 
                    text-[10px] 2xl:w-3/4 xl:w-3/4 w-5/6"
                    >
                        {detail}
                    </small>
                </div>
                <div className={`${style} absolute top-[-2rem]  w-full h-[60vh] z-10`}/>
                <div className="absolute h-full w-full bg-gradient-to-r from-[#35318E]
                    to-[#9D8CED] opacity-60 right-0 top-0 z-20"/>
            </div>
        </div>
        }
    </>
    )
}


export function ProductNav({page, category, statesData, data, productsFiter, locationHandler}){


    return(
        <>
        {(page !== "valuers" || page !== "vendors") &&
            <>            
                <div className="flex justify-between items-center bg-[#35318E] rounded-2xl 2xl:px-12 
                xl:px-12 px-4 2xl:py-4 xl:py-4 md:py-4 py-1 text-white 2xl:text-[14px] xl:text-[14px] md:text-[10px] text-[8px]"
                >
                    <select 
                    className={"flex gap-2 items-center bg-[#35318E] 2xl:text-lg xl:text-md border-none outline-none"}
                    onChange={(e) => productsFiter(e.target.value)}
                    >
                        {category?.map((value, index)=>(
                            <option key={index} value={value.id}>{value?.name}</option>
                        ))}
                    </select>
                    <div className={filter_con}>
                        <p className="pr-4">Location:</p>
                        <select 
                        className={filter_text}
                        onChange={(e) => locationHandler(e.target.value)}
                        >
                            <option value="" disabled={true}>select location</option>
                            {statesData.map((state, index)=>(
                                <option key={index} value={Object.keys(state)}>{Object.keys(state)}</option>
                            ))}
                        </select>
                    </div>
                    <div className={filter_con}>
                        <p className="pr-4">Sort:</p>
                        <div className={filter_text}>
                            <span>Ending soon</span>
                            <RiArrowDownSFill size={18} color="gray"/>
                        </div>
                    </div>
                </div>

                <AuctionItems 
                auctions={data} 
                page={page}
                />
            </>
        }
        </>
    )
}