import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";
import Link from "next/link";
import { FcCheckmark } from "react-icons/fc";
import { TbHammer } from "react-icons/tb";
import classNames from "classnames";


const FeatureList = ({ features }) => {
  return (
    <div className="flex flex-col gap-8 px-8">
        {features.map((feature, index)=>(
        <div className={classNames({
            "flex flex-col gap-2 ": true,
            "border-b-2 border-orange-600 pb-8" : index == 0
            })}>
            <div className="flex items-center gap-2 ">
                <TbHammer size={20} color="orange"/>
                <h5 className=" font-medium text-lg- mb-2">{feature.title}</h5>
            </div> 
            <ul className="text-gray-700">
                {feature.contents.map((content, index) => (
                <li key={index} className="flex items-center mb-2 gap-2">
                    <FcCheckmark/>
                    {content}
                </li>
                ))}
            </ul>
        </div>
        ))}
    </div>
  );
};



export const SubscriptionCard = ({index}) => {

    const subscriptions = [
        
        {
            type :"Basic",
            content: "Exclusive access for basic member",
            price: "N 20,000",
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
            price: "N 50,000",
            duration: "NGN / YEAR",
            bgColor: "[#092809]",
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
            price: "N 75,000",
            duration: "NGN / YEAR",
            bgColor: "[#30136a]",
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


  const activeSub = subscriptions[index];

  return (
    <div className="bg-white w-2/3 flex flex-col gap-8">
      <h3 className="text-center text-xl font-semibold text-gray-800">SUBSCRIPTION</h3>
    
      <div className="rounded-lg shadow p-6 border">
        <div className=" flex items-center justify-center gap-2 py-4">
            {subscriptions.map((nav, num)=>{
            const active = num == index
            return(
            <div className={classNames({
                "h-2 w-6 rounded-lg" : true,
                " bg-[#D7D8D7]" : !active,
                "bg-orange-500" : active
            })}/>
            )})}
        </div>
        <div className={`bg-${activeSub.bgColor} text-white rounded-lg p-8 mb-6`}>
          <h4 className="text-[22px] font-bold">{activeSub.type}</h4>
          <p className="text-lg font-medium">{activeSub.content}</p>
          <div className="flex items-center gap-4 pt-4">
            <p className="text-3xl font-bold text-orange-600 ">{activeSub.price}</p>
            <small className="text-sm">{activeSub.duration}</small>
          </div>
        </div>
        <FeatureList
          features={activeSub.features}
        />
      </div>
      <Link href="/payment">
        <button className="bg-orange-500 text-white font-semibold py-3 w-full rounded-lg hover:bg-orange-600">
          SUBSCRIBE
        </button>
      </Link>
    </div>
  );
};
