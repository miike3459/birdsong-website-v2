import Document, { Html, Head, Main, NextScript } from 'next/document';
import MetaLink from '../components/head';
import * as config from '../next.config';

class HeaderDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>
                    <meta charSet="utf-8" />
                    <MetaLink rel="shortcut icon" href="favicon.ico" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="A test website by miike#3459." />
                    <MetaLink rel="manifest" href="manifest.json" />
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