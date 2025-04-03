import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { Oswald } from "next/font/google";
import { Alegreya } from "next/font/google";
import "@mantine/core/styles.css";
import "@mantine/charts/styles.css";
import "@mantine/charts/styles.layer.css";
import {
  ColorSchemeScript,
  MantineProvider,
  mantineHtmlProps,
} from "@mantine/core";

export const metadata: Metadata = {
  title: "Sleek Admin",
  description: "Manage all affairs of Sleek",
};

const oswald = Oswald({
  weight: ["200", "300", "400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-oswald",
});

const algreya = Alegreya({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-algy",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      {...mantineHtmlProps}
      className={`${oswald.variable} ${algreya.variable}`}
    >
      <head>
        <ColorSchemeScript />
      </head>
      <body className="antialiased font-[family-name:var(--font-oswald)]">
        <Navbar />
        <div className="flex overflow-hidden">
          <SideBar />
          <main className="overflow-auto">
            <MantineProvider>{children}</MantineProvider>
          </main>
        </div>
      </body>
    </html>
  );
}
