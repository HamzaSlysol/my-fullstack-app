import type { Metadata } from "next";
import Image from "next/image";

import { ChatClient } from "@/components/chat/ChatClient";
import { LandingHeader } from "@/components/landing/LandingHeader";

export const metadata: Metadata = {
  title: "Chat | Pure Path",
  description:
    "Chat with Pure Path Assist for Hajj and Umrah package, document, hotel, flight, and travel support.",
};

export default function ChatPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#f7fbfb] text-[#17211f]">
      <Image
        src="/pure-path-hero.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover object-center opacity-20"
      />
      <div className="absolute inset-0 bg-[#f7fbfb]/82" />
      <div className="absolute inset-x-0 top-0 h-44 bg-linear-to-b from-white/95 to-transparent" />

      <LandingHeader />
      <ChatClient />
    </main>
  );
}
