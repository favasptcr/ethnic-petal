"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import { products, CATEGORIES } from "@/lib/products";

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "New Arrivals", value: "new" },
];

function CollectionsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "All";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sort, setSort] = useState("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let list = activeCategory === "All" ? products : products.filter((p) => p.category === activeCategory);
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "new") list = [...list].filter((p) => p.badge === "New").concat(list.filter((p) => p.badge !== "New"));
    return list;
  }, [activeCategory, sort]);

  return (
    <div className="bg-[#080808] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#888] tracking-widest uppercase mb-6">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="text-white/60">Women</span>
        </nav>

        {/* Page Title */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-white">
            Women&apos;s Collection
          </h1>
          <p className="text-[#888] text-sm mt-3">{filtered.length} products</p>
        </div>

        {/* Filters Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-[#2a2a2a] pb-5">
          {/* Category filters — desktop */}
          <div className="hidden sm:flex flex-wrap gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] tracking-widest uppercase px-4 py-2 border transition-all ${
                  activeCategory === cat
                    ? "btn-primary border-transparent"
                    : "bg-[#1a1a1a] border-[#2a2a2a] text-[#888] hover:border-[#c9a84c] hover:text-[#c9a84c]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            className="sm:hidden text-xs tracking-widest uppercase border border-[#2a2a2a] bg-[#1a1a1a] text-[#888] px-4 py-2"
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          >
            Filter by Category
          </button>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs tracking-wide border border-[#2a2a2a] bg-[#1a1a1a] text-white px-3 py-2 focus:outline-none focus:border-[#c9a84c] cursor-pointer"
          >
            {SORT_OPTIONS.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>

        {/* Mobile category filters */}
        {mobileFilterOpen && (
          <div className="sm:hidden flex flex-wrap gap-2 mb-6">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => { setActiveCategory(cat); setMobileFilterOpen(false); }}
                className={`text-[11px] tracking-widest uppercase px-4 py-2 border transition-all ${
                  activeCategory === cat
                    ? "btn-primary border-transparent"
                    : "bg-[#1a1a1a] border-[#2a2a2a] text-[#888]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-[#888]">No products found.</div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-10">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default function WomenCollectionPage() {
  return (
    <Suspense fallback={<div className="text-center py-20 text-[#888] bg-[#080808] min-h-screen">Loading...</div>}>
      <CollectionsContent />
    </Suspense>
  );
}
