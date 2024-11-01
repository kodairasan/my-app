"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const publications = {
    ja: {
        title: "研究業績",
        categories: [
            {
                title: "論文",
                items: [
                    "山田太郎, 「機械学習における新しいアプローチ」, Journal of AI, 2023",
                    "鈴木花子, 「自律ロボットの制御システム」, Robotics Today, 2023",
                    "佐藤健一, 「ビッグデータ解析の新手法」, Data Science Review, 2022"
                ]
            },
            {
                title: "国際会議",
                items: [
                    "International Conference on AI (ICAI 2023)",
                    "World Robotics Summit 2023",
                    "Data Science Conference 2022"
                ]
            }
        ]
    },
    en: {
        title: "Publications",
        categories: [
            {
                title: "Papers",
                items: [
                    "Yamada T., 'New Approaches in Machine Learning', Journal of AI, 2023",
                    "Suzuki H., 'Control Systems for Autonomous Robots', Robotics Today, 2023",
                    "Sato K., 'Novel Methods in Big Data Analysis', Data Science Review, 2022"
                ]
            },
            {
                title: "International Conferences",
                items: [
                    "International Conference on AI (ICAI 2023)",
                    "World Robotics Summit 2023",
                    "Data Science Conference 2022"
                ]
            }
        ]
    }
};

export default function Publications() {
    const { language } = useLanguage();
    const content = publications[language];

    return (
        <div className="min-h-screen p-8 pb-20 sm:p-20">
            <main className="max-w-4xl mx-auto">
                <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {content.title}
                </h1>
                <div className="space-y-12">
                    {content.categories.map((category) => (
                        <div key={category.title} className="p-6 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900">
                            <h2 className="text-2xl font-bold mb-6 text-blue-400">{category.title}</h2>
                            <ul className="space-y-4">
                                {category.items.map((item) => (
                                    <li key={item} className="text-gray-300">{item}</li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
