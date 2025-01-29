import React from "react";
import Image from "next/image";


const ProductVerify = ({setProductVerification, productVerification}) => {
  
  if (!productVerification) return null;

  const list_style = "flex gap-4"
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="relative bg-[#8474DA] text-white xl:px-12 px-4 rounded-lg shadow-lg max-w-6xl w-full h-screen overflow-y-scroll">
        <button
          className="absolute top-4 right-4 text-white border-[#554AA2] border-2 px-2"
          onClick={
            ()=>setProductVerification(false)
          }
        >
          ✕
        </button>

        {/* Image Section */}
        <div className="xl:grid xl:grid-cols-2 block gap-6 ">
          <div className="flex flex-col gap-8">
          
          <div className="flex flex-col items-center col-span-1 pt-12">
            <small className="w-full text-start"><strong>Photographs:</strong> 6 Images</small>
            <div className=" overflow-clip flex justify-center">
              <Image
                src="/car-one.png"
                width={400}
                height={400}
                alt="Car"
              />
            </div>
            <small className="text-center">Click Images to expand and see all images</small>
          </div>  
          <div className="mt-6 bg-[#554AA2] xl:p-6 p-4 rounded-xl text-center">
              <h3 className="text-lg">Checklist</h3>
              <div className="flex items-center justify-between text-start">
                <div className="flex flex-col  sm:grid-cols-3 gap-2 font-bold mt-4">
                  {[
                    "Vehicle License",
                    "Road Worthiness (MOT)",
                    "Insurance",
                    "AC Working",
                    "Airbags",
                    "Engine",
                    "Tires",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className=" gap-2 xl:text-sm text-[12px]"
                    >
                      <span className="bg-[#0EFC42] mx-2">✔</span> {item}
                    </div>
                  ))}
                </div>
                <div className="flex flex-col  sm:grid-cols-3 gap-2 font-bold mt-4">
                  {[
                    "Transmission",
                    "Exterior",
                    "Interior",
                    "Test Run",
                    "Steering Wheel",
                    "Location[Lagos]",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className=" gap-2 xl:text-sm text-[12px]"
                    >
                      <span className="bg-[#0EFC42] mx-2">✔</span> {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>




          {/* Verification and Comments */}
          <div className="w-full xl:pt-24 pt-12">
            <div className="bg-[#554AA2] p-6 rounded-xl xl:text-sm text-[12px]">
              <p className="font-bold">Verified By: <span className="font-normal">Henry Brown</span></p>
              <p className="font-bold">Verification Date: <span className="font-normal">April 2024</span></p>
              <p className="mt-2">
                <strong>Comment:</strong> The car has been thoroughly inspected and meets all
                criteria for auction. The documents provided are authentic, and the car is in
                excellent condition overall. There are minor scratches on the rear bumper, but no
                significant defects were found.
              </p>
            </div>
            <div className="my-6 xl:ml-12 bg-[#554AA2] p-6 rounded-xl ">
              <h3 className="text-lg">Condition Report</h3>
              <div className="flex flex-col gap-2 mt-4 xl:text-sm text-[12px]">
                <p className={list_style}><strong>Exterior:</strong> Excellent (Minor scratches on the rear bumper)</p>
                <p className={list_style}><strong>Interior:</strong> Very Good (No major stains or tears)</p>
                <p className={list_style}><strong>Mechanical:</strong> All systems functioning properly (recently serviced)</p>
                <p className={list_style}><strong>Electrical:</strong> All systems functioning properly</p>
                <p className={list_style}><strong>Last Service Date:</strong> April 2024</p>
                <p className={list_style}><strong>Service Records:</strong> Regular maintenance conducted at authorized service centers</p>
                <p className={list_style}><strong>Major Repairs:</strong> None reported</p>
                <p className={list_style}><strong>Accidents:</strong> None reported</p>
                <p className={list_style}><strong>Incidents:</strong> None reported</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductVerify;
