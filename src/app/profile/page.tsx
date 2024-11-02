export default function Profile() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">プロフィール</h1>
            <div className="p-6 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg">
                <h2 className="text-2xl font-bold mb-4 text-blue-400">自己紹介</h2>
                <p className="text-gray-300 leading-relaxed">プロフィール内容...</p>
            </div>
        </div>
    );
}
