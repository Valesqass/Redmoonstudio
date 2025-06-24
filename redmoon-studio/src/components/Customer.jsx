import React, { useState } from 'react';

const Customer = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Icônes SVG intégrées
  const ChevronLeftIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
    </svg>
  );

  const ChevronRightIcon = () => (
    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
    </svg>
  );

  const PlayIcon = () => (
    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
      <path d="M8 5v14l11-7z" />
    </svg>
  );

  // Données des témoignages vidéos
  const testimonials = [
    {
      id: 1,
      name: "Marie Dubois",
      role: "Productrice musicale",
      thumbnail: "https://via.placeholder.com/400x225/1a1a1a/ffffff?text=Video+1",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: "Une expérience incroyable qui a transformé ma façon de créer."
    },
    {
      id: 2,
      name: "Thomas Martin",
      role: "Artiste indépendant",
      thumbnail: "https://via.placeholder.com/400x225/1a1a1a/ffffff?text=Video+2",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: "Les outils proposés sont exactement ce dont j'avais besoin."
    },
    {
      id: 3,
      name: "Sophie Laurent",
      role: "DJ professionnelle",
      thumbnail: "https://via.placeholder.com/400x225/1a1a1a/ffffff?text=Video+3",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: "Un service client exceptionnel et des résultats au-delà de mes attentes."
    },
    {
      id: 4,
      name: "Alex Rivera",
      role: "Compositeur",
      thumbnail: "https://via.placeholder.com/400x225/1a1a1a/ffffff?text=Video+4",
      videoUrl: "https://www.youtube.com/embed/dQw4w9WgXcQ",
      quote: "La qualité audio obtenue est simplement parfaite."
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % Math.max(1, testimonials.length - 2));
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + Math.max(1, testimonials.length - 2)) % Math.max(1, testimonials.length - 2));
  };

  const openVideo = (testimonial) => {
    setSelectedVideo(testimonial);
  };

  const closeVideo = () => {
    setSelectedVideo(null);
  };

  return (
    <section className="py-20 bg-black text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-purple-600/20 border border-purple-600/30 mb-6">
            <span className="text-purple-400 text-sm font-medium">🎥 Témoignages</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            Ce que disent nos <span className="text-purple-400">clients</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            Découvrez les retours authentiques de nos utilisateurs qui ont transformé leur créativité musicale
          </p>
        </div>

        {/* Carrousel */}
        <div className="relative">
          {/* Navigation buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-300 backdrop-blur-sm border border-white/10"
            aria-label="Témoignage précédent"
          >
            <ChevronLeftIcon />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 rounded-full p-3 transition-all duration-300 backdrop-blur-sm border border-white/10"
            aria-label="Témoignage suivant"
          >
            <ChevronRightIcon />
          </button>

          {/* Carrousel container */}
          <div className="overflow-hidden mx-12">
            <div 
              className="flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * 33.333}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-1/3 flex-shrink-0 px-3">
                  <div 
                    className="relative group cursor-pointer rounded-xl overflow-hidden bg-gray-900 hover:scale-105 transition-all duration-300"
                    onClick={() => openVideo(testimonial)}
                  >
                    {/* Thumbnail */}
                    <div className="aspect-video relative">
                      <img
                        src={testimonial.thumbnail}
                        alt={`Témoignage de ${testimonial.name}`}
                        className="w-full h-full object-cover"
                      />
                      
                      {/* Play button overlay */}
                      <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/50 transition-all duration-300">
                        <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:scale-110 transition-transform duration-300">
                          <PlayIcon />
                        </div>
                      </div>
                    </div>
                    
                    {/* Info */}
                    <div className="p-6">
                      <h3 className="font-semibold text-lg mb-1">{testimonial.name}</h3>
                      <p className="text-purple-400 text-sm mb-3">{testimonial.role}</p>
                      <p className="text-gray-300 text-sm leading-relaxed">"{testimonial.quote}"</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Progress indicators */}
          <div className="flex justify-center mt-8 space-x-2">
            {Array.from({ length: Math.max(1, testimonials.length - 2) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? 'bg-purple-500' : 'bg-gray-600 hover:bg-gray-500'
                }`}
                aria-label={`Aller au slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal vidéo */}
      {selectedVideo && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full mx-4">
            <button
              onClick={closeVideo}
              className="absolute -top-12 right-0 text-white hover:text-gray-300 transition-colors"
              aria-label="Fermer la vidéo"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <div className="bg-black rounded-xl overflow-hidden">
              <div className="aspect-video">
                <iframe
                  src={selectedVideo.videoUrl}
                  title={`Témoignage de ${selectedVideo.name}`}
                  className="w-full h-full"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-2">{selectedVideo.name}</h3>
                <p className="text-purple-400 mb-3">{selectedVideo.role}</p>
                <p className="text-gray-300">"{selectedVideo.quote}"</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Customer;