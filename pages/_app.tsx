import "reflect-metadata";
import type { AppProps } from "next/app";
import { container } from "../src/infra/inversify.config";
import { Provider } from "../src/provider/inversify-provider";
import "../src/styles/global.css";
import Layout from "../src/layout/layout";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider container={container}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
