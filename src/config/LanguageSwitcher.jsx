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
            <div className={`flex gap-1 px-3 py-2 mx-2 justify-center items-center rounded-4xl font-medium text-xs cursor-pointer border ${isScrolled ? (isHovered? 'border-gray-600 text-black' : 'border-gray-400 text-black') : (isHovered ? 'border-gray-300 text-black':'border-gray-500 text-white')} transition-all duration-700`}
                onClick={toogleLang}
            >
                <FaGlobeAmericas size={18} className="inline mr-2" />
                {language === "en" ? "ID" : "EN"}
            </div>
        </>
    )
}