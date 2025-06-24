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
        <div className="bg-[#121212] min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16">
            {/* Header Section */}
            <div className="text-center mb-16 max-w-5xl w-full mx-auto">
                <div className="text-red-500 text-sm font-medium mb-4 tracking-wider uppercase animate-pulse">
                    Solmixing
                </div>
                <h2 className="text-white text-2xl  xl:text-6xl font-bold mb-6 bg-gradient-to-r from-white to-gray-300 bg-clip-text">
                    Les 3 avantages principaux
                </h2>
                <p className="text-gray-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed px-6">
                    No matter what project you're working on, we've got you covered with the best wireframe kits for any platform.
                </p>
            </div>

            {/* Cards Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 max-w-6xl w-full px-4">
                {advantages.map((advantage, index) => {
                    const IconComponent = advantage.icon;
                    return (
                        <div 
                            key={index} 
                            className="group relative bg-[#1a1a1a] border border-gray-800 rounded-2xl p-8 cursor-pointer transform transition-all duration-500 ease-out hover:scale-105 hover:border-transparent hover:shadow-2xl hover:shadow-red-500/20 hover:-translate-y-2"
                            style={{
                                background: 'linear-gradient(135deg, #1a1a1a 0%, #2a2a2a 100%)'
                            }}
                        >
                            {/* Gradient Border Effect on Hover */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${advantage.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10 blur-sm`}></div>
                            <div className="absolute inset-[1px] bg-[#1a1a1a] rounded-2xl -z-10"></div>
                            
                            {/* Animated Background Glow */}
                            <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${advantage.gradient} opacity-0 group-hover:opacity-10 transition-all duration-700 ease-out`}></div>
                            
                            {/* Icon with Enhanced Animation */}
                            <div className={`relative w-16 h-16 bg-gradient-to-r ${advantage.gradient} rounded-xl flex items-center justify-center mb-6 transform transition-all duration-500 group-hover:scale-110 group-hover:rotate-6 shadow-lg`}>
                                <IconComponent className="w-8 h-8 text-white transform transition-transform duration-300 group-hover:scale-110" />
                                
                                {/* Pulsing Ring Effect */}
                                <div className={`absolute inset-0 rounded-xl bg-gradient-to-r ${advantage.gradient} opacity-0 group-hover:opacity-30 animate-ping`}></div>
                            </div>
                            
                            {/* Content with Staggered Animation */}
                            <h3 className="text-white text-xl font-bold mb-4 transform transition-all duration-300 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-white group-hover:to-gray-300">
                                {advantage.title}
                            </h3>
                            <p className="text-gray-400 text-base mb-8 leading-relaxed transform transition-all duration-300 group-hover:text-gray-300">
                                {advantage.description}
                            </p>
                            
                            {/* Enhanced Interactive Button */}
                            <div className="flex items-center justify-between">
                                <button className={`relative overflow-hidden px-6 py-3 bg-gradient-to-r ${advantage.gradient} text-white font-semibold rounded-lg transform transition-all duration-300 group-hover:scale-105 group-hover:shadow-lg hover:shadow-xl`}>
                                    <span className="relative z-10 flex items-center gap-2">
                                        {advantage.buttonText}
                                        <FiArrowRight className="w-4 h-4 transform transition-transform duration-300 group-hover:translate-x-1" />
                                    </span>
                                    
                                    {/* Button Shine Effect */}
                                    <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>
                                </button>
                                
                                {/* Floating Arrow */}
                                <div className="transform transition-all duration-500 opacity-0 group-hover:opacity-100 group-hover:translate-x-2">
                                    <FiArrowRight className={`w-6 h-6 text-transparent bg-gradient-to-r ${advantage.gradient} bg-clip-text`} />
                                </div>
                            </div>
                            
                            {/* Corner Accent */}
                            <div className={`absolute top-4 right-4 w-2 h-2 bg-gradient-to-r ${advantage.gradient} rounded-full opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-0 group-hover:scale-100`}></div>
                            
                            {/* Bottom Glow Line */}
                            <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${advantage.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl`}></div>
                        </div>
                    );
                })}
            </div>
            
            {/* Floating Particles Background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {[...Array(20)].map((_, i) => (
                    <div
                        key={i}
                        className="absolute w-1 h-1 bg-red-500 rounded-full opacity-20 animate-pulse"
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