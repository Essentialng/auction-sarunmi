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


  const input_style = "mt-1 p-2 border border-gray-300 rounded w-full bg-[#F4FDFF]";
  const label_style = "block text-gray-700 text-[14px]";


  return (
    
      <form
      onSubmit={submitHandler} 
      className="space-y-6">
        {/* Product Name and Upload Images */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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
          <div>
            <label className={label_style}>Upload Images</label>
            <input
              type="text"
              name="image"
              placeholder="less than 20mb"
              className={input_style}
              value={formValues.image}
              onChange={changeHandler}
              required
            />
          </div>
        </div>

        {/* Description */}
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
        <div className="flex items-center">
        {product == "Car" ?
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={label_style}>VIN</label>
            <input
              type="text"
              name="vin"
              placeholder="Type your VIN number"
              className={input_style}
              value={formValues.vin}
              onChange={changeHandler}
              required
            />
          </div>
          
        </div>
        :
         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={label_style}>C of O number</label>
            <input
              type="text"
              name="cOfONumber"
              placeholder="Type your C of O number"
              className={input_style}
              value={formValues.cOfONumber}
              onChange={changeHandler}
              required
            />
          </div>
        </div>
        }
        <div>
          <label className={label_style}>Colors</label>
          <input
            type="text"
            name="color"
            placeholder="Type your vehicle color"
            className={input_style}
            value={formValues.color}
            onChange={changeHandler}
            required
          />
        </div>
      </div>

        <div className="flex items-center">
        {product == "Car" ?
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className={label_style}>Fuel</label>
            <input
              type="text"
              name="fuel"
              placeholder="Fuel type"
              className={input_style}
              value={formValues.fuel}
              onChange={changeHandler}
              required
            />
          </div>
          <div>
            <label className={label_style}>Lot Number</label>
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
         
        </div>
          :
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className={label_style}>Upload Proof of Ownership</label>
            <input
              type="text"
              name="proofOfOwnership"
              placeholder="Fuel type"
              className={input_style}
              value={formValues.proofOfOwnership}
              onChange={changeHandler}
              required
            />
          </div>
          <div>
            <label className={label_style}>Size & Layout</label>
            <input
              type="text"
              name="sizeAndLayout"
              placeholder="Type your vehicle color"
              className={input_style}
              value={formValues.sizeAndLayout}
              onChange={changeHandler}
              required
            />
          </div>
        </div>
        }
        <div>
            <label className={label_style}>Location</label>
            <input
              type="text"
              name="location"
              placeholder="Type your location"
              className={input_style}
              value={formValues.location}
              onChange={changeHandler}
              required
            />
          </div>
      </div>

        {product == "Car" &&
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className={label_style}>Years Used</label>
            <input
              type="text"
              name="yearsUsed"
              placeholder="Type the number of years"
              className={input_style}
              value={formValues.yearsUsed}
              onChange={changeHandler}
              required
            />
          </div>
          <div>
            <label className={label_style}>Primary Damage</label>
            <input
              type="text"
              name="primaryDamage"
              placeholder="Mention the primary damage"
              className={input_style}
              value={formValues.primaryDamage}
              onChange={changeHandler}
              required
            />
          </div>
          <div>
            <label className={label_style}>Old Meter</label>
            <input
              type="text"
              name="oldMeter"
              placeholder="Type your odometer"
              className={input_style}
              value={formValues.oldMeter}
              onChange={changeHandler}
              required
            />
          </div>
        </div>
        }


  
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
