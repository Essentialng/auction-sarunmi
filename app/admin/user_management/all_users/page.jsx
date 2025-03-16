"use client";
import { FaUsers } from "react-icons/fa6";
import AdminPage from "@/components/admin/adminPage";
import Individual from "@/components/admin/individual";
import { useState, useEffect } from "react";
import useStore from "@/app/store";



export default function Page(){
    const {allUsers, fetchUsers, subscribers} = useStore();
    const [toggle, setToggle] = useState(false);
    const [userDetails, setUserDetails] = useState([]);
    
    
    
    const header = [
        "Date Joined",
        "Name",
        "Email",
        "Status",
        "Subscription Type",
        "Last Login"
    ];

      

    const userDetailsHandler = (content)=>{
        setUserDetails(content)
    };

    const closeUserDetails = ()=>{
        setUserDetails([])
    }



    useEffect(()=>{
        fetchUsers()
    },[])


    return(
        <div>
            {userDetails.length == 0 ?
            <AdminPage
            cards={allUsers.userBar}
            header={header}
            contents={allUsers?.users}
            topic = {"User Management"}
            content ={"User Management"}
            link={"All Users"}
            userDetailsHandler={userDetailsHandler}
            />
            :
            <Individual
            userData={subscribers}
            userDetails={userDetails}
            closeUserDetails={closeUserDetails}
            />
            }
        </div>
    )
}