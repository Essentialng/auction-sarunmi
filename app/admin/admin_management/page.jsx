"use client";
import { FaUsers } from "react-icons/fa6";
import AdminPage from "@/components/admin/adminPage";
import Activity from "@/components/admin/activity";
import Fields from "@/components/admin/fields";
import Permissions from "@/components/admin/permissions";
import { useState } from "react";
import { Role } from "@/components/admin/managementSections";


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
        "Admin ID",
        "Name",
        "Email",
        "Status",
        "Role",
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

      const recentActivity = [
        {
            auction : "Vintage Car",
            description : "New Auction",
            status: "Active",
            date: "12th Jun"
        },
        {
            auction : "House",
            description : "Auction Completed",
            status: "Active",
            date: "12th Jun"
        },
        {
            auction : "Sarah Ben",
            description : "Renew  Subscription",
            status: "Active",
            date: "12th Jun"
        },
        {
            auction : "Chris Evan",
            description : "Violation of auction rules",
            status: "Active",
            date: "Suspended"
        },
    ]

      const roles = [
        {
            role: "Master Admin:",
            description: "Full access to all features and settings"
        }, 
        {
            role: "Moderator:",
            description: "Manage user content and auctions but has limited access to settings."
        }, 
        {
            role: "Support:",
            description: "Handles user queries and support tickets."
        }, 
      ]

      const r_permission = [
        "Manage Notification",
        "Ban/Unban Users",
        "Edit User",
        "Edit Auctions",
        "Approve Auction",
        "Manage Payment ",
        "Create Accountment"
      ]

      const l_permission = [
        "Edit System Settings",
        "Manage Admin Activity ",
        "Assign Role",
        "Update Subscription",
        "Renew User Sub",
        "Delete User Account",
      ]

    return(
        <div className="z-10">
            {!toggle ?
            <AdminPage
            cards={cards}
            header={header}
            contents={contents}
            topic={"Admins Management"}
            link={"Admins Management"}
            />
            :
            <div 
            className="w-10/12 ml-auto mt-24 p-9
             grid grid-cols-6 gap-8 bg-white"
             >

                <div 
                className="h-fit col-span-4 border rounded-xl
                 shadow-xl p-8 flex flex-col gap-8"
                 >
                    <div className="flex flex-col gap-8">
                        <Fields
                        fields={fields}
                        image=""
                        />
                    </div>
                    <div className=" w-11/12 p-8">
                        <Permissions 
                        l_permission={l_permission}
                        r_permission={r_permission}
                        />
                    </div>
                </div>

                <Role 
                roles={roles} 
                recentActivity={recentActivity}
                />

            </div>
            }
        </div>
    )
}