export default function Permissions({l_permission, r_permission}){
    return(
        <div className="w-full grid grid-cols-2 gap-12">
            <div className="col-span-1 grid grid-cols-5">
                <div className="col-span-3 flex flex-col gap-4">
                    <strong>Permissions</strong>
                    {r_permission.map((item, index)=>(
                        <small>{item}</small>
                    ))}
                </div>
                <div className="col-span-1 flex flex-col gap-5 text-center">
                    <p>Yes</p>
                    <div className="flex flex-col justify-between h-full">
                        {r_permission.map(()=>(
                            <input type="checkbox" />
                        ))}
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-5 text-center">
                    <p>No</p>
                    <div className="flex flex-col justify-between h-full">
                        {r_permission.map(()=>(
                            <input type="checkbox" />
                        ))}
                    </div>
                </div>
            </div>
            <div className="col-span-1 grid grid-cols-5 h-fit">
                <div className="col-span-3 flex flex-col gap-4">
                    <strong className="text-white">Permissions</strong>
                    {l_permission.map((item, index)=>(
                        <small>{item}</small>
                    ))}
                </div>
                <div className="col-span-1 flex flex-col gap-5 text-center">
                    <p>Yes</p>
                    <div className="flex flex-col justify-between h-full">
                        {l_permission.map(()=>(
                            <input type="checkbox" />
                        ))}
                    </div>
                </div>
                <div className="col-span-1 flex flex-col gap-5 text-center">
                    <p>No</p>
                    <div className="flex flex-col justify-between  h-full">
                        {l_permission.map(()=>(
                            <input type="checkbox" />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}