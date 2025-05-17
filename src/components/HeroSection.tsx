import { ArrowRight } from "lucide-react";
import { Inter } from "next/font/google";
import Link from "next/link";

const inter = Inter({
    subsets: ["latin"],
});

const Hero = () => {
    return (
        <div className="flex flex-col items-center justify-center overflow-hidden bg-blue-800 dark:bg-gray-800 min-h-screen w-full px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
                <p className={`${inter.className} font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white mb-2 px-4`}>
                    Unlock the <span className="dark:text-blue-600 bg-gradient-to-r bg-clip-text from-purple-200 to-purple-300 text-transparent">value</span> of your software.
                </p>
                <p className={`${inter.className} font-medium text-xl sm:text-2xl tracking-tighter px-4`}>
                    <span className="text-amber-50 opacity-60">Anytime, anywhere within seconds.</span>
                </p>
                <Link href="#" className="inline-block mt-6 sm:mt-8">
                    <button className="mt-4 font-semibold dark:text-white text-blue-800 p-3 bg-white dark:bg-blue-800 rounded-xl hover:opacity-90 transition-all duration-200 hover:scale-105 group cursor-pointer flex flex-row items-center">
                        Get a quote now
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-all duration-100"/>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default Hero;