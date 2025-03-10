"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";
import classNames from "classnames";
import dynamic from "next/dynamic";

const PaystackButton = dynamic(() => import("react-paystack").then(module => module.PaystackButton), { ssr: false });
export function PaymentOptions({ togglePayment, setTogglePayment }){
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(typeof window !== "undefined");
  }, []);

  const publicKey = "pk_test_f0a7e900e3367840ca8ac7d6ddff3720f122ee28";
  const paymentData = {
    email: "webmasterjd@gmail.com",
    amount: 500 * 100,
    currency: "NGN",
    reference: `ref-${Math.floor(Math.random() * 1000000000)}`,
  };

  return (
    <div className="flex justify-center mb-12">
      {[
        { id: "card", src: "/card.png" },
        { id: "payPal", src: "/paystackLg.png" },
        { id: "transfer", src: "/transfer.png" },
      ].map((option) => (
        <button
          key={option.id}
          className={classNames(
            {
              "ring-orange-500 border-orange-500 bg-orange-100 border":
                togglePayment === option.id,
            },
            "flex items-center justify-center rounded-lg py-2 px-4 mx-2 focus:ring-2 relative border"
          )}
          onClick={() => setTogglePayment(option.id)}
        >
          <Image
            alt=""
            src={option.src}
            width={80}
            height={20}
            className={`${option.id == "payPal" && "rounded-xl shadow-md border"}`}
          />
          {option.id == "payPal" && isClient && (
            <PaystackButton
              publicKey={publicKey}
              email={paymentData.email}
              amount={paymentData.amount}
              currency={paymentData.currency}
              // reference={paymentData.reference}
              // onSuccess={handleSuccess}
              // onClose={handleClose}
              className="h-full w-full absolute top-0 right-0"
            />
          )}
        </button>
      ))}
    </div>
  );
};




export function CardPaymentForm(){
    return (
      <form className="space-y-4">
        <div className="w-1/3 flex items-center gap-4">
          <label htmlFor="cardType" className="text-sm text-gray-600">Card Type:</label>
          <select id="cardType" className="w-full px-2 py-4 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500">
            <option>Select card type</option>
            <option>Visa</option>
            <option>Mastercard</option>
          </select>
        </div>
        <div className="flex space-x-4">
          <div className="w-1/2">
            <label htmlFor="cardName" className="text-sm text-gray-600">Card Name:</label>
            <input type="text" id="cardName" placeholder="Type card name" className="w-full px-2 py-4 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500" />
          </div>
          <div className="w-1/2">
            <label htmlFor="cardNumber" className="text-sm text-gray-600">Card Number:</label>
            <input type="text" id="cardNumber" placeholder="XXXX XXXX XXXX XXXX" className="w-full px-2 py-4 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500" />
          </div>
        </div>
        <div className="flex space-x-4 pb-32">
          <div className="w-1/2">
            <label htmlFor="expiryDate" className="text-sm text-gray-600">Expiry date:</label>
            <input type="text" id="expiryDate" placeholder="MM/YY" className="w-full px-2 py-4 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500" />
          </div>
          <div className="w-1/2">
            <label htmlFor="cvv" className="text-sm text-gray-600">CVV:</label>
            <input type="text" id="cvv" placeholder="Input CVV" className="w-full px-2 py-4 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500" />
          </div>
        </div>
        <div className="w-full flex items-center justify-center">
          <button type="submit" className="w-2/3 py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600">SUBMIT PAYMENT</button>
        </div>
      </form>
    );
  };


  export function TransferDetails(){
    return (
      <div className="flex flex-col gap-8">
        <p className="text-[18px] font-medium">Bank Transfer</p>
        <small className="text-[16px]">Make transfer to the account details provided</small>
        <div className="w-full p-8 bg-[#F7F9FB] rounded-xl text-[16px] font-bold">
          <div className="flex justify-between">
            <div className="flex flex-col gap-2">
              <p>Account number</p>
              <div className="flex items-center gap-2 font-normal">
                <p>7598673422</p>
                <FaRegCopy color="#EF6509" />
              </div>
            </div>
            <div className="text-right">
              <p>Bank name</p>
              <p className="font-normal">ACCESS BANK</p>
            </div>
          </div>
          <div className="flex justify-between mt-4">
            <div className="flex flex-col gap-2">
              <p>Account name</p>
              <p className="font-normal">Hostelhub/Olufemi_Dave</p>
            </div>
            <div className="text-right">
              <p>Time left</p>
              <p className="font-normal">04:00</p>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
          <RiErrorWarningLine color="red" />
          <small>A confirmation notification will be sent within two hours of your payment.</small>
        </div>
        <button className="bg-[#EF6509] text-white w-4/6 py-4 rounded-xl mx-auto">FINISH TRANSFER</button>
      </div>
    );
  };