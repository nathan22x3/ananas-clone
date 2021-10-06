import News from 'components/containers/news.container';
import { NextPage } from 'next';
import Head from 'next/head';
import IconLogo from 'public/svg/ananas-icon-logo.svg';

const App: NextPage = () => (
  <main>
    <Head>
      <title>Ananas Clone – DiscoverYOU</title>
    </Head>

    <h1>Ananas Clone</h1>
    <News />
  </main>
);

export default App;
