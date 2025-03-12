"use client";

import Background from "@/components/users/backgroundImg";
import { useState } from "react";
import { PaymentOptions, TransferDetails, CardPaymentForm } from "@/components/users/paymentOptions";
import { useParams } from "next/navigation";


export default function PaymentPage() {

  const {sub, amount} = useParams();
  const [togglePayment, setTogglePayment] = useState("card");

  return (
    <div className="min-h-screen px-24 justify-center bg-gray-50">
      <div className="py-12 grid grid-cols-5 mt-28">
        <div className="col-span-3 bg-white p-8 rounded-lg shadow-lg w-full">
          <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">PAYMENT</h2>
          <p className="text-center text-gray-600 mb-6">Please select your payment method</p>
          <PaymentOptions togglePayment={togglePayment} setTogglePayment={setTogglePayment} />
          {togglePayment === "card" ? <CardPaymentForm /> : togglePayment === "transfer" && <TransferDetails />}
        </div>
        <Background />
      </div>
    </div>
  );
}
