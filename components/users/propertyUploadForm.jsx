import { useState } from "react";
import { axiosInstance } from "@/package/axios";
import useStore from "@/app/store";
import PopUp from "./signup-pop";

const PropertiesUpload = ({id}) => {

  ;
    const [formValues, setFormValues] = useState({
        id : id,
        productName : "",
        image : "",
        description : "",
        vin : "",
        color : "",
        fuel : "",
        lotNumber : "",
        location : "",
        yearsUsed : "",
        primaryDamage : "",
        oldMeter : "",
        status: false
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
          // console.log(errorMessage.message)
        }
      }finally{
        setLoading(false)
      }
    }

  const input_style = "mt-1 p-2 border border-gray-300 rounded w-full bg-[#F4FDFF]";
  const label_style = "block text-gray-700 text-[14px]"
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

        {/* VIN, Colors, Fuel, Lot Number */}
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
          <div>
            <label className={label_style}>C of O number</label>
            <input
              type="text"
              name="cOfONumber"
              placeholder="Type your C of O number"
              className={input_style}
              value={formValues.vin}
              onChange={changeHandler}
              required
            />
          </div>
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

        {/* Fuel, Lot Number, Location */}
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

        {/* Years Used, Primary Damage, Odometer */}
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

        {/* Submit Button */}
        <div className=" text-red-600 flex flex-col gap-2 text-start">
          <button
            type="submit"
            className="bg-orange-600 text-white px-6 py-3 rounded-lg w-full md:w-auto"
          >
            UPLOAD PRODUCT TO AUCTION
          </button>
          <small>{errorMessage}</small>
        </div>

        {success &&
        <PopUp details={details}/>
        }

      </form>
  );
};

export default PropertiesUpload;
