import Image from "next/image";
import { CoverParticles } from "@/components/cover-particles";
import Bubbles from "@/components/bubbles";
import TextFoot from "@/components/text-foot";
import MainTitle from "@/components/main-title";
import IntroText from "@/components/introduction";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-cover text-secondary justify-center content-center">
      <div>
        <CoverParticles />
        <MainTitle />
        <IntroText />
        <TextFoot />
      </div>
      
    </main>
  );
}
