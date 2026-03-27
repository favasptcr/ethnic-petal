import Image from "next/image";
import Link from "next/link";
import { Product } from "@/lib/products";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="product-card group">
      <Link href={`/products/${product.id}`} className="block">
        {/* Image */}
        <div className="relative overflow-hidden bg-[#F2EDE6] aspect-[3/4]">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          />

          {/* Badge */}
          {product.badge && (
            <span
              className={`absolute top-3 left-3 text-[10px] tracking-widest uppercase px-2.5 py-1 font-semibold rounded-full ${
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

          {/* Overlay */}
          <div className="product-overlay absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 transition-opacity duration-300 flex items-end justify-center pb-6">
            <span className="text-[#c9a84c] text-xs tracking-widest uppercase font-semibold">
              View Product
            </span>
          </div>
        </div>

        {/* Info */}
        <div className="pt-3 pb-1">
          <p className="text-[10px] tracking-widest uppercase text-[#c9a84c]/60 mb-1">
            {product.category}
          </p>
          <h3 className="text-sm font-medium text-[#1A1614] leading-snug group-hover:text-[#c9a84c] transition-colors">
            {product.name}
          </h3>
          <div className="flex items-center gap-2 mt-1.5">
            <span className="text-sm font-semibold text-[#1A1614]">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-xs text-[#8A7E74] line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Color swatches */}
          {product.colors && (
            <div className="flex gap-1.5 mt-2">
              {product.colors.map((color) => (
                <span
                  key={color}
                  className="w-3.5 h-3.5 rounded-full border border-[#D9D0C4] cursor-pointer hover:ring-1 hover:ring-[#1A1614]/50 hover:ring-offset-1 hover:ring-offset-white transition-all"
                  style={{ backgroundColor: color }}
                />
              ))}
            </div>
          )}
        </div>
      </Link>
    </div>
  );
}
