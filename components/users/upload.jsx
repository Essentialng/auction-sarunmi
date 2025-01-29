import React from "react";
import CarUpload from "./carUploadForm";


const Page = ({product, id}) => {

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Upload {product}</h2>
      <CarUpload id={id} product={product}/>
    </div>
  );
};

export default Page;
