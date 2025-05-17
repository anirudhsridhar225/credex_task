import { Award, Clock, DollarSign, ShieldCheck } from "lucide-react";

export default function WhyChoose() {
    const benefits = [
        {
            icon: <DollarSign className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
            title: "Best Market Rates",
            description: "We offer up to 70% of the original license cost, significantly higher than our competitors."
        },
        {
            icon: <ShieldCheck className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
            title: "Secure Transactions",
            description: "Our platform ensures compliant transfers with full legal documentation and protection."
        },
        {
            icon: <Clock className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
            title: "Fast Processing",
            description: "From valuation to payment in as little as 48 hours, not weeks like traditional channels."
        },
        {
            icon: <Award className="w-8 h-8 sm:w-10 sm:h-10 text-white" />,
            title: "Expert Support",
            description: "Our team of licensing specialists handles all verification and compliance requirements."
        }
    ];

    return (
        <section className="py-12 sm:py-20 bg-gray-50 dark:bg-gray-900" id="why-choose-us">
            <div className="container px-4 sm:px-6 lg:px-8 mx-auto">
                <div className="text-center mb-10 sm:mb-16">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 dark:text-gray-100 mb-3 sm:mb-4 reveal">Why Choose SoftSell</h2>
                    <p className="max-w-2xl mx-auto text-base sm:text-lg text-gray-600 dark:text-gray-300 px-4 reveal">
                        Experience the premium software resale service trusted by businesses worldwide.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="reveal hover:scale-105 transition-all duration-200" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className="h-full rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 group">
                                <div className="bg-blue-700 p-6 sm:p-8 transition-all">
                                    <div className="bg-white/10 w-12 h-12 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-3 sm:mb-4">
                                        {benefit.icon}
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-bold text-white">{benefit.title}</h3>
                                </div>
                                <div className="p-4 sm:p-6">
                                    <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">{benefit.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}