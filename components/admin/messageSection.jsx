import { BiCheckDouble } from "react-icons/bi"

export function MessageHistory(){
    
    const messages = [

        {
            labelIcon: "#",
            label: "Admins messages",
            contents : [
                {
                    profilePicture: "#",
                    lastName: "Anuoluwapo",
                    firstName : "Victoria",
                    email: "isrealChuks@gmail.com",
                    values: [
                        {
                            message : `
                            Dear Admin,

                            I hope this message finds you well. I am writing to request an extension of the closing date 
                            for my current bid on 3bedroom House (Item ID: #12653). Due to increased interest and 
                            inquiries from potential bidders, I believe that extending the bid period will allow for more 
                            competitive bidding and potentially better results.

                            I kindly ask for the new closing date to be 4th July 2024. Please let me know if this is 
                            possible or if additional information is required to process this request.

                            Thank you for your assistance and understanding.
                            `,
                            status: "unread",
                            subject: "Extension of Bid Close Day",
                            time: "11:45 AM",
                        },
                        {
                            message : "I’ll like to adjust the date for ...",
                            status: "unread"
                        }
                    ]
                },
                {
                    profilePicture: "#",
                    lastName: "Isreal",
                    firstName : "Chucks",
                    email: "isrealChuks@gmail.com",
                    values: [
                        {
                            message : `
                            Dear Admin,

                            I hope this message finds you well. I am writing to request an extension of the closing date 
                            for my current bid on 3bedroom House (Item ID: #12653). Due to increased interest and 
                            inquiries from potential bidders, I believe that extending the bid period will allow for more 
                            competitive bidding and potentially better results.

                            I kindly ask for the new closing date to be 4th July 2024. Please let me know if this is 
                            possible or if additional information is required to process this request.

                            Thank you for your assistance and understanding.
                            `,
                            status: "unread",
                            subject: "Extension of Bid Close Day",
                            time: "11:45 AM",
                        }
                    ]
                }
            ]
        },

        {
            labelIcon: "#",
            label: "users messages",
            contents : [
                {
                    profilePicture: "#",
                    lastName: "Chuks",
                    firstName : "Victoria",
                    email: "isrealChuks@gmail.com",
                    values: [
                        {
                            message : `
                            Dear Admin,

                            I hope this message finds you well. I am writing to request an extension of the closing date 
                            for my current bid on 3bedroom House (Item ID: #12653). Due to increased interest and 
                            inquiries from potential bidders, I believe that extending the bid period will allow for more 
                            competitive bidding and potentially better results.

                            I kindly ask for the new closing date to be 4th July 2024. Please let me know if this is 
                            possible or if additional information is required to process this request.

                            Thank you for your assistance and understanding.
                            `,
                            status: "unread",
                            subject: "Extension of Bid Close Day",
                            time: "11:45 AM",
                        },
                        {
                            message : "I’ll like to adjust the date for ...",
                            status: "unread"
                        }
                    ]
                },
                {
                    profilePicture: "#",
                    lastName: "Chuks",
                    firstName : "Isreal",
                    email: "isrealChuks@gmail.com",
                    values: [
                        {
                            message : `
                            Dear Admin,

                            I hope this message finds you well. I am writing to request an extension of the closing date 
                            for my current bid on 3bedroom House (Item ID: #12653). Due to increased interest and 
                            inquiries from potential bidders, I believe that extending the bid period will allow for more 
                            competitive bidding and potentially better results.

                            I kindly ask for the new closing date to be 4th July 2024. Please let me know if this is 
                            possible or if additional information is required to process this request.

                            Thank you for your assistance and understanding.
                            `,
                            status: "unread",
                            subject: "Extension of Bid Close Day",
                            time: "11:45 AM",
                        }
                    ]
                }
            ]
        },
    ]
    return(
        <div className="flex flex-col gap-12 p-4">
            {messages.map((item, index)=>(
            <div key={index} className="flex flex-col gap-4 font-normal overflow-clip">
                <div className="flex gap-1 items-center text-sm text-[#3A3A3A]">
                    <span>{item?.labelIcon}</span>
                    <small>{item?.label}</small>
                </div>
                
                {item?.contents?.map((content, num)=>(
                <div className="flex gap-4 items-center relative text-base font-medium overflow-clip">
                    <div>{content?.icon}</div>
                    <div className="flex flex-col gap-2 w-full font-extralight text-[#3A3A3A] overflow-clip relative">
                        <div className="w-full flex items-center justify-between overflow-clip">
                            <p>{content?.firstName}</p>
                            <small>{content?.values[0]?.time}</small>
                        </div>
                        <div className="w-full grid grid-cols-12 items-center gap-2">
                            <div className="col-span-1">
                                <BiCheckDouble  color="green"/>
                            </div>
                            <div className="col-span-11 text-nowrap truncate">
                                <small>{content?.values[0]?.message}</small>
                            </div>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            ))}
        </div>
    )
};








export function BroadcastMessages(){

    const broadcasts = [
        {
            labelIcon: "#",
            label: "Broadcast",
            contents : [
                {
                    icon: "#",
                    name : "General",
                    time: "11:45 AM",
                    values: [
                        {
                            message : "Dear users! There’ll be an upc ...",
                            status: "unread"
                        }
                    ]
                },
                {
                    icon: "#",
                    name : "Admins",
                    time: "11:45 AM",
                    values: [
                        {
                            message : "Dear users! There’ll be an upc ...",
                            status: "unread"
                        }
                    ]
                }
            ]
        },
    ]
    return(
        <div className="flex flex-col gap-12 p-4">
            {broadcasts.map((item, index)=>(
            <div key={index} className="flex flex-col gap-4 font-normal">
                <div className="flex gap-1 items-center text-sm text-[#3A3A3A]">
                    <span>{item?.labelIcon}</span>
                    <small>{item?.label}</small>
                </div>
                
                {item?.contents?.map((content, num)=>(
                <div className="flex gap-4 items-center relative text-base font-medium">
                    <div>{content?.icon}</div>
                    <div className="flex flex-col gap-2 w-full font-extralight text-[#3A3A3A]">
                        <div className="flex items-center justify-between">
                            <p>{content?.name}</p>
                            <small>{content?.time}</small>
                        </div>
                        <div className="flex items-center gap-2">
                            <BiCheckDouble color="green"/>
                            <small>{content?.values[0]?.message}</small>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            ))}
        </div>
    )
};







export function MessageDetails({info}){

    const container = "flex items-center gap-8 text-[18px] font-[500]"
    const userDetails = "text-[16px] font-[400]"
    return(
        <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2 bg-[#F7F9FB] p-4 rounded-xl w-fit">
                <div className={container}>
                    <p>User:</p>
                    <p className={userDetails}>Israel Chuks</p>
                </div>
                <div className={container}>
                    <p>Email:</p>
                    <p className={userDetails}>israelchuks@gmail.com</p>
                </div>
                <div className={container}>
                    <p>Time:</p>
                    <p className={userDetails}>1:52 PM</p>
                </div>
                <div className={container}>
                    <p>Date:</p>
                    <p className={userDetails}>14th June, 2024</p>
                </div>
                <div className={container}>
                    <p>Subject:</p>
                    <p className={userDetails}>Extension of Bid Close Day</p>
                </div>
            </div>

            <div className="w-full h-fit flex flex-col gap-4 bg-[#F7F9FB] p-4 rounded-xl">
                <strong>User Message</strong>
                <div>
                    {`
                            Dear Admin,

                            I hope this message finds you well. I am writing to request an extension of the closing date 
                            for my current bid on 3bedroom House (Item ID: #12653). Due to increased interest and 
                            inquiries from potential bidders, I believe that extending the bid period will allow for more 
                            competitive bidding and potentially better results.

                            I kindly ask for the new closing date to be 4th July 2024. Please let me know if this is 
                            possible or if additional information is required to process this request.

                            Thank you for your assistance and understanding.
                            `}
                </div>
            </div>

            <div className="w-full flex flex-col gap-2 py-8">
                <strong>Admin response</strong>
                <textarea name="" id="" className="h-[170px] outline-none border rounded-xl p-4 resize-none"/>
                <div className="flex items-end justify-end py-4">
                    <button className="bg-[#EF6509] py-2 px-4 text-white text-base font-medium rounded-lg">SEND</button>
                </div>
            </div>
        </div>
    )
}