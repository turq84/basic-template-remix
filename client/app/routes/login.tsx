import { type MetaFunction } from '@remix-run/node';
import { Link } from '@remix-run/react';
import { useTranslation } from 'react-i18next';

export const meta: MetaFunction = () => {
  return [
    { title: 'Login' },
    { name: 'description', content: 'Remix Vite login' },
  ];
};

const Login = () => {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('greeting')}</h1>
      <Link to='/'>Home</Link>
    </div>
  );
};

export default Login;
