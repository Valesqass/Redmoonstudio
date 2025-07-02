import { useState } from 'react';
import { FiX, FiChevronDown, FiCheck, FiArrowRight } from 'react-icons/fi';

function ConfigurationSlide({ isOpen, onClose }) {
    const [currentStep, setCurrentStep] = useState(1);
    const [selectedSoftware, setSelectedSoftware] = useState('');
    const [selectedOption, setSelectedOption] = useState('');
    const [openDropdown, setOpenDropdown] = useState(null);

    const totalSteps = 3;

    const musicSoftware = [
        { id: 'protools', name: 'Pro Tools', bgColor: 'bg-purple-600', icon: '🎚️', description: 'Standard industrie' },
        { id: 'logic', name: 'Logic Pro', bgColor: 'bg-gray-600', icon: '◐', description: 'Apple exclusif' },
        { id: 'flstudio', name: 'FL Studio', bgColor: 'bg-orange-500', icon: '🍊', description: 'Beatmaking' },
        { id: 'ableton', name: 'Ableton Live', bgColor: 'bg-gray-700', icon: '▣', description: 'Performance live' },
        { id: 'garageband', name: 'Garage Band', bgColor: 'bg-orange-500', icon: '🎸', description: 'Débutant friendly' },
        { id: 'reaper', name: 'Reaper', bgColor: 'bg-green-600', icon: '🎵', description: 'Léger et puissant' }
    ];

    const serviceOptions = [
        {
            id: 'help',
            title: 'Consultation gratuite',
            description: 'Diagnostic personnalisé de 30 minutes',
            price: 'Gratuit',
            originalPrice: null,
            badge: 'Populaire',
            features: ['Diagnostic complet de votre setup', 'Conseils personnalisés d\'expert', 'Recommandations sur mesure', 'Plan d\'action détaillé']
        },
        {
            id: 'full',
            title: 'Configuration Premium',
            description: 'Installation et formation complète',
            price: '100€',
            originalPrice: '150€',
            badge: 'Meilleure valeur',
            features: ['Installation complète et optimisée', 'Configuration sur mesure', 'Formation personnalisée 2h', 'Support prioritaire 30 jours', 'Garantie résultat']
        }
    ];

    const faqItems = [
        {
            id: 'content',
            title: 'Que contient le Vocal Mix Kit ?',
            content: 'Le kit inclut 50+ presets professionnels, des chaînes d\'effets optimisées, des templates de mixage, et 3h de tutoriels vidéo HD pour maîtriser le mixage vocal moderne.'
        },
        {
            id: 'plugins',
            title: 'Compatibilité des plugins',
            content: 'Compatible avec tous les DAW majeurs (Pro Tools, Logic, FL Studio, Ableton, Reaper). Inclut des presets pour les plugins natifs et les plus populaires comme Waves, FabFilter, et iZotope.'
        },
        {
            id: 'garanties',
            title: 'Nos garanties',
            content: 'Garantie satisfait ou remboursé 30 jours sans condition. Support technique gratuit à vie. Mises à jour et nouveaux presets inclus gratuitement.'
        }
    ];

    const nextStep = () => {
        if (currentStep < totalSteps) {
            setCurrentStep(currentStep + 1);
        }
    };

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handlePayment = async () => {
        const softwareId = selectedSoftware;
        // Correction : détecter le prix selon l'option sélectionnée
        const price = selectedOption === 'full' ? 100 : 0;
        try {
            await fetch('http://localhost:3001/api/shopify/order', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ softwareId, price }),
            });
        } catch (error) {
            console.error('Erreur lors de l\'envoi de la commande :', error);
        }
        // Redirection Shopify (optionnel)
        const shopifyUrl = selectedOption === 'full'
            ? 'https://votre-boutique.myshopify.com/cart/add?id=PRODUCT_ID_100EUR'
            : 'https://votre-boutique.myshopify.com/cart/add?id=PRODUCT_ID_GRATUIT';
        window.open(shopifyUrl, '_blank');
    };

    const getProgressPercentage = () => {
        return (currentStep / totalSteps) * 100;
    };

    const toggleDropdown = (dropdownId) => {
        setOpenDropdown(openDropdown === dropdownId ? null : dropdownId);
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 z-50 overflow-hidden">
            {/* Overlay avec blur */}
            <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose}></div>

            {/* Slide Panel */}
            <div className="absolute right-0 top-0 h-full w-full max-w-lg bg-[#0a0a0a] shadow-2xl transform transition-all duration-500 ease-out border-l border-gray-800 flex flex-col">
                {/* Header moderne */}
                <div className="relative p-6 border-b border-gray-800/50 bg-gradient-to-r from-gray-900/50 to-gray-800/30">
                    <div className="flex items-center justify-between">
                        <div>
                            <h2 className="text-2xl font-bold text-white tracking-tight">Configuration</h2>
                            <div className="flex items-center gap-3 mt-2">
                                <span className="text-gray-400 text-sm font-medium">Vocal Mix Kit</span>
                                <span className="bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-bold tracking-wider shadow-lg">V3.0</span>
                            </div>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 text-gray-400 hover:text-white hover:bg-gray-800 rounded-lg transition-all duration-200 hover:scale-110"
                        >
                            <FiX size={24} />
                        </button>
                    </div>

                    {/* Progress indicator moderne */}
                    <div className="mt-6">
                        <div className="flex justify-between text-sm text-gray-400 mb-3">
                            <span className="font-medium">Étape {currentStep} sur {totalSteps}</span>
                            <span className="font-bold text-white">{Math.round(getProgressPercentage())}%</span>
                        </div>
                        <div className="h-1 bg-gray-800 rounded-full overflow-hidden">
                            <div
                                className="h-full bg-gradient-to-r from-red-500 via-pink-500 to-red-400 rounded-full transition-all duration-700 ease-out shadow-lg"
                                style={{ width: `${getProgressPercentage()}%` }}
                            />
                        </div>
                    </div>
                </div>

                {/* Content avec scroll optimisé */}
                <div className="flex-1 overflow-y-auto p-6 space-y-8" style={{ scrollbarWidth: 'thin', scrollbarColor: '#374151 #111827' }}>
                    {/* Étape 1: Sélection du logiciel */}
                    {currentStep === 1 && (
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Votre logiciel de production
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Sélectionnez votre DAW principal pour une configuration optimisée
                                </p>
                            </div>

                            <div className="grid grid-cols-2 gap-4">
                                {musicSoftware.map((software) => (
                                    <button
                                        key={software.id}
                                        onClick={() => setSelectedSoftware(software.id)}
                                        className={`group relative p-5 rounded-xl border-2 transition-all duration-300 ease-out transform hover:scale-[1.02] ${selectedSoftware === software.id
                                            ? 'border-red-500 bg-gradient-to-br from-red-500/20 to-pink-500/10 shadow-xl shadow-red-500/20 scale-[1.02]'
                                            : 'border-gray-700 hover:border-red-400/50 hover:bg-red-500/5 hover:shadow-lg'
                                            }`}
                                    >
                                        {/* Badge de sélection */}
                                        {selectedSoftware === software.id && (
                                            <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center shadow-lg">
                                                <FiCheck size={14} className="text-white" />
                                            </div>
                                        )}

                                        {/* Logo avec animation */}
                                        <div className={`w-12 h-12 rounded-xl ${software.bgColor} flex items-center justify-center mb-4 mx-auto transition-all duration-300 group-hover:scale-110 ${selectedSoftware === software.id ? 'scale-110 shadow-lg' : ''
                                            }`}>
                                            <span className="text-white font-bold text-xl">{software.icon}</span>
                                        </div>

                                        <div className="text-center">
                                            <div className="text-white text-sm font-semibold mb-1">
                                                {software.name}
                                            </div>
                                            <div className="text-gray-400 text-xs">
                                                {software.description}
                                            </div>
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* Bouton moderne */}
                            <button
                                onClick={nextStep}
                                disabled={!selectedSoftware}
                                className={`group w-full py-4 rounded-xl font-semibold transition-all duration-300 ease-out transform flex items-center justify-center gap-2 ${selectedSoftware
                                    ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:scale-[1.02] hover:shadow-xl hover:shadow-red-500/25 active:scale-[0.98]'
                                    : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                    }`}
                            >
                                Continuer
                                <FiArrowRight className={`transition-transform duration-300 ${selectedSoftware ? 'group-hover:translate-x-1' : ''
                                    }`} size={18} />
                            </button>

                            {/* FAQ moderne */}
                            <div className="space-y-4">
                                <h4 className="text-lg font-semibold text-white">
                                    Questions fréquentes
                                </h4>

                                <div className="space-y-3">
                                    {faqItems.map((item) => (
                                        <div key={item.id} className="border border-gray-700 rounded-xl overflow-hidden hover:border-gray-600 transition-all duration-200">
                                            <button
                                                onClick={() => toggleDropdown(item.id)}
                                                className="w-full flex items-center justify-between p-4 text-left hover:bg-gray-800/30 transition-all duration-200"
                                            >
                                                <span className="text-white text-sm font-medium">{item.title}</span>
                                                <FiChevronDown
                                                    className={`text-gray-400 transition-transform duration-300 ${openDropdown === item.id ? 'rotate-180 text-red-400' : ''
                                                        }`}
                                                    size={18}
                                                />
                                            </button>
                                            {openDropdown === item.id && (
                                                <div className="px-4 pb-4 border-t border-gray-700/50">
                                                    <p className="text-gray-300 text-sm leading-relaxed pt-3">
                                                        {item.content}
                                                    </p>
                                                </div>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Section contact moderne */}
                            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 text-center border border-gray-700/50">
                                <div className="flex justify-center mb-4">
                                    <div className="relative">
                                        <div className="w-14 h-14 rounded-full bg-gradient-to-br from-gray-600 to-gray-700 flex items-center justify-center shadow-lg">
                                            <span className="text-white text-2xl">👤</span>
                                        </div>
                                        <span className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-gray-900 rounded-full animate-pulse shadow-lg"></span>
                                    </div>
                                </div>
                                <h5 className="text-white font-semibold mb-2 text-lg">Besoin d'aide ?</h5>
                                <p className="text-gray-400 text-sm mb-5 leading-relaxed">
                                    Notre ingénieur du son est disponible pour répondre à vos questions techniques
                                </p>
                                <button className="w-full bg-gradient-to-r from-gray-700 to-gray-800 text-white py-3 rounded-xl font-semibold transition-all duration-300 ease-out hover:from-red-500 hover:to-pink-500 hover:scale-[1.02] hover:shadow-lg transform border border-gray-600 hover:border-transparent">
                                    Appeler maintenant
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Étape 2: Choix du service */}
                    {currentStep === 2 && (
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Choisissez votre formule
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Sélectionnez l'accompagnement qui vous convient
                                </p>
                            </div>

                            <div className="space-y-4">
                                {serviceOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => setSelectedOption(option.id)}
                                        className={`group w-full p-6 rounded-xl border-2 text-left transition-all duration-300 ease-out transform hover:scale-[1.01] ${selectedOption === option.id
                                            ? 'border-red-500 bg-gradient-to-br from-red-500/20 to-pink-500/10 shadow-xl shadow-red-500/20 scale-[1.01]'
                                            : 'border-gray-700 hover:border-red-400/50 hover:bg-red-500/5 hover:shadow-lg'
                                            }`}
                                    >
                                        {/* Badge */}
                                        {option.badge && (
                                            <div className="inline-block bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs px-3 py-1 rounded-full font-bold mb-3">
                                                {option.badge}
                                            </div>
                                        )}

                                        <div className="flex justify-between items-start mb-3">
                                            <div>
                                                <h4 className="text-white font-bold text-lg mb-1">{option.title}</h4>
                                                <p className="text-gray-400 text-sm">{option.description}</p>
                                            </div>
                                            <div className="text-right">
                                                {option.originalPrice && (
                                                    <div className="text-gray-500 text-sm line-through">{option.originalPrice}</div>
                                                )}
                                                <div className={`font-bold text-lg ${option.price === 'Gratuit' ? 'text-green-400' : 'text-white'
                                                    }`}>
                                                    {option.price}
                                                </div>
                                            </div>
                                        </div>

                                        <ul className="space-y-2">
                                            {option.features.map((feature, index) => (
                                                <li key={index} className="text-gray-300 text-sm flex items-center">
                                                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center mr-3 flex-shrink-0">
                                                        <FiCheck className="text-green-400" size={12} />
                                                    </div>
                                                    {feature}
                                                </li>
                                            ))}
                                        </ul>
                                    </button>
                                ))}
                            </div>

                            <div className="flex gap-3">
                                <button
                                    onClick={prevStep}
                                    className="flex-1 py-3 text-gray-400 hover:text-white transition-colors duration-200 font-medium"
                                >
                                    ← Retour
                                </button>
                                <button
                                    onClick={nextStep}
                                    disabled={!selectedOption}
                                    className={`flex-2 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ease-out transform flex items-center justify-center gap-2 ${selectedOption
                                        ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white hover:scale-[1.02] hover:shadow-xl hover:shadow-red-500/25 active:scale-[0.98]'
                                        : 'bg-gray-800 text-gray-500 cursor-not-allowed'
                                        }`}
                                >
                                    Continuer
                                    <FiArrowRight size={18} />
                                </button>
                            </div>
                        </div>
                    )}

                    {/* Étape 3: Récapitulatif et paiement */}
                    {currentStep === 3 && (
                        <div className="space-y-8">
                            <div>
                                <h3 className="text-xl font-bold text-white mb-2">
                                    Récapitulatif de commande
                                </h3>
                                <p className="text-gray-400 text-sm leading-relaxed">
                                    Vérifiez votre sélection avant de finaliser
                                </p>
                            </div>

                            <div className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-xl p-6 border border-gray-700/50">
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-gray-400 font-medium">Logiciel sélectionné</span>
                                        <span className="text-white font-semibold">
                                            {musicSoftware.find(s => s.id === selectedSoftware)?.name || 'Non sélectionné'}
                                        </span>
                                    </div>
                                    <div className="flex justify-between items-center py-2">
                                        <span className="text-gray-400 font-medium">Formule choisie</span>
                                        <span className="text-white font-semibold">
                                            {serviceOptions.find(s => s.id === selectedOption)?.title || 'Non sélectionné'}
                                        </span>
                                    </div>
                                    <div className="border-t border-gray-600 pt-4 flex justify-between items-center">
                                        <span className="text-white font-bold text-lg">Total</span>
                                        <span className={`font-bold text-xl ${selectedOption === 'full' ? 'text-white' : 'text-green-400'
                                            }`}>
                                            {selectedOption === 'full' ? '100€' : 'Gratuit'}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3">
                                <button
                                    onClick={handlePayment}
                                    className="w-full bg-gradient-to-r from-red-500 to-pink-500 text-white py-4 rounded-xl font-bold text-lg transition-all duration-300 ease-out transform hover:scale-[1.02] hover:shadow-xl hover:shadow-red-500/25 active:scale-[0.98] flex items-center justify-center gap-2"
                                >
                                    {selectedOption === 'full' ? 'Procéder au paiement' : 'Télécharger gratuitement'}
                                    <FiArrowRight size={20} />
                                </button>

                                <button
                                    onClick={prevStep}
                                    className="w-full py-3 text-gray-400 hover:text-white transition-colors duration-200 font-medium"
                                >
                                    ← Modifier ma sélection
                                </button>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}

export default ConfigurationSlide;
