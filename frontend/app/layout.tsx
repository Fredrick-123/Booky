import type { Metadata } from "next";
import { Marcellus, Urbanist } from "next/font/google";
import "./globals.css";

//component
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const marcellus = Marcellus({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marcellus",
});

const urbanist = Urbanist({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Booky",
  description: "Book hotels resturants",
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${marcellus.className} ${urbanist.variable}`}>
      <link rel="icon" href="/assets/logo2.svg" sizes="any"  />
        {" "}
        <Header />
        {children} 
        <Footer />
      </body>
    </html>
  );
}
