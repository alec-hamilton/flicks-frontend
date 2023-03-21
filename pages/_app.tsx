import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/Layout/Layout";
import { Roboto_Mono } from "next/font/google";
import localFont from "next/font/local";

const robotoMono = Roboto_Mono({
  subsets: ["latin"],
});

const bladerunner = localFont({
  src: "../assets/fonts/BLADRMF_.ttf",
  variable: "--font-bladerunner",
  weight: "500",
  style: "regular",
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main
      className={`${robotoMono.className} ${bladerunner.variable} max-w-5xl mx-auto text-primary`}
    >
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </main>
  );
}
