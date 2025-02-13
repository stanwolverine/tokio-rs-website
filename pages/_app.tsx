import React from "react";
import { AppProps } from "next/app";

import "../styles/styles.scss";
import { useTheme } from "../hooks/use-theme";

function MyApp({ Component, pageProps }: AppProps) {
  // Handle Theme Selection on client side
  useTheme();

  return <Component {...pageProps} />;
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
