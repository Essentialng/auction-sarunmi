import React from "react";
import { IoClose } from "react-icons/io5";
import { AccountDetails } from "./accountDetails";
import { AccountDetailsForm } from "./accountDetails";
import { useState, useEffect } from "react";
import { axiosInstance } from "@/package/axios";
import { Toast } from "@/package/alert";
import { PiUserCircleLight } from "react-icons/pi";
import { FaRegEnvelope } from "react-icons/fa";
import { RiLockPasswordLine } from "react-icons/ri";
import { SlBadge } from "react-icons/sl";
import { handleCloudinary } from "@/utils/cloudinary";

const ProfileOverview = ({user, initializeUser}) => {

  const [edit, setEdit] = useState(false);
  const [formValue, setFormValue] = useState({id : user?.id});
  const [imageSrc, setImageSrc] = useState("");
  const [loading, setLoading] = useState(false);
  const [emailVerified, setEmailVerified] = useState(null);
  
  const submitUserDetails = async()=>{
    setLoading(true);
    try{
        const response = await axiosInstance.put("/accountDetail", formValue);
        const data = await response.data;
        if(response.status == 200){
          initializeUser(data.token)
          setEdit(false);
          setFormValue({});
          Toast.fire({
            icon: "success",
            title: response.data.message,
          });
        }
    }catch(error){
      console.log(error)
      const errorMessage = error.response.data

      Toast.fire({
        icon: "error",
        title: errorMessage.message,
      });
    }finally{
      setLoading(false);
    }
}

const submitEmail = async()=>{
  setLoading(true);
    try{

      if (emailVerified?.code != formValue?.code) {
        Toast.fire({
          icon: "error",
          title: "Verification code does not match.",
        });
        setLoading(false);
        return;
      }

        const response = await axiosInstance.put("/editUserEmail", formValue);
        const data = await response.data;
        if(response.status == 200){
          initializeUser(data.token)
          setEdit(false);
          setFormValue({});
          Toast.fire({
            icon: "success",
            title: response.data.message,
          });
        }
    }catch(error){
      console.log(error)
      const errorMessage = error.response.data

      Toast.fire({
        icon: "error",
        title: errorMessage.message,
      });
    }finally{
      setLoading(false);
    }
}


const submitPassword = async()=>{
  setLoading(true);
    try{

      if (emailVerified?.code != formValue?.code) {
        Toast.fire({
          icon: "error",
          title: "Verification code does not match.",
        });
        setLoading(false);
        return;
      }

        const response = await axiosInstance.put("/changePassword", formValue);
        const data = await response.data;
        if(response.status == 200){
          initializeUser(data.token)
          setEdit(false);
          setFormValue({});
          Toast.fire({
            icon: "success",
            title: response.data.message,
          });
        }
    }catch(error){
      const errorMessage = error.response.data

      Toast.fire({
        icon: "error",
        title: errorMessage.message,
      });
    }finally{
      setLoading(false);
    }
}
  const cards = [
    {
      header : "Account Details",
      icon : <PiUserCircleLight size={35} color="#EF6509"/>,
      firstValue: "firstName",
      lastValue: "lastName",
      extraValue : "phoneNumber",
      stateValue: "state",
      button : "EDIT",
      onSubmit: submitUserDetails,
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
        onSubmit : submitEmail,
        forms:  [
          {
              label : "Old Email",
              name : "oldEmail",
              type : "text",
              disable : true,
              placeholder: user?.email
          },
          {
              label : "New Email",
              name : "email",
              type : "email",
              code : "Enter the verification code sent to your email",
              placeholder: "Type new email"
              
          },
          {
              label : "Code",
              name: "code",
              type : "text",
              placeholder: "input the one time code",
              button : "Get code"
          },
      ]
      },

      {
        header : "Password",
        icon : <RiLockPasswordLine size={35} color="#EF6509"/>,
        text: "Current Password",
        text2: "*********",
        button : "CHANGE PASSWORD",
        onSubmit: submitPassword,
        forms:  [
          {
              label : "New Password",
              name : "password",
              type : "text",
              placeholder: "Type new password"
          },
          {
              label : "Confirmed New Password",
              name : "confirmPassword",
              type : "text",
              code : "Enter the verification code sent to your email",
              placeholder: "Type new password"
          },
          {
            label : "Code",
            name: "code",
            type : "text",
            placeholder: "input the one time code",
            button : "Get code"
        },
      ]
      },

      {
        header : "Subscription",
        icon : <SlBadge size={35} color="#EF6509"/>,
        text: "Premium Membership",
        text2 : "20,000.00",
        button: "RENEW",
        button2: "BECOME A VENDOR"
      }
      
  ]


  const formHandler = (e)=>{
      const {name, value} = e.target
      setFormValue({...formValue, [name]: value})
  };

  const cancealHandler = ()=>{
    setEdit(false);
    setFormValue({id: user?.id });
    setEmailVerified("");
  };

  useEffect(() => {
    if (user?.id) {
      setFormValue({id: user?.id });
    }
  }, [user?.id]);

 const profilePricture = async (event) => {
    const file = event.target.files[0];
    const name = event.target.name
      const url = await handleCloudinary(file); 
      if (url) {
        setImageSrc(file.name)
        setFormValue({...formValue, [name]: url });
        Toast.fire({
          icon: "success",
          title: "Image upload successfully",
        });
      }
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Profile Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      
        {cards.map((card, index)=>{
          const count = index !== 3 ? true : false
          return (
        <div key={index} className={`border p-4 rounded-lg shadow-md ${(!count || index !== edit) && "max-h-[250px]"}`}>
          <div className="flex items-center justify-between  border-b-2 py-2">
            <h3 className="text-lg font-medium mb-2">{card.header}</h3>

            {(count && index === edit) &&
            <IoClose
            className="cursor-pointer"
            onClick={cancealHandler}
            size={25}
            />
          }
          </div>
          
          {edit !== index ?   
          <AccountDetails
          card={card}
          user={user}
          setEdit={setEdit}
          index={index}
          setFormValue={setFormValue}
          setEmailVerified={setEmailVerified}
          />
            :
          <AccountDetailsForm 
          card={card.forms}
          submit={card.onSubmit}
          user={user}
          setEdit={setEdit}
          formHandler={formHandler}
          formValue={formValue}
          profilePricture={profilePricture}
          imageSrc={imageSrc}
          loading={loading}
          setEmailVerified={setEmailVerified}
          />
        }

        </div>
          )
      })}

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
