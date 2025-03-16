import UserCard from "./usersCard";
import Fields from "./fields";
import { dateFormat } from "@/utils/methods";
import { IoClose } from "react-icons/io5";


export default function Individual({userData, userDetails, closeUserDetails}){

    const fields = [

        {
            name: "User ID",
            placeholder: userDetails?.id
        },
        {
            name: "Email",
            placeholder: userDetails?.email
        },
        {
            name: "Name",
            placeholder: `${userDetails?.firstName} ${userDetails?.lastName}`
        },
        {
            name: "Role",
            placeholder: userDetails?.type
        },
        {
            name: "Date Joined",
            placeholder: dateFormat(userDetails?.createdAt)
        },
        {
            name: "Last Login",
            placeholder: dateFormat(userDetails?.lastLogin)
        },
        {
            name: "Phone Number",
            placeholder: userDetails?.phoneNumber
        },
        {
            name: "Home Address",
            placeholder: userDetails?.address
        },
        {
            name: "Verification Status",
            placeholder: "Verified"
        },
        {
            name: "State",
            placeholder: userDetails?.state
        },
        // {
        //     name: "Occupation",
        //     placeholder: "Verified"
        // },
        // {
        //     name: "Identification Document",
        //     placeholder: "International Passport"
        // },
      ];



    return(
        <div className="w-10/12 ml-auto mt-24 p-9 grid grid-cols-6 gap-8 bg-white">
            <div className="h-fit col-span-4 border rounded-xl shadow-xl p-8 flex flex-col gap-8">
                <div className="flex items-center justify-between">
                    <p className="text-[18px] font-medium">Profile</p>
                    <IoClose onClick={closeUserDetails}/>
                </div>
                <Fields
                fields={fields}
                image={userDetails?.profilePicture ? userDetails?.profilePicture : "/action.png"}
                />
                <div className="w-full flex items-center justify-end gap-8 mt-12 font-medium">
                    <button className="w-3/12 p-3 border rounded-md">UNBLOCK</button>
                    <button className="w-3/12 bg-[#EF6509] p-3 rounded-md text-white">BLOCK</button>
                </div>
            </div>
            <div className="col-span-2 overflow-y-scroll max-h-screen">
                <UserCard userData={userData}/>
            </div>
        </div>
    )
}