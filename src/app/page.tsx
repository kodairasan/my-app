import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen p-8 pb-20 sm:p-20">
      <main className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            ようこそ、私たちの研究室へ
          </h1>
          <p className="text-xl text-gray-300">
            最先端の技術と研究で、未来を創造する
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          {['革新的な研究', '充実した環境', 'グローバルな視点'].map((feature) => (
            <div key={feature} className="p-6 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 hover:from-gray-700 hover:to-gray-800 transition-all duration-300 shadow-lg hover:shadow-2xl">
              <h3 className="text-xl font-bold mb-4 text-blue-400">{feature}</h3>
              <p className="text-gray-300">
                私たちは常に最先端の研究に取り組み、新しい価値の創造を目指しています。
              </p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
