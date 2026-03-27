import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="bg-[#080808]">
      {/* ── Section 1: Hero ── */}
      <section className="relative w-full overflow-hidden flex items-center justify-center" style={{ height: "60vh" }}>
        {/* Background image */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=1400&q=80"
            alt="Ethnic Petal hero"
            fill
            className="object-cover"
            style={{ opacity: 0.3 }}
            priority
          />
        </div>

        {/* Radial gold glow top-left */}
        <div
          className="absolute top-0 left-0 w-[500px] h-[500px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at top left, rgba(201,168,76,0.18) 0%, transparent 70%)",
          }}
        />

        {/* Hero text */}
        <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase text-[#c9a84c] mb-4">
            Our Story
          </p>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
            Where Tradition Meets Tomorrow
          </h1>
          <p className="text-white/70 text-base sm:text-lg leading-relaxed">
            Born from a love of South Asian heritage and a vision for modern elegance.
          </p>
        </div>
      </section>

      {/* ── Section 2: Our Story ── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: text */}
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#c9a84c] mb-4">
              About Us
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-8 leading-tight">
              Rooted in Culture.
            </h2>
            <p className="text-white/70 leading-relaxed mb-5 text-base">
              Ethnic Petal was founded with one simple belief — that the richness of
              South Asian fashion deserves a global stage. We curate and craft each
              piece to honor centuries-old artisan traditions while embracing the
              silhouettes and sensibilities of today&apos;s woman.
            </p>
            <p className="text-white/70 leading-relaxed text-base">
              From the intricate threadwork of Lucknow to the mirror embroidery of
              Kutch, every garment tells a story. Our designers work directly with
              artisans across India and Pakistan to bring you pieces that are as
              meaningful as they are beautiful.
            </p>
          </div>

          {/* Right: image */}
          <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
            <Image
              src="https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=600&q=80"
              alt="Artisan craftsmanship"
              fill
              className="object-cover rounded-none"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
          </div>
        </div>
      </section>

      {/* ── Section 3: Values ── */}
      <section className="bg-[#0d0d0d] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#c9a84c] mb-4">
              What We Stand For
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Our Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1: Authenticity */}
            <div className="glass p-8">
              <div className="mb-5">
                <svg
                  className="w-8 h-8 text-[#c9a84c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Authentic Craftsmanship
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                Every piece is handcrafted by skilled artisans using traditional
                techniques passed down through generations.
              </p>
            </div>

            {/* Card 2: Heart */}
            <div className="glass p-8">
              <div className="mb-5">
                <svg
                  className="w-8 h-8 text-[#c9a84c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Made with Love
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                We believe fashion should feel personal. That&apos;s why we offer custom
                sizing and bespoke embroidery on select pieces.
              </p>
            </div>

            {/* Card 3: Leaf/Globe */}
            <div className="glass p-8">
              <div className="mb-5">
                <svg
                  className="w-8 h-8 text-[#c9a84c]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="font-display text-2xl font-bold text-white mb-3">
                Sustainable Sourcing
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                We work only with ethical suppliers and use eco-conscious fabrics
                wherever possible, because beauty shouldn&apos;t cost the earth.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 4: Stats ── */}
      <section className="bg-[#080808] py-16 border-y border-[#2a2a2a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 text-center">
            <div>
              <p className="font-display text-5xl font-bold gold-gradient mb-2">500+</p>
              <p className="text-white/60 text-xs tracking-widest uppercase">
                Designs Each Season
              </p>
            </div>
            <div>
              <p className="font-display text-5xl font-bold gold-gradient mb-2">15+</p>
              <p className="text-white/60 text-xs tracking-widest uppercase">
                Countries We Ship To
              </p>
            </div>
            <div>
              <p className="font-display text-5xl font-bold gold-gradient mb-2">10,000+</p>
              <p className="text-white/60 text-xs tracking-widest uppercase">
                Happy Customers
              </p>
            </div>
            <div>
              <p className="font-display text-5xl font-bold gold-gradient mb-2">100%</p>
              <p className="text-white/60 text-xs tracking-widest uppercase">
                Handcrafted Pieces
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 5: Team ── */}
      <section className="bg-[#080808] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase text-[#c9a84c] mb-4">
              The Team
            </p>
            <h2 className="font-display text-4xl sm:text-5xl font-bold text-white">
              Meet the Makers
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-3xl mx-auto">
            {/* Priya Sharma */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-28 h-28 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&q=80"
                  alt="Priya Sharma"
                  fill
                  className="object-cover rounded-full border-2 border-[#c9a84c]"
                  sizes="112px"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-1">
                Priya Sharma
              </h3>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase">
                Founder &amp; Creative Director
              </p>
            </div>

            {/* Aisha Khan */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-28 h-28 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&q=80"
                  alt="Aisha Khan"
                  fill
                  className="object-cover rounded-full border-2 border-[#c9a84c]"
                  sizes="112px"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-1">
                Aisha Khan
              </h3>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase">
                Lead Designer
              </p>
            </div>

            {/* Meera Patel */}
            <div className="flex flex-col items-center text-center">
              <div className="relative w-28 h-28 mb-4">
                <Image
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80"
                  alt="Meera Patel"
                  fill
                  className="object-cover rounded-full border-2 border-[#c9a84c]"
                  sizes="112px"
                />
              </div>
              <h3 className="font-display text-xl font-bold text-white mb-1">
                Meera Patel
              </h3>
              <p className="text-[#c9a84c] text-xs tracking-widest uppercase">
                Collections Curator
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Section 6: CTA Banner ── */}
      <section className="relative bg-[#080808] py-20 text-center overflow-hidden">
        {/* Gold radial glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,0.12) 0%, transparent 65%)",
          }}
        />

        <div className="relative z-10 max-w-2xl mx-auto px-6">
          <h2 className="font-display text-4xl sm:text-5xl font-bold text-white mb-4">
            Discover Your Perfect Piece
          </h2>
          <p className="text-white/60 text-base leading-relaxed mb-10">
            Explore our curated collections of South Asian elegance — from timeless
            classics to modern statement pieces for every occasion.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/collections/women"
              className="btn-primary inline-block px-8 py-3"
            >
              Shop Women
            </Link>
            <Link
              href="/collections/girls"
              className="btn-outline inline-block px-8 py-3"
            >
              Shop Girls
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
