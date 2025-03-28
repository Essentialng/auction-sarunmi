import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import classNames from "classnames";
import Loading from "@/tabs/admin/loading";
import useStore from "@/app/store";
import { AuctionCard } from "./auctionSection";

export function AuctionItems({ auctions, page, link, onPage, count}) {
  const router = useRouter();
  const { loading } = useStore();
  const [stateUpdated, setStateUpdated] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setStateUpdated((prev) => !prev);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const handleViewAuction = (data) => {
    localStorage.setItem("auctionData", JSON.stringify(data));
    
    if (window.location.pathname === "/description") {
      window.scrollTo(0, 0);
      window.location.reload();
    } else {
      router.push("/description");
    }
  };
  
  return (
    <div>
     
      <div
        className={classNames("grid md:grid-cols-2 grid-cols-1 gap-4 relative", {
          "lg:grid-cols-4": page !== "categories",
          "lg:grid-cols-3": page === "categories",
        })}
      >
        {auctions?.map((item, index) => (
            <AuctionCard key={index} item={item} page={page} onViewAuction={handleViewAuction} link= {link} onPage={onPage}/>
        ))}

        
        
        {loading && <Loading />}
      </div>
     
    </div>
  );
}
