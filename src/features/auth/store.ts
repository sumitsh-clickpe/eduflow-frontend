import { create } from "zustand";
import { persist } from "zustand/middleware";

interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
}

interface AuthState {
  user: User | null;
  login: (email: string, name?: string) => void;
  logout: () => void;
}

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      login: (email, name) =>
        set({
          user: {
            id: "u1",
            email,
            name: name ?? email.split("@")[0].replace(/[._]/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
            avatar: `https://i.pravatar.cc/150?u=${encodeURIComponent(email)}`,
          },
        }),
      logout: () => set({ user: null }),
    }),
    { name: "lumen-auth" }
  )
);
