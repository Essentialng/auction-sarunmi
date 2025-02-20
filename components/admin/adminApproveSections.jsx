import Image from "next/image";

export function ApprovedUsers({users}){
    return(
        <div className="col-span-2 w-full border">
            <ul className="w-full flex flex-col gap-4 justify-center text-center">
                <li className="p-4 bg-[#35318E] text-center text-white">Users</li>
                {users.map((user, index)=>(
                    <li key={index} >
                        <div className="grid grid-cols-5 items-center justify-center gap-4 p-2 ">
                            <div className="col-span-2 flex items-right justify-end">
                                <Image src={user.img} width={20} height={20} alt=""/>
                            </div>
                            <div className="col-span-3 text-start">
                                <small>{user.name}</small>
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
        <div className="flex flex-col justify-between pt-10 h-full">
            {report.map(()=>(
                <input type="checkbox" />
            ))}
        </div>
    </>
    )
}