import Document, { Html, Head, Main, NextScript } from 'next/document';

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
                    <link rel="icon" href="/public/favicon.ico" />
                    <meta name="theme-color" content="#000000" />
                    <meta name="description" content="Web site created using create-react-app" />
                    <link rel="manifest" href="/public/manifest.json" />
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