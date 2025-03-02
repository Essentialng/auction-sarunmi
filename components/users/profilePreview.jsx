import React from "react";
import { IoClose } from "react-icons/io5";
import { AccountDetails } from "./accountDetails";
import { AccountDetailsForm } from "./accountDetails";
import { useState } from "react";
import { cards } from "@/utils/userDetails";

const ProfileOverview = ({user}) => {

  const [edit, setEdit] = useState(false);

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Profile Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account Details */}
        {cards.map((card, index)=>(
        <div key={index} className="border p-4 rounded-lg shadow-md">
          <div className="flex items-center justify-between  border-b-2 py-2">
            <h3 className="text-lg font-medium mb-2">{card.header}</h3>
            <IoClose 
            size={25}
            />
          </div>
          
          <AccountDetails
          card={card}
          user={user}
          setEdit={setEdit}
          />
           
          <AccountDetailsForm 
          card={card.forms}
          user={user}
          setEdit={setEdit}
          />
        
        </div>
        ))}

        {/* Email */}
        {/* <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-md font-medium mb-2">Email</h3>
          <div className="flex items-center mb-4">
            <div className="mr-4 text-2xl text-orange-600">
            
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <p>{user?.email}</p>
              <p className="text-green-500">Verified</p>
            </div>
          </div>
          <button className="bg-orange-600 text-white px-4 py-2 rounded">
            UPDATE EMAIL
          </button>
        </div> */}

        {/* Password */}
        {/* <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-md font-medium mb-2">Password</h3>
          <div className="flex items-center mb-4">
            <div className="mr-4 text-2xl text-orange-600">
             
              <i className="fas fa-lock"></i>
            </div>
            <div>
              <p>Current Password</p>
              <p className="text-gray-500">********</p>
            </div>
          </div>
          <button className="bg-orange-600 text-white px-4 py-2 rounded">
            CHANGE PASSWORD
          </button>
        </div> */}

        {/* Subscription */}
        {/* <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-md font-medium mb-2">Subscription</h3>
          <div className="flex items-center mb-4">
            <div className="mr-4 text-2xl text-orange-600">
             
              <i className="fas fa-award"></i>
            </div>
            <div>
              <p>Premium Membership</p>
              <p className="text-gray-500">N 40,000.00</p>
              <p className="text-gray-500">6 Days left</p>
            </div>
          </div>
          <button className="bg-orange-600 text-white px-4 py-2 rounded">
            RENEW
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default ProfileOverview;
