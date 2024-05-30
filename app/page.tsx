import Image from "next/image";
import { CoverParticles } from "@/components/cover-particles";
import Bubbles from "@/components/bubbles";
import TitleHome from "@/components/title-home";
import TextFoot from "@/components/text-foot";


export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-cover text-secondary justify-center content-center">
      <div>
        <CoverParticles />
        <TitleHome />
        <Bubbles />
        <TextFoot />
      </div>
      
    </main>
  );
}
