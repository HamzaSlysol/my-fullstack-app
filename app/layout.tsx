import type { Metadata } from "next";

import { ChatWidget } from "@/components/chat/ChatWidget";
import { SiteFooter } from "@/components/landing/SiteFooter";

import "./globals.css";

export const metadata: Metadata = {
  title: "Pure Path",
  description: "Premium Hajj and Umrah pilgrimage planning.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased">
      <body className="site-text-float min-h-full flex flex-col">
        {children}
        <SiteFooter />
        <ChatWidget />
      </body>
    </html>
  );
}
