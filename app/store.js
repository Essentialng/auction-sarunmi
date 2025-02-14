import {create} from "zustand";
import {setCookies, getCookies, removeCookies} from "@/utils/cookies";
import { verifyToken } from "@/utils/jwt";

const useStore = create((set) => ({
  user: null,
  loading : false,

  setLoading: ()=>{
    set({loading : !loading})
  },

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
      set({ user: null })},
}));

export default useStore;