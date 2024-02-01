import "reflect-metadata";
import type { AppProps } from "next/app";
import { container } from "../src/core/inversify/ioc";
import { Provider } from "../src/provider/inversify-provider";
import "../src/styles/global.css";
import Layout from "../src/layout/layout";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider container={container}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
