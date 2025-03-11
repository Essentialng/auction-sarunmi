import { FaUsers } from "react-icons/fa6";
import AdminPage from "@/components/admin/adminPage";


export default function Page(){

    const cards = [
        {
            icon : <FaUsers size={20} color="white"/>,
            total : 10,
            name : "Total Admins",
            percent : "5%",
            date : "vs last month",
            color : "#B7A5F9"
        },
        {
            icon : <FaUsers size={20} color="white"/>,
            total : 4,
            name : "Active Admins",
            percent : "5%",
            date : "vs last month",
            color : "#FFA687"
        },
        {
            icon : <FaUsers size={20} color="white"/>,
            total : 6,
            name : "Inactive Admins",
            percent : "5%",
            date : "vs last month",
            color : "#B7A5F9"
        },
        {
            icon : <FaUsers size={20} color="white"/>,
            total : 2,
            name : "Pending Admins",
            percent : "5%",
            date : "vs last month",
            color : "#FFA687"
        },
    ]

    const header = [
        "Date Joined",
        "Name",
        "Email",
        "Status",
        "Subscription Type",
        "Last Login"
    ]

    const contents = [
        {
            dateJoined: "2022-01-01",
            name: "Olufemi Chris",
          email: "olufemichris23@gmail.com",
          lastLogin: "09-06-24",
          subscription: "Premium",
          status: "Active",
        },
        {
            dateJoined: "2022-01-01",
            name: "John Doe",
          email: "johndoe@example.com",
          lastLogin: "09-06-24",
          subscription: "Standard",
          status: "Active",
        },
        {
            dateJoined: "2022-01-01",
            name: "Jane Smith",
          email: "janesmith@example.com",
          lastLogin: "09-06-24",
          subscription: "Standard ",
          status: "Inactive",
        },
        {
            dateJoined: "2022-01-01",
            name: "James Bond",
          email: "jamesbond@mi6.com",
          lastLogin: "09-06-24",
          subscription: "Basic ",
          status: "Active",
        },
      ];


    return(
        <div>
            <AdminPage
            cards={cards}
            header={header}
            contents={contents}
            topic={"Welcome Back"}
            link={"Notification"}
            />
        </div>
    )
}