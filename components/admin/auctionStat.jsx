import { calculateTimeLeft, calculateTimeToStart } from "@/utils/methods"

export default function AuctionStat({auctions}){

    const totalAuctions = auctions.length;

    const liveAuctions = auctions.filter(item => {
    const timeLeft = calculateTimeLeft(item.endTime);
    return timeLeft !== "00:00:00:00";
    });

    const endedAuctions = auctions.filter(item => {
    const timeLeft = calculateTimeLeft(item.endTime);
    return timeLeft === "00:00:00:00";
    });

    const upcomingAuctions = auctions.filter(item => {
    const timeToStart = calculateTimeToStart(item.startTime);
    return timeToStart 
    });

    

    const contents = [
        {
            title: "Total Auctions",
            value: totalAuctions
        },
        {
            title: "Live Auctions",
            value: liveAuctions?.length
        },
        {
            title: "Upcoming Auctions",
            value: upcomingAuctions?.length
        },
        {
            title: "Ended Auctions",
            value: endedAuctions?.length
        },
    ]
    
    
    return(
        <div className="flex flex-col gap-4 w-full">
            {contents.map((content, index)=>(
            <div key={index} className="flex items-center justify-between border-l-2 border-[#35318E] px-2">
                <p>{content.title}</p>
                <small className="text-[#EF6509]">{content.value}</small>
            </div>
            ))}
        </div>
    )
}