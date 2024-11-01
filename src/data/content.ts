

export const research = [
    {
        id: 1,
        title: "次世代AI技術の開発",
        category: "人工知能",
        description: "より効率的で解釈可能な機械学習アルゴリズムの開発を行っています。特に、少ないデータでも高精度な学習が可能なモデルの研究に注力しています。",
        imageUrl: "/research/ai.jpg"
    },
    {
        id: 2,
        title: "自律ロボットシステム",
        category: "ロボティクス",
        description: "環境認識と自律的な意思決定が可能なロボットシステムの開発を進めています。特に、人間との協調作業に焦点を当てた研究を行っています。",
        imageUrl: "/research/robotics.jpg"
    },
    {
        id: 3,
        title: "予測分析プラットフォーム",
        category: "データサイエンス",
        description: "大規模データから有用な知見を抽出し、未来予測を可能にするプラットフォームの開発を行っています。産業応用にも力を入れています。",
        imageUrl: "/research/data.jpg"
    }
];

type NavKeys = 'home' | 'members' | 'research' | 'publications' | 'join' | 'access';

type ContentType = {
    research: typeof research;
    nav: Record<NavKeys, string>;
    header: {
        title: string;
    };
};

export const contentData: Record<'ja' | 'en', ContentType> = {
    ja: {
        research: research,
        nav: {
            home: 'ホーム',
            members: 'メンバー',
            research: '研究紹介',
            publications: '研究業績',
            join: '学生募集',  // joinキーで「学生募集」テキストを維持
            access: 'アクセス'
        },
        header: {
            title: '藤原研究室'
        }
    },
    en: {
        research: [
            {
                id: 1,
                title: "Next-Generation AI Technology",
                category: "Artificial Intelligence",
                description: "Development of efficient and interpretable machine learning algorithms, focusing on high-accuracy models with limited data.",
                imageUrl: "/research/ai.jpg"
            },
            // ... translate other research items similarly
        ],
        nav: {
            home: 'Home',
            members: 'Members',
            research: 'Research',
            publications: 'Publications',
            join: 'Join',
            access: 'Access'
        },
        header: {
            title: 'Fujiwara Laboratory'
        }
    }
};
