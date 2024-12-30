import {create} from "zustand";
import {setCookies} from "@/utils/cookies";
// import { jwtToken } from "@/utils/webtoken";

const useStore = create((set) => ({
  user: null,


  initializeUser: async (access_token) => {
    setCookies(access_token);
    const data = jwtToken(access_token);

    set({ user: data });
  },

  clearAuth: () => set({ auth: null }),
}));

export default useStore;