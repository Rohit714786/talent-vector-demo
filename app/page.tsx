import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/sections/Hero";
import { BlindSpot } from "@/components/sections/BlindSpot";
import { TalentInventory } from "@/components/sections/TalentInventory";
import { ThreeSteps } from "@/components/sections/ThreeSteps";
import { SixVectors } from "@/components/sections/SixVectors";
import { StatsBar } from "@/components/sections/StatsBar";
import { Integrations } from "@/components/sections/Integrations";
import { AIInterviewer } from "@/components/sections/AIInterviewer";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Header />
      <main id="main-content">
        <Hero />
        <BlindSpot />
        <TalentInventory />
        <ThreeSteps />
        <SixVectors />
        <StatsBar />
        <Integrations />
        <AIInterviewer />
        <FinalCTA />
      </main>
      <Footer />
    </>
  );
}
