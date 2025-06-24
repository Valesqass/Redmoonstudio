import React, { useState } from 'react';
import { FiPhoneCall, FiX, FiMessageCircle, FiCopy, FiCheck } from 'react-icons/fi';
import VocalMix from '../assets/img/hero.png';
import Truspilot from '../assets/img/truspilot.png';
import Icone1 from '../assets/img/icone1.svg';
import Icone2 from '../assets/img/Icone2.svg';
import Icone3 from '../assets/img/Icone3.svg';
import Garantie from '../assets/img/Garantie.png';
import Avatar from '../assets/img/avatar.png';

function Hero() {
    const [isHovered, setIsHovered] = useState(false);
    const [isCallButtonHovered, setIsCallButtonHovered] = useState(false);
    const [showContactModal, setShowContactModal] = useState(false);
    const [copied, setCopied] = useState(false);

    const handleCallClick = () => {
        setShowContactModal(true);
    };

    const handleCopyPhone = async () => {
        try {
            await navigator.clipboard.writeText('+33612345678');
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
        } catch (err) {
            console.error('Erreur lors de la copie:', err);
        }
    };

    const closeModal = () => {
        setShowContactModal(false);
    };

    return (
        <div className="bg-[#121212] min-h-screen flex flex-col items-center justify-center px-3 sm:px-6 lg:px-8 py-8 sm:py-10 font-inter">
            <div className="flex flex-col lg:flex-row items-center justify-center w-full max-w-7xl gap-8 lg:gap-12">

                {/* Left Image - Responsive */}
                <div className="flex justify-center w-full lg:w-1/2 mb-6 lg:mb-0">
                    <img
                        src={VocalMix}
                        alt="Vocal Mix Kit"
                        className={`w-64 sm:w-80 md:w-96 lg:w-full max-w-md rounded-xl shadow-xl transition-transform duration-300 ease-out ${isHovered ? 'scale-[1.06] -rotate-2' : ''
                            }`}
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    />
                </div>

                {/* Right Content - Responsive */}
                <div className="flex flex-col w-full lg:w-1/2 justify-center px-2 sm:px-4 lg:px-6">
                    {/* Badge Version */}
                    <div className="font-semibold text-xs sm:text-sm text-gray-300 mb-3 flex items-center justify-center lg:justify-start gap-2 tracking-wide">
                        <span>Vocal Kit</span>
                        <span className="bg-red-900 text-red-400 text-xs px-2 py-0.5 rounded-full font-bold tracking-wider">V3.0</span>
                    </div>

                    {/* Titre Principal */}
                    <div className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl leading-tight font-semibold mb-6 text-center lg:text-left">
                        <span>PASSE TON MIX AU NIVEAU</span><br />
                        <span className="text-[#ff4b6e]">SUPÉRIEUR</span>
                        <hr className="mt-4 border-gray-700 mx-auto lg:mx-0 w-3/4 lg:w-full" />
                    </div>

                    {/* Prix et Trustpilot */}
                    <div className="flex flex-wrap items-center justify-center lg:justify-start mb-6 gap-2 sm:gap-3">
                        <span className="text-white text-lg sm:text-xl font-semibold">29,99€</span>
                        <span className="text-xs sm:text-sm text-gray-400">Life Time + Free Updates</span>
                        <img src={Truspilot} alt="Trustpilot" className="h-6 sm:h-8 lg:h-10" />
                    </div>

                    {/* Features */}
                    <div className="mb-6 bg-[#18181a] rounded-xl p-4 sm:p-5 lg:p-6 space-y-4">
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
                                    <img src={feature.icon} alt="Icone" className="w-8 sm:w-10 h-8 sm:h-10 mt-1 flex-shrink-0" />
                                    <div className="flex-1">
                                        <div className="font-semibold text-white text-sm sm:text-base">{feature.title}</div>
                                        <div className="text-xs sm:text-sm text-gray-400">{feature.desc}</div>
                                    </div>
                                </div>
                                {index < 2 && <hr className="border-[#232326] my-3" />}
                            </div>
                        ))}
                    </div>

                    {/* Bouton Principal */}
                    <div className="flex justify-center w-full mb-4">
                        <button className="bg-red-500 text-white font-bold text-base sm:text-lg rounded-lg py-3 sm:py-4 w-full max-w-md lg:max-w-lg shadow-lg transition-all duration-300 ease-out tracking-wide transform hover:scale-105 hover:-translate-y-1 hover:shadow-[0_8px_32px_0_rgba(255,75,110,0.35),0_2px_8px_rgba(255,110,75,0.15)] focus:outline-none">
                            Configurer mon Kit <span className="font-extrabold">→</span>
                        </button>
                    </div>

                    {/* Garantie */}
                    <div className="flex justify-center mb-14">
                        <img src={Garantie} alt="Garantie" className="w-full max-w-sm lg:max-w-md" />
                    </div>

                    {/* Section Contact */}
                    <div className="flex justify-center w-full">
                        <div className="relative bg-[#18181a] rounded-lg p-4 sm:p-6 flex flex-col items-center w-full max-w-md lg:max-w-lg">
                            {/* Avatar */}
                            <div className="absolute -top-8 sm:-top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                                <div className="relative">
                                    <img src={Avatar} alt="Avatar" className="w-12 sm:w-16 h-12 sm:h-16 rounded-full object-cover border-4 border-[#18181a] shadow-lg" />
                                    <span className="absolute bottom-1 right-1 w-3 sm:w-4 h-3 sm:h-4 bg-green-500 border-2 border-[#18181a] rounded-full animate-pulse"></span>
                                </div>
                            </div>

                            <div className="h-6 sm:h-8" />
                            <div className="font-bold text-base sm:text-lg text-white mb-2 text-center">Une question ?</div>
                            <div className="text-xs sm:text-sm text-gray-400 mb-4 sm:mb-5 font-medium text-center px-2">
                                Hésite pas à contacter notre ingénieur du son si tu as une question technique sur le produit
                            </div>

                            {/* Bouton de contact responsive */}
                            <button
                                onClick={handleCallClick}
                                className={`w-full bg-[#232326] text-white font-semibold text-sm sm:text-base rounded-lg px-3 sm:px-4 py-2.5 sm:py-3 transition-all duration-300 ease-out flex items-center justify-center relative overflow-hidden group cursor-pointer ${isCallButtonHovered
                                    ? 'bg-gradient-to-r from-[#ff4b6e] to-[#ff6b8a] transform scale-105 shadow-[0_8px_32px_0_rgba(255,75,110,0.4)] -translate-y-1'
                                    : 'hover:bg-[#2e2e30]'
                                    }`}
                                onMouseEnter={() => setIsCallButtonHovered(true)}
                                onMouseLeave={() => setIsCallButtonHovered(false)}
                            >
                                {/* Animation de fond */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out"></div>

                                {/* Icône responsive */}
                                <FiPhoneCall className={`text-base sm:text-lg mr-2 sm:mr-3 transition-all duration-300 flex-shrink-0 ${isCallButtonHovered
                                    ? 'text-white animate-pulse transform rotate-12 scale-110'
                                    : 'text-white'
                                    }`} />

                                {/* Texte responsive */}
                                <span className={`transition-all duration-300 relative z-10 text-center ${isCallButtonHovered
                                    ? 'tracking-wide font-bold'
                                    : ''
                                    }`}>
                                    <span className="hidden sm:inline">Contacter notre ingénieur du son</span>
                                    <span className="sm:hidden">Contacter notre expert</span>
                                </span>

                                {/* Effet de brillance */}
                                <div className={`absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 transition-all duration-500 ${isCallButtonHovered
                                    ? 'translate-x-full'
                                    : '-translate-x-full'
                                    }`}></div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Modal responsive */}
            {showContactModal && (
                <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-50 p-3 sm:p-4 animate-fadeIn">
                    <div className="bg-[#18181a] rounded-2xl p-4 sm:p-6 w-full max-w-sm sm:max-w-md relative border border-[#232326] shadow-2xl animate-slideUp max-h-[90vh] overflow-y-auto">
                        {/* Bouton de fermeture */}
                        <button
                            onClick={closeModal}
                            className="absolute top-3 sm:top-4 right-3 sm:right-4 text-gray-400 hover:text-white transition-colors duration-200 hover:bg-[#232326] rounded-full p-1.5 sm:p-2 z-10"
                        >
                            <FiX className="w-4 sm:w-5 h-4 sm:h-5" />
                        </button>

                        {/* En-tête responsive */}
                        <div className="flex items-center gap-3 mb-4 sm:mb-6 pr-8">
                            <div className="relative flex-shrink-0">
                                <img src={Avatar} alt="Avatar" className="w-10 sm:w-12 h-10 sm:h-12 rounded-full object-cover" />
                                <span className="absolute bottom-0 right-0 w-2.5 sm:w-3 h-2.5 sm:h-3 bg-green-500 border-2 border-[#18181a] rounded-full animate-pulse"></span>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="text-white text-lg sm:text-xl font-bold truncate">Contacter notre expert</h3>
                                <p className="text-gray-400 text-xs sm:text-sm">Réponse garantie sous 2h</p>
                            </div>
                        </div>

                        {/* Options de contact responsive */}
                        <div className="space-y-2 sm:space-y-3">
                            {/* Appel direct */}
                            <a
                                href="tel:+33612345678"
                                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[#232326] rounded-xl hover:bg-gradient-to-r hover:from-[#ff4b6e] hover:to-[#ff6b8a] transition-all duration-300 text-white group transform hover:scale-[1.02] hover:shadow-lg"
                            >
                                <div className="bg-green-500 p-1.5 sm:p-2 rounded-full group-hover:animate-pulse flex-shrink-0">
                                    <FiPhoneCall className="text-white w-4 sm:w-5 h-4 sm:h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="font-semibold text-base sm:text-lg truncate">Appeler maintenant</div>
                                    <div className="text-xs sm:text-sm text-gray-300 group-hover:text-white">
                                        <span className="hidden sm:inline">+33 6 12 34 56 78 • Gratuit</span>
                                        <span className="sm:hidden">Gratuit</span>
                                    </div>
                                </div>
                                <div className="text-xl sm:text-2xl group-hover:translate-x-1 transition-transform flex-shrink-0">📞</div>
                            </a>

                            {/* WhatsApp */}
                            <a
                                href="https://wa.me/33612345678?text=Salut%20!%20J'ai%20une%20question%20sur%20le%20Vocal%20Kit%20V3.0"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[#232326] rounded-xl hover:bg-[#25D366] transition-all duration-300 text-white group transform hover:scale-[1.02] hover:shadow-lg"
                            >
                                <div className="bg-[#25D366] p-1.5 sm:p-2 rounded-full group-hover:animate-bounce flex-shrink-0">
                                    <FiMessageCircle className="text-white w-4 sm:w-5 h-4 sm:h-5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="font-semibold text-base sm:text-lg truncate">WhatsApp</div>
                                    <div className="text-xs sm:text-sm text-gray-300 group-hover:text-white">Réponse rapide • En ligne</div>
                                </div>
                                <div className="text-xl sm:text-2xl group-hover:translate-x-1 transition-transform flex-shrink-0">💬</div>
                            </a>

                            {/* Copier le numéro */}
                            <button
                                onClick={handleCopyPhone}
                                className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-[#232326] rounded-xl hover:bg-[#2e2e30] transition-all duration-300 text-white group w-full transform hover:scale-[1.02] hover:shadow-lg"
                            >
                                <div className="bg-blue-500 p-1.5 sm:p-2 rounded-full group-hover:animate-pulse flex-shrink-0">
                                    {copied ? <FiCheck className="text-white w-4 sm:w-5 h-4 sm:h-5" /> : <FiCopy className="text-white w-4 sm:w-5 h-4 sm:h-5" />}
                                </div>
                                <div className="flex-1 text-left min-w-0">
                                    <div className="font-semibold text-base sm:text-lg truncate">
                                        {copied ? 'Numéro copié !' : 'Copier le numéro'}
                                    </div>
                                    <div className="text-xs sm:text-sm text-gray-300 group-hover:text-white">
                                        {copied ? 'Collé dans le presse-papier' : '+33 6 12 34 56 78'}
                                    </div>
                                </div>
                                <div className="text-xl sm:text-2xl group-hover:translate-x-1 transition-transform flex-shrink-0">
                                    {copied ? '✅' : '📋'}
                                </div>
                            </button>
                        </div>

                        {/* Note responsive */}
                        <div className="mt-3 sm:mt-4 p-2.5 sm:p-3 bg-[#232326] rounded-lg">
                            <p className="text-xs text-gray-400 text-center leading-relaxed">
                                💡 <span className="text-[#ff4b6e] font-semibold">Conseil gratuit</span> • Aucun engagement • Support technique inclus
                            </p>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Hero;
