import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Campfire | Talk with your friends",
  description: "The new way to talk with all your friends.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div id="side-nav" className="h-full w-[100px] bg-neutral-600">
            Testπ
        </div>
      {children}
      </body>
    </html>
  );
}
