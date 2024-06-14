import Image from "next/image"
export default function Cards(){

    const items = [
        {
            "icon": "/icons-three.png",
            "details" : "Our Mission",
            "hidden_detail" : "Aim is to create a dynamic and transparent marketplace where buyers and sellers can connect with confidence. We strive to provide a platform that fosters fair competition, integrity, and accessibility for all users. "
        },
        {
            "icon": "/icons-two.png",
            "details" : "Our Team",
            "hidden_detail" : "Our team comprises dedicated professionals with a passion for creating exceptional user experiences. With diverse expertise in technology, customer service, and auction management."
        },
        {
            "icon": "/icons-one.png",
            "details" : "Our Story",
            "hidden_detail" : "Our story began with a vision to revolutionize the way people buy and sell online. Fueled by a passion for innovation and a commitment to customer satisfaction."
        },
    ]
    return(
        <div className="px-[4rem] py-24 flex flex-col gap-12">
            <h1 className="text-[30px] font-[700] pt-12 text-[#EF6509]">Why Essential E-Auction</h1>
            <div className=" w-full flex gap-4">
                {items.map((item)=>(
                    <div className="card h-[275px] bg-[#554AA2] rounded-[20px] px-[20px] py-[48px] w-full flex flex-col gap-6 
                    justify-center text-center text-[24px] font-[700] text-white items-center transition-all duration-500 ease-in-out
                    hover:bg-white hover:border border-[#554AA2] hover:h-[367px] hover:text-[#EF6509]">
                        <div className="flex flex-col gap-16 justify-center text-center items-center">
                            <Image src={item.icon} width={80} height={80}/>
                            <p>{item.details}</p>
                        </div>
                        <small className="hidden_detail hidden text-[14px] font-[400] text-black">{item.hidden_detail}</small>
                    </div>
                ))}
            </div>
            <div className="bg-[#E8E9E8]  font-[700] text-[24px] h-[492px] rounded-2xl flex gap-8">
                <div className="w-[375px] px-[20px] rounded-2xl bg-white font-[700] text-[24px] py-6 shadow-2xl">
                    <h1 className="text-[#EF6509]">What is Essential E-Auction?</h1>
                    <div className="info text-[14px] flex flex-col gap-10 py-4">
                        <small>
                        Essential E-Auction is an innovative auction company at the forefront of digital bidding experiences. 
                        </small>
                        <small>
                        Specializing in online auctions, Essential E-Auction offers a <span>diverse range </span> of products and services, catering to both individual <span>consumers</span> and <span>business clients</span>. 
                        </small>
                        <small>
                        With a user-friendly platform and transparent processes, Essential E-Auction ensures <span>accessibility</span> and <span>fairness</span> for all participants. 
                        </small>
                        <small>
                        Leveraging cutting-edge technology, the company provides <span>seamless bidding opportunities,</span> facilitating efficient transactions and delivering unparalleled customer satisfaction. 
                        </small>
                    </div>
                </div>
                <div>

                </div>
            </div>
        </div>
    )
}