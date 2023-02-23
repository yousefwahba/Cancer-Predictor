import Head from 'next/head';
import App from '../components/app-form';
export default function Home() {
  return (
    <div>
      <Head>
        <title>+90</title>
        <meta
          name="description"
          content="CancerPredictor is an open-source application that uses AI to predict the likelihood of breast cancer based on mammography images"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <App />
      </main>
    </div>
  );
}
