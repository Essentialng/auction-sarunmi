import { MdOutlineEditCalendar } from "react-icons/md";

export default function Activity({recentActivity}){
    return(
        <div className="flex flex-col gap-4">
            {recentActivity.map((activity, index)=>(
            <div key={index} className="flex items-center justify-between text-start bg-[#F5F5F5] rounded-lg p-4">
                <div className="flex flex-col">
                    <p>{activity.auction}</p>
                    <small>{activity.description}</small>
                </div>
                <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                        <MdOutlineEditCalendar/>
                        <p>{activity.date}</p>
                    </div>
                    <small>Status: {activity.status}</small>
                </div>
            </div>
            ))}
        </div>
    )
}