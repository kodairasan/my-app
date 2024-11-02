"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const sections = {
  ja: [
    {
      title: "自己紹介",
      content: "ソフトウェアエンジニアとして活動しています。Web技術とAIに特に関心があり、新しい技術の学習と実装に取り組んでいます。"
    },
    {
      title: "スキル",
      content: "TypeScript, React, Next.js, Python, 機械学習, AWS"
    },
    {
      title: "興味分野",
      content: "Web開発、機械学習、自然言語処理、クラウドインフラ"
    }
  ],
  en: [
    {
      title: "About Me",
      content: "I am a software engineer focusing on web technologies and AI. I'm passionate about learning and implementing new technologies."
    },
    {
      title: "Skills",
      content: "TypeScript, React, Next.js, Python, Machine Learning, AWS"
    },
    {
      title: "Interests",
      content: "Web Development, Machine Learning, Natural Language Processing, Cloud Infrastructure"
    }
  ]
};

export default function Home() {
  const { language } = useLanguage();
  const content = sections[language];

  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            {language === 'ja' ? 'ようこそ' : 'Welcome'}
          </h1>
          <p className="text-xl text-gray-300">
            {language === 'ja' ? 'ソフトウェアエンジニア / 開発者' : 'Software Engineer / Developer'}
          </p>
        </div>

        <div className="space-y-12">
          {content.map((section) => (
            <div
              key={section.title}
              className="p-6 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg"
            >
              <h2 className="text-2xl font-bold mb-4 text-blue-400">{section.title}</h2>
              <p className="text-gray-300 leading-relaxed">{section.content}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
