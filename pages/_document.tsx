/* eslint-disable @next/next/no-document-import-in-page */
import { extractCritical } from '@emotion/server';
import Document, { Head, Html, Main, NextScript } from 'next/document';
import React from 'react';

export default class MyDocument extends Document {
  static async getInitialProps(ctx: any) {
    const initialProps = await Document.getInitialProps(ctx);
    const critical = extractCritical(initialProps.html);
    initialProps.html = critical.html;
    initialProps.styles = (
      <React.Fragment>
        {initialProps.styles}
        <style
          data-emotion-css={critical.ids.join(' ')}
          dangerouslySetInnerHTML={{ __html: critical.css }}
        />
      </React.Fragment>
    );

    return initialProps;
  }

  render() {
    return (
      <Html lang="vi">
        <Head>
          <meta
            name="description"
            content="Với nhiều người, 2 thập kỷ sản xuất giày đã là một kỷ lục. Với Ananas, điều đó chỉ mới bắt đầu."
          />
          <meta property="keywords" content="" />
          <meta property="image" content="" />
          <meta name="theme-color" content="#f15e2c" />

          <meta property="og:title" content="Ananas Clone - DiscoverYou" />
          <meta property="og:type" content="website" />
          <meta
            property="og:description"
            content="Với nhiều người, 2 thập kỷ sản xuất giày đã là một kỷ lục. Với Ananas, điều đó chỉ mới bắt đầu."
          />
          <meta property="og:image" content="" />
          <meta property="og:url" content="" />

          <link rel="manifest" href="/site.webmanifest" />
          <link rel="shortcut icon" href="/favicon.ico" />
          <link rel="apple-touch-icon" href="/images/apple-touch-icon.png"></link>
          <link rel="icon" type="image/png" sizes="16x16" href="/images/favicon-16x16.png" />
          <link rel="icon" type="image/png" sizes="32x32" href="/images/favicon-32x32.png" />

          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
          <link
            href="https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,400;0,800;1,600&display=swap"
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
