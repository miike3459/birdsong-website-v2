import Document, { Html, Head, Main, NextScript } from 'next/document';
import MetaLink from '../components/head';

class HeaderDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx);
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <MetaLink rel="shortcut icon" href="favicon.ico" />
                    <meta name="theme-color" content="#63BD61" />
                    <meta name="description" content="The official website of the Birdsong project." />
                    <MetaLink rel="manifest" href="manifest.json" />
                    <link rel="preconnect" href="https://fonts.gstatic.com" />
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

export default HeaderDocument;