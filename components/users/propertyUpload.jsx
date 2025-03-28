import { useState, useEffect } from "react";
import { axiosInstance } from "@/package/axios";
import useStore from "@/app/store";
import PopUp from "./signup-pop";
import { Rings } from 'react-loading-icons';
import { handleCloudinary } from "@/utils/cloudinary";



const PropertyUpload = ({id}) => {

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);

    const [formValues, setFormValues] = useState({
        id : id,
        productName:"",
        images : [],
        description : "",
        cOfONumber :  "",
        sizeAndLayout : "",
        location : "",
        proofOfOwnership: "",
        status: "live"
    });

    const contents = [
        { label: "C Of O number", name: "cOfONumber" },
        { label: "Size & Layout", name: "sizeAndLayout" },
        {label: "Location", name: "location"},
        {label: "Upload Proof Of Ownership", name: "proofOfOwnership"}
      ];
   

    const details = {
      headers: "Upload Successful!",
      texts: `Thank you for submitting your product documents. Our verification team
       will review your submission shortly. Please note that a verification fee of 20,000 
       naira is required for the admin to conduct the inspection and validation of your auction item.
      `,
      btn: "PAY  LATER",
      btn2: "PROCEED TO PAYMENT",
      link: "/dashboard",
      link2: "/payment"
    }

    const changeHandler = (e) => {
        const {name, value} = e.target
        setFormValues((prev)=>({
            ...prev,
            [name] : value
        }))
    }

    const handleImageUpload = async (event) => {
      const files = event.target.files[0];
      const uploadedUrls = [];
    
      
      const url = await handleCloudinary(files);
      
      if(url){
      uploadedUrls.push(url);

      setFormValues((prevValues) => ({
        ...prevValues, 
        images: [...prevValues.images, ...uploadedUrls] 
      }));    
    };
}
    const handleRemoveImage = (index) => {
      setFormValues((prevValues) => ({
        ...prevValues, 
        images: prevValues.images.filter((_, i) => i !== index), 
      }));
    };



    const submitHandler = async (e) => {
      e.preventDefault();
      setLoading(true)

      try{
        const response = await axiosInstance.post("/propertyUpload", formValues);

        if(response.status == 201){
          setSuccess(true);
        }
      }catch(error){
        const errorMessage = error.response.data
        if(error.status == 404){
          setErrorMessage(errorMessage.message)
        }else{
          setErrorMessage("Connect to a strong network")
          console.log(errorMessage.message)
        }
      }finally{
        setLoading(false)
      }
    }

   

   

  const input_style = "mt-1 p-2 border border-gray-300 rounded w-full bg-[#F4FDFF]";
  const label_style = "block text-gray-700 text-[14px]";

  return (
    
      <form
      onSubmit={submitHandler} 
      className="space-y-6">
        <div className="flex flex-col gap-8">
          <div>
            <label className={label_style}>Product Name</label>
            <input
              type="text"
              placeholder="Type your product name"
              name="productName"
              className={input_style}
              value={formValues.productName}
              onChange={changeHandler}
              required
            />
          </div>
          <div className="relative flex gap-4 items-center just">
            <div >
              <p>Upload images</p>
              
              <div className="w-28 h-28 bg-gray-100 border-2 border-gray-300 border-dashed rounded-lg flex justify-center items-center hover:bg-gray-200">
                
                <label htmlFor="file-upload" className="cursor-pointer w-full h-full justify-center items-center flex">
                
                  <input
                    id="file-upload"
                    type="file"
                    className="hidden h-full w-full"
                    onChange={handleImageUpload}
                  />
                  <span className="text-gray-500 text-2xl">+</span>
                </label>
              </div>
            </div>

            <div className="w-full flex items-center space-x-4 pt-6">
              {formValues.images.map((image, index) => (
              <div  key={index} className="relative">
                <img
                 
                  src={image}
                  alt={`Uploaded preview ${index}`}
                  className="w-28 h-28 object-cover rounded-lg"
                />
              <button
              onClick={() => handleRemoveImage(index)}
              className="absolute text-xs font-bold cursor-pointer top-0 right-0
               bg-red-500 text-white px-1 rounded-full hover:bg-red-700"
              >
                X
              </button>
            </div>
              ))}
            </div>
          </div>
        </div>

        <div>
          <>
            <label className={label_style}>Description</label>
            <textarea
              placeholder="Describe your experience with the product"
              className={`${input_style}  h-24 resize-none`}
              name="description"
              value={formValues.description}
              onChange={changeHandler}
              required
            />
          </>
        </div>

        <div className="grid grid-cols-3 gap-3 items-center">
          {contents.map(({label, name}, index)=>(
          <div key={index}>
            <label className={label_style}>{label}</label>
            <input
              type="text"
              name={name}
              placeholder="Type your lot number"
              className={input_style}
              value={formValues[name]}
              onChange={changeHandler}
              required
            />
          </div>
          ))}
        </div>


  
        <div className=" text-red-600 flex flex-col gap-2 text-start">
          <button
            type="submit"
            className={`${!loading && "py-3"} bg-orange-600 text-white text-center justify-center flex px-6 rounded-lg w-full md:w-auto`}
          >
            {loading ? <Rings /> : "UPLOAD PRODUCT TO AUCTION"}
          </button>
          <small>{errorMessage}</small>
        </div>



        {success &&
        <PopUp details={details}/>
        }

      </form>
  );
};

export default PropertyUpload;
