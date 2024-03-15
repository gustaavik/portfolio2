import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { Url } from "next/dist/shared/lib/router/router";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustav Haavik",
  description: "Portfolio and blog by Gustav Haavik",
};

const EMAIL = process.env.EMAIL;
const LINKEDIN = process.env.LINKEDIN;
const GITHUB = process.env.GITHUB;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}

        <Analytics />

        <footer className="flex justify-center flex-col gap-2 py-8 items-center max-w-md mx-auto">
          <div className="text-center font-bold">
            Gustav Haavik © 2024
          </div>
          <div className="flex gap-4 justify-center w-full text-sm font-semibold">
            <a href={GITHUB} className="hover:underline" target="_blank">Github</a>
            <a href={LINKEDIN} className="hover:underline" target="_blank">Linkedin</a>
            <a href={`emailto:${EMAIL}`} className="hover:underline" target="_blank">Email</a>
          </div>
        </footer>
      </body>
    </html>
  );
}
