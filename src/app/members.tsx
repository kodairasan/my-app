export default function Members() {
    return (
        <div className="min-h-screen p-8 pb-20 sm:p-20 font-[family-name:var(--font-geist-sans)]">
            <main className="flex flex-col gap-8 items-center sm:items-start">
                <h1 className="text-4xl font-bold">メンバー紹介</h1>
                <ul className="list-disc pl-5">
                    <li>メンバー1: 役職・専門分野</li>
                    <li>メンバー2: 役職・専門分野</li>
                    <li>メンバー3: 役職・専門分野</li>
                </ul>
            </main>
        </div>
    );
}
