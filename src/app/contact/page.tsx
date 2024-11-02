export default function Contact() {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-6">お問い合わせ</h1>
            <div className="p-6 rounded-xl bg-gradient-to-b from-gray-800 to-gray-900 shadow-lg">
                <div className="space-y-4">
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-blue-400">連絡先</h2>
                        <p className="mb-1 text-gray-300">
                            <span className="font-medium">メール：</span>
                            <a href="mailto:example@university.ac.jp" className="text-blue-400 hover:underline">
                                example@university.ac.jp
                            </a>
                        </p>
                        <p className="mb-4 text-gray-300">
                            <span className="font-medium">住所：</span>
                            〒123-4567 東京都○○区○○1-2-3 ○○大学 ○○学部
                        </p>
                    </div>
                    <div>
                        <h2 className="text-2xl font-bold mb-4 text-blue-400">アクセス</h2>
                        <div className="w-full h-96 rounded-lg overflow-hidden">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4279.354835094096!2d140.8350079!3d38.2556956!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5f8a285673c0423b%3A0x7b182cb113719a82!2z44CSOTgwLTA4NDUg5a6u5Z-O55yM5LuZ5Y-w5biC6Z2S6JGJ5Yy66I2S5be76Z2S6JGJIOaDheWgseenkeWtpueglOeptuenkQ!5e1!3m2!1sja!2sjp!4v1730554421660!5m2!1sja!2sjp"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
