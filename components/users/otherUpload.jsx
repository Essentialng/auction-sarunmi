import { useState } from "react";
import { axiosInstance } from "@/utils/axios";
import useStore from "@/app/store";
import PopUp from "./signup-pop";
import { Rings } from 'react-loading-icons';
import { handleCloudinary } from "@/utils/cloudinary";

const OtherUpload = ({ id }) => {
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [contents, setContents] = useState([]);
  const [showSpecification, setShowSpecification] = useState(false);
  const [specification, setSpecification] = useState("");
  const [description, setDescription] = useState("");

  const [formValues, setFormValues] = useState({
    id: id,
    productName: "",
    images: [],
    description: "",
    location: "",
    features: {},
    status: "live"
  });

  const details = {
    headers: "Upload Successful!",
    texts: `Thank you for submitting your product documents. Our verification team
       will review your submission shortly. Please note that a verification fee of 20,000 
       naira is required for the admin to conduct the inspection and validation of your auction item.`,
    btn: "PAY  LATER",
    btn2: "PROCEED TO PAYMENT",
    link: "/dashboard",
    link2: "/payment"
  };

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = async (event) => {
    const files = event.target.files[0];
    const uploadedUrls = [];

    const url = await handleCloudinary(files);

    if (url) {
      uploadedUrls.push(url);

      setFormValues((prevValues) => ({
        ...prevValues,
        images: [...prevValues.images, ...uploadedUrls]
      }));
    }
  };

  const handleRemoveImage = (index) => {
    setFormValues((prevValues) => ({
      ...prevValues,
      images: prevValues.images.filter((_, i) => i !== index)
    }));
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axiosInstance.post("/otherUpload", formValues);

      if (response.status == 201) {
        setSuccess(true);
      }
    } catch (error) {
      const errorMessage = error.response.data;
      if (error.status == 404) {
        setErrorMessage(errorMessage.message);
      } else {
        setErrorMessage("Connect to a strong network");
        console.log(errorMessage.message);
      }
    } finally {
      setLoading(false);
    }
  };

  const handleSpecificationCreate = () => {
    if (specification && description) {
      setFormValues((prev) => ({
        ...prev,
        features: {
          ...prev.features,
          [specification]: description
        }
      }));
      setSpecification("");
      setDescription("");
      setShowSpecification(false);
    }
  };


  const input_style = "mt-1 p-2 border border-gray-300 rounded w-full bg-[#F4FDFF]";
  const label_style = "block text-gray-700 text-[14px]";

  return (
    <form onSubmit={submitHandler} className="space-y-6">
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
        <div>
          <label className={label_style}>Location</label>
          <input
            type="text"
            placeholder="Type your product name"
            name="location"
            className={input_style}
            value={formValues.location}
            onChange={changeHandler}
            required
          />
        </div>
        <div className="relative flex gap-4 items-center">
          <div>
            <p>Upload images</p>

            <div className="w-28 h-28 bg-gray-100 border-2 border-gray-300 border-dashed rounded-lg flex justify-center items-center hover:bg-gray-200">
              <label htmlFor="file-upload" className="cursor-pointer w-full h-full flex justify-center items-center">
                <input id="file-upload" type="file" className="hidden h-full w-full" onChange={handleImageUpload} />
                <span className="text-gray-500 text-2xl">+</span>
              </label>
            </div>
          </div>

          <div className="w-full flex items-center space-x-4 pt-6">
            {formValues.images.map((image, index) => (
              <div key={index} className="relative">
                <img src={image} alt={`Uploaded preview ${index}`} className="w-28 h-28 object-cover rounded-lg" />
                <button
                  onClick={() => handleRemoveImage(index)}
                  className="absolute text-xs font-bold cursor-pointer top-0 right-0 bg-red-500 text-white px-1 rounded-full hover:bg-red-700"
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
          className={`${input_style} h-24 resize-none`}
          name="description"
          value={formValues.description}
          onChange={changeHandler}
          required
        />
      </div>
      <div className="w-1/2 rounded-xl border shadow-lg p-8">
        <label className={label_style}>Features</label>
        <ul className="list-disc pl-5 flex flex-col gap-2">
            {Object.entries(formValues.features).map(([key, value], index) => (
            <li key={index} className="flex items-center justify-between text-gray-700 text-sm  border-b py-2">
                <span>
                <strong>{key}:  </strong> {value}
                </span>
                <button
                onClick={() => {
                    const updatedFeatures = { ...formValues.features };
                    delete updatedFeatures[key];
                    setFormValues((prev) => ({
                    ...prev,
                    features: updatedFeatures,
                    }));
                }}
                className="ml-2 text-red-500 hover:text-red-700"
                >
                ❌
                </button>
            </li>
            ))}
        </ul>
      </div>

      <div className="flex flex-col gap-4">
        {!showSpecification && (
          <button
            type="button"
            className="w-1/5 bg-orange-600 text-white text-center p-2 rounded-lg"
            onClick={() => setShowSpecification(true)}
          >
            Other Specification
          </button>
        )}


        {showSpecification && (
          <div className="flex items-center gap-8">
            <div className="w-1/3">
              <label className={label_style}>Specification</label>
              <input
                type="text"
                placeholder="Enter specification"
                className={input_style}
                value={specification}
                onChange={(e) => setSpecification(e.target.value)}
              />
            </div>
            <div className="w-1/3">
              <label className={label_style}>Description</label>
              <input
                type="text"
                placeholder="Enter description"
                className={input_style}
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <button
              type="button"
              className="w-1/5 bg-green-600 text-white text-center p-2 rounded-lg"
              onClick={handleSpecificationCreate}
            >
              Create
            </button>
          </div>
        )}
      </div>

      <div className="text-red-600 flex flex-col gap-2 text-start">
        <button
          type="submit"
          className={`${!loading && "py-3"} bg-orange-600 text-white text-center justify-center flex px-6 rounded-lg w-full md:w-auto`}
        >
          {loading ? <Rings /> : "UPLOAD PRODUCT TO AUCTION"}
        </button>
        <small>{errorMessage}</small>
      </div>

      {success && <PopUp details={details} />}
    </form>
  );
};

export default OtherUpload;
