// src/store/auth-store.ts
import { create } from "zustand";
import { persist } from "zustand/middleware";

interface AuthState {
  isAuthenticated: boolean;
  userEmail: string | null;
  login: (email: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      isAuthenticated: false,
      userEmail: null,
      login: (email) =>
        set({
          isAuthenticated: true,
          userEmail: email,
        }),
      logout: () =>
        set({
          isAuthenticated: false,
          userEmail: null,
        }),
    }),
    {
      name: "auth-storage", // saved in localStorage
    }
  )
);
