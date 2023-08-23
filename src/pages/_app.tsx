import { AppProps } from "next/app";

// import Header from "@/components/organisms/Header";
// import Footer from "@/components/organisms/Footer";

import "./globals.css";
import { FavoriteBooksProvider } from "@/providers/FavoriteBooksProvider";

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <FavoriteBooksProvider>
      {/* <Header /> */}
      <main>
        <Component {...pageProps} />
      </main>
      {/* <Footer /> */}
    </FavoriteBooksProvider>
  );
};

export default MyApp;
