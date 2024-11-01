"use client";
import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import Link from "next/link";
import { useState } from "react";
import { LanguageProvider, useLanguage } from "@/contexts/LanguageContext";
import { contentData } from "@/data/content"; // contentDataをインポート

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

function Header() {
  const { language, toggleLanguage } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const content = contentData[language];
  const navItems = ['Research', 'Publications', 'Members', 'Join', 'Access'] as const;

  return (
    <header className="fixed w-full backdrop-blur-md bg-black/30 border-b border-gray-800 z-50">
      <div className="max-w-7xl mx-auto p-4 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <Link href="/">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent cursor-pointer">
              {language === 'ja' ? '藤原研究室' : 'FUJIWARA LAB'}
            </h1>
          </Link>
          <button
            onClick={toggleLanguage}
            className="px-3 py-1 rounded-full border border-gray-600 hover:bg-gray-800 transition-colors duration-200"
          >
            {language === 'ja' ? 'EN' : '日本語'}
          </button>
        </div>
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
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  className="hover:text-blue-400 transition-colors duration-200 text-lg"
                >
                  {content.nav[item.toLowerCase() as 'research' | 'publications' | 'members' | 'join' | 'access']}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
      {menuOpen && (
        <div className="sm:hidden absolute w-full bg-black/95 border-b border-gray-800">
          <ul className="flex flex-col items-center gap-4 py-4">
            {navItems.map((item) => (
              <li key={item}>
                <Link
                  href={`/${item.toLowerCase()}`}
                  onClick={() => setMenuOpen(false)}
                  className="hover:text-blue-400 transition-colors duration-200"
                >
                  {content.nav[item.toLowerCase() as 'members' | 'research']}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-b from-gray-900 to-black min-h-screen text-white`}>
        <LanguageProvider>
          <Header />
          <div className="pt-16">
            {children}
          </div>
        </LanguageProvider>
      </body>
    </html>
  );
}
