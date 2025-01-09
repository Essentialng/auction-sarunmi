import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "https://essential-auction.vercel.app/",
    headers: {
        "Content-Type": "application/json",
    }
});
// https://essential-auction.vercel.app/
// http://localhost:3000/api/