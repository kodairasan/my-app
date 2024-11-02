export default function Works() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">作品</h1>
            <div className="grid gap-6">
                <div className="p-6 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg">
                    <h2 className="text-2xl font-bold mb-4 text-blue-400">作品タイトル</h2>
                    <p className="text-gray-300 leading-relaxed">作品の説明...</p>
                </div>
            </div>
        </div>
    );
}
