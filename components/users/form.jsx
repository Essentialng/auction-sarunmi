import PopUp from "./signup-pop";
import { Rings } from 'react-loading-icons';
import SelectStateLGA from "./location";
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
    handleImageProperty,
    product,
    categoryChange,
    categories,
    setFormValues
}){

    const input_style = "mt-1 p-2 border border-gray-300 rounded w-full bg-[#F4FDFF]";
    const label_style = "block text-gray-700 text-[14px]";
    
      return (
        
          <form
          onSubmit={submitHandler} 
          className="space-y-6">
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
                <label className={label_style}>Product Name</label>
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
            <div>
                <label className={label_style}>Location</label>
                <SelectStateLGA input_style={input_style} formValues={formValues} setFormValues={setFormValues}/>
            </div>
            <div className="flex items-center justify-between gap-8">
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
    
              <div className="w-full">
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
            </div>
            <div className="w-1/2">
                <label className={label_style}>Price</label>
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
    
    
              <div className="grid grid-cols-3 gap-3 items-center">
                {formFields.map((data, index) => (
                  <div key={index}>
                    <label className={label_style}>{data?.label}</label>
                    {data?.dataType === "file" ? (
                      <input
                        type="file"
                        name={data?.value}
                        className={input_style}
                        onChange={(e) => handleImageProperty(e, data?.value)} // Trigger the image upload function
                        required
                      />
                    ) : (
                      <input
                        type={data?.dataType}
                        name={data?.value}
                        placeholder={data?.placeholder}
                        className={input_style}
                        value={formValues.details[data?.value]} 
                        onChange={detailHandler}
                        required
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
    
    
    
            {success &&
            <PopUp details={details}/>
            }
    
          </form>
      );
}