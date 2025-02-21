import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: "http://localhost:3000/api/",
    headers: {
        "Content-Type": "application/json",
    }
});
// https://essential-auction.vercel.app/
// http://localhost:3000/
// http://auction.etechology.ng