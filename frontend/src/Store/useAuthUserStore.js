import { create } from "zustand";
import { axiosInstance } from "../lib/axios.js";
import { toast } from "react-hot-toast";

// Helper to handle errors and fallback toast messages
const handleError = (error, fallback = "Something went wrong") => {
    const message = error?.response?.data?.message || fallback;
    toast.error(message);
};

export const useUserStore = create((set,) => ({
    userData: null,
    isLoading: false,

    login: async (data) => {
        set({ isLoading: true });
        try {
            const { data: resData } = await axiosInstance.post("/user/login", data);
            set({ userData: resData });
            toast.success("User logged in");
        } catch (error) {
            handleError(error, "Login failed");
        } finally {
            set({ isLoading: false });
        }
    },

    deleteUser: async (userId) => {
        try {
            await axiosInstance.delete(`/user/delete/${userId}`);
            toast.success("User deleted");
        } catch (error) {
            handleError(error, "Delete failed");
        }
    },

    getUser: async (userId) => {
        try {
            const { data } = await axiosInstance.get(`/user/${userId}`);
            set({ userData: data });
        } catch (error) {
            handleError(error, "Fetch user failed");
        }
    },

    getAllUsers: async () => {
        try {
            const { data } = await axiosInstance.get("/user/all");
            set({ userData: data });
        } catch (error) {
            handleError(error, "Fetch users failed");
        }
    },

    changePhoneNumber: async (userId, data) => {
        try {
            const { data: updated } = await axiosInstance.put(`/user/phone/${userId}`, data);
            set({ userData: updated });
            toast.success("Phone number updated");
        } catch (error) {
            handleError(error, "Phone update failed");
        }
    },

    changeDateOfBirth: async (userId, data) => {
        try {
            const { data: updated } = await axiosInstance.put(`/user/dob/${userId}`, data);
            set({ userData: updated });
            toast.success("Date of birth updated");
        } catch (error) {
            handleError(error, "DOB update failed");
        }
    },

    changeGender: async (userId, data) => {
        try {
            const { data: updated } = await axiosInstance.put(`/user/gender/${userId}`, data);
            set({ userData: updated });
            toast.success("Gender updated");
        } catch (error) {
            handleError(error, "Gender update failed");
        }
    },

    addProductIntoCart: async (productId) => {
        try {
            await axiosInstance.post(`/user/cart/${productId}`);
            toast.success("Added to cart");
        } catch (error) {
            handleError(error, "Add to cart failed");
        }
    },

    deleteProductFromCart: async (productId) => {
        try {
            await axiosInstance.delete(`/user/cart/${productId}`);
            toast.success("Removed from cart");
        } catch (error) {
            handleError(error, "Remove from cart failed");
        }
    },

    addProductIntoWishlist: async (productId) => {
        try {
            await axiosInstance.post(`/user/wishlist/${productId}`);
            toast.success("Added to wishlist");
        } catch (error) {
            handleError(error, "Add to wishlist failed");
        }
    },

    deleteProductFromWishlist: async (productId) => {
        try {
            await axiosInstance.delete(`/user/wishlist/${productId}`);
            toast.success("Removed from wishlist");
        } catch (error) {
            handleError(error, "Remove from wishlist failed");
        }
    },

    addProductIntoOrder: async (orderData) => {
        try {
            await axiosInstance.post("/user/order", orderData);
            toast.success("Order placed");
        } catch (error) {
            handleError(error, "Order failed");
        }
    },

    deleteProductsFromOrder: async (orderId) => {
        try {
            await axiosInstance.delete(`/user/order/${orderId}`);
            toast.success("Order deleted");
        } catch (error) {
            handleError(error, "Delete order failed");
        }
    },

    getUserAddress: async (userId) => {
        try {
            const { data } = await axiosInstance.get(`/user/address/${userId}`);
            set({ userData: data });
        } catch (error) {
            handleError(error, "Fetch address failed");
        }
    },

    changeUserAddress: async (userId, data) => {
        try {
            const { data: updated } = await axiosInstance.put(`/user/address/change/${userId}`, data);
            set({ userData: updated });
            toast.success("Address updated");
        } catch (error) {
            handleError(error, "Address update failed");
        }
    },

    getWalletData: async (userId) => {
        try {
            const { data } = await axiosInstance.get(`/user/wallet/${userId}`);
            set({ userData: data });
        } catch (error) {
            handleError(error, "Fetch wallet failed");
        }
    },

    getPaymentData: async (userId) => {
        try {
            const { data } = await axiosInstance.get(`/user/payment/${userId}`);
            set({ userData: data });
        } catch (error) {
            handleError(error, "Fetch payment failed");
        }
    },
}));
