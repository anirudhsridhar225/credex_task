import { ArrowRight, CheckSquare, DollarSign, Upload } from "lucide-react";

const steps = [
    {
        icon: <Upload className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 dark:text-white" />,
        title: "Upload License",
        description: "Submit your software license details through our secure portal for review."
    },
    {
        icon: <CheckSquare className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 dark:text-white" />,
        title: "Get Valuation",
        description: "Receive a competitive, transparent valuation based on current market rates."
    },
    {
        icon: <DollarSign className="w-10 h-10 sm:w-12 sm:h-12 text-blue-400 dark:text-white" />,
        title: "Get Paid",
        description: "Accept our offer and receive payment within 48 hours via your preferred method."
    }
];

export default function HowItWorks() {
    return (
        <div className="flex flex-col items-center justify-center w-full max-w-full dark:bg-gray-900 overflow-hidden pb-10 sm:pb-20">
            <div className="w-full max-w-7xl py-10 sm:py-16 px-4 sm:px-6 lg:px-8">
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center dark:text-white mb-4 sm:mb-8 pt-6 sm:pt-10">How It Works</h2>
                <p className="text-center mb-8 sm:mb-12 text-base sm:text-lg text-gray-600 dark:text-gray-300 px-4">We make it very simple to sell your SaaS quick and hassle-free</p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10">
                    {steps.map((step, index) => (
                        <div key={index} className="relative">
                            <div className="flex flex-col items-center p-6 sm:p-8 px-6 sm:px-10 mx-2 sm:mx-6 bg-gray-500/20 dark:bg-gray-800 rounded-xl h-full border border-gray-100 dark:border-gray-700 hover:scale-105 transition-all">
                                <div className="p-2 sm:p-3 bg-brand-50 dark:bg-gray-700 rounded-full mb-4 sm:mb-6">
                                    {step.icon}
                                </div>
                                <h3 className="text-lg sm:text-xl font-bold text-gray-800 dark:text-gray-100 mb-2 sm:mb-3">{step.title}</h3>
                                <p className="text-gray-600 dark:text-gray-300 text-center text-sm sm:text-base">{step.description}</p>
                            </div>
                            
                            {index < steps.length - 1 && (
                                <div className="hidden md:block">
                                    <ArrowRight className="absolute top-1/2 -right-5 sm:-right-7 dark:text-white"/>  
                                </div>
                            )}
                            
                            {index < steps.length - 1 && (
                                <div className="flex justify-center md:hidden mt-4 mb-4">
                                    <ArrowRight className="rotate-90 dark:text-white"/>  
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}