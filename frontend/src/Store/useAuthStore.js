import { create } from "zustand";
import { toast } from "react-hot-toast";
import { axiosInstance } from "../lib/axios";
import { Auth0Client } from "@auth0/auth0-spa-js";

// Initialize Auth0 Client
const auth0 = new Auth0Client({
    domain: import.meta.env.VITE_AUTH0_DOMAIN,
    client_id: import.meta.env.VITE_AUTH0_CLIENT_ID,
    authorizationParams: {
        redirect_uri: window.location.origin,
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
    },
});

export const useAuthStore = create((set) => ({
    authUser: null,
    isCheckingAuth: true,
    isLoggingIn: false,
    isSigningUp: false,
    isLoggingOut: false,

    checkAuth: async () => {
        set({ isCheckingAuth: true });
        try {
            const isAuthenticated = await auth0.isAuthenticated();
            if (isAuthenticated) {
                const token = await auth0.getIdTokenClaims();
                const res = await axiosInstance.post("/auth/login", {
                    token: token.__raw,
                });
                set({ authUser: res.data });
            } else {
                set({ authUser: null });
            }
        } catch (error) {
            console.log("Error in checkAuth:", error);
            toast.error("Authentication check failed");
        } finally {
            set({ isCheckingAuth: false });
        }
    },

    login: async () => {
        set({ isLoggingIn: true });
        try {
            await auth0.loginWithRedirect(); // Normal login
        } catch (error) {
            console.log("Login error:", error);
            toast.error("Login failed.");
        } finally {
            set({ isLoggingIn: false });
        }
    },

    signup: async () => {
        set({ isSigningUp: true });
        try {
            await auth0.loginWithRedirect({
                authorizationParams: {
                    screen_hint: "signup", // Force Auth0 to show signup page
                },
            });
        } catch (error) {
            console.log("Signup error:", error);
            toast.error("Signup failed.");
        } finally {
            set({ isSigningUp: false });
        }
    },

    handleRedirectCallback: async () => {
        try {
            await auth0.handleRedirectCallback();
            const token = await auth0.getIdTokenClaims();
            const res = await axiosInstance.post("/auth/login", {
                token: token.__raw,
            });
            set({ authUser: res.data });
            toast.success("Authenticated successfully");
        } catch (error) {
            console.error("Redirect callback error:", error);
            toast.error("Authentication failed");
        }
    },

    logout: async () => {
        set({ isLoggingOut: true });
        try {
            await axiosInstance.post("/auth/logout");
            await auth0.logout({ logoutParams: { returnTo: window.location.origin } });
            set({ authUser: null });
            toast.success("Logged out successfully");
        } catch (error) {
            console.log("Logout error:", error);
            toast.error("Logout failed");
        } finally {
            set({ isLoggingOut: false });
        }
    },

    getAuth0: () => auth0,
}));
