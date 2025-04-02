import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";
import { Oswald } from "next/font/google";
import { Alegreya } from "next/font/google";

export const metadata: Metadata = {
  title: "OrderSys Admin",
  description: "Manage all affairs of OrderSys",
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
    <html lang="en" className={`${oswald.variable} ${algreya.variable}`}>
      <body className="antialiased font-[family-name:var(--font-oswald)]">
        <Navbar />
        <div className="flex overflow-hidden">
          <SideBar />
          <main className="overflow-auto">{children}</main>
        </div>
      </body>
    </html>
  );
}
