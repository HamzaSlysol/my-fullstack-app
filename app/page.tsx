import { AboutSection } from "@/components/landing/AboutSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { ProcessSection } from "@/components/landing/ProcessSection";
import { WhyChooseUsSection } from "@/components/landing/WhyChooseUsSection";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f7fbfb] text-[#17211f]">
      <HeroSection />
      <AboutSection />
      <WhyChooseUsSection />
      <ProcessSection />
    </main>
  );
}
