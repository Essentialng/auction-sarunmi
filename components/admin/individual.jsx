import UserCard from "./usersCard";
import Fields from "./fields";

export default function Individaul({userData, fields}){


    return(
        <div className="w-10/12 ml-auto mt-24 p-9 grid grid-cols-6 gap-8 bg-white">
            <div className="h-fit col-span-4 border rounded-xl shadow-xl p-8 flex flex-col gap-8">
                <p>Profile</p>
                <Fields
                fields={fields}
                image="/action.png"
                />
                <div className="w-full flex items-center justify-end gap-8 mt-12 font-medium">
                    <button className="w-3/12 p-3 border rounded-md">UNBLOCK</button>
                    <button className="w-3/12 bg-[#EF6509] p-3 rounded-md text-white">BLOCK</button>
                </div>
            </div>
            <div className="col-span-2 overflow-y-scroll h-screen">
                <UserCard userData={userData}/>
            </div>
        </div>
    )
}