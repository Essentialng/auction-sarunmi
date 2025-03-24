import Image from "next/image";

export function ApprovedUsers({users, productDetails}){
    return(
        <div className="col-span-2 w-full border max-h-[400px] overflow-y-scroll">
            <ul className="w-full flex flex-col justify-center text-center">
                <li className="p-4 bg-[#35318E] text-center text-white">Users</li>
                {users.map((user, index)=>(
                    <li key={index} className="hover:bg-gray-200 cursor-pointer" 
                    onClick={()=>productDetails(user.items)}>
                        <div className="grid grid-cols-5 items-center justify-center gap-2 p-2 ">
                            <div className="relative h-10 border w-10 col-span-2 flex items-right justify-end rounded-full overflow-hidden object-contain">
                                <Image src={user.profilePicture ? user.profilePicture : ""} width={100} height={100} alt=""/>
                            </div>
                            <div className="col-span-3 text-start text-nowrap truncate overflow-x-hidden">
                                <small>{user?.firstName} {user?.lastName}</small>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}


export function CheckBox({carDetails, report}){
    return(
    <>
        <div className="flex flex-col justify-between pt-10 h-full">
            {carDetails.map(()=>(
                <input type="checkbox" />
            ))}
        </div>
    </>
    )
}