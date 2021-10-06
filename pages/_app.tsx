import Layout from 'components/containers/layout.container';
import type { AppProps } from 'next/app';
import Head from 'next/head';
import 'styles/global.scss';

const App = ({ Component, pageProps }: AppProps) => (
  <Layout>
    <Head>
      <meta
        name="viewport"
        content="initial-scale=1, maximum-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
      />
    </Head>
    <Component {...pageProps} />
  </Layout>
);
export default App;
