"use client";
import dynamic from "next/dynamic";

const PaystackButton = dynamic(() => import("react-paystack").then(module => module.PaystackButton), { ssr: false });

const PaystackButtonComponent = ({ price, className, onSuccess, onClose }) => {

    const publicKey = "pk_test_f0a7e900e3367840ca8ac7d6ddff3720f122ee28";
    const amount = price * 100
 
  return (
    <PaystackButton
      publicKey={publicKey}
      email={"webmasterjd@gmail.com"}
      amount={amount}
      currency={"NGN"}
      className={className}
    />
  );
};

export default PaystackButtonComponent;
