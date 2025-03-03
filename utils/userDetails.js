import { PiUserCircleLight } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { SlBadge } from "react-icons/sl";



export const cards = [
    {
      header : "Account Details",
      icon : <PiUserCircleLight size={35} color="#EF6509"/>,
      firstValue: "firstName",
      lastValue: "lastName",
      extraValue : "phoneNumber",
      stateValue: "state",
      button : "EDIT",
      forms:  [
        {
            label : "First Name",
            name : "firstName",
            type : "text"
        },
        {
            label : "Last Name",
            name : "lastName",
            type : "text"
        },
        {
            label : "Phone Number",
            name : "phoneNumber",
            type : "number"
        },
        {
            label : "Address",
            name : "address",
            placeholder: "Type your address",
            type : "text"
        },
        {
            label : "Change Profile Picture",
            name : "profilePicture",
            placeholder : "Upload profile picture",
            type : "file"
        },
    ]
    },

    {
        header : "Email",
        icon : <FaRegEnvelope size={35} color="#EF6509"/>,
        firstValue: "email",
        lastValue: "status",
        button : "UPDATE EMAIL",
        forms:  [
          {
              label : "Old Email",
              name : "email",
              type : "text",
              placeholder: "Type new email"
          },
          {
              label : "New Email",
              name : "newEmail",
              type : "text",
              placeholder: "Type new email"
          },
          {
              label : "Code",
              name : "code",
              type : "text",
              placeholder: "input the one time code"
          },
      ]
      },

      {
        header : "Password",
        icon : <RiLockPasswordLine size={35} color="#EF6509"/>,
        firstValue: "Current Password",
        button : "CHANGE PASSWORD",
        forms:  [
          {
              label : "New Password",
              name : "oldPassword",
              type : "text",
              placeholder: "Type new password"
          },
          {
              label : "Confirmed New Password",
              name : "newPassword",
              type : "text",
              placeholder: "Type new password"
          },
      ]
      },

      {
        header : "Subscription",
        icon : <SlBadge size={35} color="#EF6509"/>,
        firstValue: "40,000",
        button: "RENEW",
        forms:  []
      }
      
  ]