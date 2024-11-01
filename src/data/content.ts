export const members = [
    {
        id: 1,
        name: "山田 太郎",
        role: "教授",
        specialization: "人工知能",
        description: "機械学習と深層学習の研究に20年以上従事。複数の国際学会で招待講演を行う。",
        imageUrl: "/members/yamada.jpg"
    },
    {
        id: 2,
        name: "鈴木 花子",
        role: "准教授",
        specialization: "ロボティクス",
        description: "自律型ロボットの開発と制御系設計を専門とする。産業用ロボットの実用化に貢献。",
        imageUrl: "/members/suzuki.jpg"
    },
    {
        id: 3,
        name: "佐藤 健一",
        role: "助教",
        specialization: "データサイエンス",
        description: "ビッグデータ解析と予測モデルの研究に従事。若手研究者賞を受賞。",
        imageUrl: "/members/sato.jpg"
    }
];

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

type NavKeys = 'home' | 'members' | 'research' | 'publications' | 'recruitment' | 'access';

type ContentType = {
    members: typeof members;
    research: typeof research;
    nav: Record<NavKeys, string>;
    header: {
        title: string;
    };
};

export const contentData: Record<'ja' | 'en', ContentType> = {
    ja: {
        members: members,
        research: research,
        nav: {
            home: 'ホーム',
            members: 'メンバー',
            research: '研究紹介',
            publications: '研究業績',
            recruitment: '学生募集',
            access: 'アクセス'
        },
        header: {
            title: '藤原研究室'
        }
    },
    en: {
        members: [
            {
                id: 1,
                name: "Taro Yamada",
                role: "Professor",
                specialization: "Artificial Intelligence",
                description: "Over 20 years of experience in machine learning and deep learning research. Invited speaker at multiple international conferences.",
                imageUrl: "/members/yamada.jpg"
            },
            // ... translate other members similarly
        ],
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
            recruitment: 'Recruitment',
            access: 'Access'
        },
        header: {
            title: 'Fujiwara Laboratory'
        }
    }
};
