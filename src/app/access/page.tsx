"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const access = {
    ja: {
        title: "アクセス",
        sections: [
            {
                title: "住所",
                content: "〒123-4567 東京都千代田区..."
            },
            {
                title: "交通アクセス",
                content: "東京駅から徒歩10分、地下鉄〇〇線△△駅出口3から徒歩5分"
            },
            {
                title: "お問い合わせ",
                content: "Email: contact@example.com\nTel: 03-1234-5678"
            }
        ]
    },
    en: {
        title: "Access",
        sections: [
            {
                title: "Address",
                content: "Chiyoda-ku, Tokyo 123-4567, Japan"
            },
            {
                title: "Transportation",
                content: "10 minutes walk from Tokyo Station, 5 minutes walk from Exit 3 of △△ Station on the 〇〇 Line"
            },
            {
                title: "Contact",
                content: "Email: contact@example.com\nTel: +81-3-1234-5678"
            }
        ]
    }
};

export default function Access() {
    const { language } = useLanguage();
    const content = access[language];

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
                            <p className="text-gray-300 whitespace-pre-line">{section.content}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 rounded-xl overflow-hidden">
                    {/* ここに地図を表示する場合は、Google MapsなどのiFrameを追加 */}
                    <div className="w-full h-96 bg-gray-800"></div>
                </div>
            </main>
        </div>
    );
}
