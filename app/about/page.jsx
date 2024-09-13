import { FaAngleRight } from "react-icons/fa6";
import FooterCard from "@/components/footerCard";

export default function Page(){
    const contents = [
        {
            header : "Diverse Listings:",
            body : "From cars, furniture and collectibles to electronics and real estates, our platform features a wide variety of items to cater to every interest and need."
        },
        {
            header : "User-Friendly Experience:",
            body : "Experience: Our intuitive interface makes it easy to browse, bid, and list items. Whether you're a seasoned bidder or a first-time user, you'll find our platform easy to navigate."
        },
        {
            header : "Secure Transactions:",
            body : "We prioritize the safety of our users by implementing robust security measures and ensuring that every transaction is encrypted and protected."
        },
        {
            header : "Customer Support:",
            body : "Our dedicated support team is always ready to assist you with any questions or issues, ensuring that your experience with us is seamless and enjoyable."
        },
    ]

    const cards = [
        {
            hearder : "Transparency",
            details : "We pride ourselves on maintaining a transparent marketplace where all listings and bids are clear and accessible to our users."
        },
        {
            hearder : "Reliability",
            details : "With a track record of successful transactions and satisfied customers, we have established ourselves as a trusted name in online auctions."
        },
        {
            hearder : "Innovation",
            details : "We continually strive to enhance our platform with the latest technology and features to provide you with the best auction experience possible."
        },
    ]
    return(
        <div className="flex flex-col gap-24  2xl:pt-[8rem]">
            <div className="grid grid-cols-2 2xl:text-[14px] xl:text-[14px] md:text-[10px] text-[8px] h-[60vh]">
                <div className="company-hero bg-[#B7A5F9] relative col-span-1 text-white 2xl:px-[4rem] xl:px-[4rem] px-[1rem]">
                    <div className="flex items-center 2xl:gap-4 xl:gap-4 gap-2 py-4 z-50">
                        <span>Home</span>
                        <FaAngleRight size={14}/>
                        <span className="text-[#EF6509]">About</span>
                    </div>
                </div>
                <div className="flex items-center col-span-1 text-[22px] font-[500]">
                    <div className="px-52">
                        <h1 className="text-[36px] text-[#EF6509] font-[600]">ABOUT US</h1>
                        <small>
                        Welcome to Essential E--Auction, your premier destination for online auctions, where buyers and sellers 
                        come together to discover unique items and incredible deals. Founded in [Year], we are dedicated to 
                        creating a dynamic and trustworthy marketplace that brings the excitement of live auctions to your fingertips.
                        </small>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-8 items-center text-[22px] font-[500] 2xl:px-[4rem] xl:px-[4rem] px-[1rem]">
                <div className="col-span- 1">
                    <p className="text-[24px] text-[#EF6509] font-[700]">OUR MISSION</p>
                    <small>
                    Aim is to create a dynamic and transparent marketplace where buyers and sellers can connect with confidence. 
                    We strive to provide a platform that fosters fair competition, integrity, and accessibility for all users. 
                    </small>
                </div>
                <div className="flex flex-col gap-8 col-span-2 pl-32 py-8 shadow-lg rounded-2xl">
                    <p className="text-[24px] text-[#EF6509] font-[700]">WHAT WE OFFER</p>
                    <ul className="flex flex-col gap-8 text-[22px] font-[500]">
                        {contents.map((content, index)=>(
                        <li className="flex gap-2 text-[#EF6509]">
                            <span>{content.header} <small className="text-black">{content.body}</small></span>
                        </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="flex flex-col gap-8 px-[4rem]">
                <p className="text-[24px] text-[#EF6509] font-[700]">WHY CHOOSE US?</p>
                <div className="grid grid-cols-3 gap-6">
                    {cards.map((card, index)=>(
                    <div key={index} className="flex flex-col items-center gap-12 py-12 px-4 border border-[#35318E] rounded-2xl text-[22px] font-[500] text-[#EF6509]">
                        <p>{card.hearder}</p>
                        <small className="text-[18px] text-black">{card.details}</small>
                    </div>
                    ))}
                </div>
            </div>
            <div className=" w-full">
                <FooterCard/>            
            </div>
            <div className="w-full grid grid-cols-3 items-center 2xl:px-[4rem] xl:px-[4rem] px-[1rem] py-24 bg-gradient-to-r to-[#FBFDFB] from-[#6C6193]">
                <div className="px-[10rem]">
                    <button className="px-24 bg-[#EF6509] py-3 rounded-2xl text-white">FAQs</button>
                </div>
                <div className="col-span-2 text-[22px] font-[500] text-center px-48">
                    <p className="text-[#EF6509] font-[700]">CONTACT US</p>
                    <small>Have questions or need assistance? Feel free to reach out to our support team at [Contact Information]. We’re here to help! You can also check our FAQs for quick answers to common questions.</small>
                </div>
            </div>
        </div>
    )
}