import Link from "next/link";
import Background from "@/components/backgroundImg";
import Image from "next/image";
import { FaRegCopy } from "react-icons/fa";
import { RiErrorWarningLine } from "react-icons/ri";



export default function Page() {
    return (
      <div className="min-h-screen px-24 justify-center bg-gray-50">
        <div className=" py-12 grid grid-cols-5 mt-28 ">
          
          {/* Payment Form Section */}
          <div className="col-span-3 bg-white p-8 rounded-lg shadow-lg  w-full">
            <h2 className="text-center text-2xl font-semibold text-gray-800 mb-4">PAYMENT</h2>
            <p className="text-center text-gray-600 mb-6">Please select your payment method</p>
            
            <div className="flex justify-center mb-12">
              <button className="flex items-center justify-center bg-orange-100 border border-orange-500 text-orange-500 rounded-lg py-2 px-4 mx-2 focus:ring-2 ring-orange-500">
                <Image src="/card.png" width={80} height={20}/>
              </button>
              <button className="flex items-center justify-center bg-white border border-gray-300 rounded-lg py-2 px-4 mx-2">
                <Image src="/paypal.png" width={80} height={20}/>
              </button>
              <button className="flex items-center justify-center bg-white border border-gray-300 rounded-lg py-2 px-4 mx-2">
                <Image src="/transfer.png" width={80} height={20}/>
              </button>
            </div>
            
            <form className="space-y-4 hidden">
              <div className="w-1/3 flex items-center gap-4">
                <label htmlFor="cardType" className="text-sm text-gray-600 text-nowrap">Card Type:</label>
                <select id="cardType" className="w-full px-2 py-4 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500">
                  <option>Select card type</option>
                  <option>Visa</option>
                  <option>Mastercard</option>
                </select>
              </div>
              
              <div className="flex space-x-4">
                <div className="w-1/2">
                  <label htmlFor="cardName" className="text-sm text-gray-600">Card Name:</label>
                  <input type="text" id="cardName" placeholder="Type card name" className="w-full px-2 py-4 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"/>
                </div>
                <div className="w-1/2">
                  <label htmlFor="cardNumber" className="text-sm text-gray-600">Card Number:</label>
                  <input type="text" id="cardNumber" placeholder="XXXX  XXXX  XXXX  XXXXX" className="w-full px-2 py-4 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"/>
                </div>
              </div>
              
              <div className="flex space-x-4 pb-32">
                <div className="w-1/2">
                  <label htmlFor="expiryDate" className="text-sm text-gray-600">Expiry date:</label>
                  <input type="text" id="expiryDate" placeholder="MM/YY" className="w-full px-2 py-4 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"/>
                </div>
                <div className="w-1/2">
                  <label htmlFor="cvv" className="text-sm text-gray-600">CVV:</label>
                  <input type="text" id="cvv" placeholder="Input cvv" className="w-full px-2 py-4 mt-1 border border-gray-300 rounded-md focus:ring-2 focus:ring-orange-500"/>
                </div>
              </div>
                <button type="submit" className="w-full py-3 bg-orange-500 text-white font-semibold rounded-lg hover:bg-orange-600">
                  SUBMIT PAYMENT
                </button>
            </form>
            <div className="flex flex-col gap-8">
                <div className="fle flex-col gap-1">
                    <p className="text-[18px]  font-medium">Bank Transfer</p>
                    <small className="text-[16px]">Make transfer to the account details provided</small>
                </div>
                <div className="px-10 ">
                    <div className="w-full p-8 flex flex-col gap-8 bg-[#F7F9FB] rounded-xl mx-auto text-[16px] font-bold">
                        <div className="flex justify-between items-center ">
                            <div className="flex flex-col gap-2 ">
                                <p>Account number</p>
                                <div className="flex items-center gap-2 font-normal">
                                    <p>7598673422</p>
                                    <FaRegCopy color="#EF6509"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-2 text-right">
                                <p>Bank name</p>
                                <p className="font-normal">ACCESS BANK</p>
                            </div>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex flex-col gap-2">
                                <p>Account name</p>
                                <p className="font-normal">Hostelhub/Olufemi_Dave</p>
                            </div>
                            <div className="flex flex-col gap-2 text-right">
                                <p>Time left</p>
                                <p className="font-normal">04:00</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2 w-11/12 items-center pt-24">
                        <div className="flex items-center gap-2 text-[#5B7178]">
                        <RiErrorWarningLine color="red"/>
                        <small>A confirmation notification will be sent to you within two hours of your payment.</small>
                        </div>
                        <button className="bg-[#EF6509] text-white w-4/6 py-4 rounded-xl">FINISH TRANSFER</button>
                    </div>
                </div>
            </div>
          </div>
          <Background/>
        </div>
      </div>
    );
  }
  