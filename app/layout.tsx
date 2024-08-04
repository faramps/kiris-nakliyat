import type { Metadata } from "next";
// import { Playfair_Display } from "next/font/google";
import {Inter} from "next/font/google";
import "./globals.css";
import HeaderComponent from "@/Components/HeaderComponent";
import FooterComponent from "@/Components/FooterComponent";

// const inter = Playfair_Display({ subsets: ["latin"] });
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Kiriş Nakliyat",
  description: "by Faramps",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className={inter.className}>
      <HeaderComponent />
      {children}
      <FooterComponent />
      </body>
    </html>
  );
}
