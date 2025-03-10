import { FaArrowTrendUp } from "react-icons/fa6";
import DonutChart from "./Charts";


export function Card({card, index}){

    return(
        <div className={`flex flex-col gap-4 rounded-2xl p-8 ${index % 2 == 0 ? "bg-[#E7DEFF]" : "bg-[#FFD7BC]"}`}>
            <div className={`h-fit rounded-xl text-[12px]`}>
                {card.name}
            </div>
            <div className="flex items-center justify-between">
                <h4 className="text-2xl font-bold text-end">{card.count}</h4>
                <div className="flex items-center gap-1">
                    <small className="text-[12px]">
                        {card.percent}% 
                    </small>
                    <FaArrowTrendUp size={12}/>
                </div>
            </div>
        </div>
    )
}


export function Revenue(){
    return(
        <div className="col-span-3 py-8 px-4 bg-[#F7F9FB] rounded-xl">
            <div className="mb-4">
                <p>Revenue Generated</p>
            </div>
            <div className="flex items-center gap-4">
                <div className="flex flex-col gap-8">
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#534D99]"/>
                            <small>35%</small>
                        </div>
                        <small>Auctions</small>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#36D197]"/>
                            <small>45%</small>
                        </div>
                        <small>Subscription</small>
                    </div>
                    <div className="flex flex-col items-center">
                        <div className="flex items-center gap-2">
                            <div className="h-4 w-4 bg-[#FF7762]"/>
                            <small>20%</small>
                        </div>
                        <small>Auctions</small>
                    </div>
                </div>
                <DonutChart/>
            </div>  
        </div>
    )
}