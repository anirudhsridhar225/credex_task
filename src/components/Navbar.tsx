import { Fraunces } from "next/font/google";
import Link from "next/link";
import ThemeSwitcher from "./ThemeSwitcher";

const fraunces = Fraunces({
    subsets: ["latin"],
});

export default function Navbar() {

    return (
        <div className="absolute min-w-screen flex justify-between items-center p-4">
            <p className={`${fraunces.className} text-4xl font-semibold text-white`}>Soft<span className="text-blue-400">Sell.</span></p>
            <div>
                {
                    ["How it works", "Why choose us", "Testimonials", "Contact"].map(
                        (item) => (
                            <a
                                key={item}
                                href={`#${item.toLowerCase()}`}
                                className="mx-4 text-lg font-medium text-white dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                            >
                                {item}
                            </a>
                        )
                )}
                <ThemeSwitcher />
                <Link href="#">
                    <button className="p-3 mx-3 text-lg bg-white text-blue-800 dark:bg-gradient-to-r dark:from-blue-500 dark:to-blue-700 dark:text-white rounded-xl font-semibold tracking-tight hover:bg-gray-200 dark:hover:opacity-80 transition-all duration-100 cursor-pointer">Get Started</button>
                </Link>
            </div>
        </div>
    )
}