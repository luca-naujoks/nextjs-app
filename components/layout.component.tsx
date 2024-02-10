"use client"
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ClientCookies from "js-cookie";

export function DevLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(true);
    // Fix: Import Cookies
    const isLoggedIn = ClientCookies.get("auth") != undefined;

  useEffect(() => {
    // Simulate an async login check and then set loading to false
    setTimeout(() => {
      if (!isLoggedIn) {
        router.push("/login");
      }
      setIsLoading(false);
    }, 1000); // Adjust the time as per your requirement
  }, [isLoggedIn]);

  if (isLoading) {
    return (
      <html lang="en">
        <body className="inter bg-slate-950">
          <main className="flex justify-center items-center text-fuchsia-700 min-h-screen">
            {/* You can replace this with a loading spinner or any other placeholder */}
            <p className="text-3xl">Loading...</p>
          </main>
        </body>
      </html>
    );
  }


  return (
    <html lang="en">
      <body className="inter bg-slate-950">
        <main className="text-fuchsia-700 min-h-screen">{children}</main>
      </body>
    </html>
  );
}

export function ProdLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className="inter">
                <main className="text-fuchsia-700 bg-slate-950 min-h-screen">
                    {children}
                </main>
            </body>
        </html>
    )
}