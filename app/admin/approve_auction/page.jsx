import Image from "next/image"
import Submitted from "@/components/admin/submitted"

export default function Approve(){

    const users = [
        {
            img : "/user_1.png",
            name : "Ibrahim A.",
        },
        {
            img : "/user_2.png",
            name : "Johnson ",
        },
        {
            img : "/user_3.png",
            name : "Ada Eze",
        },
        {
            img : "/user_4.png",
            name : "Rachael",
        },
    ]

    const submittedDetails = 
        {
            description : `I'm offering my well-maintained 2016 BMW 3 Series for auction. This car 
            delivers the perfect blend of luxury and performance with its powerful engine, smooth
             handling, and premium interior loaded with advanced features. I've thoroughly enjoyed 
             every drive, appreciating its reliability and exhilarating performance. 
            If you're looking for a high-quality driving experience, this BMW is the perfect 
            choice. Don’t miss your chance to bid on this exceptional vehicle!`,
        details :   [ 
            {
                label: "ProductName",
                value: "BMW"
            },
            {
                label: "Colors",
                value: "White"
            },
            {
                label: "LotNumber",
                value: "263764"
            },
            {
                label: "Vin",
                value: "12653679"
            },
            {
                label: "Odemeter",
                value: "3652718"
            },
            {
                label: "PrimaryDamage",
                value: "No"
            },
            {
                label: "Cylinder",
                value: "Yes"
            },
            {
                label: "Transmission",
                value: "Yes"
            },
            {
                label: "Drive",
                value: "Yes"
            },
            {
                label: "Fuel",
                value: "Petrol"
            },
            {
                label: "VehicleType",
                value: "Toyota"
            },
            {
                label: "YearsUsed",
                value: "2 years"
            },
            {
                label: "Location",
                value: "Lagos"
            },
            ]
        }

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

    
    return(
        <div className="w-10/12 ml-auto mt-24 p-9 grid grid-cols-12 gap-8 bg-white">
            <div className="col-span-2 w-full border">
                <ul className="w-full flex flex-col gap-4 justify-center text-center">
                    <li className="p-4 bg-[#35318E] text-center text-white">Users</li>
                    {users.map((user, index)=>(
                        <li key={index} >
                            <div className="grid grid-cols-5 items-center justify-center gap-4 p-2 ">
                                <div className="col-span-2 flex items-right justify-end">
                                    <Image src={user.img} width={20} height={20} alt=""/>
                                </div>
                                <div className="col-span-3 text-start">
                                    <small>{user.name}</small>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="col-span-7 border shadow-lg rounded-2xl p-8">
                <Submitted data={submittedDetails}/>
            </div>
            <div className="col-span-3 py-8">
                <p>Admin Verification</p>
                <div>
                    <div className="col-span-1 grid grid-cols-4">
                    <div className="col-span-2 flex flex-col gap-4">
                        <strong>Checklist</strong>
                        <div className="flex flex-col gap-4">
                        <small>Car Details</small>
                        {carDetails.map((item, index)=>(
                            <small>{item}</small>
                        ))}
                        </div>
                        <div className="flex flex-col gap-4">
                        <small>Condition Report</small>
                        {report.map((item, index)=>(
                            <small>{item}</small>
                        ))}
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-5 text-center">
                        <p>Yes</p>
                        <div className="flex flex-col justify-between pt-10 h-full">
                            {carDetails.map(()=>(
                                <input type="checkbox" />
                            ))}
                        </div>
                        <div className="flex flex-col justify-between pt-10 h-full">
                            {report.map(()=>(
                                <input type="checkbox" />
                            ))}
                        </div>
                    </div>
                    <div className="col-span-1 flex flex-col gap-5 text-center">
                        <p>No</p>
                        <div className="flex flex-col justify-between pt-10  h-full">
                            {carDetails.map(()=>(
                                <input type="checkbox" />
                            ))}
                        </div>
                        <div className="flex flex-col justify-between pt-10 h-full">
                            {report.map(()=>(
                                <input type="checkbox" />
                            ))}
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    )
}