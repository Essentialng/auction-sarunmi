import ProductUpload from "./ProductForm";
import { useRouter } from 'next/navigation';
import { useEffect } from "react";


const Page = ({product, id, handleClick, user}) => {
  const router = useRouter();

  

  useEffect(()=>{
    if(user.subscriptionType == null ){
      router.push("/subscribe")
    }
  },[]);


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
