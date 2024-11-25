import { create } from 'zustand';

interface AuthState {
  isLoggedIn: boolean;
  token: string;
  login: (token: string) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>((set) => ({
  isLoggedIn: false,
  token: "",
  login: (token) => set({ isLoggedIn: true, token }),
  logout: () => set({ isLoggedIn: false, token: "" }),
}));