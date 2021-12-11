import Layout from '../components/layout';
import GlobalContext from '../context';
import { Provider } from 'react-redux';
import { store } from '../redux/app/store.ts';
import '../styles/main.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <GlobalContext>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </GlobalContext>
    </Provider>
  );
}
