import Image from "next/image"
export default function Cards(){

    const items = [
        {
            "icon": "/icons-three.png",
            "details" : "Our Mission"
        },
        {
            "icon": "/icons-two.png",
            "details" : "Our Team"
        },
        {
            "icon": "/icons-one.png",
            "details" : "Our Story"
        },
    ]
    return(
        <div className="px-[4rem] py-24 flex flex-col gap-4">
            <h1 className="text-[30px] font-[700] py-12 text-[#EF6509]">Why Essential E-Auction</h1>
            <div className="h-[275px] w-full flex gap-4">
                {items.map((item)=>(
                    <div className="bg-[#554AA2] rounded-[20px] px-[20px] py-[48px] w-full flex flex-col gap-16 justify-center text-center text-[24px] font-[700] text-white items-center">
                        <Image src={item.icon} width={80} height={80}/>
                        <p>{item.details}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}