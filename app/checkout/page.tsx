"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

type ShippingMethod = "standard" | "express" | "overnight";

const SHIPPING_OPTIONS: Record<ShippingMethod, { label: string; price: number; days: string }> = {
  standard: { label: "Standard", price: 0, days: "5-7 days" },
  express: { label: "Express", price: 12.99, days: "2-3 days" },
  overnight: { label: "Overnight", price: 24.99, days: "Next day" },
};

function formatCardNumber(value: string) {
  const digits = value.replace(/\D/g, "").slice(0, 16);
  return digits.replace(/(.{4})/g, "$1 ").trim();
}

function SuccessScreen({
  firstName,
  orderNumber,
}: {
  firstName: string;
  orderNumber: number;
}) {
  const { clearCart } = useCart();

  useEffect(() => {
    clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="min-h-screen bg-[#080808] flex items-center justify-center px-4">
      <style>{`
        @keyframes drawCircle {
          from { stroke-dashoffset: 283; }
          to { stroke-dashoffset: 0; }
        }
        @keyframes drawCheck {
          from { stroke-dashoffset: 100; opacity: 0; }
          to { stroke-dashoffset: 0; opacity: 1; }
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .circle-anim {
          stroke-dasharray: 283;
          stroke-dashoffset: 283;
          animation: drawCircle 0.8s ease forwards 0.2s;
        }
        .check-anim {
          stroke-dasharray: 100;
          stroke-dashoffset: 100;
          opacity: 0;
          animation: drawCheck 0.5s ease forwards 1s;
        }
        .fade-in-1 { animation: fadeInUp 0.6s ease forwards 1.2s; opacity: 0; }
        .fade-in-2 { animation: fadeInUp 0.6s ease forwards 1.4s; opacity: 0; }
        .fade-in-3 { animation: fadeInUp 0.6s ease forwards 1.6s; opacity: 0; }
        .fade-in-4 { animation: fadeInUp 0.6s ease forwards 1.8s; opacity: 0; }
      `}</style>
      <div className="text-center max-w-md w-full">
        {/* Animated checkmark */}
        <div className="flex justify-center mb-8">
          <svg width="100" height="100" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="2"
              className="circle-anim"
              style={{ transformOrigin: "50px 50px", transform: "rotate(-90deg)" }}
            />
            <polyline
              points="30,50 44,64 70,36"
              fill="none"
              stroke="#c9a84c"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="check-anim"
            />
          </svg>
        </div>

        <h1 className="font-display text-4xl text-white mb-4 fade-in-1">
          Order Confirmed!
        </h1>
        <p className="text-white/70 text-sm mb-2 fade-in-2">
          Thank you, {firstName || "there"}! Your order has been placed.
        </p>
        <p className="text-[#c9a84c] text-xs tracking-widest uppercase mb-2 fade-in-3">
          Order #{orderNumber}
        </p>
        <p className="text-[#888] text-xs mb-10 fade-in-3">
          Estimated delivery: 5-7 business days
        </p>

        <div className="flex flex-col sm:flex-row gap-3 justify-center fade-in-4">
          <Link
            href="/collections/women"
            className="btn-primary px-8 py-3 text-center"
          >
            Continue Shopping
          </Link>
          <button className="btn-outline px-8 py-3">Track Order</button>
        </div>
      </div>
    </div>
  );
}

export default function CheckoutPage() {
  const { items, total, count } = useCart();

  const [step, setStep] = useState(1);
  const [orderPlaced, setOrderPlaced] = useState(false);
  const orderNumber = useRef(Math.floor(100000 + Math.random() * 900000));

  // Step 1 — Contact
  const [email, setEmail] = useState("");
  const [emailOffers, setEmailOffers] = useState(false);

  // Step 2 — Shipping
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address1, setAddress1] = useState("");
  const [address2, setAddress2] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zip, setZip] = useState("");
  const [country, setCountry] = useState("United States");
  const [phone, setPhone] = useState("");
  const [shipping, setShipping] = useState<ShippingMethod>("standard");

  // Step 3 — Payment
  const [cardNumber, setCardNumber] = useState("");
  const [nameOnCard, setNameOnCard] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");
  const [saveCard, setSaveCard] = useState(false);

  // Promo
  const [promo, setPromo] = useState("");

  const shippingCost = SHIPPING_OPTIONS[shipping].price;
  const orderTotal = total + shippingCost;

  if (orderPlaced) {
    return <SuccessScreen firstName={firstName} orderNumber={orderNumber.current} />;
  }

  const inputClass =
    "bg-[#111] border border-[#2a2a2a] text-white placeholder-[#555] px-4 py-3 w-full text-sm focus:outline-none focus:border-[#c9a84c] transition-colors";
  const labelClass = "text-xs tracking-widest uppercase text-[#888] mb-1.5 block";

  const steps = [
    { num: 1, label: "Contact" },
    { num: 2, label: "Shipping" },
    { num: 3, label: "Payment" },
  ];

  return (
    <div className="min-h-screen bg-[#080808] text-white">
      <div className="max-w-6xl mx-auto px-4 py-10 lg:py-16">
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left Column — Form */}
          <div className="flex-1 lg:w-[60%]">
            {/* Logo / brand */}
            <Link href="/" className="font-display text-2xl gold-gradient mb-10 block">
              Ethnic Petal
            </Link>

            {/* Step Indicator */}
            <div className="flex items-center mb-10">
              {steps.map((s, i) => {
                const isActive = step === s.num;
                const isCompleted = step > s.num;
                return (
                  <div key={s.num} className="flex items-center flex-1 last:flex-none">
                    <div className="flex flex-col items-center">
                      <div className="flex items-center gap-1.5">
                        {isCompleted ? (
                          <span className="text-[#c9a84c] text-sm">✓</span>
                        ) : (
                          <span
                            className={`text-sm font-medium ${
                              isActive ? "text-[#c9a84c]" : "text-[#555]"
                            }`}
                          >
                            {s.num}
                          </span>
                        )}
                        <span
                          className={`text-sm ${
                            isActive || isCompleted ? "text-[#c9a84c]" : "text-[#555]"
                          }`}
                        >
                          {s.label}
                        </span>
                      </div>
                      {isActive && (
                        <div className="h-px w-full bg-[#c9a84c] mt-1" />
                      )}
                    </div>
                    {i < steps.length - 1 && (
                      <div className="flex-1 h-px bg-[#2a2a2a] mx-3" />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Step 1 — Contact Info */}
            {step === 1 && (
              <div>
                <h2 className="font-display text-xl text-white mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className={labelClass}>Email Address</label>
                    <input
                      type="email"
                      placeholder="your@email.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className={inputClass}
                    />
                    <div className="mt-2 text-right">
                      <span className="text-xs text-[#c9a84c] cursor-pointer hover:text-[#e8c97a] transition-colors">
                        Sign in
                      </span>
                    </div>
                  </div>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={emailOffers}
                        onChange={(e) => setEmailOffers(e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          emailOffers ? "border-[#c9a84c] bg-[#c9a84c]" : "border-[#2a2a2a] bg-[#111]"
                        }`}
                      >
                        {emailOffers && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4l3 3 5-6" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-[#888]">Email me with news and offers</span>
                  </label>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="btn-primary w-full py-4 mt-8"
                >
                  Continue
                </button>
              </div>
            )}

            {/* Step 2 — Shipping */}
            {step === 2 && (
              <div>
                <h2 className="font-display text-xl text-white mb-6">Shipping Address</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>First Name</label>
                      <input
                        type="text"
                        placeholder="Aisha"
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Last Name</label>
                      <input
                        type="text"
                        placeholder="Khan"
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Address Line 1</label>
                    <input
                      type="text"
                      placeholder="123 Main Street"
                      value={address1}
                      onChange={(e) => setAddress1(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Address Line 2 <span className="normal-case">(optional)</span></label>
                    <input
                      type="text"
                      placeholder="Apt, suite, unit, etc."
                      value={address2}
                      onChange={(e) => setAddress2(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>City</label>
                      <input
                        type="text"
                        placeholder="New York"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>State</label>
                      <input
                        type="text"
                        placeholder="NY"
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>ZIP Code</label>
                      <input
                        type="text"
                        placeholder="10001"
                        value={zip}
                        onChange={(e) => setZip(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Country</label>
                      <input
                        type="text"
                        value={country}
                        onChange={(e) => setCountry(e.target.value)}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Phone Number</label>
                    <input
                      type="tel"
                      placeholder="+1 (555) 000-0000"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  {/* Shipping Method */}
                  <div className="mt-6">
                    <label className={labelClass}>Shipping Method</label>
                    <div className="space-y-3 mt-2">
                      {(Object.keys(SHIPPING_OPTIONS) as ShippingMethod[]).map((key) => {
                        const opt = SHIPPING_OPTIONS[key];
                        const isSelected = shipping === key;
                        return (
                          <label
                            key={key}
                            className={`flex items-center justify-between px-4 py-3 border cursor-pointer transition-colors ${
                              isSelected
                                ? "border-[#c9a84c] bg-[#111]"
                                : "border-[#2a2a2a] bg-[#111] hover:border-[#555]"
                            }`}
                          >
                            <div className="flex items-center gap-3">
                              {/* Custom radio */}
                              <div
                                className={`w-4 h-4 rounded-full border-2 flex items-center justify-center transition-colors ${
                                  isSelected ? "border-[#c9a84c]" : "border-[#555]"
                                }`}
                              >
                                {isSelected && (
                                  <div className="w-2 h-2 rounded-full bg-[#c9a84c]" />
                                )}
                              </div>
                              <input
                                type="radio"
                                name="shipping"
                                value={key}
                                checked={isSelected}
                                onChange={() => setShipping(key)}
                                className="sr-only"
                              />
                              <div>
                                <span className="text-sm text-white">{opt.label}</span>
                                <span className="text-xs text-[#888] ml-2">{opt.days}</span>
                              </div>
                            </div>
                            <span className="text-sm text-[#c9a84c]">
                              {opt.price === 0 ? "Free" : `$${opt.price.toFixed(2)}`}
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mt-8">
                  <button
                    onClick={() => setStep(3)}
                    className="btn-primary w-full py-4"
                  >
                    Continue
                  </button>
                  <button
                    onClick={() => setStep(1)}
                    className="text-xs text-[#888] tracking-widest uppercase hover:text-[#c9a84c] transition-colors py-2"
                  >
                    ← Back
                  </button>
                </div>
              </div>
            )}

            {/* Step 3 — Payment */}
            {step === 3 && (
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#c9a84c" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                  </svg>
                  <h2 className="font-display text-xl text-white">Payment</h2>
                </div>

                <div className="space-y-4">
                  <div>
                    <label className={labelClass}>Card Number</label>
                    <input
                      type="text"
                      placeholder="XXXX XXXX XXXX XXXX"
                      value={cardNumber}
                      onChange={(e) => setCardNumber(formatCardNumber(e.target.value))}
                      maxLength={19}
                      className={inputClass}
                    />
                  </div>

                  <div>
                    <label className={labelClass}>Name on Card</label>
                    <input
                      type="text"
                      placeholder="Aisha Khan"
                      value={nameOnCard}
                      onChange={(e) => setNameOnCard(e.target.value)}
                      className={inputClass}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className={labelClass}>Expiry (MM/YY)</label>
                      <input
                        type="text"
                        placeholder="MM/YY"
                        value={expiry}
                        onChange={(e) => {
                          const v = e.target.value.replace(/\D/g, "").slice(0, 4);
                          setExpiry(v.length > 2 ? v.slice(0, 2) + "/" + v.slice(2) : v);
                        }}
                        maxLength={5}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>CVV</label>
                      <input
                        type="text"
                        placeholder="•••"
                        value={cvv}
                        onChange={(e) => setCvv(e.target.value.replace(/\D/g, "").slice(0, 4))}
                        maxLength={4}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <label className="flex items-center gap-3 cursor-pointer">
                    <div className="relative">
                      <input
                        type="checkbox"
                        checked={saveCard}
                        onChange={(e) => setSaveCard(e.target.checked)}
                        className="sr-only"
                      />
                      <div
                        className={`w-4 h-4 border flex items-center justify-center transition-colors ${
                          saveCard ? "border-[#c9a84c] bg-[#c9a84c]" : "border-[#2a2a2a] bg-[#111]"
                        }`}
                      >
                        {saveCard && (
                          <svg width="10" height="8" viewBox="0 0 10 8" fill="none">
                            <path d="M1 4l3 3 5-6" stroke="#080808" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        )}
                      </div>
                    </div>
                    <span className="text-xs text-[#888]">Save card for future purchases</span>
                  </label>

                  {/* OR divider */}
                  <div className="flex items-center gap-4 my-2">
                    <div className="flex-1 h-px bg-[#2a2a2a]" />
                    <span className="text-xs text-[#555] tracking-widest uppercase">or</span>
                    <div className="flex-1 h-px bg-[#2a2a2a]" />
                  </div>

                  {/* PayPal button */}
                  <button className="w-full py-3 border border-[#c9a84c]/40 text-[#e8c97a] text-xs tracking-widest uppercase hover:bg-[#c9a84c]/10 hover:border-[#c9a84c] transition-colors flex items-center justify-center gap-2">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#e8c97a">
                      <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944.901C5.026.382 5.474 0 5.998 0h7.46c2.57 0 4.578.543 5.69 1.81 1.01 1.15 1.304 2.42 1.012 4.287-.023.143-.047.288-.077.437-.983 5.05-4.349 6.797-8.647 6.797h-2.19c-.524 0-.968.382-1.05.9l-1.12 7.106zm14.146-14.42a3.35 3.35 0 0 0-.607-.541c-.013.076-.026.175-.041.254-.59 3.025-2.566 4.643-5.813 4.643h-2.19c-.11 0-.198.079-.217.19L11.33 19.738a.371.371 0 0 0 .367.43h2.578c.46 0 .85-.334.922-.788l.038-.196.73-4.626.047-.254a.934.934 0 0 1 .921-.788h.58c3.758 0 6.7-1.526 7.558-5.944.358-1.845.17-3.388-.85-4.655z" />
                    </svg>
                    Pay with PayPal
                  </button>
                </div>

                <div className="flex flex-col gap-3 mt-8">
                  <button
                    onClick={() => setOrderPlaced(true)}
                    className="btn-primary w-full py-4"
                  >
                    Place Order
                  </button>
                  <button
                    onClick={() => setStep(2)}
                    className="text-xs text-[#888] tracking-widest uppercase hover:text-[#c9a84c] transition-colors py-2"
                  >
                    ← Back
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column — Order Summary */}
          <div className="lg:w-[40%]">
            <div className="lg:sticky lg:top-8">
              <div className="bg-[#111] border border-[#2a2a2a] p-6">
                <h2 className="font-display text-xl text-white mb-1">Order Summary</h2>
                <p className="text-xs text-[#888] tracking-widest uppercase mb-6">
                  {count} {count === 1 ? "item" : "items"}
                </p>

                {items.length === 0 ? (
                  <div className="text-center py-10">
                    <p className="text-sm text-[#555] mb-4">Your cart is empty</p>
                    <Link
                      href="/collections/women"
                      className="text-xs text-[#c9a84c] tracking-widest uppercase underline underline-offset-4 hover:text-[#e8c97a] transition-colors"
                    >
                      Shop Now
                    </Link>
                  </div>
                ) : (
                  <ul className="space-y-5 mb-6">
                    {items.map((item) => (
                      <li key={`${item.id}-${item.size}`} className="flex gap-4">
                        <div className="relative w-16 h-20 flex-shrink-0 bg-[#1a1a1a] overflow-hidden">
                          <Image
                            src={item.image}
                            alt={item.name}
                            fill
                            className="object-cover"
                            sizes="64px"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm text-white leading-snug">{item.name}</p>
                          <p className="text-[11px] text-[#888] tracking-widest uppercase mt-0.5">
                            Size: {item.size} · Qty: {item.quantity}
                          </p>
                          <p className="text-sm text-[#c9a84c] mt-1 font-medium">
                            ${(item.price * item.quantity).toFixed(2)}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                )}

                {/* Promo code */}
                <div className="flex gap-2 mb-6">
                  <input
                    type="text"
                    placeholder="Promo code"
                    value={promo}
                    onChange={(e) => setPromo(e.target.value)}
                    className="bg-[#111] border border-[#2a2a2a] text-white placeholder-[#555] px-4 py-2.5 flex-1 text-sm focus:outline-none focus:border-[#c9a84c] transition-colors"
                  />
                  <button className="btn-outline px-4 py-2.5 text-xs">Apply</button>
                </div>

                <div className="border-t border-[#2a2a2a] pt-4 space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-widest uppercase text-[#888]">Subtotal</span>
                    <span className="text-sm text-white">${total.toFixed(2)}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-xs tracking-widest uppercase text-[#888]">Shipping</span>
                    <span className="text-sm text-white">
                      {shippingCost === 0 ? "Free" : `$${shippingCost.toFixed(2)}`}
                    </span>
                  </div>
                </div>

                <div className="border-t border-[#2a2a2a] mt-4 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm tracking-widest uppercase text-white font-medium">Total</span>
                    <span className="text-xl font-bold text-[#c9a84c] font-display">
                      ${orderTotal.toFixed(2)}
                    </span>
                  </div>
                </div>

                {/* Security badges */}
                <div className="flex items-center justify-center gap-4 mt-6 pt-4 border-t border-[#2a2a2a]">
                  <span className="text-[10px] text-[#555] tracking-wide">🔒 SSL Secure</span>
                  <span className="text-[#2a2a2a]">·</span>
                  <span className="text-[10px] text-[#555] tracking-wide">↩ 30-day Returns</span>
                  <span className="text-[#2a2a2a]">·</span>
                  <span className="text-[10px] text-[#555] tracking-wide">✦ Authentic</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
