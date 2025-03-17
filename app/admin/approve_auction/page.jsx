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
   

    // const submittedDetails = 
    //     {
    //         description : `I'm offering my well-maintained 2016 BMW 3 Series for auction. This car 
    //         delivers the perfect blend of luxury and performance with its powerful engine, smooth
    //          handling, and premium interior loaded with advanced features. I've thoroughly enjoyed 
    //          every drive, appreciating its reliability and exhilarating performance. 
    //         If you're looking for a high-quality driving experience, this BMW is the perfect 
    //         choice. Don’t miss your chance to bid on this exceptional vehicle!`,
    //     details :   [ 
    //         {
    //             label: "ProductName",
    //             value: "BMW"
    //         },
    //         {
    //             label: "Colors",
    //             value: "White"
    //         },
    //         {
    //             label: "LotNumber",
    //             value: "263764"
    //         },
    //         {
    //             label: "Vin",
    //             value: "12653679"
    //         },
    //         {
    //             label: "Odemeter",
    //             value: "3652718"
    //         },
    //         {
    //             label: "PrimaryDamage",
    //             value: "No"
    //         },
    //         {
    //             label: "Cylinder",
    //             value: "Yes"
    //         },
    //         {
    //             label: "Transmission",
    //             value: "Yes"
    //         },
    //         {
    //             label: "Drive",
    //             value: "Yes"
    //         },
    //         {
    //             label: "Fuel",
    //             value: "Petrol"
    //         },
    //         {
    //             label: "VehicleType",
    //             value: "Toyota"
    //         },
    //         {
    //             label: "YearsUsed",
    //             value: "2 years"
    //         },
    //         {
    //             label: "Location",
    //             value: "Lagos"
    //         },
    //         ]
    //     }

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
                const response = await axiosInstance.get("/vendorUsers");
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
                                    <div className="flex flex-col gap-4 font-normal text-sm">
                                    <small className="text-[#EF6509]">Car Details</small>
                                    {carDetails.map((item, index)=>(
                                        <small>{item}</small>
                                    ))}
                                    </div>
                                    <div className="flex flex-col gap-4 font-normal text-sm">
                                    <small className="text-[#EF6509]">Condition Report</small>
                                    {report.map((item, index)=>(
                                        <small>{item}</small>
                                    ))}
                                    </div>
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
                    </div>
                </div>
            </div>
            }
        </div>
    </div>
    )
}