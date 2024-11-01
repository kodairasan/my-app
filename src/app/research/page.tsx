const research = [
    {
        title: "人工知能と機械学習",
        description: "次世代AIシステムの研究開発と実装",
        details: ["深層学習モデルの開発", "自然言語処理", "コンピュータビジョン"]
    },
    {
        title: "データサイエンス",
        description: "ビッグデータ解析と予測モデルの構築",
        details: ["統計的機械学習", "データマイニング", "予測分析"]
    },
    {
        title: "ロボティクス",
        description: "自律型ロボットシステムの開発",
        details: ["動作計画", "センサー融合", "制御理論"]
    }
];

export default function Research() {
    return (
        <div className="min-h-screen p-8 pb-20 sm:p-20">
            <main className="max-w-6xl mx-auto">
                <h1 className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                    研究紹介
                </h1>
                <div className="grid grid-cols-1 gap-12">
                    {research.map((item, index) => (
                        <div key={item.title}
                            className={`flex flex-col md:flex-row gap-8 items-center ${index % 2 === 1 ? 'md:flex-row-reverse' : ''
                                }`}>
                            <div className="flex-1 p-6 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl">
                                <h2 className="text-2xl font-bold mb-4 text-blue-400">{item.title}</h2>
                                <p className="text-gray-300 mb-4">{item.description}</p>
                                <ul className="list-disc pl-5 text-gray-400">
                                    {item.details.map((detail) => (
                                        <li key={detail} className="mb-2">{detail}</li>
                                    ))}
                                </ul>
                            </div>
                            <div className="w-full md:w-1/3 aspect-square rounded-xl bg-gradient-to-r from-blue-400/10 to-purple-500/10 flex items-center justify-center">
                                <span className="text-6xl opacity-50">🔬</span>
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </div>
    );
}
