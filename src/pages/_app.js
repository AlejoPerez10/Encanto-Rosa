import Head from 'next/head';
import Layout from "@/layouts/layout.js";
import "@/styles/globals.css";


export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>Encanto Rosa</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </>
  );
};