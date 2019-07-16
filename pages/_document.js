import Document, { Html, Head, Main, NextScript } from "next/document";
import * as Sentry from "@sentry/browser";

process.on("unhandledRejection", err => {
  Sentry.captureException(err);
});

process.on("uncaughtException", err => {
  Sentry.captureException(err);
});

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <body>
            <Main />
            <NextScript />
          </body>
        </Head>
        <style jsx global>{`
          body {
            background: #000;
            font: 14px menlo;
            color: #fff;
          }
        `}</style>
      </Html>
    );
  }
}
