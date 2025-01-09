import React from "react";

const ProductVerify = ({ isOpen, onClose }) => {
 

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-purple-500 text-white p-6 rounded-lg shadow-lg max-w-6xl w-full">
        <button
          className="absolute top-4 right-4 text-white bg-purple-700 hover:bg-purple-600 px-2 rounded-full"
          onClick={onClose}
        >
          ✕
        </button>

        {/* Image Section */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="w-full md:w-1/2">
            <img
              src="/path-to-image/car.jpg"
              alt="Car"
              className="w-full h-auto rounded-lg"
            />
            <p className="text-center mt-2">Click Images to expand and see all images</p>
          </div>

          {/* Verification and Comments */}
          <div className="w-full md:w-1/2">
            <div className="bg-purple-600 p-4 rounded-lg">
              <p className="text-sm font-bold">Verified By: <span className="font-normal">Henry Brown</span></p>
              <p className="text-sm font-bold">Verification Date: <span className="font-normal">April 2024</span></p>
              <p className="text-sm mt-2">
                <strong>Comment:</strong> The car has been thoroughly inspected and meets all
                criteria for auction. The documents provided are authentic, and the car is in
                excellent condition overall. There are minor scratches on the rear bumper, but no
                significant defects were found.
              </p>
            </div>
          </div>
        </div>

        {/* Checklist Section */}
        <div className="mt-6">
          <h3 className="text-lg font-bold">Checklist</h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mt-4">
            {[
              "Vehicle License",
              "Road Worthiness (MOT)",
              "Insurance",
              "AC Working",
              "Airbags",
              "Engine",
              "Tires",
              "Transmission",
              "Exterior",
              "Interior",
              "Test Run",
              "Steering Wheel",
              "Location[Lagos]",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-2 text-sm"
              >
                <span className="text-green-400">✔</span> {item}
              </div>
            ))}
          </div>
        </div>

        {/* Condition Report */}
        <div className="mt-6">
          <h3 className="text-lg font-bold">Condition Report</h3>
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            <p><strong>Exterior:</strong> Excellent (Minor scratches on the rear bumper)</p>
            <p><strong>Interior:</strong> Very Good (No major stains or tears)</p>
            <p><strong>Mechanical:</strong> All systems functioning properly (recently serviced)</p>
            <p><strong>Electrical:</strong> All systems functioning properly</p>
            <p><strong>Last Service Date:</strong> April 2024</p>
            <p><strong>Service Records:</strong> Regular maintenance conducted at authorized service centers</p>
            <p><strong>Major Repairs:</strong> None reported</p>
            <p><strong>Accidents:</strong> None reported</p>
            <p><strong>Incidents:</strong> None reported</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVerify;
