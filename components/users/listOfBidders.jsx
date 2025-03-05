import { FaEye } from "react-icons/fa";

const BiddersList = ({ bids, onAcceptBid, setIsOpen }) => {
    const lists = ["Bidder", "Phone Number", "Bid Number", "Action"];

    const sortedBids = [...bids].sort((a, b) => b.amount - a.amount);

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
                            {sortedBids.length > 0 ? (
                                sortedBids.map((bid, index) => (
                                    <tr key={index} className="text-center">
                                        <td className="py-2 px-4 flex items-center gap-3">
                                            <img
                                                src={bid.user.profilePicture}
                                                alt="Profile"
                                                className="w-10 h-10 rounded-full object-cover"
                                            />
                                            <span className="font-medium">
                                                {bid.user.firstName} {bid.user.lastName}
                                            </span>
                                        </td>

                                        <td className="py-2 px-4 border">{bid.user.phoneNumber}</td>
                                        <td className={`py-2 px-4 border font-semibold ${index === 0 && "text-green-600"}`}>
                                            ${bid.amount}
                                        </td>
                                        <td className="relative">
                                            <div className="flex items-center justify-center gap-4">
                                                <button
                                                    className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600"
                                                    onClick={() => onAcceptBid(bid)}
                                                >
                                                    Accept
                                                </button>
                                                {/* <button
                                                    className="text-black hover:text-gray-700"
                                                    onClick={() => onViewBid(bid)}
                                                >
                                                    <FaEye size={18} />
                                                </button> */}
                                            </div>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" className="py-3 text-center text-gray-500">
                                        No bids yet.
                                    </td>
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
