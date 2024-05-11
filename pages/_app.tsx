import type { AppProps } from "next/app";
import { Fragment } from "react";
import "../styles/main.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
}
