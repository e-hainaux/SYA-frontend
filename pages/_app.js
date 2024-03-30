import "../styles/globals.css";
import Head from "next/head";

function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
        <meta
          name="description"
          content="Site présentant l'activité yoga de Sara Lovera à proximité de la ville d'Arras."
        />
        <meta
          name="keywords"
          content="yoga, Sara Lovera, Arras, bien-être, relaxation"
        />
        <meta name="author" content="Sara Lovera" />
        <meta name="robots" content="index, follow" />

        {/* Balises Open Graph */}
        <meta property="og:title" content="Yoga avec Sara Lovera à Arras" />
        <meta
          property="og:description"
          content="Site présentant l'activité yoga de Sara Lovera à proximité de la ville d'Arras."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sya-frontend.vercel.app/" />
        <meta
          property="og:image"
          content="https://sya-frontend.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FyogaGroup1.5351af08.png&w=640&q=75"
        />

        {/* Balises Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@votrecompte" />
        <meta name="twitter:title" content="Yoga avec Sara Lovera à Arras" />
        <meta
          name="twitter:description"
          content="Site présentant l'activité yoga de Sara Lovera à proximité de la ville d'Arras."
        />
        <meta
          name="twitter:image"
          content="https://sya-frontend.vercel.app/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FyogaGroup1.5351af08.png&w=640&q=75"
        />

        {/* Balises spécifiques à la langue */}
        <meta httpEquiv="Content-Language" content="fr" />
        <meta name="language" content="French" />

        <title>Yoga avec Sara Lovera à Arras</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
