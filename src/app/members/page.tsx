"use client";
import { useLanguage } from "@/contexts/LanguageContext";

const membersData = {
    ja: {
        title: "メンバー紹介",
        members: [
            {
                name: "山田 太郎",
                role: "教授",
                field: "人工知能・機械学習",
                since: "2010年4月より在籍"
            },
            {
                name: "鈴木 花子",
                role: "准教授",
                field: "データサイエンス・統計学",
                since: "2015年4月より在籍"
            },
            {
                name: "佐藤 次郎",
                role: "助教",
                field: "機械学習・深層学習",
                since: "2020年4月より在籍"
            },
        ]
    },
    en: {
        title: "Members",
        members: [
            {
                name: "Taro Yamada",
                role: "Professor",
                field: "Artificial Intelligence & Machine Learning",
                since: "Member since April 2010"
            },
            {
                name: "Hanako Suzuki",
                role: "Associate Professor",
                field: "Data Science & Statistics",
                since: "Member since April 2015"
            },
            {
                name: "Jiro Sato",
                role: "Assistant Professor",
                field: "Machine Learning & Deep Learning",
                since: "Member since April 2020"
            },
        ]
    }
};

export default function Members() {
    const { language } = useLanguage();
    const content = membersData[language];

    return (
        <div className="min-h-screen p-8 pb-20 sm:p-20">
            <main className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    {content.title}
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {content.members.map((member) => (
                        <div key={member.name} className="p-6 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl">
                            <h3 className="text-2xl font-bold mb-4 text-center text-white">{member.name}</h3>
                            <p className="text-blue-400 text-center mb-2">{member.role}</p>
                            <p className="text-gray-300 text-center mb-2">{member.field}</p>
                            <p className="text-sm text-gray-400 text-center italic">{member.since}</p>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
