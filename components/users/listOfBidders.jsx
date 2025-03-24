import { axiosInstance } from "@/package/axios";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import useStore from "@/app/store";
import { Toast } from "@/package/alert";
import { Rings } from "react-loading-icons";
import NotificationHandler from "@/utils/notification";
import { PiShootingStarFill } from "react-icons/pi";

const BiddersList = ({ items, setIsOpen }) => {
    const { user } = useStore();
    const lists = ["Name", "Bid Amount", "Action"];
    const [loading, setLoading] = useState(false);
    



    const sortedBids = [...items.bids].sort((a, b) => b.amount - a.amount);
   
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-2/5 p-5 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h4 className="text-lg">Bidders List</h4>
                    <h2 className="text-xl font-semibold">{items?.name}</h2>
                    <button 
                        className="text-gray-600 hover:text-red-500"
                        onClick={() => setIsOpen(null)}
                    >
                        ✕
                    </button>
                </div>

                <div className="max-h-80 overflow-y-auto flex flex-col gap-2">
                    <table className="relative min-w-full bg-white border border-gray-200 text-xs">
                        <thead className="bg-gray-100 text-gray-700">
                            <tr>
                                {lists.map((list, index) => (
                                    <th key={index} className="py-2 px-4 border">{list}</th>
                                ))}
                            </tr>
                        </thead>

                        <tbody>
                        {sortedBids.length ? (
                            sortedBids.map((bid, index) => (
                            <tr key={index} className="text-center">
                                <td className="py-1 px-4 flex items-center gap-3">
                                <img src={bid.user.profilePicture} alt="Profile" className="w-12 h-10 rounded-full object-cover border" />
                                <span className="font-medium w-full">{bid.user.firstName} {bid.user.lastName}</span>
                                </td>
                                <td className={`py-2 px-4 border font-semibold ${!index && "text-green-600"}`}>₦{bid.amount}</td>
                                <td className="relative">
                                <div className="flex items-center justify-center gap-4">
                                {bid?.id == items?.highestBid?.id &&
                                    <button 
                                    className="text-white px-3 py-1 bg-black"
                                    disabled={loading}
                                    >
                                  
                                    <PiShootingStarFill color="yellow" size={18}/>
                                    </button>
                                }
                                </div>
                                </td>
                            </tr>
                            ))
                        ) : (
                            <tr>
                            <td colSpan="4" className="py-3 text-center text-gray-500">No bids yet.</td>
                            </tr>
                        )}
                        </tbody>

                    </table>
                    <div className="p-2 bg-gray-100 w-4/5 text-[10px]">
                        <small>
                            A 10% fee will be deducted from the sale price of this product. 
                            This ensures fair compensation for facilitating the transaction and 
                            providing seamless business support for your listing. Thank you for choosing us!
                        </small>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BiddersList;
