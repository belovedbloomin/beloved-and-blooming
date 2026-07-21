import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export default function PrivacyPolicyPage() {
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

        <main className="w-full bg-white/80 p-8 sm:p-12 rounded-2xl border border-[#DCEBD3] shadow-sm text-left">
          <h1 className="font-['Fraunces',serif] text-3xl sm:text-4xl font-semibold text-[#4A7043] mb-8 border-b border-[#DCEBD3] pb-6">
            Privacy Policy
          </h1>

          <div className="space-y-8 text-sm sm:text-base leading-relaxed">
            <section>
              <h2 className="font-['Fraunces',serif] text-xl font-semibold text-[#4A7043] mb-3">
                1. Information We Collect
              </h2>
              <p>
                When you sign up for our free printable or newsletter, we collect the personal information you give us such as your name and email address. We use this information solely to deliver the requested materials and send related parenting resources.
              </p>
            </section>

            <section>
              <h2 className="font-['Fraunces',serif] text-xl font-semibold text-[#4A7043] mb-3">
                2. How We Use Your Information
              </h2>
              <p>
                We may use your email address to send you information, respond to inquiries, and/or other requests or questions. You can unsubscribe from our mailing list at any time by clicking the link at the bottom of our emails.
              </p>
            </section>

            <section>
              <h2 className="font-['Fraunces',serif] text-xl font-semibold text-[#4A7043] mb-3">
                3. Third-Party Services
              </h2>
              <p>
                We do not sell, trade, or otherwise transfer to outside parties your Personally Identifiable Information. This does not include website hosting partners and other parties who assist us in operating our website, conducting our business, or serving our users, so long as those parties agree to keep this information confidential.
              </p>
            </section>

            <section>
              <h2 className="font-['Fraunces',serif] text-xl font-semibold text-[#4A7043] mb-3">
                4. Data Security
              </h2>
              <p>
                We implement a variety of security measures to maintain the safety of your personal information when you enter, submit, or access your personal information.
              </p>
            </section>

            <section>
              <h2 className="font-['Fraunces',serif] text-xl font-semibold text-[#4A7043] mb-3">
                5. Contacting Us
              </h2>
              <p>
                If there are any questions regarding this privacy policy, you may contact us using the link below.
              </p>
              <div className="mt-4">
                <Link href="/contact" className="text-[#4A7043] font-semibold hover:underline underline-offset-2">
                  Contact Us &rarr;
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </div>
  );
}