import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { api } from "~/utils/api";

import "~/styles/globals.css";
import MainLayout from "~/components/layouts/Main";
import FacebookPixel from "~/components/core/FacebookPixel";
import TwitterPixel from "~/components/core/TwitterPixel";
import Head from "next/head";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  return (
    <SessionProvider session={session}>
      <MainLayout>
        <>
          <Head>
            <meta
              name="facebook-domain-verification"
              content="vllwkmsr3sr5l7g06fao1xx1z3tf55"
            />
          </Head>
          <Component {...pageProps} />
        </>
      </MainLayout>
      <FacebookPixel />
      <TwitterPixel />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
