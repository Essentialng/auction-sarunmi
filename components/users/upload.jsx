import React from "react";
import CarUpload from "./carUploadForm";
import PropertyUpload from "./propertyUpload";
import OtherUpload from "./otherUpload";

const Page = ({product, id}) => {

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Upload {product}</h2>
      {
      product == "Car" ? 
      <CarUpload id={id} product={product}/>
      : product == "Property" ?
      <PropertyUpload id={id} product={product} />
      :
      <OtherUpload id={id} product={product}/>
    }
    </div>
  );
};

export default Page;
