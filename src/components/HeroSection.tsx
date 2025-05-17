import { ArrowRight } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
    subsets: ["latin"],
});

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center bg-blue-800 dark:bg-gray-800 min-h-screen max-w-[100vw]">
            <p className={`${inter.className} font-black text-6xl tracking-tight text-white mb-2`}>Unlock the <span className="dark:text-blue-600 bg-gradient-to-r bg-clip-text from-purple-200 to-purple-300 text-transparent">value</span> of your software.</p>
            <p className={`${inter.className} font-medium text-2xl tracking-tighter}`}><span className="text-amber-50 opacity-60">Anytime, anywhere within seconds.</span></p>
            <Link href="#">
                <button className="mt-4 font-semibold dark:text-white text-blue-800 p-3 bg-white dark:bg-blue-800 rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-105 group cursor-pointer flex flex-row">Get a quote now.<ArrowRight className="group-hover:translate-x-1 transition-all duration-100"/></button>
            </Link>
        </div>
    );
};

export default Hero;