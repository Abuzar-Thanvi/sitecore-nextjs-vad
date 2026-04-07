import Document, {
    Html,
    Head,
    Main,
    NextScript,
    DocumentContext,
    DocumentInitialProps,
} from 'next/document';

const RTL_LOCALES = ['ar', 'he', 'fa', 'ur'];

type MyDocumentProps = DocumentInitialProps & {
    lang: string;
    dir: 'ltr' | 'rtl';
};

class MyDocument extends Document<MyDocumentProps> {
    static async getInitialProps(ctx: DocumentContext): Promise<MyDocumentProps> {
        const initialProps = await Document.getInitialProps(ctx);

        // Sitecore passes locale through pageProps → _app, 
        // but _document gets it from ctx.locale (Next.js i18n routing)
        // or fallback to query param that Sitecore JSS sets
        const locale =
            (ctx.query?.locale as string) ??
            ctx.locale ??
            ctx.defaultLocale ??
            'en';

        const dir: 'ltr' | 'rtl' = RTL_LOCALES.includes(locale) ? 'rtl' : 'ltr';

        return { ...initialProps, lang: locale, dir };
    }

    render() {
        const { lang, dir } = this.props;

        return (
            <Html lang={lang} dir={dir}>
                <Head />
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );
    }
}

export default MyDocument;