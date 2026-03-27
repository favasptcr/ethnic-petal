import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import { products } from "@/lib/products";

const categories = [
  { label: "Anarkali", image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=400&q=80", href: "/collections/women?category=Anarkali" },
  { label: "Lehenga", image: "https://images.unsplash.com/photo-1594938298603-376cf1d3de78?w=400&q=80", href: "/collections/women?category=Lehenga" },
  { label: "Salwar Suits", image: "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=400&q=80", href: "/collections/women?category=Salwar+Suits" },
  { label: "Sharara", image: "https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?w=400&q=80", href: "/collections/women?category=Sharara" },
];

const newArrivals = products.filter((p) => p.badge === "New").slice(0, 4);

const trustBadges = [
  {
    icon: (
      <svg className="w-7 h-7 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8" />
      </svg>
    ),
    title: "Free Shipping",
    desc: "On orders over $150",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
      </svg>
    ),
    title: "Easy Returns",
    desc: "30-day return policy",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
      </svg>
    ),
    title: "Secure Payment",
    desc: "SSL encrypted checkout",
  },
  {
    icon: (
      <svg className="w-7 h-7 text-[#c9a84c]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
      </svg>
    ),
    title: "Handcrafted",
    desc: "Premium quality fabrics",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero — keep dark bg since it's behind an image */}
      <section className="relative h-[85vh] min-h-[500px] bg-[#1A1614] overflow-hidden">
        {/* Radial gold glow */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full opacity-20 pointer-events-none"
          style={{ background: "radial-gradient(circle, #c9a84c 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
        />
        <Image
          src="https://images.unsplash.com/photo-1585487000160-6ebcfceb0d03?w=1600&q=80"
          alt="Ethnic Petal Hero"
          fill
          className="object-cover opacity-50"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4">
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-5">
            New Collection 2025
          </p>
          <h1 className="font-display text-5xl sm:text-7xl font-bold leading-tight mb-6 max-w-3xl tracking-tight">
            Wear Your{" "}
            <span className="gold-gradient italic">Heritage</span>
          </h1>
          <p className="text-sm sm:text-base text-white/60 mb-10 max-w-md leading-relaxed tracking-wide">
            Exquisite South Asian fashion crafted for the modern woman.
          </p>
          <div className="relative inline-block">
            {/* Glow ring */}
            <span className="absolute inset-0 rounded-none blur-md opacity-40"
              style={{ background: "linear-gradient(135deg, #c9a84c, #e8c97a)" }}
            />
            <Link
              href="/collections/women"
              className="btn-primary relative inline-block px-12 py-4"
            >
              Shop Collection
            </Link>
          </div>
        </div>
      </section>

      {/* Category Tiles */}
      <section className="bg-[#FAF8F5] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-3">Browse By Style</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1614]">
              Shop Categories
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link key={cat.label} href={cat.href} className="group relative overflow-hidden aspect-[3/4] bg-[#F2EDE6]">
                <Image
                  src={cat.image}
                  alt={cat.label}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-70"
                  sizes="(max-width: 640px) 50vw, 25vw"
                />
                {/* glass overlay */}
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/15 transition-colors" />
                <div className="absolute inset-0 flex items-end p-5">
                  <div className="glass px-3 py-2 w-full">
                    <h3 className="font-display text-white font-bold text-lg tracking-wide">
                      {cat.label}
                    </h3>
                    <span className="text-[#c9a84c] text-xs tracking-widest uppercase">Shop Now →</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* New Arrivals */}
      <section className="bg-[#F2EDE6] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div>
              <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-2">Just Dropped</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[#1A1614]">
                New Arrivals
              </h2>
            </div>
            <Link
              href="/collections/women"
              className="text-xs tracking-widest uppercase text-[#8A7E74] hover:text-[#c9a84c] border-b border-[#D9D0C4] hover:border-[#c9a84c] transition-colors pb-0.5"
            >
              View All
            </Link>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {newArrivals.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Sale Banner — keep dark bg since it's behind an image */}
      <section className="relative h-72 bg-[#1A1614] overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1594938298603-376cf1d3de78?w=1400&q=80"
          alt="Sale Banner"
          fill
          className="object-cover opacity-30"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center px-4">
          <p className="text-xs tracking-[0.4em] uppercase text-[#c9a84c] mb-3">Limited Time</p>
          <h2 className="font-display text-4xl sm:text-5xl font-bold mb-6">
            <span className="gold-gradient">Up to 40% Off</span> Sale Styles
          </h2>
          <Link
            href="/collections/sale"
            className="btn-outline inline-block px-10 py-3"
          >
            Shop Sale
          </Link>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-[#FAF8F5] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {trustBadges.map((item) => (
              <div key={item.title} className="flex flex-col items-center gap-3">
                <div>{item.icon}</div>
                <h4 className="text-sm font-semibold tracking-wide text-[#1A1614]">{item.title}</h4>
                <p className="text-xs text-[#1A1614]/60">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
