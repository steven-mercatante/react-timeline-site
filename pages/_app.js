import React from "react";
import App, { Container } from "next/app";
import * as Sentry from "@sentry/browser";
import { ThemeProvider } from "styled-components";

Sentry.init({
  dsn: "https://2c7b645bba274e7b9421275eee5d50f1@sentry.io/1505055"
});

const theme = {
  colors: { primary: "#0070f3" }
};

export default class MyApp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  componentDidCatch(error, errorInfo) {
    Sentry.withScope(scope => {
      Object.keys(errorInfo).forEach(key => {
        scope.setExtra(key, errorInfo[key]);
      });

      Sentry.captureException(error);
    });

    super.componentDidCatch(error, errorInfo);
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <Component {...pageProps} />
        </ThemeProvider>
      </Container>
    );
  }
}
