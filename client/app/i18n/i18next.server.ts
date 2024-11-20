import Backend from 'i18next-fs-backend';
import { resolve } from 'node:path';
import { RemixI18Next } from 'remix-i18next/server';
import i18n from '~/i18n';

// Backend configuration for loading translation files
const backendConfig = {
  loadPath: resolve('./public/locales/{{lng}}/{{ns}}.json'),
};

// Language detection configuration
const detectionConfig = {
  supportedLanguages: i18n.supportedLngs,
  fallbackLanguage: i18n.fallbackLng,
};

const i18next = new RemixI18Next({
  detection: detectionConfig,
  i18next: {
    ...i18n,
    debug: process.env.NODE_ENV !== 'production', // Enable debug in development
    backend: backendConfig,
    missingKeyHandler: (lng, ns, key) => {
      console.warn(`Missing translation for ${key} in ${ns} (${lng})`);
    },
  },
  plugins: [Backend],
});

export default i18next;
