import type { Metadata } from "next";
import { Fraunces, Merriweather, Merriweather_Sans } from "next/font/google";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
});

const merriweather = Merriweather_Sans({
  variable: "--font-merriweather",
  subsets: ["latin"],
});

const merriweatherSerif = Merriweather({
  variable: "--font-merriweather-serif",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Beloved & Blooming",
  description: "Helping parents raise confident kids.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${merriweather.variable} ${merriweatherSerif.variable} h-full antialiased`}
    >
      <body className="min-h-full">{children}</body>
    </html>
  );
}