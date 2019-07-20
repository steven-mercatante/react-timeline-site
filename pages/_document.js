import Document, { Html, Head, Main, NextScript } from "next/document";
import * as Sentry from "@sentry/browser";
import { ServerStyleSheet } from "styled-components";

process.on("unhandledRejection", err => {
  Sentry.captureException(err);
});

process.on("uncaughtException", err => {
  Sentry.captureException(err);
});

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props => sheet.collectStyles(<App {...props} />)
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        )
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head>
          <body>
            <Main />
            <NextScript />
          </body>
          <script
            async
            src="https://platform.twitter.com/widgets.js"
            charSet="utf-8"
          />
        </Head>
        <style jsx global>{`
          body {
            background: #000;
            font: 14px menlo;
            color: #fff;
            margin: 0;
            padding: 0;
          }

          .timeline.space-exploration .my-custom-node .node-content {
            // display: none !important;
            background-color: red;
          }
        `}</style>
      </Html>
    );
  }
}
