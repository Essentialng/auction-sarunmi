import Link from "next/link";
import { FcCheckmark } from "react-icons/fc";
import { TbHammer } from "react-icons/tb";
import classNames from "classnames";
import { TbCurrencyNaira } from "react-icons/tb";
import PaystackButtonComponent from "./paystack";

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



export const SubscriptionCard = ({index, subscriptions}) => {

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
            <div className="flex items-center text-orange-600 text-3xl font-bold  ">
              <TbCurrencyNaira size={30}/>
              <p>{Number(activeSub.price).toLocaleString()}</p>
            </div>
            <small className="text-sm">{activeSub.duration}</small>
          </div>
        </div>
        <FeatureList
          features={activeSub.features}
        />
      </div>
      <div className="relative">
        <PaystackButtonComponent
        price={Number(subscriptions[index].price)}
        className={"absolute bg-transparent w-full h-12 "}
        />
        <button className="bg-orange-500 text-white font-semibold py-3 w-full rounded-lg hover:bg-orange-600"
 >
          SUBSCRIBE
        </button>
      </div>
    </div>
  );
};
