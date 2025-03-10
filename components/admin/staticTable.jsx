export default function Static({stats}){
    return(
        <div className="flex items-center gap-6">
            <div className="w-full flex flex-col gap-4">
            {stats?.map((stat, index)=>(
                index <= 2 && 
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <p>{stat?.name}</p>
                        <small className="text-[#EF6509]">{stat?.count}</small>
                    </div>
                    <div className="w-full bg-[#F5F5F5] shadow-md">
                        <div style={{ width: `${stat?.percent}%` }} className={`w-[${stat?.percent}%] h-2 bg-[#35318E] rounded-xl`} />
                    </div>
                </div>
            ))}
            </div>
           
            <div className="w-full flex flex-col gap-4">
            {stats?.map((stat, index)=>(
                index > 2 && 
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <p>{stat?.name}</p>
                        <small className="text-[#EF6509]">{stat?.count}</small>
                    </div>
                    <div className="w-full bg-[#F5F5F5] shadow-md">
                        <div style={{ width: `${stat?.percent}%` }} className={` h-2 bg-[#35318E] rounded-xl`} />
                    </div>
                </div>
            ))}
            </div>
        </div>
    )
}