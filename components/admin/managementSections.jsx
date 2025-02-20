import Activity from "./activity"

export function Role({roles, recentActivity}){
    return(
        <div className="col-span-2 overflow-y-scroll flex flex-col gap-12">
            <div className="flex flex-col gap-4 bg-[#F7F9FB] p-8 rounded-xl items-center">
                <strong>Role Management</strong>
                {roles.map((item, index)=>(
                    <div
                    key={index} 
                    className="grid grid-cols-5 gap-2">
                        <p className="col-span-2">{item.role}</p>
                        <small className="col-span-3">{item.description}</small>
                    </div>
                ))}
            </div>
            <div className="p-6 bg-[#F7F9FB] rounded-xl flex flex-col gap-8 text-center">
                <strong>Admin Activity Log</strong>
                <Activity recentActivity={recentActivity}/>
            </div>
        </div>
    )
}