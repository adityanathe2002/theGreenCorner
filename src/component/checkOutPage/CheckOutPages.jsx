import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { plantContext } from '../Context/AppContext';

const CheckOutPages = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser]= useState([])
  const { userDetails } = useContext(plantContext);

  // Destructure the values from location.state for better readability
  const {
    subtotal = 0,
    uniqueProducts = 0,
    totalItems = 0,
    shippingCharges = 0,
    total = 0,
  } = location.state || {};


  return (
    <div className="w-full h-auto flex flex-col sm:flex-row lg:flex-row gap-2 mt-10 p-2">
      {/* Left Section */}
      <div className="w-[100%] lg:w-[70%] h-full flex flex-col gap-6 p-6 shadow-xl border rounded-lg">
        {/* Account Section */}
        <div className="flex flex-col gap-2">
          <h1 className="font-semibold text-gray-800">Account</h1>
          <p className="font-semibold">{userDetails.email}</p>
        </div>
        <hr />

        {/* Delivery Section */}
        <div className="flex flex-col gap-4">
          <h1 className="text-lg font-semibold text-gray-800">Delivery</h1>
          <div>
            <input
              type="text"
              placeholder="Country"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="First Name"
              className="w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Last Name"
              className="w-1/2 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div>
            <input
              type="text"
              placeholder="Address"
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>

          <div className="flex gap-4">
            <input
              type="text"
              placeholder="State"
              className="w-1/3 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="City"
              className="w-1/3 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="text"
              placeholder="Pincode"
              className="w-1/3 border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <input
            type="text"
            placeholder="Phone"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Shipping Method Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold text-gray-800">Shipping Method</h1>
          <input
            type="text"
            value={shippingCharges}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
            readOnly
          />
        </div>

        {/* Payment Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold text-gray-800">Payment</h1>
          <p className="text-gray-600">All transactions are secure and encrypted.</p>
          <input
            type="text"
            placeholder="Select Payment Gateway"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            placeholder="Cash on Delivery"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>

        {/* Billing Address Section */}
        <div className="flex flex-col gap-2">
          <h1 className="text-lg font-semibold text-gray-800">Billing Address</h1>
          <p className="text-gray-600">All transactions are secure and encrypted.</p>
          <input
            type="text"
            placeholder="Same as Shipping Address"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <input
            type="text"
            placeholder="Use a Different Billing Address"
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        </div>
      </div>


      {/* Right Section */}
      <div className="w-[100%] lg:w-[30%] h-[50%] flex justify-center ">
        <div className="w-full lg:w-80 bg-white border border-gray-200 flex flex-col p-6 gap-4 rounded-lg shadow-lg">
          {/* Cart Totals */}
          <h2 className="text-xl font-semibold mb-4 text-gray-800">Cart Totals</h2>
          <div className="flex justify-between mb-2 text-gray-700">
            <p><strong>Subtotal</strong></p>
            <p>₹{subtotal.toFixed(2)}</p>
          </div>
          <div className="flex justify-between mb-2 text-gray-700">
            <p><strong>Unique Products</strong></p>
            <p>{uniqueProducts}</p>
          </div>
          <div className="flex justify-between mb-2 text-gray-700">
            <p><strong>Total Quantity</strong></p>
            <p>{totalItems}</p>
          </div>
          <div className="flex justify-between mb-2 text-gray-700">
            <p><strong>Shipping Charges</strong></p>
            <p>₹{shippingCharges}</p>
          </div>
          <hr className="my-2 border-gray-300" />
          <div className="flex justify-between text-lg font-bold text-gray-800 mb-4">
            <p>Total</p>
            <p>₹{total.toFixed(2)}</p>
          </div>
          <button
            className="w-full bg-[#163020] text-white py-2 rounded-lg font-semibold hover:bg-green-800 transition-all"
            onClick={() =>
              navigate('/checkout', {
                state: { subtotal, uniqueProducts, totalItems, shippingCharges, total },
              })
            }
          >
            Pay ₹ {total}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CheckOutPages;
