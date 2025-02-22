import React from 'react';

const NoParticipation = () => {
  return (
    <div className="flex flex-col items-center justify-center p-4 
    bg-gray-50 rounded-lg shadow-lg text-center"
    >
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        It Looks Like You Haven't Participated Yet!
    </h2>
      
      <p className="text-lg text-gray-600 mb-4">
        Don't worry! There's still time to get involved and make your mark.
      </p>
      
      <p className="text-sm text-gray-500 mb-6">
        You can:
        <ul className="list-disc list-inside text-gray-600">
          <li>✨ Add products to your Watchlist</li>
          <li>💰 Place bids on items you love</li>
        </ul>
      </p>
      
      <p className="text-md font-semibold text-gray-700 mb-4">
        Take action today and start participating 
        to make the most of your experience.
      </p>
      
      <button  
        className="bg-blue-600 text-white py-2 px-4 rounded-lg
         hover:bg-blue-700 transition duration-200"
      >
        Start Now!
      </button>
    </div>
  );
};

export default NoParticipation;
