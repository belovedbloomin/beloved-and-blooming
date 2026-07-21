'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div className="relative min-h-screen bg-[#FAF5EA] text-[#5A6E59] font-['Merriweather_Sans',sans-serif] antialiased selection:bg-[#DCEBD3] selection:text-[#4A7043]">
      <div className="fixed inset-0 w-full h-full -z-0 opacity-35 pointer-events-none">
        <Image
          src="/images/botanical-background.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 flex flex-col items-center">
        <Link href="/" className="relative w-32 h-12 mb-12 opacity-80 hover:opacity-100 transition-opacity">
          <Image
            src="/icons/favicon.svg"
            alt="Beloved & Blooming"
            fill
            className="object-contain"
          />
        </Link>

        <header className="w-full text-center mb-10">
          <h1 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-semibold text-[#4A7043] mb-4">
            Get in Touch
          </h1>
          <p className="text-base sm:text-lg text-[#5A6E59] leading-relaxed">
            We&apos;d love to hear from you. Send us a message and we&apos;ll get back to you shortly.
          </p>
        </header>

        <main className="w-full bg-white/80 p-6 sm:p-10 rounded-2xl border border-[#DCEBD3] shadow-sm">
          {isSubmitted ? (
            <div className="text-center py-10">
              <div className="w-12 h-12 rounded-full bg-[#DCEBD3] text-[#4A7043] mx-auto flex items-center justify-center text-xl mb-4">
                ✓
              </div>
              <h2 className="font-['Fraunces',serif] text-2xl text-[#4A7043] font-semibold mb-2">
                Message Sent
              </h2>
              <p className="text-[#5A6E59]">Thank you for reaching out to Beloved & Blooming.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[#4A7043] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#DCEBD3] bg-[#FAF5EA]/40 text-[#5A6E59] focus:outline-none focus:ring-2 focus:ring-[#4A7043] transition"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-[#4A7043] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  className="w-full px-4 py-3 rounded-lg border border-[#DCEBD3] bg-[#FAF5EA]/40 text-[#5A6E59] focus:outline-none focus:ring-2 focus:ring-[#4A7043] transition"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-[#4A7043] mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-[#DCEBD3] bg-[#FAF5EA]/40 text-[#5A6E59] focus:outline-none focus:ring-2 focus:ring-[#4A7043] transition resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="mt-4 w-full py-4 px-6 rounded-lg bg-[#4A7043] hover:bg-[#3d5c37] active:bg-[#324b2d] text-white font-medium text-base transition-colors shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#4A7043]"
              >
                Send Message
              </button>
            </form>
          )}
        </main>
      </div>
    </div>
  );
}