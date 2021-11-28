import Layout from '../components/layout';
import { UserPreferencesStorage } from '../context/user';
import '../styles/main.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <UserPreferencesStorage>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserPreferencesStorage>
  );
}
