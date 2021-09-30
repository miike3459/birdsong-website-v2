import Head from 'next/head';
import '../all.css';

function App({ Component, pageProps }) {
    let baseTitle = "Birdsong";
    let qualifiedTitle = Component.pageTitle ? baseTitle + " - " + Component.pageTitle : baseTitle;
    return <>
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <title>{qualifiedTitle}</title>
        </Head>
        <Component {...pageProps} />
    </>
}

export default App;