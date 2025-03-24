import { FaAngleRight } from "react-icons/fa6";
import { RiArrowDownSFill } from "react-icons/ri";
import { AuctionItems } from "./auction_items";
import { useState, useEffect } from "react";
import { getAuctionStatus } from "@/utils/methods";
import { IoIosArrowBack } from "react-icons/io";
import { statesLists } from "@/utils/location";

const filter_con = "relative flex 2xl:flex-row xl:flex-row md:flex-row flex-col gap-2 2xl:items-center xl:items-center md:items-center";
const filter_text = "relative flex items-center gap-2 border broder-white bg-[#35318E] outline-none xl:px-12 px-2 xl:py-4  py-1 rounded-md";

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


export function ProductNav({page, category, data, productsFiter, locationHandler, typeFilter, amountFiltering, link, onPage}){
    const [sortedData, setSortedData] = useState(data);
    const [selectBtn, setSelectBtn] = useState(false);
    const [lga, setLga] = useState([]);
    
    //   const sortHandler = (value) => {
    //     let filtered = [...data];
    
    //     if (value === 'Ending soon') {
    //       filtered = filtered
    //         .filter(item => getAuctionStatus(item.startTime, item.endTime) === 'Ongoing')
    //         .sort((a, b) => new Date(a.endTime) - new Date(b.endTime));
    //     } else if (value === 'Ended') {
    //       filtered = filtered.filter(item => getAuctionStatus(item.startTime, item.endTime) === 'Ended');
    //     } else if (value === 'Upcoming') {
    //       filtered = filtered.filter(item => getAuctionStatus(item.startTime, item.endTime) === 'Upcoming');
    //     } else {
    //       filtered = [...data]; // All
    //     }
    
    //     setSortedData(filtered);
    //   };

    const toggleSelectBtn = ()=>{
        setSelectBtn(!selectBtn);
        setLga([]);
    };

    const locationSelected= (location)=>{
        locationHandler(location)
        setSelectBtn(false);
        setLga([]);
    }

      useEffect(()=>{
        setSortedData(data)
      },[data]);
      
    
      const dropDown = "max-h-[300px] w-full flex flex-col overflow-auto absolute xl:mt-16 mt-6 bg-[#35318E] z-10 cursor-pointer"
    return(
        <>
        {((page !== "valuers" || page !== "vendors") ) &&
            <>
               
                <div className="flex justify-between items-center bg-[#35318E] rounded-2xl 2xl:px-12 
                xl:px-12 px-4 2xl:py-4 xl:py-4 md:py-4 py-1 text-white 2xl:text-[14px] xl:text-[14px] md:text-[10px] text-[8px]"
                >
                    <select 
                    className={"flex gap-2 items-center bg-[#35318E] 2xl:text-lg xl:text-md border-none outline-none"}
                    onChange={(e) => productsFiter(e.target.value)}
                    >
                        <option value={"All"}>All</option>
                        {category?.map((value, index)=>(
                            <option key={index} value={value.id}>{value?.name}</option>
                        ))}
                    </select>
                    <div className={filter_con}>
                        <p className="pr-4">Location:</p>
                        <div 
                        className={`flex-col w-full relative flex items-center gap-2 bg-[#35318E]`}
                        >
                            <button
                            className="w-full xl:py-4 py-1 xl:px-12 px-8 xl:rounded-xl rounded-md border broder-white outline-none"  
                            onClick={toggleSelectBtn}
                            >select location
                            </button>

                            {(selectBtn && lga?.length == 0)&&
                            <div className={dropDown}>
                                {statesLists.map((location, index)=>(
                                <p 
                                key={index} 
                                className="p-4 hover:bg-slate-300 hover:text-black"
                                onClick={()=>(setLga(statesLists[index].lgas))}
                                >
                                    {location.state}
                                </p>
                                ))}
                            </div>
                            }

                            {lga != 0 &&
                            <div className={dropDown}>
                                <div className="flex items-center gap-2 font-400 text-gray-500 px-4 
                                cursor-pointer hover:bg-red-400 hover:text-white"
                                onClick={()=>setLga([])}>
                                    <IoIosArrowBack color="white"/>
                                    <small>return to states</small>
                                </div>
                                
                                {lga?.map((location, index)=>(
                                <p 
                                key={index} 
                                className="p-4 hover:bg-slate-300 hover:text-black"
                                onClick={()=>locationSelected(location)}
                                >
                                    {location}
                                </p>
                                ))}
                            </div>
                            }
                        </div>
                    </div>
                    {/* <div className={filter_con}>
                        <p className="pr-4">Sort:</p>
                        <select className={filter_text} onChange={(e) => sortHandler(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Ending soon">Ending soon</option>
                            <option value="Ended">Ended</option>
                            <option value="Upcoming">Upcoming</option>
                        </select>
                    </div> */}
                    {page == "Property" &&
                    <div className={filter_con}>
                        <p className="pr-4">Type:</p>
                        <select className={filter_text} onChange={(e) => typeFilter(e.target.value)}>
                            <option value="All">All</option>
                            <option value="sale">Sale</option>
                            <option value="rent">Rent</option>
                        </select>
                    </div>
                    }

                    <div className={filter_con}>
                        <p className="pr-4">amount:</p>
                        <select className={filter_text} onChange={(e) => amountFiltering(e.target.value)}>
                            <option value="All">All</option>
                            <option value="Low">Under 500k</option>
                            <option value="High">500k - 5M</option>
                            <option value="Higher">5M - 20M</option>
                            <option value="More higher">20M - 200M</option>
                            <option value="Highest">More than 200M</option>
                        </select>
                    </div>
                </div>
                
                <AuctionItems 
                auctions={sortedData} 
                page={page}
                link={link}
                onPage={onPage}
                />
            </>
        }
        </>
    )
}