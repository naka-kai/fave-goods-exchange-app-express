import type { Metadata } from "next";
import { Kiwi_Maru } from "next/font/google";
import "./globals.css";

const kiwiMaru = Kiwi_Maru({
  weight: "400",
  variable: "--font-kiwi-maru",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fave Exchange App",
  description: "Exchange fave goods app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body
        className={`${kiwiMaru.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
