import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gustav Haavik",
  description: "Portfolio and blog by Gustav Haavik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <footer className="text-center py-8">
          Gustav Haavik © 2024
        </footer>
      </body>
    </html>
  );
}
