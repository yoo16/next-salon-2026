import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Next Salon",
  description: "美容院予約システム",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
