import { create } from "zustand";
import { axiosInstance } from "../../lib/axios.js";
import { toast } from "react-hot-toast";

export const useWebHomeStore = create((set) => ({
    homePageData: {
        headerImage: "",
        headerText: "",
        imageSlider: [], // array of arrays
        productSlider: [], // category-arranged products
        trendingCategories: [], // image list
        advertisementPanel: [], // [{ image, offerEndDate }]
    },
    isLoading: false,

    getHomePageData: async () => {
        set({ isLoading: true });
        try {
            const { data } = await axiosInstance.get("/web/home");
            set({ homePageData: data });
        } catch (error) {
            toast.error("Failed to fetch homepage data",error);
        } finally {
            set({ isLoading: false });
        }
    },

    updateHeader: async (data) => {
        try {
            const res = await axiosInstance.put("/web/home/header", data);
            set((state) => ({
                homePageData: { ...state.homePageData, ...res.data },
            }));
            toast.success("Header updated");
        } catch (error) {
            toast.error("Failed to update header",error);
        }
    },

    updateImageSlider: async (sliderData) => {
        try {
            const res = await axiosInstance.put("/web/home/slider", { imageSlider: sliderData });
            set((state) => ({
                homePageData: { ...state.homePageData, imageSlider: res.data.imageSlider },
            }));
            toast.success("Image slider updated");
        } catch (error) {
            toast.error("Failed to update image slider",error);
        }
    },

    updateProductSlider: async (data) => {
        try {
            const res = await axiosInstance.put("/web/home/products", { productSlider: data });
            set((state) => ({
                homePageData: { ...state.homePageData, productSlider: res.data.productSlider },
            }));
            toast.success("Product slider updated");
        } catch (error) {
            toast.error("Failed to update product slider",error);
        }
    },

    updateTrendingCategories: async (data) => {
        try {
            const res = await axiosInstance.put("/web/home/trending", { trendingCategories: data });
            set((state) => ({
                homePageData: { ...state.homePageData, trendingCategories: res.data.trendingCategories },
            }));
            toast.success("Trending categories updated");
        } catch (error) {
            toast.error("Failed to update trending categories",error);
        }
    },

    updateAdvertisementPanel: async (data) => {
        try {
            const res = await axiosInstance.put("/web/home/ads", { advertisementPanel: data });
            set((state) => ({
                homePageData: { ...state.homePageData, advertisementPanel: res.data.advertisementPanel },
            }));
            toast.success("Advertisement panel updated");
        } catch (error) {
            toast.error("Failed to update advertisement panel",error);
        }
    },
}));
