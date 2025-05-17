import Hero from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import { Fraunces } from "next/font/google";

const fraunces = Fraunces({
  subsets: ["latin"],
});

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <HowItWorks />
      </div>
    </div>
  );
}
