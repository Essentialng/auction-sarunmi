import { IoSearchOutline } from "react-icons/io5";
import Table from "@/components/admin/table";
import Header from "@/components/admin/dashboardHeader";
import UserCard from "@/components/admin/usersCard";


export default function DashBoard(){

    const userData = [
        {
          name: "Olufemi Chris",
          email: "olufemichris23@gmail.com",
          phone: "+2348199977444",
          subscription: "Premium",
        },
        {
          name: "John Doe",
          email: "johndoe@example.com",
          phone: "+1234567890",
          subscription: "Standard",
        },
        {
          name: "Jane Smith",
          email: "janesmith@example.com",
          phone: "+9876543210",
          subscription: "Premium",
        },
        {
          name: "James Bond",
          email: "jamesbond@mi6.com",
          phone: "+1122334455",
          subscription: "VIP",
        },
      ];

    const header = ["Date Joined", "Name", "Email", "Status"]

    const contents = [
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
            email: "olufemichris23@gmail.com",
            status: "Active",
        },
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
            email: "olufemichris23@gmail.com",
            status: "Inactive",
        },
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
            email: "olufemichris23@gmail.com",
            status: "Active",
        },
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
            email: "olufemichris23@gmail.com",
            status: "Active",
        },
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
            email: "olufemichris23@gmail.com",
            status: "Inactive",
        },
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
            email: "olufemichris23@gmail.com",
            status: "Inactive",
        },
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
            email: "olufemichris23@gmail.com",
            status: "Active",
        },
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
            email: "olufemichris23@gmail.com",
            status: "Inactive",
        },
    ]


    return(
        <div className="w-full border mt-28 p-6">
            <div className="w-10/12 ml-auto border rounded-lg shadow-2xl py-8 px-12 flex flex-col gap-4">
                
                <Header/>

                <div className="grid grid-cols-6 gap-8">
                    <UserCard userData={userData}/>
                    <div className="col-span-4 flex flex-col gap-4  h-fit">
                        <div className="flex items-center justify-between">
                            <div className="w-full flex flex-col gap-2">
                                <p>Free Users </p>
                                <small>200 members stats</small>
                            </div>
                            <div className="w-full flex gap-2 items-center border rounded-xl px-4">
                                <IoSearchOutline/>
                                <small>Search</small>
                                <input type="text" className="py-4 w-full outline-none" />
                            </div>
                        </div>
                        <Table header={header} contents={contents}/>
                    </div>
                </div>
            </div>
        </div>
    )
}