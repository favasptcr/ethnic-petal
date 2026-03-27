"use client";

import Image from "next/image";
import Link from "next/link";
import { useWishlist } from "@/context/WishlistContext";
import { useCart } from "@/context/CartContext";

export default function WishlistPage() {
  const { items, removeItem, count } = useWishlist();
  const { addItem } = useCart();

  function handleMoveToBag(item: typeof items[number]) {
    addItem({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      size: "M",
      quantity: 1,
    });
    removeItem(item.id);
  }

  return (
    <div className="bg-[#080808] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#888] tracking-widest uppercase mb-8">
          <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
          <span className="mx-2">/</span>
          <span className="text-white/60">Wishlist</span>
        </nav>

        {/* Header */}
        <div className="mb-10">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">My Wishlist</h1>
          {count > 0 && (
            <p className="text-[#888] text-sm mt-2">{count} {count === 1 ? "item" : "items"}</p>
          )}
        </div>

        {/* Empty state */}
        {count === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 gap-6">
            <svg className="w-16 h-16 text-[#2a2a2a]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
            <p className="font-display text-2xl text-white">Your wishlist is empty</p>
            <p className="text-[#888] text-sm text-center max-w-xs">
              Save your favourite pieces and come back to them whenever you&apos;re ready.
            </p>
            <Link href="/collections/women" className="btn-primary inline-block px-10 py-3 mt-2">
              Shop Now
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
            {items.map((item) => (
              <div key={item.id} className="group bg-[#111]">
                {/* Image */}
                <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                    sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  />
                  {/* Remove button */}
                  <button
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove from wishlist"
                    className="absolute top-3 right-3 w-7 h-7 bg-[#080808]/80 flex items-center justify-center text-[#888] hover:text-white transition-colors"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Info */}
                <div className="p-3">
                  <p className="text-[10px] tracking-widest uppercase text-[#c9a84c] mb-1">{item.category}</p>
                  <Link href={`/products/${item.id}`}>
                    <h3 className="text-sm text-white leading-snug hover:text-[#c9a84c] transition-colors mb-1">
                      {item.name}
                    </h3>
                  </Link>
                  <p className="text-sm font-semibold text-white mb-3">${item.price}</p>
                  <button
                    onClick={() => handleMoveToBag(item)}
                    className="btn-primary w-full py-2.5 text-center"
                  >
                    Move to Bag
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
