import { axiosInstance } from "@/package/axios";

export default async function NotificationHandler({message, userId, itemId, type}){
    const endpoint = "/notification"
    const body = {
        message: message,
        userId: userId,
        itemId: itemId,
        type: type
    };

    try{
        const response = await axiosInstance.post(endpoint, body);
        if(response.status == 201){
            console.log("perfect")
        }
    }catch(error){
        console.log(error);
    }
}