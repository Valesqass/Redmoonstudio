import React from 'react';
import { FiGrid, FiLayers, FiLayout, FiArrowRight } from 'react-icons/fi';

function Subheading() {
    const advantages = [
        {
            icon: FiGrid,
            title: "Design system",
            description: "Design better and spend less time without restricting creative freedom.",
            buttonText: "Learn more",
            gradient: "from-purple-500 to-pink-500"
        },
        {
            icon: FiLayers,
            title: "Components",
            description: "Design better and spend less time without restricting creative freedom.",
            buttonText: "Learn more",
            gradient: "from-blue-500 to-cyan-500"
        },
        {
            icon: FiLayout,
            title: "Auto layout",
            description: "Design better and spend less time without restricting creative freedom.",
            buttonText: "Learn more",
            gradient: "from-green-500 to-emerald-500"
        }
    ];

    return (
        <div className="bg-[#121212] flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
            {/* Header Section */}
            <div className="text-center mb-12 max-w-4xl w-full mx-auto">
                <div className="text-red-500 text-sm font-medium mb-3 tracking-wider uppercase animate-pulse">
                    Solmixing
                </div>
                <h2 className="text-white text-xl sm:text-2xl lg:text-4xl xl:text-5xl font-extrabold mb-4 bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                    Les 3 avantages principaux
                </h2>
                <p className="text-gray-400 text-sm sm:text-base max-w-xl mx-auto leading-relaxed px-4">
                    No matter what project you're working on, we've got you covered with the best wireframe kits for any platform.
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-6 max-w-5xl w-full px-4">
                {advantages.map((advantage, index) => {
                    const IconComponent = advantage.icon;
                    return (
                        <div
                            key={index}
                            className="group relative bg-[#1a1a1a] border border-gray-800 rounded-xl p-6 cursor-pointer transform transition-all duration-500 ease-out hover:scale-105 hover:border-transparent hover:shadow-xl hover:shadow-red-500/20 hover:-translate-y-1"
                            style={{
                                background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'
                            }}
                        >
                            {/* Gradient Border Effect on Hover */}
                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${advantage.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}></div>
                            <div className="absolute inset-[1px] bg-[#1a1a1a] rounded-xl -z-10"></div>

                            {/* Animated Background Glow */}
                            <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${advantage.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700 ease-out`}></div>

                            {/* Icon with Enhanced Animation */}
                            <div className={`relative w-12 h-12 bg-gradient-to-r ${advantage.gradient} rounded-lg flex items-center justify-center mb-4 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                                <IconComponent className="w-6 h-6 text-white transform transition-transform duration-300 group-hover:scale-110" />

                                {/* Pulsing Ring Effect */}
                                <div className={`absolute inset-0 rounded-lg bg-gradient-to-r ${advantage.gradient} opacity-0 group-hover:opacity-30 animate-ping`}></div>
                            </div>

                            {/* Content with Staggered Animation */}
                            <h3 className="text-white text-lg font-bold mb-3 transform transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300">
                                {advantage.title}
                            </h3>
                            <p className="text-gray-400 text-sm mb-6 leading-relaxed transform transition-all duration-300 group-hover:text-gray-300">
                                {advantage.description}
                            </p>

                            {/* Enhanced Interactive Button */}
                            <div className="flex items-center justify-between">
                                <button className={`relative overflow-hidden px-4 py-2 bg-gradient-to-r ${advantage.gradient} text-white font-semibold rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg hover:shadow-xl text-sm`}>
                                    <span className="relative z-10 flex items-center gap-2">
                                        {advantage.buttonText}
                                        <FiArrowRight className="w-3 h-3 transform transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>

                                    {/* Button Shine Effect */}
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                                </button>

                                {/* Floating Arrow */}
                                <div className="transform transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                                    <FiArrowRight className={`w-5 h-5 text-transparent bg-gradient-to-r ${advantage.gradient} bg-clip-text`} />
                                </div>
                            </div>

                            {/* Corner Accent */}
                            <div className={`absolute top-3 right-3 w-1.5 h-1.5 bg-gradient-to-r ${advantage.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100`}></div>

                            {/* Bottom Glow Line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r ${advantage.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-xl`}></div>
                        </div>
                    );
                })}
            </div>

            {/* Floating Particles Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(15)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-0.5 h-0.5 bg-red-500 rounded-full opacity-20 animate-pulse"
                        style={{
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            animationDelay: `${Math.random() * 3}s`,
                            animationDuration: `${2 + Math.random() * 3}s`
                        }}
                    />
                ))}
            </div>
        </div>
    );
}

export default Subheading;