import Image from "next/image";

const GUMROAD_URL = "https://belovedblooming.gumroad.com/l/Raising-Confident-Kids"; // Update with your actual Gumroad link

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FAF5EA] text-[#2C3E2B] font-merriweather selection:bg-[#DCEBD3] relative">

      {/* Full-page fixed botanical background */}
      <div className="fixed inset-0 w-full h-full -z-0 opacity-35">
        <Image
          src="/images/botanical-background.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      <main className="max-w-4xl mx-auto px-6 py-12 md:py-20 flex flex-col items-center relative z-10">

{/* HERO */}
<section className="w-full flex flex-col items-center text-center pt-4 pb-10 sm:pt-8 sm:pb-16">

  <h1 className="font-merriweather-serif text-2xl sm:text-4xl md:text-5xl text-[#4A7043] tracking-tight leading-tight mb-2 sm:mb-4 max-w-2xl">
    Raise a Child Who Believes in Themselves.
  </h1>
  <p className="font-merriweather text-sm sm:text-base md:text-lg text-[#5A6E59] leading-snug max-w-xs sm:max-w-2xl mb-4 sm:mb-8">
    Practical, research-backed guidance to help your child build lasting self-esteem through everyday parenting.
  </p>

  {/* BOOK CONTAINER */}
  <div
    className="relative w-[170px] sm:w-[300px] aspect-[3/4] mb-6 sm:mb-10"
    style={{ perspective: "1600px" }}
  >
    {/* Ground shadow */}
    <div
      className="absolute left-1/2 -bottom-4 h-10 w-[92%] rounded-full bg-[#2C3E2B]/15 blur-3xl"
      style={{
        transform: "translateX(-50%) rotate(-6deg) scaleX(1.08)",
      }}
    />

    {/* Entire Book */}
    <div
      className="absolute inset-0"
      style={{
        transform: "rotate(-6deg) rotateY(-10deg)",
        transformStyle: "preserve-3d",
      }}
    >
      {/* Bottom page block */}
      <div
        className="absolute left-[7px] right-[2px] bottom-[-6px] h-[10px] rounded-b-md"
        style={{
          background: "linear-gradient(to bottom,#f7f2e8,#e8decb)",
        }}
      />

      {/* Right page edge */}
      <div
        className="absolute top-[3px] bottom-[7px] right-[-5px] w-[7px] rounded-r-sm"
        style={{
          background: "linear-gradient(to right,#f7f2e8,#d8ccb7)",
          transform: "rotateY(90deg)",
          transformOrigin: "left",
        }}
      />

      {/* Front Cover */}
      <div className="relative w-full h-full overflow-hidden rounded-[6px] border border-[#d7cdbd] shadow-[0_18px_35px_rgba(44,62,43,.18)] bg-[#faf5ea]">
        <Image
          src="/images/book-cover.png"
          alt="Raising Confident Kids"
          fill
          priority
          className="object-cover"
        />

        {/* subtle paper sheen */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(115deg, rgba(255,255,255,.18) 0%, transparent 18%, transparent 100%)",
          }}
        />

        {/* slight darkening toward spine */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,.08), transparent 18%)",
          }}
        />

        {/* highlight on right edge */}
        <div className="absolute top-0 right-0 w-[2px] h-full bg-white/30" />
      </div>
    </div>

    {/* BONUS STICKER */}
    <div
      className="
        absolute
        -top-6 -right-11
        sm:-top-8 sm:-right-18
        z-40
        w-24 h-24
        sm:w-36 sm:h-36
        rotate-[12deg]
      "
    >
      <div className="relative w-full h-full">
        <Image
          src="/images/scalloped-badge.svg"
          alt="Bonus included"
          fill
          className="object-contain"
        />

        <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-2">
          
          <p className="uppercase tracking-[0.08em] text-[7px] sm:text-[9px] font-semibold text-[#FAF5EA]">
            BONUS
          </p>

          <div className="w-8 h-px bg-[#FAF5EA]/70 my-1 sm:my-1.5"></div>

          <h3 className="font-merriweather-serif text-[11px] sm:text-base leading-none text-[#FAF5EA] mb-1">
            +25 Scripts
          </h3>

          <p className="text-[6.5px] sm:text-[9px] leading-tight font-semibold text-[#FAF5EA]">
            Ready When<br />You Need Them
          </p>
          
        </div>
      </div>
    </div>
  </div> {/* <-- This was the missing closing div! */}

  <a
    href={GUMROAD_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-flex items-center gap-2 whitespace-nowrap w-4/5 max-w-xs sm:w-auto mx-auto bg-[#4A7043] hover:bg-[#3D5C37] text-white font-semibold text-base sm:text-lg px-8 sm:px-10 py-3 sm:py-4 rounded-full shadow-lg shadow-[#4A7043]/20 hover:shadow-xl transition-all duration-300 justify-center"
  >
    Get Instant Access - $23.99
  </a>
</section>

        {/* AGITATE */}
<section className="w-full max-w-2xl mb-16">
  <div className="bg-[#4A7043] rounded-3xl p-8 sm:p-10 text-center">
    <p className="font-merriweather text-lg sm:text-xl text-[#FAF5EA] font-medium leading-relaxed">
      What actually shapes a child&apos;s confidence? Research consistently shows that everyday parenting interactions play a major role in how self-esteem develops. It&apos;s not about being perfect. It&apos;s about the small moments.
    </p>
    <p className="font-merriweather text-[#DCEBD3] italic mt-4 text-base sm:text-lg">
      This guide helps you navigate exactly those moments.
    </p>
  </div>
</section>
{/* INSIDE THE GUIDE */}
<section className="w-full max-w-4xl mb-20">
  <h2 className="font-merriweather-serif text-3xl sm:text-4xl text-[#4A7043] text-center">
    Inside the Guide
  </h2>

  <p className="font-merriweather text-center text-[#5A6E59] mt-3 mb-10 max-w-2xl mx-auto">
    Practical guidance for the everyday moments that quietly shape your child's confidence.
  </p>

  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">

    {/* Mistakes */}
    <div className="bg-[#FAF5EA] border border-[#4A7043]/15 rounded-3xl p-8">
      <div className="relative w-24 h-24 mx-auto mb-6">
        <Image
          src="/images/inside-mistakes-fixed.png"
          alt="Mistakes illustration"
          fill
          className="object-contain"
        />
      </div>

      <h3 className="font-merriweather-serif text-2xl text-center text-[#4A7043]">
        Mistakes
      </h3>

      <div className="w-12 h-px bg-[#E8B4B8] mx-auto my-5"></div>

      <p className="font-merriweather text-center text-[#5A6E59] leading-relaxed">
        Turning everyday mistakes into opportunities for confidence.
      </p>
    </div>

    {/* Big Emotions */}
    <div className="bg-[#FAF5EA] border border-[#4A7043]/15 rounded-3xl p-8">
      <div className="relative w-24 h-24 mx-auto mb-6">
        <Image
          src="/images/inside-emotions.png"
          alt="Big emotions illustration"
          fill
          className="object-contain"
        />
      </div>

      <h3 className="font-merriweather-serif text-2xl text-center text-[#4A7043]">
        Big Emotions
      </h3>

      <div className="w-12 h-px bg-[#E8B4B8] mx-auto my-5"></div>

      <p className="font-merriweather text-center text-[#5A6E59] leading-relaxed">
        Staying calm when their world feels overwhelming.
      </p>
    </div>

    {/* Boundaries */}
    <div className="bg-[#FAF5EA] border border-[#4A7043]/15 rounded-3xl p-8">
      <div className="relative w-24 h-24 mx-auto mb-6">
        <Image
          src="/images/inside-boundaries-fixed.png"
          alt="Boundaries illustration"
          fill
          className="object-contain"
        />
      </div>

      <h3 className="font-merriweather-serif text-2xl text-center text-[#4A7043]">
        Boundaries
      </h3>

      <div className="w-12 h-px bg-[#E8B4B8] mx-auto my-5"></div>

      <p className="font-merriweather text-center text-[#5A6E59] leading-relaxed">
        Teaching respect without relying on fear or shame.
      </p>
    </div>

  </div>
</section>

        {/* ROOTED IN RESEARCH */}
        <section className="w-full max-w-2xl mb-16 flex flex-col sm:flex-row items-center gap-8 bg-[#F3ECDD] rounded-3xl p-8 sm:p-10">
          <div className="w-24 h-48 shrink-0 relative">
            <Image src="/images/rooted-in-research-fixed4.png" alt="" fill className="object-contain" />
          </div>
          <div>
            <h2 className="font-merriweather-serif text-2xl text-[#4A7043] mb-3">
              Rooted in Research.
            </h2>
            <p className="font-merriweather text-sm sm:text-base text-[#5A6E59] leading-relaxed">
              Every chapter is grounded in real psychological research, contingent self-worth, rupture and repair, toxic stress, authoritative versus authoritarian parenting, explained in plain language, not clinical jargon.
            </p>
          </div>
        </section>

        {/* FEATURE ICON ROW */}
<section className="w-full max-w-2xl mb-16 grid grid-cols-3 gap-4 text-center">
  <div className="flex flex-col items-center gap-2">
    <div className="w-14 h-14 rounded-full border border-[#4A7043]/20 flex items-center justify-center">
      <div className="relative w-14 h-14">
        <Image
          src="/icons/download-icon2.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
    <p className="font-merriweather text-xs sm:text-sm text-[#5A6E59]">
      Instant<br />PDF Download
    </p>
  </div>

  <div className="flex flex-col items-center gap-2">
    <div className="w-14 h-14 rectangle border border-[#4A7043]/0 flex items-center justify-center">
      <div className="relative w-14 h-14">
        <Image
          src="/icons/devices-fixed2.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
    <p className="font-merriweather text-xs sm:text-sm text-[#5A6E59]">
      Use on Your<br />Phone or Tablet
    </p>
  </div>

  <div className="flex flex-col items-center gap-2">
    <div className="w-14 h-14 rounded-full border border-[#4A7043]/20 flex items-center justify-center">
      <div className="relative w-14 h-14">
        <Image
          src="/icons/leaf-fixed2.svg"
          alt=""
          fill
          className="object-contain"
        />
      </div>
    </div>
    <p className="font-merriweather text-xs sm:text-sm text-[#5A6E59]">
      No Shipping.<br />No Waiting.
    </p>
  </div>
</section>

{/* FINAL CTA */}
<section className="w-full flex flex-col items-center text-center pb-16">
  <p className="font-fraunces text-4xl text-[#4A7043] mb-2">$23.99</p>
  <div className="w-16 h-px bg-[#E8B4B8] mb-4"></div>
  <p className="font-merriweather text-[#5A6E59] mb-8 max-w-md">
    Get instant access to the digital PDF guide and read at your own pace.
  </p>

  <a
    href={GUMROAD_URL}
    target="_blank"
    rel="noopener noreferrer"
    className="inline-block w-full whitespace-nowrap sm:w-auto bg-[#4A7043] hover:bg-[#3D5C37] text-white font-semibold text-lg px-10 py-4 rounded-full shadow-lg shadow-[#4A7043]/20 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-0.5 text-center"
  >
    Get Instant Access - $23.99
  </a>

  <span className="text-xs text-[#5A6E59]/70 mt-4 block">
    ✓ Instant PDF download • Secure checkout • Read anywhere
  </span>
</section>

      </main>

      {/* MOBILE STICKY CTA */}
      <div className="sm:hidden fixed bottom-0 left-0 right-0 p-4 bg-[#FAF5EA]/90 backdrop-blur-md border-t border-[#4A7043]/10 z-50 flex justify-center">
        
          <a href={GUMROAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="w-full bg-[#4A7043] text-white font-semibold py-3.5 rounded-full shadow-lg text-center text-base"
        >
          Get the Guide — $23.99
        </a>
      </div>

    </div>
  );
}