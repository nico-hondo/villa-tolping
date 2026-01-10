import en from '../config/locales/en/common.json';
import id from '../config/locales/id/common.json';

const translations = {
    en,
    id,
}

export const defaultLang = 'en';

export const getTransalations = (lang = defaultLang) => {
    return translations[lang] || translations[defaultLang];
}