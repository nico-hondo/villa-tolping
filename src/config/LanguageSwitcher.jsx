import { useLanguage } from "@/context/LanguageContext";

import { FaGlobeAmericas } from "react-icons/fa";

export default function LanguageSwitcher({isHovered, isScrolled}) {
    const {language, changeLanguage} = useLanguage();

    // fungsi untuk switch bahasa
    const toogleLang = () => {
        const newLang = language === "en" ? "id" : "en";
        changeLanguage(newLang);
    }

    return(
        <>
            <div className={`flex gap-1 px-3 py-2 mx-2 justify-center items-center rounded-4xl font-medium text-xs cursor-pointer border ${isScrolled ? 'border-gray-600' : (isHovered ? 'border-gray-600':'border-gray-300')}`}
                onClick={toogleLang}
            >
                <FaGlobeAmericas size={18} className="inline mr-2" />
                {language === "en" ? "ID" : "EN"}
            </div>
        </>
    )
}