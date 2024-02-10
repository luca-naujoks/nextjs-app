import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import { DevLayout, ProdLayout } from "@/components/layout.component";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bobby68",
  description: "My Small Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const Layout = (process.env.VERCEL_ENV === "development" || process.env.VERCEL_ENV === "preview")? DevLayout : ProdLayout;

  return (
    <Layout>
      {children}
    </Layout>
  );
}
