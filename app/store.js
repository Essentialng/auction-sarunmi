import {create} from "zustand"

const useStore = create((set) => ({
  auth: null,

  setAuth: () => set({ auth:true }),
  clearAuth: () => set({ user: null }),
}));

export default useStore;