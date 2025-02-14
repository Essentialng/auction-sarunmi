import Image from "next/image"
import Section from "./cardsSection"
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
        <div className="2xl:px-[4rem] xl:px-[4rem] px-[2rem] 2xl:py-24 xl:py-24 py-12 flex flex-col gap-12">
            <h1 className="2xl:text-[30px] xl:text-[30px] text-[24px] font-[700] pt-12 text-[#EF6509]">Why Essential E-Auction</h1>
            <div className=" w-full flex 2xl:flex-row xl:flex-row flex-col gap-4">
                {items.map((item, index)=>(
                    <div 
                    key={index}
                    className="card h-[275px] bg-[#554AA2] rounded-[20px] px-[20px] py-[48px] w-full flex flex-col gap-6 
                    justify-center text-center text-[24px] font-[700] text-white items-center transition-all duration-500 ease-in-out
                    hover:bg-white hover:border border-[#554AA2] hover:h-[367px] hover:text-[#EF6509]">
                        <div className="flex flex-col gap-16 justify-center text-center items-center">
                            <Image src={item.icon} width={80} height={80} alt=""/>
                            <p>{item.details}</p>
                        </div>
                        <small className="hidden_detail hidden text-[14px] font-[400] text-black">{item.hidden_detail}</small>
                    </div>
                ))}
            </div>
            <Section/>
        </div>
    )
}