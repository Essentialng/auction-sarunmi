"use client";
import Background from "@/components/users/backgroundImg";
import { SubscriptionCard } from "@/components/users/subsribeSection";
import { useEffect, useState } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import classNames from "classnames";
import { useRouter } from 'next/navigation';
import useStore from "../store";
import PopUp from "@/components/users/signup-pop";



export default function SubscriptionPage() {
    const {user, initializeUser} = useStore();
    const [index, setIndex] = useState(0);
    const [subscribe, setSubscribe] = useState(false);
    const subscriptions = [
        
      {
          type :"Basic",
          content: "Exclusive access for basic member",
          price: "20000",
          duration: "NGN / YEAR",
          bgColor: "[#35318E]",
          features: [
              {
              title:"Bidding",
              contents :[
                  "Bid up to N 10,000 daily", 
                  "Bid up to 10 products daily"
                  ]
              },
              {
              title:"Benefit",
              contents :[
                  "Follow Multiple Auctions", 
                  "Personalized Alert",
                  "Saved Searches",
                  "Watchlist"
              ]
              }
          ]
      },

      {
          type :"Standard",
          content: "Exclusive access for standard member",
          price: "50000",
          duration: "NGN / YEAR",
          bgColor: "green-950",
          features: [
              {
              title:"Bidding",
              contents :[
                  "Bid up to N 50,000 daily", 
                  "Bid up to 20 products daily"
                  ]
              },
              {
              title:"Benefit",
              contents :[
                  "All Basic Benefits", 
                  "Priority Bid Alert",
                  "Bidding Insights",
              ]
              }
          ]
      },

      {
          type :"Premium",
          content: "Exclusive access for premium member",
          price: "75000",
          duration: "NGN / YEAR",
          bgColor: "purple-950",
          features: [
              {
              title:"Bidding",
              contents :[
                  "Bid up to N 200,000 daily", 
                  "Bid up to 40 products daily"
                  ]
              },
              {
              title:"Benefit",
              contents :[
                  "All Basic and Standard Benefits", 
                  "Exclusive Auctions",
                  "Premium Badge",
              ]
              }
          ]
      }
  ];


  const popDetails = {
    headers: "Subscription Successful!!",
    texts: `Thank you for subscribing to Essential E-Auction Premium Membership!
We are excited to welcome you to our exclusive community of premium members. Your premium benefits are now active, and you’re all set to experience an enhanced auction journey.

Happy bidding!
    `,
    btn2: "CONTINUE",
    link2: "/"
  }
    
   
    const navigation = "rounded-lg p-2";

  return (
    <div className="px-24 py-12 grid grid-cols-5 mt-28">
      <div className="flex items-center justify-center col-span-3 gap-12 border rounded-2xl shadow-2xl py-12">
      <button 
      className={classNames({
        [navigation]: true,
        "bg-[#0000001A]" : index < 1,
        "bg-black" : index > 0
        })} 
        disabled={index < 1}
        onClick={()=>setIndex(index - 1)}
        >
        <RiArrowLeftSLine 
         size={40} 
         color="#C6CBC7" 
         />
        </button>

        <SubscriptionCard 
        index={index} 
        subscriptions={subscriptions} 
        user={user} 
        initializeUser={initializeUser}
        setSubscribe={setSubscribe} 
        />

        <button 
        className={classNames({
        [navigation]: true,
        "bg-[#1488401a]" : index == 2,
        "bg-black" : index < 2
    })} 
        disabled={index == 2}
        onClick={()=>setIndex(index + 1)}
        >
            <RiArrowRightSLine 
            size={40} 
            color="#C6CBC7" 
            onClick={()=>setIndex(index + 1)}
            />
         </button>
      </div>
      <Background />

      {subscribe &&
      <PopUp details={popDetails}/>
        }

    </div>
  );
}
