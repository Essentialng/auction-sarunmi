import Background from "@/components/backgroundImg"
import Link from "next/link"
export default function page(){
     const inputStyle= "border px-2 py-4 rounded-md bg-[#F4FDFF]"
    return(
        <div  className="px-24 py-12 grid grid-cols-5 mt-28">
      <form  className="px-8 pb-12 col-span-3 text-center items-center relative shadow-md border rounded-2xl">
      <div className='h-2 w-1/3 bg-[#EF6509] rounded-tl-2xl absolute top-0 left-0'/>
        <header className='font-semibold text-[20px] py-8'>PASSWORD</header>
        <div className="flex gap-2  w-full text-start">
          <p className=" w-full text-[18px] font-medium border">Enter the verification code sent to your email</p>
        </div>

        {/* Input Fields */}
        <div className="w-1/2 mt-12 mb-4 flex flex-col gap-4 text-start text-[14px] font-normal">
            <div className="flex flex-col">
                <label htmlFor="email">Code</label>
                <input
                name="code"
                type="number"
                placeholder="Input the one time password"
                //   onChange={formik.handleChange}
                //   value={formik.values.email}
                className={inputStyle}
                />
                {/* {formik.touched.email && formik.errors.email ? (
                <div className="text-red-500 text-sm">{formik.errors.email}</div>
                ) : null} */}
                <p className="w-full text-end py-4">Resend code</p>
            </div>
            <div className="flex flex-col gap-6">
                <div className="flex flex-col">
                    <label htmlFor="email">Password</label>
                    <input
                    placeholder="Type your password"
                    id="Password"
                    name="Password"
                    type="Password"
                    //   onChange={formik.handleChange}
                    //   value={formik.values.email}
                    className={inputStyle}
                    />
                    {/* {formik.touched.email && formik.errors.email ? (
                    <div className="text-red-500 text-sm">{formik.errors.email}</div>
                    ) : null} */}
                </div>

                <div className="flex flex-col">
                    <label htmlFor="confirmPassword">Confirm password</label>
                    <input
                    placeholder="Retype your password"
                    id="confirmPassword"
                    name="confirmPassword"
                    type="password"
                    //   onChange={formik.handleChange}
                    //   value={formik.values.phoneNumber}
                    className={inputStyle}
                    />
                    {/* {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
                    <div className="text-red-500 text-sm">{formik.errors.phoneNumber}</div>
                    ) : null} */}
                </div>
            </div>
        </div>
        <Link href = "/login">
        <button type="submit" className="mt-8 w-3/4 bg-[#EF6509] text-white py-2 rounded-md">
          Submit
        </button>
        </Link>
      </form>
      <Background/>
    </div>
    )
}