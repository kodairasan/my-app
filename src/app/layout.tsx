"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const metadata: Metadata = {
  title: "自己紹介",
  description: "これは私の自己紹介ページです",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-gray-900 to-black min-h-screen text-white`}>
        <header className="fixed w-full backdrop-blur-md bg-black/30 border-b border-gray-800 z-50">
          <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              研究室紹介
            </h1>
            <nav>
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="cursor-pointer sm:hidden block"
              >
                <svg
                  className="fill-current text-white w-6 h-6"
                  viewBox="0 0 20 20"
                >
                  <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
                </svg>
              </button>
              <ul className="hidden sm:flex sm:items-center sm:gap-8" id="menu">
                {['Home', 'Members', 'Research'].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      className="hover:text-blue-400 transition-colors duration-200 text-lg"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
          {menuOpen && (
            <div className="sm:hidden absolute w-full bg-black/95 border-b border-gray-800">
              <ul className="flex flex-col items-center gap-4 py-4">
                {['Home', 'Members', 'Research'].map((item) => (
                  <li key={item}>
                    <Link
                      href={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                      onClick={() => setMenuOpen(false)}
                      className="hover:text-blue-400 transition-colors duration-200"
                    >
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </header>
        <div className="pt-16">
          {children}
        </div>
      </body>
    </html>
  );
}
