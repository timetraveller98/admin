import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";
import { Poppins } from "next/font/google";
import 'bootstrap/dist/css/bootstrap.min.css';

const poppins = Poppins({
  subsets: ["latin", "latin-ext"],
  weight: "400" as const,
  style: "normal" as const,
});

export const metadata: Metadata = {
  title: "BhooTatav",
  description: "BhooTatav is a ayurvedha website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}
      >
          <Header />
          {children}
          <Footer />
      </body>
    </html>
  );
}
