import { useState, useRef, useEffect } from "react";
import { FiX, FiChevronLeft, FiChevronRight, FiPlay } from "react-icons/fi";

import video1 from "../assets/video/video1.mp4";
import video2 from "../assets/video/video2.mp4";
import video3 from "../assets/video/video3.mp4";
import video4 from "../assets/video/video4.mp4";
import video5 from "../assets/video/video5.mp4";
import video6 from "../assets/video/video6.mp4";

function CustomerReviews() {
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const carouselRef = useRef(null);
    const modalVideoRef = useRef(null);

    const testimonials = [
        { id: 1, video: video1, title: "Transformation complète de mon home studio", author: "Alex M. - Producteur", duration: "2:15" },
        { id: 2, video: video2, title: "Résultats professionnels en quelques clics", author: "Sarah L. - Chanteuse", duration: "1:45" },
        { id: 3, video: video3, title: "Le kit qui a changé ma façon de mixer", author: "David R. - Ingénieur son", duration: "3:20" },
        { id: 4, video: video4, title: "Qualité studio à la maison", author: "Emma T. - Artiste indé", duration: "2:30" },
        { id: 5, video: video5, title: "Gain de temps énorme sur mes productions", author: "Marc K. - Beatmaker", duration: "1:55" },
        { id: 6, video: video6, title: "Enfin des vocals qui sonnent pro", author: "Lisa P. - Rappeuse", duration: "2:40" },
    ];

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    };

    const openVideoModal = (testimonial) => {
        setSelectedVideo(testimonial);
        document.body.style.overflow = "hidden";
    };

    const closeVideoModal = () => {
        if (modalVideoRef.current) {
            modalVideoRef.current.pause();
            modalVideoRef.current.currentTime = 0;
        }
        setSelectedVideo(null);
        document.body.style.overflow = "unset";
    };

    useEffect(() => {
        if (selectedVideo && modalVideoRef.current) {
            modalVideoRef.current.play();
        }
    }, [selectedVideo]);

    useEffect(() => {
        const handleKeyPress = (e) => {
            if (e.key === "Escape" && selectedVideo) {
                closeVideoModal();
            }
        };
        window.addEventListener("keydown", handleKeyPress);
        return () => window.removeEventListener("keydown", handleKeyPress);
    }, [selectedVideo]);

    useEffect(() => {
        if (carouselRef.current) {
            const scrollWidth = carouselRef.current.scrollWidth / testimonials.length;
            carouselRef.current.scrollTo({
                left: currentIndex * scrollWidth,
                behavior: "smooth",
            });
        }
    }, [currentIndex, testimonials.length]);

    return (
        <section className="py-12 bg-[#121212] relative overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-3 bg-gradient-to-r from-red-600/30 to-pink-600/30 backdrop-blur-md border border-red-600/40 rounded-full px-5 py-1.5 mb-5">
                        <span className="text-red-500 font-extrabold tracking-wide uppercase text-xs">LES RETOURS VIDEOS DE NOS CLIENTS</span>
                    </div>

                    <h2 className="text-2xl md:text-3xl font-extrabold text-white mb-4 leading-tight">
                        Ils ont transformé leur
                        <span className="block bg-gradient-to-r bg-red-500 bg-clip-text text-transparent">
                            son avec notre kit
                        </span>
                    </h2>

                    <p className="text-gray-400 text-sm max-w-xl mx-auto leading-relaxed tracking-wide">
                        Découvrez les retours authentiques de nos clients qui ont révolutionné
                        leur workflow de mixage vocal
                    </p>
                </div>

                <div className="relative">


                    <div
                        ref={carouselRef}
                        className="flex gap-3 overflow-x-auto scrollbar-hide snap-x snap-mandatory pb-3"
                        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
                    >
                        {testimonials.map((testimonial) => (
                            <div
                                key={testimonial.id}
                                className="flex-shrink-0 w-56 snap-center group cursor-pointer"
                                onClick={() => openVideoModal(testimonial)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === "Enter" || e.key === " ") openVideoModal(testimonial);
                                }}
                                aria-label={`Voir le témoignage de ${testimonial.author}`}
                            >
                                <div className="relative bg-gradient-to-br from-gray-800/60 to-gray-900/60 backdrop-blur-md border border-gray-700/60 rounded-2xl overflow-hidden hover:border-red-600 transition-all duration-500 hover:scale-[1.04] hover:shadow-xl hover:shadow-red-600/30">
                                    <div className="relative aspect-video bg-gray-900 overflow-hidden">
                                        <video
                                            src={testimonial.video}
                                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                                            muted
                                            preload="metadata"
                                            tabIndex={-1}
                                        />

                                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                            <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-lg transform scale-75 group-hover:scale-100 transition-transform duration-300">
                                                <FiPlay size={18} className="text-white ml-0.5" />
                                            </div>
                                        </div>

                                        <div className="absolute bottom-2 right-2 bg-black/90 backdrop-blur-md text-white text-xs px-2 py-0.5 rounded-lg font-semibold">
                                            {testimonial.duration}
                                        </div>

                                        <div className="absolute top-2 left-2 bg-gradient-to-r from-red-600 to-pink-600 text-white text-xs px-3 py-0.5 rounded-full font-bold tracking-wide opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform -translate-y-1 group-hover:translate-y-0">
                                            ▶ Voir le témoignage
                                        </div>
                                    </div>

                                    <div className="p-3">
                                        <h3 className="text-white font-extrabold text-base mb-1 line-clamp-2 group-hover:text-red-600 transition-colors duration-300">
                                            {testimonial.title}
                                        </h3>
                                        <p className="text-gray-400 text-xs font-semibold tracking-wide">
                                            {testimonial.author}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {selectedVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
                    <div
                        className="absolute inset-0 bg-black/95 backdrop-blur-md animate-in fade-in duration-300"
                        onClick={closeVideoModal}
                        aria-hidden="true"
                    />

                    <div className="relative w-full max-w-3xl mx-auto animate-in zoom-in-95 fade-in duration-500">
                        <button
                            onClick={closeVideoModal}
                            className="absolute -top-12 right-0 w-10 h-10 bg-white/10 backdrop-blur-md border border-white/30 rounded-full flex items-center justify-center text-white hover:bg-red-600 hover:border-red-600 transition-all duration-300 hover:scale-110 z-10"
                            aria-label="Fermer la vidéo"
                        >
                            <FiX size={20} />
                        </button>

                        <div className="relative bg-black rounded-2xl overflow-hidden shadow-xl">
                            <video
                                ref={modalVideoRef}
                                src={selectedVideo.video}
                                className="w-full aspect-video"
                                controls
                                autoPlay
                            />

                            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-5">
                                <h3 className="text-white font-extrabold text-lg mb-1">
                                    {selectedVideo.title}
                                </h3>
                                <p className="text-gray-300 font-semibold tracking-wide">
                                    {selectedVideo.author}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </section>
    );
}

export default CustomerReviews;