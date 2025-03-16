import Image from "next/image"
import { FaRegEnvelope } from "react-icons/fa";
import { FiPhone } from "react-icons/fi";


export default function UserCard({userData}){
    return(
        <div className="col-span-2 flex flex-col gap-4">
            {userData.map((data, index)=>(
            <div key={index} className="flex flex-col gap-2 bg-gray-100 rounded-xl py-8">
                <div className="flex justify-center gap-8 ">
                    <div className="rounded-full border h-fit overflow-hidden">
                        <Image alt={data?.profilepicture ? data?.profilepicture : ""} width={50} height={50}/>
                    </div>
                    <div className="flex flex-col text-sm">
                        <p className="text-lg font-medium">{data?.name}</p>
                        <div className="flex items-center gap-4">
                            <FaRegEnvelope size={12}/>
                            <small>{data?.email}</small>
                        </div>
                        <div className="flex items-center gap-4">
                            <FiPhone size={12}/>
                            <small>+{data?.phoneNumber}</small>
                        </div>
                        <div>
                            <small>Subscription: <strong>{data?.subscriptionType}</strong></small>
                        </div>
                    </div>
                </div>
                <div className="flex itmes-center justify-center gap-4 text-[16px] font-normal px-6 mt-4">
                    <button className="w-1/2 border-black text-[#464D77] border rounded-xl py-2">CONFIRM PAYMENT</button>
                    <button className="w-1/3 bg-[#EF6509] text-white rounded-xl py-2">VERIFY</button>
                </div>
            </div>
            ))}
        </div>
    )
}