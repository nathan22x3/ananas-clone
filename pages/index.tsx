import News from 'components/containers/news.container';
import { NextPage } from 'next';
import Head from 'next/head';
import BestSeller from 'components/containers/best-seller.container';
import Category from 'components/containers/category.container';
import Promotion from 'components/containers/promotion.container';

const App: NextPage = () => (
  <main>
    <Head>
      <title>Ananas Clone – DiscoverYOU</title>
    </Head>

    <h1>Ananas Clone</h1>
    <Promotion />
    <Category />
    <BestSeller />
    <News />
  </main>
);

export default App;
