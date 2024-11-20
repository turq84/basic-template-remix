import { useTranslation } from 'react-i18next';
import { Link } from '@remix-run/react';

import { languages, setLanguageInStorage } from '~/i18n/i18n.utils';

const Header = () => {
  const { t, i18n } = useTranslation();
  const { en, fi } = languages;

  return (
    <nav>
      <p>Change language</p>
      <h1>{t('greeting')}</h1>
      <button
        onClick={() => {
          i18n.changeLanguage(en);
          setLanguageInStorage(en);
        }}
      >
        English
      </button>
      <button
        onClick={() => {
          i18n.changeLanguage(fi);
          setLanguageInStorage(fi);
        }}
      >
        Finnish
      </button>
      <Link to='/login'>Login</Link>
    </nav>
  );
};

export default Header;
