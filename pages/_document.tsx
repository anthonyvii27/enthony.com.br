import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from "next/document";
import { ReactElement } from "react";

class MyDocument extends Document {
    static async getInitialProps(ctx: DocumentContext): Promise<DocumentInitialProps> {
        const originalRenderPage = ctx.renderPage;

        ctx.renderPage = () =>
            originalRenderPage({
                enhanceApp: App => App,
                enhanceComponent: Component => Component,
            });

        const initialProps = await Document.getInitialProps(ctx);
        return initialProps;
    }

    render(): ReactElement {
        return (
            <Html lang="pt-br">
                <Head>
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <meta charSet="UTF-8" />
                    <meta httpEquiv="content-language" content="pt-br" />
                    <link
                        rel="preconnect"
                        href="https://fonts.gstatic.com"
                        crossOrigin="anonymous"
                    />
                    <link
                        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
                        rel="stylesheet"
                    />
                </Head>

                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;
