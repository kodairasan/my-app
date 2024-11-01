"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const recruitment = {
    ja: {
        title: "学生募集",
        sections: [
            {
                title: "募集対象",
                content: "修士課程、博士課程の学生を募集しています。AI、ロボティクス、データサイエンスに興味のある方を歓迎します。"
            },
            {
                title: "研究環境",
                content: "最新の研究設備と、充実した計算機環境を提供します。また、国内外の研究者との交流機会も豊富です。"
            },
            {
                title: "応募方法",
                content: "興味のある方は、履歴書と研究計画書を添えて、メールにてご連絡ください。"
            }
        ]
    },
    en: {
        title: "Student Recruitment",
        sections: [
            {
                title: "Who We're Looking For",
                content: "We are recruiting Master's and Doctoral students interested in AI, Robotics, and Data Science."
            },
            {
                title: "Research Environment",
                content: "We provide state-of-the-art research facilities and computing resources, with opportunities to collaborate with researchers worldwide."
            },
            {
                title: "How to Apply",
                content: "If interested, please send your CV and research proposal via email."
            }
        ]
    }
};

export default function Recruitment() {
    const { language } = useLanguage();
    const content = recruitment[language];

    return (
        <div className="min-h-screen p-8 pb-20 sm:p-20">
            <main className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {content.title}
                </h1>
                <div className="space-y-8">
                    {content.sections.map((section) => (
                        <div key={section.title} className="p-6 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900">
                            <h2 className="text-2xl font-bold mb-4 text-blue-400">{section.title}</h2>
                            <p className="text-gray-300">{section.content}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
