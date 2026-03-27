"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

type CartSidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function CartSidebar({ open, onClose }: CartSidebarProps) {
  const { items, removeItem, updateQty, total } = useCart();

  return (
    <>
      {/* Overlay */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={onClose}
          aria-hidden="true"
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-md bg-white z-50 flex flex-col shadow-2xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
        aria-label="Shopping cart"
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-200">
          <h2
            className="text-lg tracking-widest uppercase text-[#0a0a0a]"
            style={{ fontFamily: "Georgia, serif" }}
          >
            Your Bag
          </h2>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="text-gray-500 hover:text-[#0a0a0a] transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-6 py-4">
          {items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full gap-4 text-center">
              <svg className="w-14 h-14 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
              </svg>
              <p className="text-sm tracking-widest uppercase text-gray-400">
                Your bag is empty
              </p>
              <Link
                href="/collections/women"
                onClick={onClose}
                className="text-xs tracking-widest uppercase text-[#d4af37] underline underline-offset-4 hover:text-[#b8960c] transition-colors"
              >
                Shop Now
              </Link>
            </div>
          ) : (
            <ul className="space-y-6">
              {items.map((item) => (
                <li key={`${item.id}-${item.size}`} className="flex gap-4">
                  {/* Image */}
                  <div className="relative w-20 h-24 flex-shrink-0 bg-[#f5f0e8] overflow-hidden">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <p className="text-sm font-medium text-[#0a0a0a] leading-snug">
                        {item.name}
                      </p>
                      <p className="text-[11px] tracking-widest uppercase text-gray-400 mt-0.5">
                        Size: {item.size}
                      </p>
                      <p className="text-sm font-semibold text-[#d4af37] mt-1">
                        ${item.price}
                      </p>
                    </div>

                    {/* Qty controls */}
                    <div className="flex items-center gap-3 mt-2">
                      <div className="flex items-center border border-gray-200">
                        <button
                          onClick={() => updateQty(item.id, item.size, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-sm"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-8 text-center text-sm">{item.quantity}</span>
                        <button
                          onClick={() => updateQty(item.id, item.size, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors text-sm"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id, item.size)}
                        className="text-[11px] tracking-widest uppercase text-gray-400 hover:text-[#8b1a1a] transition-colors underline underline-offset-2"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Footer */}
        {items.length > 0 && (
          <div className="border-t border-gray-200 px-6 py-5 space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-xs tracking-widest uppercase text-gray-500">Subtotal</span>
              <span className="text-lg font-semibold text-[#d4af37]" style={{ fontFamily: "Georgia, serif" }}>
                ${total.toFixed(2)}
              </span>
            </div>
            <p className="text-[11px] text-gray-400 tracking-wide">
              Shipping & taxes calculated at checkout
            </p>
            <button
              onClick={onClose}
              className="w-full border border-[#0a0a0a] text-[#0a0a0a] text-xs tracking-widest uppercase py-3 hover:bg-gray-50 transition-colors"
            >
              Continue Shopping
            </button>
            <Link
              href="/checkout"
              onClick={onClose}
              className="w-full bg-[#0a0a0a] text-white text-xs tracking-widest uppercase py-3 hover:bg-[#d4af37] transition-colors block text-center"
            >
              Checkout
            </Link>
          </div>
        )}
      </div>
    </>
  );
}
