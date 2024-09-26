export default function Page(){
    return(
<div className="p-8 bg-gray-100 mt-32 px-24">
  <div className="text-sm gap-4 flex item-center mb-4 text-gray-600">
    <small className="hover:underline">Home</small> 
    <small className="hover:underline">Auctions</small> 
    <small>BMW</small>
  </div>

  <div className="">
    <div className="grid grid-cols-5 items-center">
        <div className=" col-span-3 grid grid-cols-4 gap-16">
            <div className="flex flex-col gap-4 space-y-4 w-full col-span-1">
                <div className="flex border border-[#FF9354] rounded-2xl h-32 w-28 items-center">
                    <img src="/car-four.png" className="rounded-md object-cover w-full h-auto" alt="BMW front view"/>
                </div>
                <div className=" flex items-center border border-[#FF9354] rounded-2xl h-32 w-28">
                    <img src="/car-three.png" className="rounded-md object-cover w-full h-auto" alt="BMW front view"/>
                </div>
                <div className=" flex items-center border border-[#FF9354] rounded-2xl h-32 w-28">
                    <img src="/car-two.png" className="rounded-md object-cover w-full h-auto" alt="BMW front view"/>
                </div>
            </div>
            <div className="w-full h-full col-span-3 p-6">
                <img src="/car-one.png" height={50} width={50} className="rounded-md w-full object-cover h-auto" alt="BMW main image"/>
            </div>
        </div>
        <div className="flex flex-col gap-8 col-span-2">

        <div className="flex flex-wrap lg:flex-nowrap gap-8">
          <div className="w-full ">
            <div className="bg-gray-50 py-4 px-12 rounded-2xl border border-[#EF6509]">
              <h2 className="text-lg font-semibold mb-4 text-center py-2">Vehicle Details</h2>
              <ul className="space-y-2 p-2 shadow-xl border-black border rounded-xl overflow-hidden">
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Colors:</span> White</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Lot Number:</span> 123456</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">VIN:</span> ABC123XYZ456</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Odometer:</span> 50,000 miles</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Primary Damage:</span> None</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Cylinder:</span> 6</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Transmission:</span> Automatic</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Drive:</span> AWD</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Fuel:</span> Gasoline</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Vehicle Type:</span> SUV</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Years Used:</span> 3 Years</li>
                <li className="w-full border-b py-1 border-b-black flex justify-between"><span className="font-bold">Location:</span> California, USA</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="w-full mt-24">
        <div className="bg-gray-50 p-4 rounded-t-2xl shadow-md">
            <h2 className="text-lg font-semibold mb-4">Vehicle Description</h2>
            <p>
            I'm offering my well-maintained 2016 BMW 3 Series for auction. This car delivers the perfect blend of luxury and performance with its powerful engine, smooth handling, and premium interior loaded with advanced features. I’ve thoroughly enjoyed every drive, appreciating its reliability and exhilarating performance. If you’re looking for a high-quality driving experience, this BMW is the perfect choice.
            </p>
        </div>
    </div>
    <div className="bg-[#4B3F94] text-white p-6 rounded-b-2xl">
        <div className="flex justify-between">
            <div className="space-y-4">
                <div>
                <span className="font-semibold">Time Left:</span>
                <span className="ml-2">00:00:00:00</span>
                </div>
                <div>
                <span className="font-semibold">Bid Status:</span>
                <span className="ml-2">Ongoing</span>
                </div>
                <div>
                <span className="font-semibold">Current Bid:</span>
                <span className="ml-2">₦4,000,000.00</span>
                </div>
                <div>
                <span className="font-semibold">Auction Duration:</span>
                <span className="ml-2">3 Days [1 day left]</span>
                </div>
            </div>

            <div className="space-y-4 w-1/3">
                <div className="flex flex-col gap-2">
                    <label htmlFor="lastName">Enter amount</label>
                    <input type="number" placeholder="Type amount" className="w-full px-4 py-2 rounded-md text-black text-center" />
                </div>
                <div className="flex justify-between w-full gap-8">
                <button className="bg-gray-600 hover:bg-gray-500  py-2 rounded-md w-full">Add to Watchlist</button>
                <button className="bg-[#EF6509] hover:bg-[#e25d08] py-2 rounded-md w-full">Bid</button>
                </div>
            </div>
        </div>
    </div>
  </div>
</div>

    )
}