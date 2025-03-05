"use client";
import React from 'react';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Background from '@/components/users/backgroundImg';
import PopUp from '@/components/users/signup-pop';
import { IoIosArrowBack } from "react-icons/io";
import { axiosInstance } from '@/package/axios';
import { Rings } from 'react-loading-icons';
import { Toast } from '@/package/alert';
import States from '@/utils/states';
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";



export default function SignUp() {
  const [vendor, setVendor] = useState(true);
  const [status, setStatus] = useState(false);
  const [password, setPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("")
  const [resend, setResend] = useState(false)
  const [loadingResend, setLoadingResend] = useState(false)
  const [age, setAge] = useState(false)
  const [verification, setVerification] = useState(null)
  const [show, setShow] = useState(false)


  const details = {
    headers: "Account Created Successfully",
    texts: `Welcome to Essential E-Auction, your account has been created successfully, 
    and you are now ready to explore a world of exciting auctions.
    `,
    texts2: `Subscribe Now to enjoy premium benefits like early access to auctions, personalized alerts, and more.`,
    btn: "CONTINUE FOR FREE",
    btn2: "SUBSCRIBE NOW",
    link: "/login",
    link2: "/subscribe"
  }

  const formik = useFormik({
    initialValues: {
      firstName: null,
      lastName: null,
      email: null,
      phoneNumber: null,
      state: null,
      nin: null,
      type: "vendor",
      password: null,
      confirmPassword: null,
      code: null,
    },


    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phoneNumber: Yup.string().required('Phone Number is required'),
      state: Yup.string().nullable().notRequired(),
      nin: Yup.string().nullable().notRequired(),
      password: Yup.string()
          .required("Password is required")
          .min(8, "Password is too short - should be 8 characters long")
          .matches(/(?=.*[0-9])/, "Password must contain a number")
          .matches(/(?=.*[A-Z])/, "Password must contain an uppercase letter"),
      confirmPassword: Yup.string()
          .required("Please confirm your password")
          .oneOf([Yup.ref("password"), null], "Passwords must match"),
      code: Yup.string()
      .required("Verify code is required")
      .min(6, "Verify code must be six characters")
      .test("is-correct-code", "The verification code is incorrect", (value) => {
        // Assuming `verification` is the correct value for comparison
        return value === verification.code;  // validation will pass when `code === verification`
      }),
        }),

    onSubmit: async (values) => {
      setLoading(true);
      try{
        const response = await axiosInstance.post('/auth/register', values)
        const data = response.data
        if(response.status == 201){
          Toast.fire({
            icon: "success",
            title: "Registration successful!",
  
            didClose: () => {
              setStatus(true)
            },
          });
          
        }
      }catch(error){
        const errorMessage = error.response.data
        if(error.status == 404){
          Toast.fire({
            icon: "error",
            title: errorMessage.message,
  
          });
        }else{
          Toast.fire({
            icon: "error",
            title: "Connect to a strong network",
  
          });
        }
      }finally{
        setLoading(false);
      }},
  });

  
  const sendEmail =async ()=>{
    setLoading(true)
    try{
      
    const response = await axiosInstance.post("sendEmail", {
      name: formik.values.firstName,
      email : formik.values.email
    });

    const data = await response.data

    if(response.status == 201){
      
      Toast.fire({
        icon: "success",
        title: "Verification code sent!",

        didClose: () => {
          setPassword(true)
        },
      });
      setVerification(data.verifyCode)
    }
    
    }catch(error){
      Toast.fire({
        icon: "error",
        title: "Connect to a strong network",

      });
    }finally{
      setLoading(false)
    }
  }


  
  const inputStyle= "border px-2 py-4 rounded-md bg-[#F4FDFF] w-full"
  const vendorDisable = (
  formik.values.firstName &&
  formik.values.lastName &&
  formik.values.email &&
   formik.values.phoneNumber &&
   formik.values.state &&
   formik.values.nin && age
  )

  const bidderDisable = (
    formik.values.firstName &&
    formik.values.lastName &&
    formik.values.email &&
    formik.values.phoneNumber && age
  )

  return (
    <>
    <div  className="lg:px-24 px-4 py-12 lg:grid grid-cols-5 mt-28">
      <form  
      onSubmit={formik.handleSubmit}
      className=" col-span-3 text-center items-center relative ">

      {password ?
      <div 
      
       className='shadow-md border rounded-2xl relative px-8 pb-12'>
        <div className='h-2 w-1/3 bg-[#EF6509] rounded-tl-2xl absolute top-0 left-0'/>
          <header className='font-semibold text-[20px] py-8'>SIGN UP</header>
          <div className="flex gap-2  w-full text-end">
            <p className="font-semibold w-full text-[16px] text-[#949B96] ">
              <span className="text-red-500 px-2">*</span>
              All fields are required
            </p>
          </div>

          <div className="flex lg:mx-60 justify-between bg-[#6B5EC1] rounded-md p-4 text-[14px] text-white font-normal">
            <div className="flex gap-3 items-center">
              <input type="radio" checked={vendor}  name="type" value="vendor" className='w-6 h-6' onChange={formik.handleChange} onClick={()=>{setVendor(true)}} />
              <div className="flex flex-col gap-1 ">
                <h6>VENDOR</h6>
                <small>SELLER</small>
              </div>
            </div>
            <div className="flex gap-3 items-center ">
              <input type="radio" name="type" checked={!vendor}  value="bidder" className='w-6 h-6' onChange={formik.handleChange} onClick={()=>{setVendor(false)}}  />
              <div className="flex flex-col gap-1">
                <h6>BIDDER</h6>
                <small>BUYER</small>
              </div>
            </div>
          </div>

          <div className="mt-12 mb-4 lg:grid lg:grid-cols-2 flex flex-col gap-4 text-start text-[14px] font-normal">
            <div className="flex flex-col">
              <label htmlFor="firstName">First Name</label>
              <input
                id="firstName"
                name="firstName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.firstName}
                className={inputStyle}
              />
              {formik.touched.firstName && formik.errors.firstName ? (
                <div className="text-red-500 text-sm">{formik.errors.firstName}</div>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label htmlFor="lastName">Last Name</label>
              <input
                id="lastName"
                name="lastName"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.lastName}
                className={inputStyle}
              />
              {formik.touched.lastName && formik.errors.lastName ? (
                <div className="text-red-500 text-sm">{formik.errors.lastName}</div>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label htmlFor="email">Email</label>
              <input
                id="email"
                name="email"
                type="email"
                onChange={formik.handleChange}
                value={formik.values.email}
                className={inputStyle}
              />
              {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input
                id="phoneNumber"
                name="phoneNumber"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.phoneNumber}
                className={inputStyle}
              />
              {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                <div className="text-red-500 text-sm">{formik.errors.phoneNumber}</div>
              ) : null}
            </div>
            {vendor &&
            <>
            <div className="flex flex-col">
              <label htmlFor="state">State</label>
              <States
              inputStyle={inputStyle}
              formik={formik}
              />
              {formik.touched.state && formik.errors.state ? (
                <div className="text-red-500 text-sm">{formik.errors.state}</div>
              ) : null}
            </div>

            <div className="flex flex-col">
              <label htmlFor="nin">NIN</label>
              <input
                id="nin"
                name="nin"
                type="text"
                onChange={formik.handleChange}
                value={formik.values.nin}
                className={inputStyle}
              />
              {formik.touched.nin && formik.errors.nin ? (
                <div className="text-red-500 text-sm">{formik.errors.nin}</div>
              ) : null}
            </div>
          </>
            }
          </div>
          <div className='flex gap-4 items-center pb-6'>
            <div >
              <input 
              type="checkbox" 
              onChange={()=>{
                setAge(!age)
              }} 
              checked = {age}
              required  />
            </div>
              <span className='lg:text-[12px] text-[9px] font-medium'>
              I agree that i am at least 18 years of age and that i have read and agreed to the <span className='text-[#35318E]'>Terms and Condition</span>, and <span className='text-[#35318E]'> Privacy policy</span>
              </span>
          </div>
          

          <button 
          type="submit" 
          className={`
            ${ formik.values.type == "vendor" ?
            ((vendorDisable) ? "bg-[#EF6509]" : "bg-gray-500"
            ) :

            (
           (bidderDisable) ? "bg-[#EF6509]" : "bg-gray-500"
            
            )}
            mt-8 w-3/4 text-white flex justify-center items-center rounded-md ${!loading && "py-3"}
            `}
          
          onClick={  ()=>{
            formik.values.type === "vendor" ?
            ((vendorDisable && !loading) && sendEmail()
            ) :

            (

            (bidderDisable && !loading) && sendEmail()
            
            )
           }}
          
           disabled={loading}
          >
            {loading ? <Rings/> : "Submit"}
          </button>
        </div>
        
          :

        <div>
          <div  className="px-8 pb-12 col-span-3 text-center items-center relative shadow-md border rounded-2xl">
            <div 
            className='mt-8 w-fit border shadow-md cursor-pointer'
            onClick={()=>setPassword(false)}
            >
              <IoIosArrowBack size={30}/>
            </div>
          <div className='h-2 w-1/3 bg-[#EF6509] rounded-tl-2xl absolute top-0 left-0'/>
            <header className='font-semibold text-[20px] py-8'>PASSWORD</header>
            <div className="flex gap-2  w-full text-start">
              <p className=" w-full text-[18px] font-medium">Enter the verification code sent to your email</p>
            </div>
          
            <div className="w-1/2 mt-12 mb-4 flex flex-col gap-4 text-start text-[14px] font-normal">
              <div className="flex flex-col">
                  <label htmlFor="email">Code</label>
                  <input
                  name="code"
                  placeholder="Input the one time password"
                    onChange={formik.handleChange}
                    value={formik.values.code}
                  className={inputStyle}
                  />
                  {formik.touched.code && formik.errors.code ? (
                  <div className="text-red-500 text-sm">{formik.errors.code}</div>
                  ) : null}
                  <p 
                  className={`w-full text-end py-4 ${resend ? "text-green-900" :"text-blue-500"} cursor-pointer`}
                  onClick={() => { 
                    sendEmail(); 
                    setLoadingResend(true)
                    setTimeout(()=>{
                      setLoadingResend(false)
                      setResend(true);
                      setTimeout(()=>{
                        setResend(false);
                      },5000)
                   
                  },3000) }}
                  >
                    {resend ? "Verify code resed successfully" : loadingResend ? "Resending verify code...." : "Resend code"}
                  </p>
              </div>
              <div className="flex flex-col gap-6">
                  <div className="flex flex-col">
                      <label htmlFor="email">Password</label>
                      <div className={`flex items-center ${inputStyle}`}>
                        <input
                        placeholder="Type your password"
                        id="Password"
                        name="password"
                        type={`${!show ? "Password" : "text"}`}
                          onChange={formik.handleChange}
                          value={formik.values.password}
                        className="w-full bg-[#F4FDFF] outline-none"
                        />
                        <div>
                          {!show ?
                          <FaEyeSlash
                          onClick={()=>setShow(true)}
                          />
                          :
                          <IoEyeSharp
                          onClick={()=>setShow(false)}
                          />
                        }
                        </div>
                      </div>
                      {formik.touched.password && formik.errors.password ? (
                      <div className="text-red-500 text-sm">{formik.errors.password}</div>
                      ) : null}
                  </div>

                  <div className="flex flex-col">
                      <label htmlFor="confirmPassword">Confirm password</label>
                      <div className={`flex items-center ${inputStyle}`}>
                        <input
                        placeholder="Retype your password"
                        id="confirmPassword"
                        name="confirmPassword"
                        type={`${!show ? "Password" : "text"}`}
                          onChange={formik.handleChange}
                          value={formik.values.confirmPassword}
                          className="w-full bg-[#F4FDFF] outline-none"     
                          />                
                          <div>
                          {!show ?
                          <FaEyeSlash
                          onClick={()=>setShow(true)}
                          />
                          :
                          <IoEyeSharp
                          onClick={()=>setShow(false)}
                          />
                        }
                        </div>
                      </div>
                      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                      <div className="text-red-500 text-sm">{formik.errors.confirmPassword}</div>
                      ) : null}
                  </div>
              </div>
            </div>
            <button 
            disabled={loading}
            type="submit" 
            className={`${!loading && "py-3"} mt-8 w-3/4 bg-[#EF6509] text-white  rounded-md flex items-center justify-center`}
            >
              {loading ? <Rings/> : "Submit"}
          </button>
          <div  className='w-full text-start text-red-500 font-bold'>
            <small>{message}</small>
          </div>
          </div>
          
        </div>
        }

      </form>
      
      
      <Background/>
    </div>
    { status &&
    <PopUp details={details}/>
    }
  </>
  );
}
