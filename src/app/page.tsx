import ContactForm from "@/components/ContactForm";
import Hero from "@/components/HeroSection";
import HowItWorks from "@/components/HowItWorks";
import Navbar from "@/components/Navbar";
import WhyChoose from "@/components/WhyChoose";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-hidden">
      <Navbar />
      <div className="flex-grow">
        <Hero />
        <HowItWorks />
        <WhyChoose />
        <ContactForm />
      </div>
      <p className="bg-blue-100 dark:bg-gray-700 text-center text-lg p-4 font-semibold dark:text-white hover:animate-bounce">Licensed and Owned by SoftSell inc.</p>
    </div>
  );
}
