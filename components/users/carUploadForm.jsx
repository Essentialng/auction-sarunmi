import { useState, useEffect } from "react";
import { axiosInstance } from "@/utils/axios";
import useStore from "@/app/store";
import PopUp from "./signup-pop";
import { Rings } from 'react-loading-icons';

const CarUpload = ({id, product}) => {

    const [formValues, setFormValues] = useState({
        id : id,
        productType : product.toLowerCase(),
        productName : "",
        image : "",
        description : "",
        vin :  "",
        color : "",
        fuel : "",
        lotNumber : "",
        location : "",
        yearsUsed : "",
        primaryDamage : "",
        oldMeter : "",
        sizeAndLayout : "",
        proofOfOwnership : "",
        cOfONumber : "",
        status: "live"
    });
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState("");
    const [success, setSuccess] = useState(false);
    const [images, setImages] = useState([]);

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

    const handleImageUpload = (event) => {
      const files = Array.from(event.target.files);
      const newImages = files.map((file) => URL.createObjectURL(file));
      setImages((prevImages) => [...prevImages, ...newImages]);
    };

    const handleRemoveImage = (index) => {
      setImages((prevImages) => prevImages.filter((_, i) => i !== index));
    };

    const uploadHandler = ()=>{
      try{

      }catch(error){
        
      }
    }

    const submitHandler = async (e) => {
      e.preventDefault();
      setLoading(true)

      try{
        const response = await axiosInstance.post("/carUpload", formValues);

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

    useEffect(() => {
      if (product === "Car") {
        setFormValues((prev) => ({
          ...prev,
          productType : product.toLowerCase(),
          vin: "", 
          color: "", 
          fuel: "",
          lotNumber: "",
          yearsUsed: "",
          primaryDamage: "",
          oldMeter: "",
          cOfONumber: null,
          sizeAndLayout: null,
          proofOfOwnership: null,
        }));
      } else {
        setFormValues((prev) => ({
          ...prev,
          productType : product.toLowerCase(),
          vin: null, 
          color: null, 
          fuel: null,
          lotNumber: null,
          yearsUsed: null,
          primaryDamage: null,
          oldMeter: null,
          cOfONumber: "", 
          sizeAndLayout: "", 
          proofOfOwnership: "",
          propertySize: "",
        }));
      }
    }, [product]);


    const contents = [
      "VIN",
      "C of O number",
      "Colors",
      "Fuel",
      "Lot Number",
      "Years Used",
      "Primary Damage",
      "Old Meter",
      "Size and Layout",
      "Proof of Ownership",
    ]

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
          <div className="flex gap-4 items-center">
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

            <div className=" flex space-x-4">
              {images.map((image, index) => (
              <div className="relative">
                <img
                  key={index}
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
          <label className={label_style}>Description</label>
          <textarea
            placeholder="Describe your experience with the product"
            className={`${input_style}  h-24 resize-none`}
            name="description"
            value={formValues.description}
            onChange={changeHandler}
            required
          />
        </div>

        <div className="grid grid-cols-3 gap-3 items-center">
          {contents.map((content, index)=>(
          <div key={index}>
            <label className={label_style}>{content}</label>
            <input
              type="text"
              name="lotNumber"
              placeholder="Type your lot number"
              className={input_style}
              value={formValues.lotNumber}
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

export default CarUpload;
