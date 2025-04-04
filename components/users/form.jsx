import PopUp from "./signup-pop";
import { Rings } from 'react-loading-icons';
import SelectStateLGA from "./location";
import Loading from "@/tabs/admin/loading";
import { PiWarningCircleBold } from "react-icons/pi";



export default function FormField({
    submitHandler,
    formValues,
    changeHandler,
    modelData,
    handleImageUpload,
    handleRemoveImage,
    formFields,
    loading,
    errorMessage,
    details,
    success,
    detailHandler,
    certificateOfOcupancy,
    product,
    categoryChange,
    categories,
    setFormValues
}){

  const input_style = "mt-1 p-2 border border-gray-300 rounded w-full bg-[#F4FDFF]";
  const label_style = "block text-gray-700 text-[14px]";

    return (
        <> 
          <form
          onSubmit={submitHandler} 
          className="space-y-6 relative">
            <div className="flex flex-col gap-8">
              {
              product.name == "Others" &&
              <div>
                <select
                  className="w-1/2 p-2 border border-gray-300 bg-[#F4FDFF]"
                  onChange={categoryChange}
                >
                  <option value="" className={label_style}>
                    Select Category
                  </option>
                  {categories?.map((item) => (
                    <option 
                    key={item.id} 
                    value={item.id} 
                    className={label_style}
                    >
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              }
              <div>
                <select
                  className="w-1/2 p-2 border border-gray-300 bg-[#F4FDFF]"
                  name="modelId" 
                  value={formValues.modelId} 
                  onChange={changeHandler} 
                >
                  <option value="" className={label_style}>
                    Select {product.name != "Property" ? "Model" : "Type"}
                  </option>
                  {modelData?.map((item) => (
                    <option key={item.id} value={item.id} className={label_style}>
                      {item.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={label_style}>Product Title</label>
                <input
                  type="text"
                  placeholder="Type your product name"
                  name="name"
                  className={input_style}
                  value={formValues?.name}
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
    
                <div className="w-4/5 flex items-center space-x-4 pt-6 overflow-x-auto scrollbar-hide">
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
            <div>
                <label className={label_style}>Location</label>
                <SelectStateLGA input_style={input_style} formValues={formValues} setFormValues={setFormValues}/>
            </div>
            {/* <div className="flex items-center justify-between gap-8">
              <div className="w-full">
                <label className={label_style}>Start Time</label>
                <input 
                name="startTime"
                aria-label="Date and time" 
                type="datetime-local"
                className={input_style}
                value={formValues.startTime}
                onChange={changeHandler}
                 />
              </div>
    
              <div className="w-full ">
                <label className={label_style}>End Time</label>
                <input 
                name="endTime"
                aria-label="Date and time" 
                type="datetime-local"
                className={input_style}
                value={formValues.endTime}
                onChange={changeHandler}
                 />
              </div>
            </div> */}
            <div className="w-full flex items-center justify-between gap-8">
              <div className="w-full">
                <label className={label_style}>Minimum Amount</label>
                <input
                  type="number"
                  placeholder="Type your Auction Price"
                  name="price"
                  className={input_style}
                  value={formValues.price}
                  onChange={changeHandler}
                  required
                />
              </div>
              <div className="w-full">
                <div>
                  <div className="w-fit flex items-center gap-1 relative group">
                      <PiWarningCircleBold className="cursor-pointer" color="red"/>
                      <div className="absolute border bg-white w-[200px] text-black p-4 rounded-md opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                          <small>
                          The Pay Off feature allows buyers to offer a price to purchase your product immediately, without waiting for the auction to begin.
                          </small>
                      </div>
                      <label className={label_style}>Pay Off</label>
                  </div>               
                </div>
                
                <input
                  type="number"
                  placeholder="Type your Pay off Price (Optional)"
                  name="payOff"
                  className={input_style}
                  value={formValues.payOff}
                  onChange={changeHandler}
                  required
                />
              </div>
            </div>
    
    
              <div className="grid grid-cols-3 gap-3 items-center">
              {formFields.map((data, index) => (
                <div key={index}>
                  <label className={label_style}>{data?.label}</label>

                  {data?.dataType === "file" ? (
                    // File input
                    <input
                      type="file"
                      name={data?.value}
                      className={input_style}
                      onChange={(e) => certificateOfOcupancy(e, data?.value)}
                      required={data?.required}
                    />
                  ) : data?.dataType === "select" ? (
                    // Select input
                    <select
                      name={data?.value}
                      className={input_style}
                      value={formValues.details[data?.value]}
                      onChange={detailHandler}
                      required={data?.required}
                    >
                      <option value="">Select {data?.label}</option>
                      {data?.options?.map((option, i) => (
                        <option key={i} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  ) : (
                    // Regular input
                    <input
                      type={data?.dataType}
                      name={data?.value}
                      placeholder={data?.placeholder}
                      className={input_style}
                      value={formValues.details[data?.value]}
                      onChange={detailHandler}
                      required={data?.required}
                    />
                  )}
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
          </form>

         {success &&
            <PopUp details={details}/>
            }

            {loading && <Loading/>}
          </>
      );
}