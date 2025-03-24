import { useState, useEffect } from "react";
import { axiosInstance } from "@/package/axios";
import { handleCloudinary } from "@/utils/cloudinary";
import FormField from "./form";
import NotificationHandler from "@/utils/notification";
import { Toast } from "@/package/alert";

const ProductUpload = ({id, product, handleClick}) => {

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [success, setSuccess] = useState(false);
  const [modelData, setModelData] = useState([]);
  const [fetchedModel, setFetchedModel] = useState(false);
  const [formFields, setFormFields] = useState([]);
  const [categories, setCategories] = useState([]);

    const [formValues, setFormValues] = useState({
        id : id,
        images : [],
        details: {}

    });

    const details = {
      headers: "Upload Successful!",
      texts: `Thank you for submitting your product documents. Our verification team
       will review your submission shortly. Please note that a verification fee of 20,000 
       naira is required for the admin to conduct the inspection and validation of your auction item.
      `,
      btn2: "PROCEED TO DASHBOARD",
      link2: "/dashboard",
    }

    const changeHandler = (e) => {
        const {name, value} = e.target
        setFormValues((prev)=>({
            ...prev,
            [name] : value
        }))
        
    }

    const detailHandler = (e) => {
      const { name, value } = e.target;
      
      setFormValues(prevState => ({
        ...prevState,
        details: {
          ...prevState.details,
          [name]: value
        }
      }));
    };
    
    

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

  const certificateOfOcupancy = async (event, name) => {
    const file = event.target.files[0];
    if (file) {
      const url = await handleCloudinary(file); 
      if (url) {
        setFormValues((prevValues) => ({
          ...prevValues,
          details: {
            ...prevValues.details,
            [name]: url 
          }
        }));
      }
    }
  };


    const handleRemoveImage = (index) => {
      setFormValues((prevValues) => ({
        ...prevValues, 
        images: prevValues.images.filter((_, i) => i !== index), 
      }));
    };


    const submitHandler = async (e) => {
      e.preventDefault();

      if(formValues.images.length < 5 || formValues.images.length > 10){
        Toast.fire({
          icon: 'error',
          title: 'Please upload between 5 to 10 images',
        })
        return;
      }

      setLoading(true)

      try{
        const response = await axiosInstance.post("/products", formValues);

        if(response.status == 200){
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

   
    const formHandler = async()=>{
      setLoading(true)
      try{
        const response = await axiosInstance.get(`formFields?categoryId=${product.index}`);
        const result = response.data;
        if(response.status == 200){
          setFormFields(result.fields);
        }
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false);
      }
    }


    const modelHandler= async()=>{
      setLoading(true);

      try{
        const response = await axiosInstance.get(`/products?categoryId=${product.index}`)
        const data = await response.data
        if(response.status == 200){
          setModelData(data.model);
        }
      }catch(error){
        console.log(error)
        setFetchedModel(false);
      }finally{
        setLoading(false);
      }
    };


    const handleCategories = async()=>{
      setFetchedModel(true);
      setLoading(true)
      try{
        if(!fetchedModel){
        const response = await axiosInstance.get("/category");
        const data = await response.data;
        if(response.status == 200){
          setCategories(data.category);
        }
      }
      }catch(error){
        console.log(error)
      }finally{
        setLoading(false);
      }
    }


    useEffect(()=>{
      modelHandler();
      formHandler();
      handleCategories();
    },[product.index])

    const categoryChange = (event)=>{
      handleClick("Others", event.target.value)
    }


  return (
    
      <FormField
      product={product}
      categoryChange={categoryChange}
      submitHandler={submitHandler}
      formValues={formValues}
      changeHandler={changeHandler}
      modelData={modelData}
      handleImageUpload={handleImageUpload}
      handleRemoveImage={handleRemoveImage}
      formFields={formFields}
      loading={loading}
      errorMessage={errorMessage}
      details={details}
      success={success}
      detailHandler={detailHandler}
      certificateOfOcupancy={certificateOfOcupancy}
      categories={categories}
      setFormValues={setFormValues}
      />
  );
};

export default ProductUpload;
