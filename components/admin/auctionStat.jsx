export default function AuctionStat({stats}){
    return(
        <div className="flex flex-col gap-4 w-full">
            <div className="flex items-center justify-between border-l-2 border-[#35318E] px-2">
                <p>Total Auctions</p>
                <small className="text-[#EF6509]">100</small>
            </div>
            <div className="flex items-center justify-between border-l-2 border-[#30953C] px-2">
                <p>Live Auctions</p>
                <small className="text-[#EF6509]">100</small>
            </div>
            <div className="flex items-center justify-between border-l-2 border-[#EF6509] px-2">
                <p>Upcoming Auctions</p>
                <small className="text-[#EF6509]">100</small>
            </div>
            <div className="flex items-center justify-between border-l-2 border-[#534D99] px-2">
                <p>Completed Auctions</p>
                <small className="text-[#EF6509]">100</small>
            </div>
        </div>
    )
}