"use client";

import { createContext, useContext, useState, ReactNode } from "react";

export type WishlistItem = {
  id: number;
  name: string;
  price: number;
  image: string;
  category: string;
};

type WishlistContextType = {
  items: WishlistItem[];
  addItem: (item: WishlistItem) => void;
  removeItem: (id: number) => void;
  isWishlisted: (id: number) => boolean;
  count: number;
  toggleItem: (item: WishlistItem) => void;
};

const WishlistContext = createContext<WishlistContextType | null>(null);

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<WishlistItem[]>([]);

  function addItem(item: WishlistItem) {
    setItems((prev) => {
      if (prev.find((i) => i.id === item.id)) return prev;
      return [...prev, item];
    });
  }

  function removeItem(id: number) {
    setItems((prev) => prev.filter((i) => i.id !== id));
  }

  function isWishlisted(id: number): boolean {
    return items.some((i) => i.id === id);
  }

  function toggleItem(item: WishlistItem) {
    if (isWishlisted(item.id)) {
      removeItem(item.id);
    } else {
      addItem(item);
    }
  }

  const count = items.length;

  return (
    <WishlistContext.Provider value={{ items, addItem, removeItem, isWishlisted, count, toggleItem }}>
      {children}
    </WishlistContext.Provider>
  );
}

export function useWishlist() {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
