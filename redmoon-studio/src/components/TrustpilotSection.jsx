import React, { useState, useEffect } from 'react';

// Icônes SVG personnalisées
const StarIcon = ({ className, filled = false }) => (
    <svg className={className} viewBox="0 0 24 24" fill={filled ? "currentColor" : "none"} stroke="currentColor" strokeWidth="2">
        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
    </svg>
);

const ExternalLinkIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
        <polyline points="15,3 21,3 21,9" />
        <line x1="10" y1="14" x2="21" y2="3" />
    </svg>
);

const QuoteIcon = ({ className }) => (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
    </svg>
);

const TrustpilotSection = () => {
    const [trustpilotData, setTrustpilotData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Configuration Trustpilot - Remplacez par vos vraies données
    const TRUSTPILOT_CONFIG = {
        businessUnitId: 'VOTRE_BUSINESS_UNIT_ID', // À remplacer
        apiKey: 'VOTRE_API_KEY', // À remplacer
        domain: 'votre-domaine.com' // À remplacer
    };

    useEffect(() => {
        fetchTrustpilotData();
    }, []);

    const fetchTrustpilotData = async () => {
        try {
            setLoading(true);

            // Appel à votre backend sécurisé
            const response = await fetch('/api/trustpilot');
            const data = await response.json();

            setTrustpilotData(data);
            setLoading(false);

        } catch (err) {
            setError('Erreur lors du chargement des avis Trustpilot');
            setLoading(false);
        }
    };

    const renderStars = (rating) => {
        return Array.from({ length: 5 }, (_, index) => (
            <StarIcon
                key={index}
                className={`w-5 h-5 ${index < rating
                    ? 'text-yellow-400'
                    : 'text-gray-600'
                    }`}
                filled={index < rating}
            />
        ));
    };

    const getStarPercentage = (starCount, total) => {
        return Math.round((starCount / total) * 100);
    };

    if (loading) {
        return (
            <section className="bg-[#121212] py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center">
                        <div className="animate-pulse">
                            <div className="h-8 bg-gray-800 rounded w-64 mx-auto mb-4"></div>
                            <div className="h-4 bg-gray-800 rounded w-96 mx-auto"></div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }

    if (error) {
        return (
            <section className="bg-[#121212] py-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center text-red-400">
                        <p>{error}</p>
                    </div>
                </div>
            </section>
        );
    }

    return (
        <section className="bg-[#121212] py-20">
            <div className="max-w-7xl mx-auto px-6">
                {/* En-tête */}
                <div className="text-center mb-16">
                    <div className="inline-flex items-center gap-2 bg-red-500/10 text-red-400 px-4 py-2 rounded-full text-sm font-medium mb-6">
                        <StarIcon className="w-4 h-4" filled />
                        Avis clients
                    </div>
                    <h2 className="text-4xl md:text-5xl font-semibold text-white mb-6">
                        Ce que disent nos clients
                    </h2>
                    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
                        Découvrez les retours de nos clients satisfaits sur Trustpilot
                    </p>
                </div>

                {/* Score global et statistiques */}
                <div className="bg-gray-900/50 rounded-2xl p-8 mb-12 border border-gray-800">
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Score principal */}
                        <div className="text-center md:text-left">
                            <div className="flex items-center justify-center md:justify-start gap-4 mb-4">
                                <div className="text-6xl font-semibold text-white">
                                    {trustpilotData.score}
                                </div>
                                <div>
                                    <div className="flex gap-1 mb-2">
                                        {renderStars(Math.round(trustpilotData.score || 0))}
                                    </div>
                                    <p className="text-gray-400 text-sm">
                                        Basé sur {trustpilotData.numberOfReviews} avis
                                    </p>
                                </div>
                            </div>

                            {/* Logo Trustpilot */}
                            <div className="flex items-center justify-center md:justify-start gap-2 text-green-400">
                                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                                <span className="font-medium">Trustpilot</span>
                                <ExternalLinkIcon className="w-4 h-4" />
                            </div>
                        </div>

                        {/* Répartition des étoiles */}
                        <div className="space-y-3">
                            {[5, 4, 3, 2, 1].map((stars) => (
                                <div key={stars} className="flex items-center gap-3">
                                    <div className="flex gap-1">
                                        {renderStars(stars)}
                                    </div>
                                    <div className="flex-1 bg-gray-800 rounded-full h-2">
                                        <div
                                            className="bg-yellow-400 h-2 rounded-full transition-all duration-1000"
                                            style={{
                                                width: `${getStarPercentage(
                                                    trustpilotData.stars[stars] || 0,
                                                    trustpilotData.numberOfReviews || 1
                                                )}%`
                                            }}
                                        ></div>
                                    </div>
                                    <span className="text-gray-400 text-sm w-12">
                                        {trustpilotData.stars[stars] || 0}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Avis récents */}
                <div className="grid md:grid-cols-3 gap-6">
                    {trustpilotData.recentReviews?.map((review) => (
                        <div
                            key={review.id}
                            className="bg-gray-900/30 rounded-xl p-6 border border-gray-800 hover:border-gray-700 transition-all duration-300"
                        >
                            {/* En-tête de l'avis */}
                            <div className="flex items-start justify-between mb-4">
                                <div className="flex gap-1">
                                    {renderStars(review.rating)}
                                </div>
                                {review.verified && (
                                    <span className="bg-green-500/10 text-green-400 text-xs px-2 py-1 rounded-full">
                                        Vérifié
                                    </span>
                                )}
                            </div>

                            {/* Titre de l'avis */}
                            <h3 className="text-white font-bold mb-3">
                                {review.title}
                            </h3>

                            {/* Contenu de l'avis */}
                            <div className="relative mb-4">
                                <QuoteIcon className="absolute -top-2 -left-2 w-6 h-6 text-gray-600" />
                                <p className="text-gray-300 text-sm leading-relaxed pl-4">
                                    {review.text}
                                </p>
                            </div>

                            {/* Auteur et date */}
                            <div className="flex items-center justify-between text-xs text-gray-500">
                                <span className="font-medium">{review.author}</span>
                                <span>{new Date(review.date).toLocaleDateString('fr-FR')}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* CTA vers Trustpilot */}
                <div className="text-center mt-12">
                    <a
                        href={`https://fr.trustpilot.com/review/${TRUSTPILOT_CONFIG.domain}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 bg-gradient-to-r from-green-500 to-green-600 text-white px-8 py-3 rounded-full font-medium hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105"
                    >
                        Voir tous les avis sur Trustpilot
                        <ExternalLinkIcon className="w-4 h-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default TrustpilotSection;