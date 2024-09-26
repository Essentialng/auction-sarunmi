"use client";
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Background from '@/components/backgroundImg';

export default function SignUp() {
  const [vendor, setVendor] = useState(true);
  const formik = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: '',
      phoneNumber: '',
      state: '',
      nin: '',
    },
    validationSchema: Yup.object({
      firstName: Yup.string().required('First Name is required'),
      lastName: Yup.string().required('Last Name is required'),
      email: Yup.string().email('Invalid email').required('Email is required'),
      phoneNumber: Yup.string().required('Phone Number is required'),
      state: Yup.string().required('State is required'),
      nin: Yup.string().required('NIN is required'),
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const inputStyle= "border px-2 py-4 rounded-md bg-[#F4FDFF]"

  return (
    <div  className="px-24 py-12 grid grid-cols-5 mt-28">
      <form onSubmit={formik.handleSubmit} className="px-8 pb-12 col-span-3 text-center items-center relative shadow-md border rounded-2xl">
      <div className='h-2 w-1/3 bg-[#EF6509] rounded-tl-2xl absolute top-0 left-0'/>
        <header className='font-semibold text-[20px] py-8'>SIGN UP</header>
        <div className="flex gap-2  w-full text-end">
          <p className="font-semibold w-full text-[12px] text-[#949B96] "><span className="text-red-500 px-2">*</span>All fields are required</p>
        </div>

        <div className="flex mx-60 justify-between bg-[#6B5EC1] rounded-md p-4 text-[14px] text-white font-normal">
          <div className="flex gap-3 items-center">
            <input type="radio" checked={vendor}  name="role" value="vendor" className='w-6 h-6' onClick={()=>{setVendor(true)}} />
            <div className="flex flex-col gap-1 ">
              <h6>VENDOR</h6>
              <small>SELLER</small>
            </div>
          </div>
          <div className="flex gap-3 items-center ">
            <input type="radio" name="role" checked={!vendor}  value="bidder" className='w-6 h-6' onClick={()=>{setVendor(false)}}  />
            <div className="flex flex-col gap-1">
              <h6>BIDDER</h6>
              <small>BUYER</small>
            </div>
          </div>
        </div>

        {/* Input Fields */}
        <div className="mt-12 mb-4 grid grid-cols-2 gap-4 text-start text-[14px] font-normal">
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
            <input
              id="state"
              name="state"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.state}
              className={inputStyle}
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
            <input type="checkbox" />
          </div>
            <span className='text-[12px] font-medium'>
            I agree that i am at least 18 years of age and that i have read and agreed to the <span className='text-[#35318E]'>Terms and Condition</span>, and <span className='text-[#35318E]'> Privacy policy</span>
            </span>
        </div>
        <Link href = "/password">
        <button type="submit" className="mt-8 w-3/4 bg-[#EF6509] text-white py-2 rounded-md">
          Submit
        </button>
        </Link>
      </form>
      <Background/>
    </div>
  );
}
