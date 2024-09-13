"use client";
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import Background from '@/components/backgroundImg';
import Image from 'next/image';

export default function SignUp() {
  const formik = useFormik({
    initialValues: {
      password: '',
      email: ''
    },
    validationSchema: Yup.object({
      password: Yup.string().required('First Name is required'),
      email: Yup.string().required('Email is required')
    }),
    onSubmit: (values) => {
      console.log(values);
    },
  });

  const inputStyle= "border px-2 py-4 rounded-md bg-[#F4FDFF]"

  return (
    <div  className="px-24 py-12 grid grid-cols-5 mt-28">
      <form onSubmit={formik.handleSubmit} className="px-8 pb-12 col-span-3 text-center items-center relative shadow-md border">
        <div className='flex items-center justify-center pt-12 pl-12 '>
            <Image src="/logo.png" width={100} height={100}/>
        </div>
        <header className='font-semibold text-[20px] py-8'>LOGIN</header>
        {/* Input Fields */}
        <div className="mt-12 mb-4 px-32 flex flex-col gap-4 text-start text-[14px] font-normal">
          
          <div className="flex flex-col">
            <label htmlFor="email">Email/Phone number</label>
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
            <label htmlFor="password">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              onChange={formik.handleChange}
              value={formik.values.password}
              className={inputStyle}
            />
            {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
              <div className="text-red-500 text-sm">{formik.errors.phoneNumber}</div>
            ) : null}
          </div>
        </div>
        <button type="submit" className="mt-8 w-3/4 bg-[#EF6509] text-white py-2 rounded-md">
          Login
        </button>
      </form>
      <Background/>
    </div>
  );
}
