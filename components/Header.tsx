"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import CartSidebar from "@/components/CartSidebar";
import SearchOverlay from "@/components/SearchOverlay";

const navLinks = [
  { label: "New Arrivals", href: "/collections/new-arrivals" },
  { label: "Women", href: "/collections/women" },
  { label: "Girls", href: "/collections/girls" },
  { label: "Sale", href: "/collections/sale" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { count } = useCart();
  const { count: wishlistCount } = useWishlist();
  const router = useRouter();

  return (
    <>
      {/* Announcement bar */}
      <div className="bg-[#080808] border-b border-[#2a2a2a] text-center text-xs tracking-widest py-2 px-4">
        FREE SHIPPING ON ORDERS OVER $150 · USE CODE{" "}
        <span className="text-[#c9a84c]">PETAL10</span> FOR 10% OFF
      </div>

      <header className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-md border-b border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Toggle menu"
            >
              <span className="block w-6 h-0.5 bg-white mb-1.5" />
              <span className="block w-6 h-0.5 bg-white mb-1.5" />
              <span className="block w-6 h-0.5 bg-white" />
            </button>

            {/* Logo */}
            <Link
              href="/"
              className="font-display text-2xl font-bold tracking-wider"
            >
              <span className="text-white">ETHNIC</span>{" "}
              <span className="gold-gradient">PETAL</span>
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="relative text-xs tracking-widest uppercase text-white/60 hover:text-white transition-colors group"
                >
                  {link.label}
                  <span className="absolute -bottom-0.5 left-0 w-0 h-px bg-[#c9a84c] transition-all duration-300 group-hover:w-full" />
                </Link>
              ))}
            </nav>

            {/* Icons */}
            <div className="flex items-center gap-4">
              <button
                aria-label="Search"
                onClick={() => setSearchOpen(true)}
                className="text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </button>

              <button
                aria-label="Wishlist"
                onClick={() => router.push("/wishlist")}
                className="relative text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
                {wishlistCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#c9a84c] text-[#080808] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {wishlistCount > 99 ? "99+" : wishlistCount}
                  </span>
                )}
              </button>

              <button
                aria-label="Cart"
                onClick={() => setCartOpen(true)}
                className="relative text-white/60 hover:text-white transition-colors"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                {count > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 bg-[#c9a84c] text-[#080808] text-[10px] font-bold rounded-full w-4 h-4 flex items-center justify-center">
                    {count > 99 ? "99+" : count}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {menuOpen && (
          <div className="lg:hidden border-t border-[#2a2a2a] bg-[#080808] px-4 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2.5 text-sm tracking-widest uppercase text-white/60 hover:text-white transition-colors"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </header>

      <CartSidebar open={cartOpen} onClose={() => setCartOpen(false)} />
      <SearchOverlay open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}
