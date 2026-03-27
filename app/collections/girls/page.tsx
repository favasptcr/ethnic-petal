"use client";

import { useState, useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import ProductCard from "@/components/ProductCard";
import { girlsProducts, GIRLS_CATEGORIES } from "@/lib/products";

const SORT_OPTIONS = [
  { label: "Featured", value: "featured" },
  { label: "Price: Low to High", value: "price-asc" },
  { label: "Price: High to Low", value: "price-desc" },
  { label: "New Arrivals", value: "new" },
];

function GirlsCollectionsContent() {
  const searchParams = useSearchParams();
  const initialCategory = searchParams.get("category") ?? "All";

  const [activeCategory, setActiveCategory] = useState(initialCategory);
  const [sort, setSort] = useState("featured");
  const [mobileFilterOpen, setMobileFilterOpen] = useState(false);

  const filtered = useMemo(() => {
    let list =
      activeCategory === "All"
        ? girlsProducts
        : girlsProducts.filter((p) => p.category === activeCategory);
    if (sort === "price-asc") list = [...list].sort((a, b) => a.price - b.price);
    if (sort === "price-desc") list = [...list].sort((a, b) => b.price - a.price);
    if (sort === "new")
      list = [...list]
        .filter((p) => p.badge === "New")
        .concat(list.filter((p) => p.badge !== "New"));
    return list;
  }, [activeCategory, sort]);

  return (
    <div className="bg-[#FAF8F5] min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Breadcrumb */}
        <nav className="text-xs text-[#8A7E74] tracking-widest uppercase mb-6">
          <span>Home</span>
          <span className="mx-2">/</span>
          <span className="text-[#1A1614]/60">Girls</span>
        </nav>

        {/* Page Title */}
        <div className="mb-10 text-center">
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[#1A1614]">
            Girls&apos; Collection
          </h1>
          <p className="font-display italic text-[#c9a84c] text-lg mt-2">
            Little ladies, big style
          </p>
          <p className="text-[#8A7E74] text-sm mt-3">{filtered.length} products</p>
        </div>

        {/* Filters Row */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 border-b border-[#D9D0C4] pb-5">
          {/* Category filters — desktop */}
          <div className="hidden sm:flex flex-wrap gap-2">
            {GIRLS_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`text-[11px] tracking-widest uppercase px-4 py-2 border transition-all ${
                  activeCategory === cat
                    ? "btn-primary border-transparent"
                    : "bg-white border-[#D9D0C4] text-[#8A7E74] hover:border-[#c9a84c] hover:text-[#c9a84c]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Mobile filter toggle */}
          <button
            className="sm:hidden text-xs tracking-widest uppercase border border-[#D9D0C4] bg-white text-[#8A7E74] px-4 py-2"
            onClick={() => setMobileFilterOpen(!mobileFilterOpen)}
          >
            Filter by Category
          </button>

          {/* Sort */}
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="text-xs tracking-wide border border-[#D9D0C4] bg-white text-[#1A1614] px-3 py-2 focus:outline-none focus:border-[#c9a84c] cursor-pointer"
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
            {GIRLS_CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setMobileFilterOpen(false);
                }}
                className={`text-[11px] tracking-widest uppercase px-4 py-2 border transition-all ${
                  activeCategory === cat
                    ? "btn-primary border-transparent"
                    : "bg-white border-[#D9D0C4] text-[#8A7E74]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        {/* Product Grid */}
        {filtered.length === 0 ? (
          <div className="text-center py-20 text-[#8A7E74]">No products found.</div>
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

export default function GirlsCollectionPage() {
  return (
    <Suspense
      fallback={
        <div className="text-center py-20 text-[#8A7E74] bg-[#FAF8F5] min-h-screen">
          Loading...
        </div>
      }
    >
      <GirlsCollectionsContent />
    </Suspense>
  );
}
