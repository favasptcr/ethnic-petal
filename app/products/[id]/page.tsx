"use client";

import { useState } from "react";
import { useParams } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { products } from "@/lib/products";
import { useCart } from "@/context/CartContext";
import { useWishlist } from "@/context/WishlistContext";
import SizeGuide from "@/components/SizeGuide";

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

type AccordionKey = "description" | "fabric" | "shipping";

export default function ProductDetailPage() {
  const params = useParams<{ id: string }>();
  const product = products.find((p) => p.id === Number(params.id));
  const { addItem } = useCart();
  const { isWishlisted, toggleItem } = useWishlist();

  const [mainImage, setMainImage] = useState(product?.image ?? "");
  const [selectedColor, setSelectedColor] = useState(product?.colors?.[0] ?? "");
  const [selectedSize, setSelectedSize] = useState("");
  const [sizeGuideOpen, setSizeGuideOpen] = useState(false);
  const [openAccordion, setOpenAccordion] = useState<AccordionKey | null>("description");
  const [addedToBag, setAddedToBag] = useState(false);

  if (!product) {
    return (
      <div className="min-h-[60vh] flex flex-col items-center justify-center gap-4 bg-[#FAF8F5]">
        <p className="font-display text-xl text-[#1A1614]">Product not found</p>
        <Link
          href="/collections/women"
          className="text-xs tracking-widest uppercase text-[#c9a84c] underline underline-offset-4 hover:text-[#e8c97a] transition-colors"
        >
          Back to Collections
        </Link>
      </div>
    );
  }

  const wishlisted = isWishlisted(product.id);

  const thumbnails = [
    `${product.image.split("?")[0]}?w=200&q=60`,
    `${product.image.split("?")[0]}?w=200&q=60&sat=10`,
    `${product.image.split("?")[0]}?w=200&q=60&sat=-10`,
  ];

  function handleAddToBag() {
    if (!selectedSize || !product) return;
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      size: selectedSize,
      quantity: 1,
    });
    setAddedToBag(true);
    setTimeout(() => setAddedToBag(false), 2000);
  }

  function handleToggleWishlist() {
    if (!product) return;
    toggleItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
  }

  function toggleAccordion(key: AccordionKey) {
    setOpenAccordion((prev) => (prev === key ? null : key));
  }

  const accordionSections: { key: AccordionKey; label: string; content: string }[] = [
    {
      key: "description",
      label: "Description",
      content: `The ${product.name} is a stunning piece from our ${product.category} collection. Crafted with intricate detailing and premium fabrics, this ensemble captures the essence of South Asian elegance. Perfect for festive occasions, weddings, and celebrations.`,
    },
    {
      key: "fabric",
      label: "Fabric & Care",
      content:
        "Crafted from premium georgette with delicate embroidery. Dry clean only. Store in a cool, dry place away from direct sunlight. Handle embellishments with care to preserve their beauty.",
    },
    {
      key: "shipping",
      label: "Shipping & Returns",
      content:
        "Free shipping on orders over $150. Standard delivery 5–7 business days. Express delivery 2–3 business days. Easy 30-day returns on unworn items with original tags attached.",
    },
  ];

  return (
    <>
      <SizeGuide open={sizeGuideOpen} onClose={() => setSizeGuideOpen(false)} />

      <div className="bg-[#FAF8F5] min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          {/* Breadcrumb */}
          <nav className="mb-8 flex items-center gap-2 text-[11px] tracking-widest uppercase text-[#8A7E74]">
            <Link href="/" className="hover:text-[#c9a84c] transition-colors">Home</Link>
            <span>/</span>
            <Link href="/collections/women" className="hover:text-[#c9a84c] transition-colors">Collections</Link>
            <span>/</span>
            <span className="text-[#1A1614]/60">{product.name}</span>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
            {/* LEFT — Images */}
            <div className="space-y-4">
              {/* Main Image */}
              <div className="relative aspect-[3/4] overflow-hidden bg-[#F2EDE6] w-full">
                <Image
                  src={mainImage}
                  alt={product.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
                {product.badge && (
                  <span
                    className={`absolute top-4 left-4 text-[10px] tracking-widest uppercase px-2.5 py-1 font-semibold rounded-full ${
                      product.badge === "Sale"
                        ? "bg-red-700 text-white"
                        : product.badge === "New"
                        ? "bg-white text-[#1A1614]"
                        : "bg-[#c9a84c] text-[#080808]"
                    }`}
                  >
                    {product.badge}
                  </span>
                )}
              </div>

              {/* Thumbnails */}
              <div className="flex gap-3">
                {thumbnails.map((thumb, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(thumb)}
                    className={`relative w-20 aspect-[3/4] overflow-hidden bg-[#F2EDE6] flex-shrink-0 border-2 transition-colors ${
                      mainImage === thumb
                        ? "border-[#c9a84c]"
                        : "border-transparent hover:border-[#D9D0C4]"
                    }`}
                    aria-label={`View image ${idx + 1}`}
                  >
                    <Image
                      src={thumb}
                      alt={`${product.name} view ${idx + 1}`}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT — Details */}
            <div className="flex flex-col gap-5">
              {/* Category */}
              <p className="text-[11px] tracking-widest uppercase text-[#c9a84c]">
                {product.category}
              </p>

              {/* Name */}
              <h1 className="font-display text-3xl lg:text-4xl text-[#1A1614] leading-tight">
                {product.name}
              </h1>

              {/* Price */}
              <div className="flex items-center gap-3">
                <span className="font-display text-2xl font-semibold text-[#1A1614]">
                  ${product.price}
                </span>
                {product.originalPrice && (
                  <span className="text-lg text-[#8A7E74] line-through">
                    ${product.originalPrice}
                  </span>
                )}
              </div>

              <hr className="border-[#D9D0C4]" />

              {/* Color Swatches */}
              {product.colors && product.colors.length > 0 && (
                <div>
                  <p className="text-[11px] tracking-widest uppercase text-[#8A7E74] mb-2">Color</p>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color}
                        onClick={() => setSelectedColor(color)}
                        aria-label={`Select color ${color}`}
                        className={`w-7 h-7 rounded-full border-2 transition-all ${
                          selectedColor === color
                            ? "ring-2 ring-[#c9a84c] ring-offset-2 ring-offset-[#FAF8F5] border-[#c9a84c]"
                            : "border-[#D9D0C4] hover:scale-110"
                        }`}
                        style={{ backgroundColor: color }}
                      />
                    ))}
                  </div>
                </div>
              )}

              {/* Size Selector */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <p className="text-[11px] tracking-widest uppercase text-[#8A7E74]">Size</p>
                  <button
                    onClick={() => setSizeGuideOpen(true)}
                    className="text-[11px] tracking-widest uppercase text-[#c9a84c] underline underline-offset-2 hover:text-[#e8c97a] transition-colors"
                  >
                    Size Guide
                  </button>
                </div>
                <div className="flex flex-wrap gap-2">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`px-4 py-2 text-xs tracking-widest uppercase border transition-all ${
                        selectedSize === size
                          ? "btn-primary border-transparent"
                          : "bg-white text-[#8A7E74] border-[#D9D0C4] hover:border-[#c9a84c] hover:text-[#1A1614]"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
                {!selectedSize && (
                  <p className="text-[11px] text-[#8A7E74] mt-1.5">Please select a size</p>
                )}
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col gap-3 mt-2">
                <button
                  onClick={handleAddToBag}
                  disabled={!selectedSize}
                  className={`w-full py-4 transition-all ${
                    selectedSize
                      ? addedToBag
                        ? "btn-primary opacity-90"
                        : "btn-primary"
                      : "bg-[#EAE3D9] text-[#8A7E74] text-xs tracking-widest uppercase cursor-not-allowed"
                  }`}
                >
                  {addedToBag ? "Added to Bag ✓" : "Add to Bag"}
                </button>
                <button
                  onClick={handleToggleWishlist}
                  className="btn-outline w-full py-4"
                >
                  {wishlisted ? "Wishlisted ♥" : "Add to Wishlist ♡"}
                </button>
              </div>

              {/* Accordion */}
              <div className="border-t border-[#D9D0C4] mt-2">
                {accordionSections.map((section) => (
                  <div key={section.key} className="border-b border-[#D9D0C4]">
                    <button
                      onClick={() => toggleAccordion(section.key)}
                      className="w-full flex items-center justify-between py-4 text-left"
                    >
                      <span className="text-xs tracking-widest uppercase text-[#1A1614]">
                        {section.label}
                      </span>
                      <svg
                        className={`w-4 h-4 text-[#c9a84c] transition-transform ${
                          openAccordion === section.key ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                      </svg>
                    </button>
                    {openAccordion === section.key && (
                      <div className="pb-4">
                        <p className="text-sm text-[#8A7E74] leading-relaxed">{section.content}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
