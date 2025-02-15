import {create} from "zustand";
import {setCookies, getCookies, removeCookies} from "@/utils/cookies";
import { verifyToken } from "@/utils/jwt";
import { axiosInstance } from "@/utils/axios";



const useStore = create((set) => ({
  user: null,
  loading : true,
  products : true,
  cars: [],
  properies: [],
  others: [],
  categories: [],
  auctions: [],
  


  initializeUser: async (access_token) => {
    setCookies(access_token);
    const data = await verifyToken(access_token);
    set({ user: data });
  },

  getUser: async ()=>{
    const access_token = getCookies()
    const data = await verifyToken(access_token);
    set({ user: data });
  },

  clearUser: () =>{
      removeCookies()
      set({ user: null })
    },

  fetchAllProduct : async () => {
    set({loading: true});
    try {
      const response = await axiosInstance.get(`/products?categoryId=all`);
      const data = await response.data;
      if (response.status === 200) {
        const carsData = [];
        const propertiesData = [];
        const othersData = [];

        data.items.forEach((item) => {
          if (item.modelId === 1) {
            carsData.push(item);
          } else if (item.modelId === 2) {
            propertiesData.push(item);
          } else {
            othersData.push(item);
          }
        });
        
        set({ 
          cars: carsData, 
          properties: propertiesData, 
          others: othersData, 
          products: false,
          auctions: data.items
         });

      }
    } catch (error) {
      console.log(error);
    }finally{
      set({loading:false});
    }
  },

    fetchCategory: async()=>{
      set({loading: true});
      try{
        const response = await axiosInstance.get("/category");
        const data = await response.data;
        if(response.status == 200){
          set({categories : data.category, products: false})
        }
      }catch(error){
        console.log(error)
      }finally{
        set({loading:false});
      }
    }

}));

  

export default useStore;