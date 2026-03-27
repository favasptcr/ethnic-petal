"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { products } from "@/lib/products";

const POPULAR_CATEGORIES = [
  { label: "Anarkali", href: "/collections/women?category=Anarkali" },
  { label: "Lehenga", href: "/collections/women?category=Lehenga" },
  { label: "Salwar Suits", href: "/collections/women?category=Salwar+Suits" },
  { label: "Sharara", href: "/collections/women?category=Sharara" },
  { label: "Kurta Sets", href: "/collections/women?category=Kurta+Sets" },
];

type Props = {
  open: boolean;
  onClose: () => void;
};

export default function SearchOverlay({ open, onClose }: Props) {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery("");
    }
  }, [open]);

  useEffect(() => {
    function handleKey(e: KeyboardEvent) {
      if (e.key === "Escape") onClose();
    }
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, [onClose]);

  const results = query.trim()
    ? products.filter(
        (p) =>
          p.name.toLowerCase().includes(query.toLowerCase()) ||
          p.category.toLowerCase().includes(query.toLowerCase())
      )
    : [];

  function handleResultClick(id: number) {
    router.push(`/products/${id}`);
    onClose();
  }

  return (
    <div
      className={`fixed inset-0 z-[100] bg-black/90 backdrop-blur-md transition-all duration-300 ${
        open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
      }`}
    >
      <div
        className={`transition-transform duration-300 ${
          open ? "translate-y-0" : "-translate-y-8"
        }`}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          aria-label="Close search"
          className="absolute top-6 right-6 text-[#c9a84c] hover:text-[#e8c97a] transition-colors"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        {/* Search input area */}
        <div className="max-w-3xl mx-auto px-6 pt-20 pb-8">
          <div className="relative border-b border-[#c9a84c]">
            <svg
              className="absolute left-0 top-1/2 -translate-y-1/2 w-5 h-5 text-[#888]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
            <input
              ref={inputRef}
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search dresses, styles..."
              className="w-full bg-transparent pl-8 pr-4 py-4 text-2xl text-white placeholder-white/30 focus:outline-none"
            />
          </div>
        </div>

        {/* Results */}
        <div className="max-w-3xl mx-auto px-6 pb-12 overflow-y-auto max-h-[60vh]">
          {query.trim() === "" ? (
            <div>
              <p className="text-[11px] tracking-widest uppercase text-[#888] mb-4">Popular Categories</p>
              <div className="flex flex-wrap gap-3">
                {POPULAR_CATEGORIES.map((cat) => (
                  <button
                    key={cat.label}
                    onClick={() => { router.push(cat.href); onClose(); }}
                    className="px-4 py-2 border border-[#2a2a2a] text-sm text-[#e8c97a] hover:border-[#c9a84c] hover:bg-[#1a1a1a] transition-colors tracking-wide"
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length === 0 ? (
            <p className="text-[#888] text-sm">
              No results for &ldquo;<span className="text-white">{query}</span>&rdquo;
            </p>
          ) : (
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {results.map((product) => (
                <button
                  key={product.id}
                  onClick={() => handleResultClick(product.id)}
                  className="group text-left bg-[#111] hover:bg-[#1a1a1a] transition-colors"
                >
                  <div className="relative aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] tracking-widest uppercase text-[#c9a84c] mb-1">{product.category}</p>
                    <p className="text-sm text-white leading-snug">{product.name}</p>
                    <p className="text-sm font-semibold text-white mt-1">${product.price}</p>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
