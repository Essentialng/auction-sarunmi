"use client";
import React, { useState } from "react";

const History = () => {
  const [activeTab, setActiveTab] = useState("bidWon");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">History</h2>
      <div className="flex space-x-6 border-b border-gray-300 pb-2 mb-4">
        <button
          className={`${
            activeTab === "bidWon" ? "text-orange-600 border-orange-600" : "text-gray-500"
          } pb-2 border-b-2 font-semibold`}
          onClick={() => handleTabChange("bidWon")}
        >
          Bid won
        </button>
        <button
          className={`${
            activeTab === "bidLost" ? "text-orange-600 border-orange-600" : "text-gray-500"
          } pb-2 border-b-2 font-semibold`}
          onClick={() => handleTabChange("bidLost")}
        >
          Bid lost
        </button>
        <button
          className={`${
            activeTab === "productSold" ? "text-orange-600 border-orange-600" : "text-gray-500"
          } pb-2 border-b-2 font-semibold`}
          onClick={() => handleTabChange("productSold")}
        >
          Product sold
        </button>
      </div>

      <table className="w-full text-left table-auto">
        <thead>
          <tr className="bg-purple-700 text-white">
            <th className="py-2 px-4">S/N</th>
            <th className="py-2 px-4">Product Name</th>
            <th className="py-2 px-4">Price</th>
            <th className="py-2 px-4">Date</th>
            <th className="py-2 px-4">Delivery</th>
          </tr>
        </thead>
        <tbody>
          {activeTab === "bidWon" && (
            <>
              <tr className="border-b">
                <td className="py-2 px-4">1</td>
                <td className="py-2 px-4">Camry</td>
                <td className="py-2 px-4">N 3,500,000.00</td>
                <td className="py-2 px-4">16th May 2024</td>
                <td className="py-2 px-4">Delivered</td>
              </tr>
              <tr>
                <td className="py-2 px-4">2</td>
                <td className="py-2 px-4">House</td>
                <td className="py-2 px-4">N 7,250,000.00</td>
                <td className="py-2 px-4">9th May 2024</td>
                <td className="py-2 px-4">Delivered</td>
              </tr>
            </>
          )}
          {activeTab === "bidLost" && (
            <tr>
              <td className="py-2 px-4" colSpan="5">
                No bids lost.
              </td>
            </tr>
          )}
          {activeTab === "productSold" && (
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
