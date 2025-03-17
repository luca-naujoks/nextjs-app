import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Bobby68",
  description: "My Small Website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="inter">
        <main
          className="w-screen h-screen p-4"
          style={{
            backgroundImage: "url('/wallpaper.png')",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundAttachment: "fixed",
            transition: "background-image 0.5s ease-in-out",
          }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
