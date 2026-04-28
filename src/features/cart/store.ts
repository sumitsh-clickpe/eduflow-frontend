import { create } from "zustand";
import { persist } from "zustand/middleware";
import { Course } from "@/features/courses/types";

interface CartState {
  items: Course[];
  add: (course: Course) => boolean;
  remove: (id: string) => void;
  clear: () => void;
  has: (id: string) => boolean;
  total: () => number;
  originalTotal: () => number;
}

export const useCart = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      add: (course) => {
        if (get().items.find((i) => i.id === course.id)) return false;
        set({ items: [...get().items, course] });
        return true;
      },
      remove: (id) => set({ items: get().items.filter((i) => i.id !== id) }),
      clear: () => set({ items: [] }),
      has: (id) => !!get().items.find((i) => i.id === id),
      total: () => get().items.reduce((s, i) => s + i.price, 0),
      originalTotal: () => get().items.reduce((s, i) => s + (i.originalPrice ?? i.price), 0),
    }),
    { name: "lumen-cart" }
  )
);

interface WishState {
  ids: string[];
  toggle: (id: string) => void;
  has: (id: string) => boolean;
}
export const useWishlist = create<WishState>()(
  persist(
    (set, get) => ({
      ids: [],
      toggle: (id) =>
        set({ ids: get().ids.includes(id) ? get().ids.filter((x) => x !== id) : [...get().ids, id] }),
      has: (id) => get().ids.includes(id),
    }),
    { name: "lumen-wishlist" }
  )
);
