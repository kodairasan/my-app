import { createContext, useContext, useState, ReactNode } from 'react';

type LanguageContextType = {
    language: 'ja' | 'en';
    toggleLanguage: () => void;
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
    const [language, setLanguage] = useState<'ja' | 'en'>('ja');

    const toggleLanguage = () => {
        setLanguage(prev => prev === 'ja' ? 'en' : 'ja');
    };

    return (
        <LanguageContext.Provider value={{ language, toggleLanguage }}>
            {children}
        </LanguageContext.Provider>
    );
}

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};
