import "../styles/globals.css";
import Navbar from "@/components/pageLayout/Navbar/Navbar";
import Footer from "@/components/pageLayout/Footer/Footer";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${robotoMono.className} ${bladerunner.variable}`}>
        <main className="text-foreground min-h-screen flex flex-col">
          <Navbar />
          <div className="max-w-5xl mx-auto w-full">{children}</div>
          <Footer />
        </main>
      </body>
    </html>
  );
}
