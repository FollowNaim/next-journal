import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";
import { sharedMetadata } from "./sharedMetadata";

const lato = Lato({
  weight: ["100", "300", "400", "700", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = sharedMetadata;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className} dark`}>
        <Navbar />
        <div className="">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
