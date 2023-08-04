import "../globals.css";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <div>
      {" "}
      <Head>
        <link rel="shortcut icon" href="/static/favicon.jpeg" />
        <title>Dhaval Shah - Portfolio</title>
      </Head>
      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
