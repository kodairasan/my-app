type NavKeys = 'profile' | 'works' | 'blog' | 'contact';

type ContentType = {
    nav: Record<NavKeys, string>;
};

export const contentData: Record<'ja' | 'en', ContentType> = {
    ja: {
        nav: {
            profile: "プロフィール",
            works: "制作物",
            blog: "ブログ",
            contact: "お問い合わせ"
        }
    },
    en: {
        nav: {
            profile: "Profile",
            works: "Works",
            blog: "Blog",
            contact: "Contact"
        }
    }
};
