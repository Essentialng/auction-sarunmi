export const handleCloudinary=async(image)=>{
        
    const formData = new FormData();

    formData.append("file", image);
    formData.append("upload_preset", "Alert_files");

    try{
    const response = await fetch("https://api.cloudinary.com/v1_1/dxsvadizj/image/upload",{
        method: "POST",
        body:formData,
    })


    if(response.ok){
    const data = await response.json()
    return data.secure_url
   
    }
    
    }catch(error){
        
    console.log(error)
    }
 

}