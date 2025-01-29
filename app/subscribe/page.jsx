import Background from "@/components/users/backgroundImg";
import { RiArrowLeftSLine } from "react-icons/ri";
import { RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";

export default function Page(){
    return(
  <div className="px-24 py-12 grid grid-cols-5 mt-28 ">
    <div className="flex items-center justify-center col-span-3 gap-12 border rounded-2xl shadow-2xl py-12">
        <div className="bg-[#0000001A] rounded-lg">
            <RiArrowLeftSLine size={40} color="#C6CBC7" />
        </div>
        <div className="bg-white w-2/3 flex flex-col gap-8">
            <h3 className="text-center text-xl font-semibold text-gray-800">SUBSCRIPTION</h3>
            <div className="rounded-lg shadow p-6 border">
                <div className="bg-purple-700 text-white rounded-lg p-4 mb-6">
                    <h4 className="text-lg font-semibold">Basic</h4>
                    <p className="text-sm">Exclusive access for basic member</p>
                    <p className="text-3xl font-bold mt-4">N 20,000</p>
                    <p className="text-sm">NGN / YEAR</p>
                </div>
                <div className="mb-6">
                    <h5 className="text-orange-600 font-semibold mb-2">Bidding</h5>
                    <ul className="text-gray-700 mb-4">
                    <li className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Bid up to N 10,000 daily
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Bid up to 10 products daily
                    </li>
                    </ul>
                    <h5 className="text-orange-600 font-semibold mb-2">Benefit</h5>
                    <ul className="text-gray-700">
                    <li className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Follow Multiple Auctions
                    </li>
                    <li className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Personalized Alert
                    </li>
                    <li className="flex items-center mb-2">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Saved Searches
                    </li>
                    <li className="flex items-center">
                        <svg className="w-5 h-5 text-green-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
                        </svg>
                        Watchlist
                    </li>
                    </ul>
                </div>
            </div>
            <Link href="/payment">
                <button className="bg-orange-500 text-white font-semibold py-3 w-full rounded-lg hover:bg-orange-600">
                    SUBSCRIBE
                </button>
            </Link>
        </div>
        <div className="bg-[#0000001A] rounded-lg">
            <RiArrowRightSLine size={40} color="white"/>
        </div>
    </div>
      <Background/>
    
  </div>

    )
}