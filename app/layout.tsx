import Footer from "@/components/navigation/Footer";
import Navbar from "@/components/navigation/Navbar";
import type { Metadata } from "next";
import { Lato } from "next/font/google";
import "./globals.css";

const lato = Lato({ weight: ["100", "300", "400", "700", "900"] });

export const metadata: Metadata = {
  title: "Next Journal | Unfiltered, Unstoppable, Unafraid.",
  description:
    "NextJournal – A fearless blogging platform built with Next.js. Share bold stories, unfiltered ideas, and authentic narratives. Your voice, your platform.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${lato.className}`}>
        <Navbar />
        <div className="min-h-screen">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
