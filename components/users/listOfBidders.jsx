import { axiosInstance } from "@/package/axios";
import { useState } from "react";
import { FaEye } from "react-icons/fa";
import useStore from "@/app/store";
import { Toast } from "@/package/alert";
import { Rings } from "react-loading-icons";
import NotificationHandler from "@/utils/notification";

const BiddersList = ({ items, setIsOpen }) => {
    const { user } = useStore();
    const lists = ["Bidder", "Phone Number", "Bid Number", "Action"];
    const [loading, setLoading] = useState(false);

    const sellHandler= async (bid)=>{
        setLoading(true)
        const endpoint = "/acceptBid";
        const body = {
            bidId : bid.id, 
            ownerId : user?.id, 
            bidderId : bid.userId, 
            itemId : items.id, 
            soldPrice : bid.amount,
        }
        try{
        const response = await axiosInstance.post(endpoint, body);
        const data = await response.data;
        if(response.status == 200){
            
            const message = "Congratulation! Your product have sold out to the highest bidder.";
            await NotificationHandler({
            userId : user.id, 
            itemId : items.id,
            message : message, 
            type : "product sold" 
            });

            const bidderMessage = `The auction has ended, and you’ve won <strong>${items.name}</strong>! Get ready to claim your it.`
            await NotificationHandler({
                userId : bid.userId, 
                itemId : items.id,
                message : bidderMessage, 
                type : "bid won" 
            })
           
            
        Toast.fire({
            icon: "success",
            title: data.message,

            didClose: () => {
                window.location.reload();
              }
          });
        }

    }catch(error){
        Toast.fire({
            icon: "error",
            title: "Action denied, please try again",
          });
        }finally{
            setLoading(false);
        }
    }
    



    const sortedBids = [...items.bids].sort((a, b) => b.amount - a.amount);

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
            <div className="bg-white w-2/3 p-5 rounded-lg shadow-lg">
                <div className="flex justify-between items-center mb-4">
                    <h2 className="text-xl font-semibold">Bidders List</h2>
                    <button 
                        className="text-gray-600 hover:text-red-500"
                        onClick={() => setIsOpen(null)}
                    >
                        ✕
                    </button>
                </div>

                <div className="max-h-80 overflow-y-auto">
                    <table className="relative min-w-full bg-white border border-gray-200">
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
                                <td className="py-2 px-4 flex items-center gap-3">
                                <img src={bid.user.profilePicture} alt="Profile" className="w-10 h-10 rounded-full object-cover" />
                                <span className="font-medium">{bid.user.firstName} {bid.user.lastName}</span>
                                </td>
                                <td className="py-2 px-4 border">{bid.user.phoneNumber}</td>
                                <td className={`py-2 px-4 border font-semibold ${!index && "text-green-600"}`}>${bid.amount}</td>
                                <td className="relative">
                                <div className="flex items-center justify-center gap-4">
                                    <button 
                                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600" 
                                    onClick={() => sellHandler(bid)} 
                                    disabled={loading}
                                    >
                                    {loading ? <Rings width={40} height={25} /> : "Accept"}
                                    </button>
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
                </div>
            </div>
        </div>
    );
};

export default BiddersList;
