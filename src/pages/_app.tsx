import { AppProps } from "next/app";

// import Header from "@/components/organisms/Header";
// import Footer from "@/components/organisms/Footer";

import { FavoriteBooksProvider } from "@/providers/FavoriteBooksProvider";
import { usePageLoading } from "@/hooks/usePageLoading";

import "./globals.css";
import Loading from "@/icons/Loading";

const MyApp = ({ Component, pageProps }: AppProps) => {
  const { isPageLoading } = usePageLoading();
  return (
    <FavoriteBooksProvider>
      {isPageLoading ? (
        <div className="page-loading">
          <Loading />
        </div>
      ) : (
        <>
          {/* <Header /> */}
          <main>
            <Component {...pageProps} />
          </main>
          {/* <Footer /> */}
        </>
      )}
    </FavoriteBooksProvider>
  );
};

export default MyApp;
