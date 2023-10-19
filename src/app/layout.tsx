import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/nav/Navbar";

export const metadata: Metadata = {
  title: "FANG",
  description: "e-commerce",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex flex-col w-full min-h-screen items-center justify-center">
        <nav className="w-full">
          <Navbar />
        </nav>
        <main className="flex-1 h-full max-w-5xl w-full py-8">{children}</main>
        <footer className="w-full max-w-5xl p-4 text-xs text-zinc-600 font-normal flex items-center justify-between">
          <p className="font-bold">FANG | 2023</p>
          <p className="font-semibold">
            made by{" "}
            <a
              className="hover:underline hover:text-teal-500"
              href="https://www.github.com/zenvv"
              target="_blank"
              rel="external"
            >
              zenvv
            </a>
          </p>
          <span className="flex gap-6 items-center">
            <a className="hover:underline hover:text-teal-500" href="/">
              About
            </a>
            <a className="hover:underline hover:text-teal-500" href="/">
              Feedback
            </a>
          </span>
        </footer>
      </body>
    </html>
  );
}
