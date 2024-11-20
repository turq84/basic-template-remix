import { languages } from '~/i18n/i18n.utils';

const { en, fi } = languages;

// Supported languages
const supportedLanguages = [en, fi];

// Detect language
let fallbackLng = en;

if (typeof document !== 'undefined') {
  // Client: Check localStorage
  const localStorageValue = localStorage.getItem('lng');
  if (localStorageValue && supportedLanguages.includes(localStorageValue)) {
    fallbackLng = localStorageValue;
  }
}

export default {
  supportedLngs: [en, fi],
  fallbackLng,
  defaultNS: 'common',
};
