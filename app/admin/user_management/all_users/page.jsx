"use client";
import { FaUsers } from "react-icons/fa6";
import AdminPage from "@/components/admin/adminPage";
import Individaul from "@/components/admin/individual";
import { useState, useEffect } from "react";
import useStore from "@/app/store";

export default function Page(){
    const {allUsers, fetchUsers} = useStore();
    const [toggle, setToggle] = useState(false);

    const header = [
        "Date Joined",
        "Name",
        "Email",
        "Status",
        "Subscription Type",
        "Last Login"
    ]

      
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
      ];

    useEffect(()=>{
        fetchUsers()
    },[])


    return(
        <div>
            {!toggle ?
            <AdminPage
            cards={allUsers.userBar}
            header={header}
            contents={allUsers?.users}
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