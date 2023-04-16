import '@/styles/globals.scss';
import Head from 'next/head';
import Layout from '@/components/Layout';
import Image from 'next/image';
import youtubeImg from '../public/logo.png';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet" />
      </Head>
      <main>
        <Component {...pageProps} />
      </main>
      {/*<Image
        src={ youtubeImg }
        width={ 500 }
        height={ 350 }
        alt="preview"
        placeholder="blur"
      />*/}
    </Layout>
  );
}
