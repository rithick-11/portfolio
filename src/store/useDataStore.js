import { create } from "zustand";
import Cookies from "js-cookie";
import apiServer from "../lib/apiServer";
import { toast } from "react-hot-toast";

const useDataStore = create((set) => ({
  isAuthenticated: false,
  isDataLoading: true,
  userData: {},
  isProjectLoading: false,
  projectList: { projects: [] },

  getProject: async () => {
    set({ isProjectLoading: true });
    apiServer.defaults.headers = {
      Authorization: `Bearer ${Cookies.get("user_token")}`,
    };
    try {
      const res = await apiServer.get("/user/project");
      // Normalize: API may return { projects: [...] } or just [...]
      const data = res.data;
      const normalized = Array.isArray(data)
        ? { projects: data }
        : data?.projects
        ? data
        : { projects: [] };
      set({ projectList: normalized });
    } catch (err) {
      console.log(err);
    }
    set({ isProjectLoading: false });
  },

  getUserData: async () => {
    if (Cookies.get("user_token") === undefined) {
      return;
    }
    set({ isDataLoading: true });
    apiServer.defaults.headers = {
      Authorization: `Bearer ${Cookies.get("user_token")}`,
    };
    try {
      const { data } = await apiServer.get("/user/data");
      set({ userData: data, isAuthenticated: true });
    } catch (err) {
      console.log(err);
    }
    set({ isDataLoading: false });
  },

  onLogOut: async () => {
    Cookies.remove("user_token");
    set({ isAuthenticated: false });
    toast.success("Logout succesful");
  },

  countUser: async () => {
    try{
      await apiServer.get("/user/count")
    }catch(err){
      console.log(err);
    }
  }
}));

export default useDataStore;
