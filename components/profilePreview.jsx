import React from "react";

const ProfileOverview = () => {
  return (
    <div className="p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold mb-4">Profile Overview</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Account Details */}
        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-md font-medium mb-2">Account Details</h3>
          <div className="flex items-center mb-4">
            <div className="mr-4 text-4xl text-orange-600">
              {/* Account Icon */}
              <i className="fas fa-user-circle"></i>
            </div>
            <div>
              <p>James Olayinka</p>
              <p className="text-gray-500">+2348199977444</p>
              <p className="text-gray-500">Lagos State</p>
            </div>
          </div>
          <button className="bg-orange-600 text-white px-4 py-2 rounded">
            EDIT
          </button>
        </div>

        {/* Email */}
        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-md font-medium mb-2">Email</h3>
          <div className="flex items-center mb-4">
            <div className="mr-4 text-2xl text-orange-600">
              {/* Email Icon */}
              <i className="fas fa-envelope"></i>
            </div>
            <div>
              <p>jamesyinka@gmail.com</p>
              <p className="text-green-500">Verified</p>
            </div>
          </div>
          <button className="bg-orange-600 text-white px-4 py-2 rounded">
            UPDATE EMAIL
          </button>
        </div>

        {/* Password */}
        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-md font-medium mb-2">Password</h3>
          <div className="flex items-center mb-4">
            <div className="mr-4 text-2xl text-orange-600">
              {/* Lock Icon */}
              <i className="fas fa-lock"></i>
            </div>
            <div>
              <p>Current Password</p>
              <p className="text-gray-500">********</p>
            </div>
          </div>
          <button className="bg-orange-600 text-white px-4 py-2 rounded">
            CHANGE PASSWORD
          </button>
        </div>

        {/* Subscription */}
        <div className="border p-4 rounded-lg shadow-md">
          <h3 className="text-md font-medium mb-2">Subscription</h3>
          <div className="flex items-center mb-4">
            <div className="mr-4 text-2xl text-orange-600">
              {/* Badge Icon */}
              <i className="fas fa-award"></i>
            </div>
            <div>
              <p>Premium Membership</p>
              <p className="text-gray-500">N 40,000.00</p>
              <p className="text-gray-500">6 Days left</p>
            </div>
          </div>
          <button className="bg-orange-600 text-white px-4 py-2 rounded">
            RENEW
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileOverview;
