import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          {/* Other head elements */}
          <link rel="shortcut icon" href="/favicon_io/favicon.ico" />
          <title>Navab Store</title>

          {/* <script src="https://checkout.razorpay.com/v1/checkout.js" /> */}
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
