import { create } from "zustand";
import Cookies from "js-cookie";
import { api } from "@/lib/api/axios";

interface User {
  id: string;
  name: string;
  email: string;
  // Add other user fields
}

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  setUser: (user: User | null) => void;
  logout: () => void;
  refreshUser: () => Promise<void>;
}

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: !!Cookies.get("access_token"),
  isLoading: false,

  setUser: (user) => set({ user, isAuthenticated: !!user }),

  logout: () => {
    Cookies.remove("access_token");
    set({ user: null, isAuthenticated: false });
    if (typeof window !== "undefined") {
      window.location.href = "/login";
    }
  },

  refreshUser: async () => {
    set({ isLoading: true });
    try {
      const response = await api.get("/auth/me");
      set({ user: response.data, isAuthenticated: true });
    } catch {
      set({ user: null, isAuthenticated: false });
    } finally {
      set({ isLoading: false });
    }
  },
}));
