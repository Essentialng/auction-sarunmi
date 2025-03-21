import { useState, useEffect } from "react";
import classNames from "classnames";
import { axiosInstance } from "@/package/axios";
import useStore from "@/app/store";
import { dateFormat } from "@/utils/methods";
import { Rings } from "react-loading-icons";
import { useRouter } from "next/navigation";
import Loading from "@/tabs/admin/loading";
import { Toast } from "@/package/alert";

const History = () => {
  const {user} = useStore();
  const router = useRouter();
  const [activeTab, setActiveTab] = useState(0);
  const [historyData, setHistoryData] = useState([]);
  const [routerLoading, setRouterLoading] = useState(false);
  const [loading, setLoading] = useState(false);

  const tabs = ["Bid won", "Bid lost", "Product sold"];
  const tableHeaders = ["S/N", "Product Name", "Price", "Date", "Delivery"];

  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const HistoryHandler = async()=>{
    setLoading(true)
    const body ={userId:user?.id}
    try{
      const response = await axiosInstance.post("/history", body);
      const data = await response.data;
      if(response.status == 200){
        setHistoryData(data)
      }
    }catch(error){
      Toast.fire({
        icon: "error",
        title: "try again!",
      })
    }finally{
      setLoading(false);
    }
  };

  const fetchProductandler = (data)=>{
    setRouterLoading(true);
    const flatData = {
      ...data,
      ...data.item 
    };
    delete flatData.item; 
    localStorage.setItem("auctionData", JSON.stringify(flatData));
    router.push("/description");
  }


  useEffect(()=>{
    HistoryHandler();
  },[])

 
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">History</h2>
      
      <div className="flex space-x-6 border-b-2 border-gray-300 mb-4">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={classNames({
              "text-orange-600 border-orange-600 border-b-4" : activeTab === index,
              "text-gray-500 border-b-1" : activeTab !== index,
              "pb-2  font-semibold" : true
            })}
            onClick={() => handleTabChange(index)}
          >
            {tab}
          </button>
        ))}
      </div>
      {!loading ?
      <table className="w-full xl:text-[18px] text-[12px] font-[500] border-separate border-spacing-y-2">
        <thead className=" w-full text-white font-[500] bg-[#35318E] ">
          {tableHeaders.map((header, index) => (
              <th 
              key={index} 
              className={classNames({
                  "xl:py-8 py-4" : true,
                  "rounded-tl-2xl rounded-bl-2xl" : index === 0,
                  "rounded-tr-2xl rounded-br-2xl" : index === 4
              })}>
                <p className={classNames({
                  "w-full xl:border-r-2 border-r-white text-center" : true,
                  "border-r-[#35318E] " : index === 4 
                  })}
                  >
                  {header}
                </p>
              </th>
            ))}
        </thead>
        <tbody>
            {historyData[activeTab]?.length > 0 && 
            <>
            {historyData[activeTab]?.map((item, index) => (
              <tr 
              className="border-b text-center text-[#1E2420] hover:bg-gray-200 cursor-pointer"
              onClick={()=>fetchProductandler(item)}
               >
                <td className="py-2 px-4">{index + 1}</td>
                <td className="py-2 px-4">{item?.item?.name}</td>
                <td className="py-2 px-4">N {item?.soldPrice.toLocaleString()}</td>
                <td className="py-2 px-4">{dateFormat(item?.soldAt)}</td>
                <td className="py-2 px-4">Delivered</td>
              </tr>
            ))}
            </>
            }
          {(historyData[activeTab]?.length < 1 || historyData.length == 0 ) && (
            <tr>
              <td className="py-2 px-4" colSpan="5">
                No histroy data.
              </td>
            </tr>
          )}

       
          
        </tbody>
      </table>
      :
      <div className="w-full flex items-center justify-center">
        <Rings width={50} heigth={50} className="bg-orange-600 p-2 rounded-full"/>
      </div>
      }

      {routerLoading &&
      <Loading/>
      }

    </div>
  );
};

export default History;
