export default function Static(){
    return(
        <div className="flex items-center gap-6">
            <div className="w-full flex flex-col gap-4">
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <p>Total Users</p>
                        <small className="text-[#EF6509]">10000</small>
                    </div>
                    <div className="w-full bg-[#F5F5F5] shadow-md">
                        <div className="w-[100%] h-2 bg-[#35318E] rounded-xl"/>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <p>Active Users</p>
                        <small className="text-[#EF6509]">6000</small>
                    </div>
                    <div className="w-full bg-[#F5F5F5] shadow-md">
                        <div className="w-[70%] h-2 bg-[#35318E] rounded-xl"/>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <p>Inactive Users</p>
                        <small className="text-[#EF6509]">4000</small>
                    </div>
                    <div className="w-full bg-[#F5F5F5] shadow-md">
                        <div className="w-[30%] h-2 bg-[#35318E] rounded-xl"/>
                    </div>
                </div>
                
            </div>
            <div className="w-full flex flex-col gap-4">
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <p>Basic Subscribers</p>
                        <small className="text-[#EF6509]">3500</small>
                    </div>
                    <div className="w-full bg-[#F5F5F5] shadow-md">
                        <div className="w-[30%] h-2 bg-[#35318E] rounded-xl"/>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <p>Standard Subscribers</p>
                        <small className="text-[#EF6509]">4000</small>
                    </div>
                    <div className="w-full bg-[#F5F5F5] shadow-md">
                        <div className="w-[40%] h-2 bg-[#35318E] rounded-xl"/>
                    </div>
                </div>
                <div className="w-full">
                    <div className="flex justify-between items-center">
                        <p>Premium Subscribers</p>
                        <small className="text-[#EF6509]">2500</small>
                    </div>
                    <div className="w-full bg-[#F5F5F5] shadow-md">
                        <div className="w-[45%] h-2 bg-[#35318E] rounded-xl"/>
                    </div>
                </div>
                
            </div>
        </div>
    )
}