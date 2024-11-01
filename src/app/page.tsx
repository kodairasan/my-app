"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const sections = {
  ja: [
    {
      title: "研究室の成り立ち",
      content: "2010年の設立以来、私たちの研究室は最先端の技術革新と学術研究の融合を目指してきました。設立当初から産学連携を重視し、理論研究と実践的な応用研究の両立に力を入れています。現在では、国内外の研究機関や企業と密接な協力関係を築き、次世代技術の開発に取り組んでいます。"
    },
    {
      title: "研究について",
      content: "人工知能、ロボティクス、データサイエンスを主軸とし、特に機械学習アルゴリズムの開発、自律システムの構築、大規模データ解析に注力しています。研究室では、理論的な基礎研究から実用化を見据えた応用研究まで、幅広いアプローチで課題解決に取り組んでいます。"
    },
    {
      title: "共同研究",
      content: "国内外の主要大学や研究機関、そして産業界のリーディングカンパニーと積極的に共同研究を展開しています。特に、自動運転技術の開発、医療診断支援システムの構築、スマートシティプロジェクトなど、社会実装を視野に入れた研究プロジェクトを推進しています。"
    }
  ],
  en: [
    {
      title: "Laboratory History",
      content: "Since our establishment in 2010, our laboratory has pursued the fusion of cutting-edge technological innovation and academic research. From the beginning, we have emphasized industry-academia collaboration, focusing on both theoretical research and practical applications. Today, we have built close cooperative relationships with research institutions and companies both domestically and internationally."
    },
    {
      title: "Research Focus",
      content: "We focus on artificial intelligence, robotics, and data science, with particular emphasis on developing machine learning algorithms, building autonomous systems, and analyzing large-scale data. Our laboratory addresses challenges through a broad approach, from theoretical basic research to application-oriented studies aimed at practical implementation."
    },
    {
      title: "Collaborative Research",
      content: "We actively engage in joint research with major universities, research institutions, and leading companies in industry both domestically and internationally. In particular, we are promoting research projects with social implementation in mind, such as autonomous driving technology development, medical diagnostic support systems, and smart city projects."
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
            {language === 'ja' ? 'ようこそ、私たちの研究室へ' : 'Welcome to Our Laboratory'}
          </h1>
          <p className="text-xl text-gray-300">
            {language === 'ja' ? '最先端の技術と研究で、未来を創造する' : 'Creating the Future through Cutting-edge Technology and Research'}
          </p>
        </div>

        <div className="space-y-12">
          {content.map((section) => (
            <div
              key={section.title}
              className="p-6 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl"
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
