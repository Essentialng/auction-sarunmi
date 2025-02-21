"use client";
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Background from '@/components/users/backgroundImg';
import Image from 'next/image';
import useStore from '../store';
import { axiosInstance } from '@/package/axios';
import { useRouter } from 'next/navigation';
import { Rings } from 'react-loading-icons';
import { Toast } from '@/package/alert';

export default function SignUp() {
  const {initializeUser} = useStore();
  const router = useRouter()
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  
  const formik = useFormik({
    initialValues: {
      password: '',
      email_or_number: ''
    },
    validationSchema: Yup.object({
      password: Yup.string().required('Password is required'),
      email_or_number: Yup.string().required('Email is required')
    }),
    onSubmit: async (values) => {
      setLoading(true);
      try{
        const response = await axiosInstance.post("/auth/login",values); 
        const data = response.data
        
        if(response.status == 200){
          initializeUser(data?.token)
          Toast.fire({
            icon: "success",
            title: "Login successful!",
  
            didClose: () => {
              router.push("/dashboard")            
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
        }else if(error.status == 401){
          Toast.fire({
            icon: "error",
            title: errorMessage.message,
          });
        }else{
          Toast.fire({
            icon: "error",
            title: "Connect to a strong network"
          });
        }
      }finally{
        setLoading(false)
      }
    },
  });

  const inputStyle= "border px-2 py-4 rounded-md bg-[#F4FDFF]"

  return (
    <div  className="lg:px-24 px-4 py-12 lg:grid grid-cols-5 mt-28 ">   
        <form 
        onSubmit={formik.handleSubmit} 
        className="flex flex-col justify-center px-12 pb-12 col-span-3 text-center items-center relative shadow-md border rounded-2xl"
        >
        <div className='h-2 w-1/3  bg-[#EF6509] rounded-tl-2xl absolute top-0 left-0'/>   
        <div className='flex items-center justify-center pt-12 pl-16 '>
            <Image src="/logo.png" width={100} height={100} alt=''/>
        </div>
        <header className='font-semibold text-[20px] py-8'>LOGIN</header>
        {/* Input Fields */}
        <div className="w-full lg:mt-12 lg:mb-4 md:px-24 flex flex-col gap-4 text-start text-[14px] font-normal">
          
          <div className="flex flex-col">
            <label htmlFor="email">Email/Phone number</label>
            <input
              id="email"
              name="email_or_number"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.email_or_number}
              className={inputStyle}
            />
            {formik.touched.email_or_number && formik.errors.email_or_number ? (
              <div className="text-red-500 text-sm">{formik.errors.email_or_number}</div>
            ) : null}
          </div>

          <div className="flex flex-col">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className={inputStyle}
            />
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-500 text-sm">{formik.errors.password}</div>
            ) : null}
          </div>
        </div>
        <div className='w-full mt-4 flex flex-col items-center justify-center'>
        <div className='text-left w-3/4'>
          <small className='text-red-600'>{message}</small>
        </div>
        <button 
        type="submit"
        disabled={loading} 
        className=" w-3/4 bg-[#EF6509] text-white py-2 rounded-md flex justify-center items-center">
         {loading ? <Rings width={30} height={30}/> : "Login"}
        </button>
        </div>
       
      </form>
      <Background/>
    </div>
  );
}
