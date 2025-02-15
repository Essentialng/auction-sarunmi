import React from "react";
import ProductUpload from "./ProductForm";
import PropertyUpload from "./propertyUpload";
import OtherUpload from "./otherUpload";

const Page = ({product, id, handleClick}) => {

  return (
    <div className="p-8 bg-white rounded-lg shadow-lg max-w-4xl mx-auto">
      <h2 className="text-2xl font-semibold mb-6">Upload {product.name}</h2>
      {
      <ProductUpload id={id} product={product} handleClick={handleClick}/>
    }
    </div>
  );
};

export default Page;
