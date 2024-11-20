import { ReactNode, useEffect, useState } from 'react';
import {
  json,
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useLoaderData,
} from '@remix-run/react';
import type { LinksFunction, LoaderFunctionArgs } from '@remix-run/node';
import { useTranslation } from 'react-i18next';

import i18next from '~/i18n/i18next.server';
import { getLanguageFromStorage, languages } from '~/i18n/i18n.utils';
import styles from './index.css?url';

export const loader = async ({ request }: LoaderFunctionArgs) => {
  const locale = await i18next.getLocale(request);
  return json({ locale });
};

export const handle = {
  i18n: 'common',
};

export const links: LinksFunction = () => [
  { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
  {
    rel: 'preconnect',
    href: 'https://fonts.gstatic.com',
    crossOrigin: 'anonymous',
  },
  {
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,opsz,wght@0,6..12,200..1000;1,6..12,200..1000&display=swap',
  },
  { rel: 'stylesheet', href: styles },
];

const Document = ({ children }: { children: ReactNode }) => {
  const { locale } = useLoaderData<typeof loader>();
  const { i18n } = useTranslation();
  const { en, fi } = languages;

  const localeValue = [en, fi].includes(locale) ? locale : en;
  const [currentLanguage, setCurrentLanguage] = useState(localeValue);

  useEffect(() => {
    const storedLanguage = getLanguageFromStorage();
    if (storedLanguage) {
      setCurrentLanguage(storedLanguage);
    }
  }, [locale]);

  useEffect(() => {
    i18n.changeLanguage(currentLanguage);
  }, [currentLanguage, i18n]);

  return (
    <html lang={locale} dir={i18n.dir()}>
      <head>
        <meta charSet='utf-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <Meta />
        <Links />
      </head>
      <body>{children}</body>
    </html>
  );
};

export default function App() {
  return (
    <Document>
      <Outlet />
      <ScrollRestoration />
      <Scripts />
    </Document>
  );
}
