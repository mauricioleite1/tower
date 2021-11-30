import Layout from '../components/layout';
import GlobalContext from '../context';
import '../styles/main.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </GlobalContext>
  );
}
