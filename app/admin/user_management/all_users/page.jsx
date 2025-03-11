"use client";
import { FaUsers } from "react-icons/fa6";
import AdminPage from "@/components/admin/adminPage";
import Individaul from "@/components/admin/individual";
import { useState } from "react";


export default function Page(){

    const [toggle, setToggle] = useState(false);

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

      const fields = [
        {
            name: "User ID",
            placeholder: "User345"
        },
        {
            name: "Email",
            placeholder: "johnadeyemi@gmail.com"
        },
        {
            name: "Name",
            placeholder: "John Adeyemi"
        },
        {
            name: "Role",
            placeholder: "Vendor"
        },
        {
            name: "Date Joined",
            placeholder: "01st May 2024"
        },
        {
            name: "Last Login",
            placeholder: "9th June 2024"
        },
        {
            name: "Phone Number",
            placeholder: "+2349190898989"
        },
        {
            name: "Home Address",
            placeholder: ""
        },
        {
            name: "Verification Status",
            placeholder: "Verified"
        },
        {
            name: "Business Address",
            placeholder: ""
        },
        {
            name: "Occupation",
            placeholder: "Verified"
        },
        {
            name: "Identification Document",
            placeholder: "International Passport"
        },
      ]


    return(
        <div>
            {!toggle ?
            <AdminPage
            cards={cards}
            header={header}
            contents={contents}
            topic = {"User Management"}
            content ={"User Management"}
            link={"All Users"}
            />
            :
            <Individaul
            userData={userData}
            fields={fields}
            />
            }
        </div>
    )
}