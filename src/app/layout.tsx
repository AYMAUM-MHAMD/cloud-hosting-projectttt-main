import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import "./globals.css";
import Header from "@/components/header/Header";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Cloud Hosting",
  description: "cloud-hosting-project",
};

// interface RootLayoutProps {
//   children: React.ReactNode;
// }

export default function RootLayout({children,}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Header />
        <ToastContainer theme="colored" position="top-center"/>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
