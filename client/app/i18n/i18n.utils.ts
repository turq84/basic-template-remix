export const languages = {
  en: 'en',
  fi: 'fi',
};

const languageStorageKey = 'lng';

export const getLanguageFromStorage = () => {
  return localStorage.getItem(languageStorageKey);
};

export const setLanguageInStorage = (language: string) => {
  localStorage.setItem(languageStorageKey, language);
};
