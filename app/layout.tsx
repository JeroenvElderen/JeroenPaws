import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Jeroen & Paws",
  description: "Professional Dog Walking & Pet Care",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
