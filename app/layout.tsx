import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./components/nav/Navbar";
import Modal from "./components/modals/Modal";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "ShareBnb",
  description: "Generated by create next app",
  icons: "favicon.ico",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const content = <p>Modal Content</p>;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="pt-32">{children}</div>
      </body>
    </html>
  );
}
