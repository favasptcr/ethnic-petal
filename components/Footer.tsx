"use client";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#1A1614] border-t border-[#1A1614] mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="md:col-span-1">
            <h2 className="font-display text-xl font-bold tracking-wider mb-3">
              <span className="text-white">ETHNIC</span>{" "}
              <span className="gold-gradient">PETAL</span>
            </h2>
            <p className="text-[#888] text-sm leading-relaxed">
              Celebrating the beauty of South Asian fashion. Handcrafted with love, designed for the modern woman.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-[11px] tracking-widest uppercase text-[#c9a84c] mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-[#888]">
              {["New Arrivals", "Women", "Girls", "Anarkali", "Lehenga", "Salwar Suits", "Sale"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help */}
          <div>
            <h3 className="text-[11px] tracking-widest uppercase text-[#c9a84c] mb-4">Help</h3>
            <ul className="space-y-2 text-sm text-[#888]">
              {["Size Guide", "Shipping & Returns", "Track Your Order", "FAQ", "Contact Us"].map((item) => (
                <li key={item}>
                  <Link href="#" className="hover:text-white transition-colors">{item}</Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-[11px] tracking-widest uppercase text-[#c9a84c] mb-4">Stay Connected</h3>
            <p className="text-sm text-[#888] mb-4">Get exclusive deals & new arrivals straight to your inbox.</p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Your email"
                className="flex-1 bg-[#2a2018] border border-[#3a3028] px-3 py-2 text-sm text-white placeholder-[#888] focus:outline-none focus:border-[#c9a84c] transition-colors"
              />
              <button type="submit" className="btn-primary px-4 py-2">
                JOIN
              </button>
            </form>
            <div className="flex gap-4 mt-6">
              {["Instagram", "Pinterest", "Facebook"].map((s) => (
                <Link key={s} href="#" className="text-xs text-[#888] hover:text-white transition-colors tracking-wide">
                  {s}
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-[#2a2a2a] mt-12 pt-6 flex flex-col md:flex-row justify-between items-center gap-3">
          <p className="text-xs text-[#888]">© 2025 Ethnic Petal. All rights reserved.</p>
          <div className="flex gap-4 text-xs text-[#888]">
            <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
