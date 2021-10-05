import Footer from 'components/containers/footer.container';
import { NextPage } from 'next';
import Head from 'next/head';
import IconLogo from 'public/svg/ananas-icon-logo.svg';

const App: NextPage = () => (
  <main>
    <Head>
      <title>Ananas Clone – DiscoverYOU</title>
    </Head>

    <IconLogo />
    <h1>Ananas Clone</h1>
    <Footer />
  </main>
);

export default App;
