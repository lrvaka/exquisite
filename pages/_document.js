import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="stylesheet" href="https://use.typekit.net/qoq0ljs.css" />
        <link rel="icon" href="/favicon.ico" type="image/png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
