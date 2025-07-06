import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import { toast } from "react-hot-toast";

export const useAuthStore = create((set, get) => ({
    authUser: null,
    isLoggingIn: false,
    isUpdatingProfile: false,
    isCheckingAuth: false,
    loginWithBusinessAccount: false,

    checkAuth: async () => {
        try {
            set({ isCheckingAuth: true });

            const endpoint = get().loginWithBusinessAccount
                ? "/auth/check/business-account"
                : "/auth/check/user";

            const res = await axiosInstance.get(endpoint);
            set({ authUser: res.data });
        } catch (error) {
            set({ authUser: null });
            console.log("Error in checkAuth:", error);
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    login: async (data) => {
        set({ isLoggingIn: true });
        try {
            const endpoint = get().loginWithBusinessAccount
                ? "/auth/login/business-account"
                : "/auth/login/user";

            const res = await axiosInstance.post(endpoint, data);
            set({ authUser: res.data });

            toast.success(`${res.data.role} Logged in successfully`);
        } catch (error) {
            toast.error(error?.response?.data?.message || "Login failed");
        } finally {
            set({ isLoggingIn: false });
        }
    },

    logout: async () => {
        try {
            const endpoint = get().loginWithBusinessAccount
                ? "/auth/logout/business-account"
                : "/auth/logout/user";

            await axiosInstance.post(endpoint);
            set({ authUser: null });
            toast.success("Logged out successfully");
            get().disconnectSocket?.();
        } catch (error) {
            toast.error(error?.response?.data?.message || "Logout failed");
        }
    },
}));
