"use client";

import { createContext, useContext, useState, useEffect } from "react";
import { defaultLang, getTransalations } from "@/i18n";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(defaultLang);
    const [translations, setTranslations] = useState(getTransalations(defaultLang));

    useEffect(() => {
        const savedLang = localStorage.getItem("language") || defaultLang;
        setLanguage(savedLang);
        setTranslations(getTransalations(savedLang));
    }, []);

    const changeLanguage = (newlang) => {
        setLanguage(newlang);
        setTranslations(getTransalations(newlang));
        localStorage.setItem("language", newlang);

        // window.location.reload();
    };


    return(
        <LanguageContext.Provider value={{language, translations, changeLanguage}}>
            {children}
        </LanguageContext.Provider>
    )
}

export const useLanguage = () => useContext(LanguageContext);
