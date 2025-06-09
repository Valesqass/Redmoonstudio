import React, { useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import VocalMix from '../assets/img/hero.png';
import Truspilot from '../assets/img/truspilot.png';
import Icone1 from '../assets/img/icone1.svg';
import Icone2 from '../assets/img/Icone2.svg';
import Icone3 from '../assets/img/Icone3.svg';
import Garantie from '../assets/img/Garantie.png';
import Avatar from '../assets/img/avatar.png';

function Hero() {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div className="bg-[#121212] min-h-screen flex flex-col items-center justify-center px-4 sm:px-8 py-10 font-inter">
            <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl">

                {/* Left Image */}
                <div className="flex justify-center md:justify-start w-full md:w-1/2 mb-10 md:mb-0">
                    <img
                        src={VocalMix}
                        alt="Vocal Mix Kit"
                        className={`w-72 sm:w-96 rounded-xl shadow-xl transition-transform duration-300 ease-out ${isHovered ? 'scale-[1.06] -rotate-2' : ''}`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </div>

                {/* Right Content */}
                <div className="flex flex-col w-full md:w-1/2 justify-center px-2 md:px-6">
                    <div className="font-semibold text-sm text-gray-300 mb-2 flex items-center gap-2 tracking-wide">
                        <span>Vocal Kit</span>
                        <span className="bg-red-900 text-red-400 text-xs px-2 py-0.5 rounded-full font-bold tracking-wider">V3.0</span>
                    </div>

                    <div className="text-white text-3xl sm:text-4xl leading-tight font-semibold mb-6">
                        <span>PASSE TON MIX AU NIVEAU</span><br />
                        <span className="text-[#ff4b6e]">SUPÉRIEUR</span>
                        <hr className="mt-4 border-gray-700" />
                    </div>

                    <div className="flex flex-wrap items-center mb-5 gap-2">
                        <span className="text-white text-lg font-semibold">29,99€</span>
                        <span className="text-sm text-gray-400">Life Time + Free Updates</span>
                        <img src={Truspilot} alt="Trustpilot" className="h-8 sm:h-10" />
                    </div>

                    <div className="mb-6 bg-[#18181a] rounded-xl p-5 space-y-4">
                        {[{
                            icon: Icone1,
                            title: "Mix tes voix rapidement",
                            desc: "Grâce à notre système exclusif",
                        },
                        {
                            icon: Icone3,
                            title: "Aucune connaissance requise",
                            desc: "On t'explique tout dans un condensé vidéo",
                        },
                        {
                            icon: Icone2,
                            title: "Adapté à tous les styles",
                            desc: "Pas de limite à la création, ton mix ton son",
                        }].map((feature, index) => (
                            <div key={index}>
                                <div className="flex items-start gap-3">
                                    <img src={feature.icon} alt="Icone" className="w-10 h-10 mt-1" />
                                    <div>
                                        <div className="font-semibold text-white text-base">{feature.title}</div>
                                        <div className="text-xs text-gray-400">{feature.desc}</div>
                                    </div>
                                </div>
                                {index < 2 && <hr className="border-[#232326] my-3" />}
                            </div>
                        ))}
                    </div>

                    <div className="flex justify-center w-full">
                        <button className="bg-red-500 text-white font-bold text-lg rounded-lg py-4 w-full max-w-[30rem] mb-2 shadow-lg transition-all duration-300 ease-out tracking-wide transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(255,75,110,0.35),0_2px_8px_rgba(255,110,75,0.15)] focus:outline-none">
                            Configurer mon Kit <span className="font-extrabold">→</span>
                        </button>
                    </div>

                    <img src={Garantie} alt="Garantie" className="mt-4 mb-2 w-full md:w-auto" />

                    <div className="flex justify-center w-full mt-8 py-5">
                        <div className="relative bg-[#18181a] rounded-lg p-6 flex flex-col items-center w-full max-w-[30rem]">
                            <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                <div className="relative">
                                    <img src={Avatar} alt="Avatar" className="w-16 h-16 rounded-full object-cover border-4 border-[#18181a] shadow-lg" />
                                    <span className="absolute bottom-1 right-1 w-4 h-4 bg-green-500 border-2 border-[#18181a] rounded-full"></span>
                                </div>
                            </div>
                            <div className="h-8" />
                            <div className="font-bold text-lg text-white mb-2 text-center">Une question ?</div>
                            <div className="text-sm text-gray-400 mb-5 font-medium text-center">
                                Hésite pas à appeler notre ingénieur du son si tu as une question technique sur le produit selon ta situation
                            </div>
                            <a
                                href="tel:+33612345678"
                                className="w-full bg-[#232326] text-white font-semibold text-base rounded px-4 py-3 hover:bg-[#2e2e30] transition flex items-center justify-start"
                            >
                                <FiPhoneCall className="text-white text-lg mr-3" />
                                Appeler notre ingénieur du son gratuitement
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;
