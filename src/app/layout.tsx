import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import sidenavLink from "@/components/sidenav/sidenav-link";

const inter = Inter({ subsets: ["latin"] });

const servers = [
    {
        "serverName": 'Server 1',
        "link": '/server1',
        "image": '/campfire/global/campfire-logo-1.png'
    },
    {
        "serverName": 'Server 2',
        "link": '/server2',
        "image": '/campfire/global/campfire-logo-2.png'
    },
    {
        "serverName": 'Server 3',
        "link": '/server3',
        "image": '/campfire/global/campfire-logo-3.png'
    }
]

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
        <div id="side-nav" className="h-screen w-[50px] md:w-[85px] bg-neutral-700 top-0 left-0 border-r-2 border-neutral-900 fixed px-1 md:px-3 z-10">
            <div className="flex justify-center items-center h-12 md:h-24 border-b-2 border-neutral-900">
                { sidenavLink({serverName: "Friend List", link: "/", image:"/campfire/global/logo_campfire.svg", alt: "Campfire Logo"})}
            </div>
            <div className="flex justify-center items-center flex-col gap-1 md:gap-3 pt-1 md:pt-4">
                {
                    servers.map((server) => (
                       sidenavLink(server)
                    ))
                }
            </div>
        </div>
        <div id="top-nav" className="w-screen left-[50px] md:left-[85px] top-0 fixed bg-neutral-700 h-12 md:h-[60px]">

        </div>
      {children}
      </body>
    </html>
  );
}
