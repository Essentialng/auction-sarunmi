import React from "react";

const Page = () => {
  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Upload Car</h2>
      <form className="space-y-6">
        {/* Product Name and Upload Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">Product Name</label>
            <input
              type="text"
              placeholder="Type your product name"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Upload Images</label>
            <input
              type="text"
              placeholder="less than 20mb"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block font-medium text-gray-700">Description</label>
          <textarea
            placeholder="Describe your experience with the product"
            className="mt-1 p-2 border border-gray-300 rounded w-full h-24 resize-none"
          />
        </div>

        {/* VIN, Colors, Fuel, Lot Number */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium text-gray-700">VIN</label>
            <input
              type="text"
              placeholder="Type your VIN number"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Colors</label>
            <input
              type="text"
              placeholder="Type your vehicle color"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
        </div>

        {/* Fuel, Lot Number, Location */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium text-gray-700">Fuel</label>
            <input
              type="text"
              placeholder="Fuel type"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Lot Number</label>
            <input
              type="text"
              placeholder="Type your lot number"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Location</label>
            <input
              type="text"
              placeholder="Type your location"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
        </div>

        {/* Years Used, Primary Damage, Odometer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className="block font-medium text-gray-700">Years Used</label>
            <input
              type="text"
              placeholder="Type the number of years"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Primary Damage</label>
            <input
              type="text"
              placeholder="Mention the primary damage"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
          <div>
            <label className="block font-medium text-gray-700">Odometer</label>
            <input
              type="text"
              placeholder="Type your odometer"
              className="mt-1 p-2 border border-gray-300 rounded w-full"
            />
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg w-full md:w-auto"
          >
            UPLOAD PRODUCT TO AUCTION
          </button>
        </div>
      </form>
    </div>
  );
};

export default Page;
