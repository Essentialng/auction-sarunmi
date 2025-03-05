import React, { useState } from "react";
import classNames from "classnames";


const History = () => {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = ["Bid won", "Bid lost", "Product sold"];
  const tableHeaders = ["S/N", "Product Name", "Price", "Date", "Delivery"];

  
  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

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
          {activeTab === 0 && (
            <>
              <tr className="border-b text-center text-[#1E2420]">
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">Camry</td>
                <td className="py-2 px-4">N 3,500,000.00</td>
                <td className="py-2 px-4">16th May 2024</td>
                <td className="py-2 px-4">Delivered</td>
              </tr>
              <tr className="border-b text-center text-[#1E2420]">
                <td className="py-2 px-4">2</td>
                <td className="py-2 px-4">House</td>
                <td className="py-2 px-4">N 7,250,000.00</td>
                <td className="py-2 px-4">9th May 2024</td>
                <td className="py-2 px-4">Delivered</td>
              </tr>
            </>
          )}
          {activeTab === 1 && (
            <tr>
              <td className="py-2 px-4" colSpan="5">
                No bids lost.
              </td>
            </tr>
          )}
          {activeTab === 2 && (
            <tr>
              <td className="py-2 px-4" colSpan="5">
                No products sold.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default History;
