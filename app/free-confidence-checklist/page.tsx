'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function LandingPage() {
  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;
    setIsSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF5EA] text-[#5A6E59] font-['Merriweather_Sans',sans-serif] antialiased selection:bg-[#DCEBD3] selection:text-[#4A7043]">
      {/* Fixed Botanical Background Image */}
      <div className="fixed inset-0 w-full h-full -z-0 opacity-35 pointer-events-none">
        <Image
          src="/images/botanical-background.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Main Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 flex flex-col items-center">
        
        {/* SECTION 1: Logo, Headline, Subheadline */}
        <header className="w-full flex flex-col items-center text-center">
          <div className="relative w-44 h-16 sm:w-52 sm:h-20 mb-6 sm:mb-8">
            <Image
              src="/icons/favicon.svg"
              alt="Beloved & Blooming"
              fill
              className="object-contain"
              priority
            />
          </div>

          <h1 className="font-['Merriweather',serif] text-3xl sm:text-4xl md:text-5xl font-semibold text-[#4A7043] leading-tight max-w-3xl tracking-tight">
            8 Everyday Activities That Strengthen Your Child&apos;s Self-Esteem
          </h1>

          <p className="mt-4 sm:mt-5 text-base sm:text-lg md:text-xl text-[#5A6E59] max-w-2xl leading-relaxed">
            A free printable checklist with eight simple activities you can naturally weave into your week to help build confidence through everyday moments.
          </p>
        </header>


        {/* SECTION 2: Checklist Preview Mockup (Landscape) */}
        <section className="mt-6 sm:mt-8 w-full flex justify-center">
          <div className="relative w-[320px] sm:w-[480px] md:w-[600px] aspect-[2752/1536] rounded-2xl overflow-hidden">
            <Image
              src="/images/checklist-mockup-professional.png"
              alt="8 Everyday Activities Checklist Printable Preview"
              fill
              className="object-contain mix-blend-multiply rounded-2xl"
              sizes="(max-width: 640px) 320px, (max-width: 768px) 480px, 600px"
              priority
              unoptimized
            />
          </div>
        </section>

        {/* SECTION 3: Benefit Cards */}
        <section className="mt-10 sm:mt-12 w-full grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {/* Benefit 1 */}
          <div className="bg-[#FAF5EA]/80 p-6 sm:p-8 rounded-2xl border border-[#DCEBD3] shadow-sm flex flex-col items-start text-left">
            <div className="w-10 h-10 rounded-full bg-[#DCEBD3] flex items-center justify-center text-[#4A7043] mb-5 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h2 className="font-['Merriweather',serif] text-lg sm:text-xl font-semibold text-[#4A7043] mb-2">
              Builds confidence naturally
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E59] leading-relaxed">
              Simple activities that fit into everyday family life.
            </p>
          </div>

          {/* Benefit 2 */}
          <div className="bg-[#FAF5EA]/80 p-6 sm:p-8 rounded-2xl border border-[#DCEBD3] shadow-sm flex flex-col items-start text-left">
            <div className="w-10 h-10 rounded-full bg-[#DCEBD3] flex items-center justify-center text-[#4A7043] mb-5 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h2 className="font-['Merriweather',serif] text-lg sm:text-xl font-semibold text-[#4A7043] mb-2">
              Takes just minutes
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E59] leading-relaxed">
              No complicated routines or parenting overhauls.
            </p>
          </div>

          {/* Benefit 3 */}
          <div className="bg-[#FAF5EA]/80 p-6 sm:p-8 rounded-2xl border border-[#DCEBD3] shadow-sm flex flex-col items-start text-left">
            <div className="w-10 h-10 rounded-full bg-[#DCEBD3] flex items-center justify-center text-[#4A7043] mb-5 shrink-0">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <h2 className="font-['Merriweather',serif] text-lg sm:text-xl font-semibold text-[#4A7043] mb-2">
              Research-backed
            </h2>
            <p className="text-sm sm:text-base text-[#5A6E59] leading-relaxed">
              Grounded in developmental psychology and secure attachment.
            </p>
          </div>
        </section>

        {/* SECTION 4: Email Signup Form */}
        <section className="mt-12 sm:mt-16 w-full max-w-xl rounded-2xl p-6 sm:p-10 border border-[#DCEBD3] shadow-md bg-[#FAF5EA]/50">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-[#DCEBD3] text-[#4A7043] mx-auto flex items-center justify-center text-xl">
                ✓
              </div>
              <h3 className="font-['Merriweather',serif] text-2xl text-[#4A7043] font-semibold">
                Your checklist is on its way!
              </h3>
              <p className="text-sm sm:text-base text-[#5A6E59] max-w-md mx-auto">
                Please check your inbox to download your printable PDF.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label 
                  htmlFor="firstName" 
                  className="block text-sm font-medium text-[#4A7043] mb-2"
                >
                  First Name <span className="text-xs text-[#5A6E59]/70 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  placeholder="First name"
                  className="w-full px-4 py-3 rounded-lg border border-[#DCEBD3] bg-[#FAF5EA]/40 text-[#5A6E59] placeholder-[#5A6E59]/50 focus:outline-none focus:ring-2 focus:ring-[#4A7043] focus:border-transparent transition"
                />
              </div>

              <div>
                <label 
                  htmlFor="email" 
                  className="block text-sm font-medium text-[#4A7043] mb-2"
                >
                  Email Address <span className="text-[#E8B4B8]">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 rounded-lg border border-[#DCEBD3] bg-[#FAF5EA]/40 text-[#5A6E59] placeholder-[#5A6E59]/50 focus:outline-none focus:ring-2 focus:ring-[#4A7043] focus:border-transparent transition"
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full py-4 px-6 rounded-lg bg-[#4A7043] hover:bg-[#3d5c37] active:bg-[#324b2d] text-white font-medium text-base transition-colors duration-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A7043]"
              >
                Send Me the Free Checklist
              </button>

              <p className="text-center text-xs text-[#5A6E59]/80 mt-1">
                Free PDF • Instant download • Unsubscribe anytime.
              </p>
            </form>
          )}
        </section>

        {/* SECTION 5: Subtle Trust Section */}
        <section className="mt-10 sm:mt-12 max-w-xl text-center px-4">
          <p className="text-xs sm:text-sm text-[#5A6E59]/90 leading-relaxed">
            Join the Beloved & Blooming newsletter for practical, research-backed parenting insights that help build confidence through everyday moments.
          </p>
        </section>

        {/* FOOTER */}
        <footer className="mt-16 sm:mt-20 w-full pt-8 border-t border-[#DCEBD3]/80 flex flex-col items-center gap-4 text-xs text-[#5A6E59]/80">
          <div className="relative w-28 h-8 opacity-85">
            <Image
              src="/icons/favicon.svg"
              alt="Beloved & Blooming"
              fill
              className="object-contain"
            />
          </div>

          <p className="text-center">
            &copy; {new Date().getFullYear()} Beloved & Blooming. All rights reserved.
          </p>

          <nav className="flex items-center gap-6">
            <Link 
              href="/privacy" 
              className="hover:text-[#4A7043] underline underline-offset-2 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link 
              href="/contact" 
              className="hover:text-[#4A7043] underline underline-offset-2 transition-colors"
            >
              Contact
            </Link>
          </nav>
        </footer>

      </div>
    </div>
  );
}