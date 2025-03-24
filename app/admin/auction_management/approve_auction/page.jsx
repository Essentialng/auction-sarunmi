"use client";
import Submitted from "@/components/admin/submitted"
import { ApprovedUsers, CheckBox } from "@/components/admin/adminApproveSections"
import Header from "@/components/admin/dashboardHeader"
import { axiosInstance } from "@/package/axios"
import { useState, useEffect } from "react"
import { Toast } from "@/package/alert";
import Table from "@/components/admin/approveTable";


export default function Approve(){
    const [contents, setContents] = useState([]);
    const [users, setUsers] =useState([]);
    const [submittedDetails, setSubmittedDetails] = useState(null);
    const [formValues, setFormValues] = useState({});
   

   
        const carDetails = [
            "VIN",
            "Primary Damage",
            "Transmission",
            "Feul",
            "Years Used",
            "Lot Number",
            "Odemeter",
            "Cylinder"
        ]

        const report = [
            "Electrical",
            "Mechanical",
            "Interior",
            "AC Condition",
            "Exterior",
            "Engine Condition",
            "Steering  Wheel",
            "Tires "
        ]

        const header = [
            "Date Created", //item table
            "Category", // model table
            "Name",     // item table
            "price",    // user table
            "location", // item table
            "Status",   // item table
        ];

        const fetchVendors = async()=>{
            try{
                const response = await axiosInstance.get("/approveAuction");
                const data = response.data;
                if(response.status == 200){
                    setUsers(data);
                    Toast.fire({
                        icon: 'success',
                        title: 'Vendors Fetched Successfully'
                    })
                }
            }catch(error){
                Toast.fire({
                    icon: 'error',
                    title: 'Check network and try again'
                })
            }
        };

    const productDetails = (contents)=>{
        setContents(contents)
    };

    const userDetailsHandler = (data)=>{
        setSubmittedDetails(data);
    };

    useEffect(()=>{
        fetchVendors();
    },[])

    const changeHandler = (e) => {
        const {name, value} = e.target
        setFormValues((prev)=>({
            ...prev,
            [name] : value
        }))
        
    };

    const submitHandler= async ()=>{
        const body = {
            id: submittedDetails?.id,
            startTime: formValues.startTime,
            endTime: formValues.endTime,
            report: formValues.report,
        }
        try{
            const response = await axiosInstance.post("/approveAuction", body);
            if(response.status == 200){
                console.log(response)
            }
        }catch(error){
            console.log(error)
        }
    }


const items = contents.map((content)=>{content.items})

return(
    <div className="w-10/12 ml-auto mt-24 px-8 py-20 bg-white flex flex-col gap-12">
        <Header
        topic={"Auction Management"}
        content={"Auction Management  "}
        link={"Approve Auction"}
        />
        <div className="grid grid-cols-12 gap-8">
            <ApprovedUsers 
            users={users} 
            productDetails={productDetails}
            />

            {!submittedDetails &&
            <Table
            header={header}
            contents={contents}
            userDetailsHandler={userDetailsHandler}
            />
            }
            
            {submittedDetails &&
            <div className="w-full grid grid-cols-12 col-span-10 gap-4">
                <div className="col-span-8  shadow-lg rounded-2xl p-8">
                    <Submitted data={submittedDetails}/>
                </div>
                <div className="col-span-4">
                    <div className="w-full text-center text-lg font-medium pb-8">
                        <p>Admin Verification</p>
                    </div>
                    <div>
                        <div className="col-span-1 grid grid-cols-4">
                            <div className="col-span-2 flex flex-col gap-12 text-sm font-bold">
                                <strong>Checklist</strong>

                                <div className="flex flex-col gap-8">  
                                <small className="text-[#EF6509]"> Details</small>                              
                                    <div className="flex flex-col gap-4 font-normal text-sm">
                                    {Object.entries(submittedDetails?.details)?.map(([key, value], index)=>{
                                                                            const formattedKey = key.replace(/([A-Z])/g, ' $1').trim();
                                        return(
                                        <small>{formattedKey}</small>
                                    )
                                        })}
                                    </div>
                                    {/* <div className="flex flex-col gap-4 font-normal text-sm">
                                    <small className="text-[#EF6509]">Condition Report</small>
                                    {report.map((item, index)=>(
                                        <small>{item}</small>
                                    ))}
                                    </div> */}
                                </div>

                            </div>
                            <div className="col-span-1 flex flex-col gap-5 text-center">
                                <p>Yes</p>
                                <CheckBox 
                                carDetails={carDetails}
                                report={report}
                                />
                            </div>
                            <div className="col-span-1 flex flex-col gap-5 text-center">
                                <p>No</p>
                                <CheckBox 
                                carDetails={carDetails}
                                report={report}
                                />
                            </div>
                        </div>
            <div className="flex flex-col  py-12">
                <div className="flex flex-col gap-8">
                    <div className="w-full h-32">
                        <label className="">Condition Report</label>
                        <textarea name="report" id=""
                        required
                        value={formValues.report}
                        onChange={changeHandler}
                        placeholder="Admin review about the product"
                        className="h-full p-2 border border-gray-300 rounded w-full bg-[#F4FDFF] resize-none"
                        />
                    </div>
                    <div className="w-full ">
                        <label className="">Start Time</label>
                        <input 
                        name="startTime"
                        aria-label="Date and time" 
                        type="datetime-local"
                        className="p-2 border border-gray-300 rounded w-full bg-[#F4FDFF]"
                        value={formValues.startTime}
                        onChange={changeHandler}
                        required
                        />
                    </div>
            
                    <div className="w-full ">
                        <label className="">End Time</label>
                        <input 
                        name="endTime"
                        aria-label="Date and time" 
                        type="datetime-local"
                        className="p-2 border border-gray-300 rounded w-full bg-[#F4FDFF]"
                        value={formValues.endTime}
                        onChange={changeHandler}
                        required
                        />
                    </div>

                    <button
                    onClick={(submitHandler)} 
                    className="bg-orange-600 text-white text-center justify-center flex p-3 font-semibold rounded-lg w-full">APPROVE AUCTION</button>
                </div>
            </div>
                    </div>
                </div>
            </div>
            }
        </div>
    </div>
    )
}