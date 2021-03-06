import type { NextPage } from 'next';
import Head from 'next/head';
import JumbotronCustom from '../components/JumbotronCustom';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>Home | Veshichki</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <JumbotronCustom />
      </main>
    </div>
  );
};

export default Home;
