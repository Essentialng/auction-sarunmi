
import { calculateTimeToStart, calculateTimeLeft } from "@/utils/methods";
import Image from "next/image";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";
import { FaCircle } from "react-icons/fa";
import { TbCurrencyNaira } from "react-icons/tb";
import classNames from "classnames";
import useStore from "@/app/store";
import Link from "next/link";
import { LuBadgeInfo } from "react-icons/lu";




export function AuctionCard ({ item, page, onViewAuction, link, onPage }) {
  const timeLeft = calculateTimeLeft(item?.endTime);
  const timeToStart = calculateTimeToStart(item?.startTime);

  return (
    <div className="flex flex-col gap-2 items-center justify-center hover:scale-95 transition-all duration-500 ease-in-out">
      {!link &&
      <AuctionTimer timeLeft={timeLeft} timeToStart={timeToStart} />
      }
      <div
        className={classNames(
          "py-4 px-[20px] rounded-[10px] items-center flex flex-col gap-4 border font-[700] shadow-md h-fit",
          {
            "border-[#7BC27A]": !timeToStart && timeLeft !== "00:00:00:00",
            "border-[#989FA1]": timeLeft === "00:00:00:00",
            "border-[#FF9354]": timeToStart,
          }
        )}
      >
        <AuctionImage src={item?.images[0]} />
        {!link ?
        <>
        <AuctionStatus timeLeft={timeLeft} timeToStart={timeToStart} />
        <AuctionDetails type={item?.type} description={item?.description} price={item?.price} />
        </>
        :
        <div className="w-full text-start flex flex-col gap-4">
          <div>
          <h3>{item?.name}</h3>
          <p className="text-gray-500 font-normal">BUY NOW</p>
          </div>
          <h1 className="flex items-center"><TbCurrencyNaira size={16} /> {item?.payOff?.toLocaleString()}</h1>
        </div>
        }
        <AuctionActions
          timeLeft={timeLeft}
          timeToStart={timeToStart}
          onPreBid={() => onViewAuction(item)}
          userId={item?.userId}
          link={link}
          itemId = {item?.model?.categoryId}
          onPage={onPage}
        />
      </div>
      {(link && !onPage) &&
      <div className="flex items-center gap-2 border p-2 shadow-md rounded-md font-medium">
        <small className="font-bold">{(
          item?.modelId == 5 && item?.model?.categoryId == 2) ? "Land Properties" :
          ( item?.modelId == 3 && item?.model?.categoryId == 2) ? "Apartment Properties" :
          (item?.model?.categoryId == 1) ? "Car Properties" : "Electronics Properties" }</small>
        <small className="font-medium bg-orange-300 py-1 px-2 rounded-md border-2">{item?.count} Ads</small> 
      </div>
      }
    </div>
  );
};


const AuctionTimer = ({ timeLeft, timeToStart }) => {
  return (
    <div
      className={classNames(
        "sm:w-1/3 w-2/3 text-center py-4 rounded-[10px] border font-[700] shadow-md",
        {
          "border-[#7BC27A]": !timeToStart && timeLeft !== "00:00:00:00",
          "border-[#989FA1]": timeLeft === "00:00:00:00",
          "border-[#FF9354]": timeToStart,
        }
      )}
    >
      <p>{timeToStart || timeLeft}</p>
    </div>
  );
};


const AuctionImage = ({ src }) => (
  <div className="relative">
    <Image src={src} width={260} height={190} className="h-40" alt="Auction Image" />
  </div>
);



const AuctionStatus = ({ timeLeft, timeToStart }) => {
  return (
    <div
      className={classNames(
        "w-full flex justify-between items-center text-[14px] font-[400]",
        {
          "text-[#7BC27A]": !timeToStart && timeLeft !== "00:00:00:00",
          "text-[#989FA1]": timeLeft === "00:00:00:00",
          "text-[#FF7B58]": timeToStart,
        }
      )}
    >
      <div className="flex gap-2 items-center">
        <FaCircle size={10} />
        <small>
          {timeToStart
            ? "Upcoming Auction"
            : timeLeft === "00:00:00:00"
            ? "Ended Auction"
            : "Live Auction"}
        </small>
      </div>
      <IoIosCheckmarkCircleOutline size={16} />
    </div>
  );
};



const AuctionDetails = ({ type, description, price }) => (
  <div className="flex flex-col gap-8">
    <div className="h-12 overflow-clip">
      {/* <h4 className="text-[16px] font-[700]">{type}</h4> */}
      <small className="text-[14px] font-[400] ">
        {description?.length > 50 ? `${description.substring(0, 70)}...` : description}
      </small>
    </div>
    <div className="flex gap-4 text-[14px]">
      <span className="font-[400]">Retail Value:</span>
      <h4 className="font-[700] flex items-center">
        <TbCurrencyNaira size={16} /> {price.toLocaleString()}
      </h4>
    </div>
  </div>
);



const AuctionActions = ({ timeLeft, timeToStart, onPreBid, userId, link, itemId, onPage }) => {

  const {user} = useStore();

  const btn_class = `bg-[#EF6509] text-white lg:text-[15px] md:text-[15px] text-[12px] font-[500] 
    px-5 py-2 rounded-lg hover:bg-[#35318E] hover:shadow-black shadow-sm`;

  return (!timeToStart && !link) ? (
    <button
      className={`${timeLeft === "00:00:00:00" ? "bg-gray-200 text-[#989FA1] hover:bg-gray-200 shadow-none" : "bg-[#FF7B58]"} ${btn_class}`}
      onClick={onPreBid}
      // disabled={timeLeft === "00:00:00:00"}
    >
      {timeLeft === "00:00:00:00" ? "AUCTION ENDED" : "JOIN AUCTION"}
    </button>
  ) : (
    <div className="flex gap-3">
      <button 
      className={btn_class} 
      onClick={onPreBid}
      >VIEW AUCTION
      </button>
      {!link ?
      <button 
      disabled={user?.id == userId } 
      className={classNames({
        [btn_class]: true,
        "bg-gray-200 text-[#989FA1] hover:bg-gray-200" : user?.id == userId
      })} 
      onClick={onPreBid}>
        PRE BID
      </button>
      :
      !onPage &&
      <Link href={`/listingItems/${itemId}`} className={btn_class}>
          VIEW ALL
      </Link>
      }
    </div>
  );
};