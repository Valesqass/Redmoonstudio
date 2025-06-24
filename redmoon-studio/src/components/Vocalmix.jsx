import React, { useState, useRef, useEffect } from 'react';
import { FiPlay, FiPause, FiVolume2, FiMusic } from 'react-icons/fi';

function Vocalmix() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [currentVersion, setCurrentVersion] = useState('avec'); // 'avec' ou 'sans'
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [volume, setVolume] = useState(0.7);
    const [selectedTrack, setSelectedTrack] = useState(0); // Index du fichier sélectionné
    
    const audioWithRef = useRef(null);
    const audioWithoutRef = useRef(null);
    const progressRef = useRef(null);
    
    // Bibliothèque de fichiers audio (4 pistes)
    const audioLibrary = [
        {
            id: 0,
            name: "Track 1 - Pop Ballad",
            avec: '/audio/track1-with-mix.mp3',
            sans: '/audio/track1-without-mix.mp3'
        },
        {
            id: 1,
            name: "Track 2 - Rock Anthem",
            avec: '/audio/track2-with-mix.mp3',
            sans: '/audio/track2-without-mix.mp3'
        },
        {
            id: 2,
            name: "Track 3 - Jazz Standard",
            avec: '/audio/track3-with-mix.mp3',
            sans: '/audio/track3-without-mix.mp3'
        },
        {
            id: 3,
            name: "Track 4 - Electronic",
            avec: '/audio/track4-with-mix.mp3',
            sans: '/audio/track4-without-mix.mp3'
        }
    ];
    
    // Fichier actuellement sélectionné
    const currentTrack = audioLibrary[selectedTrack];
    
    // Synchronisation des deux lecteurs audio
    useEffect(() => {
        const audioWith = audioWithRef.current;
        const audioWithout = audioWithoutRef.current;
        
        if (audioWith && audioWithout) {
            // Réinitialiser les volumes
            audioWith.volume = currentVersion === 'avec' ? volume : 0;
            audioWithout.volume = currentVersion === 'sans' ? volume : 0;
            
            // Synchroniser la durée
            const handleLoadedMetadata = () => {
                setDuration(audioWith.duration);
            };
            
            // Mettre à jour le temps actuel
            const handleTimeUpdate = () => {
                setCurrentTime(audioWith.currentTime);
            };
            
            audioWith.addEventListener('loadedmetadata', handleLoadedMetadata);
            audioWith.addEventListener('timeupdate', handleTimeUpdate);
            
            return () => {
                audioWith.removeEventListener('loadedmetadata', handleLoadedMetadata);
                audioWith.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, [volume, currentVersion, selectedTrack]);
    
    // Fonction pour changer de fichier audio
    const selectTrack = (trackIndex) => {
        // Arrêter la lecture actuelle
        if (audioWithRef.current) audioWithRef.current.pause();
        if (audioWithoutRef.current) audioWithoutRef.current.pause();
        
        setIsPlaying(false);
        setCurrentTime(0);
        setSelectedTrack(trackIndex);
        setCurrentVersion('avec'); // Redémarrer avec la version "avec" par défaut
    };
    
    // Fonction pour basculer entre les versions (optimisée)
    const switchVersion = (version) => {
        const currentAudio = currentVersion === 'avec' ? audioWithRef.current : audioWithoutRef.current;
        const newAudio = version === 'avec' ? audioWithRef.current : audioWithoutRef.current;
        
        if (currentAudio && newAudio) {
            const savedTime = currentAudio.currentTime;
            const wasPlaying = !currentAudio.paused;
            
            // Synchroniser le temps sur le nouvel audio
            newAudio.currentTime = savedTime;
            
            // Gérer les volumes (mute/unmute)
            if (version === 'avec') {
                audioWithRef.current.volume = volume;
                audioWithoutRef.current.volume = 0;
                if (wasPlaying) audioWithRef.current.play();
                audioWithoutRef.current.pause();
            } else {
                audioWithoutRef.current.volume = volume;
                audioWithRef.current.volume = 0;
                if (wasPlaying) audioWithoutRef.current.play();
                audioWithRef.current.pause();
            }
            
            setCurrentVersion(version);
        }
    };
    
    // Fonction play/pause
    const togglePlayPause = () => {
        const currentAudio = currentVersion === 'avec' ? audioWithRef.current : audioWithoutRef.current;
        
        if (currentAudio) {
            if (isPlaying) {
                currentAudio.pause();
            } else {
                currentAudio.play();
            }
            setIsPlaying(!isPlaying);
        }
    };
    
    // Fonction pour changer la position
    const handleProgressClick = (e) => {
        const progressBar = progressRef.current;
        const audioWith = audioWithRef.current;
        const audioWithout = audioWithoutRef.current;
        
        if (progressBar && audioWith && audioWithout) {
            const rect = progressBar.getBoundingClientRect();
            const clickX = e.clientX - rect.left;
            const newTime = (clickX / rect.width) * duration;
            
            // Synchroniser les deux audios
            audioWith.currentTime = newTime;
            audioWithout.currentTime = newTime;
            setCurrentTime(newTime);
        }
    };
    
    // Formatage du temps
    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds.toString().padStart(2, '0')}`;
    };

    return (
        <>
            <div className="w-full flex justify-center px-4 sm:px-6 lg:px-8">
                <div className="w-full max-w-3xl bg-[#121212] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 rounded-2xl">
                    {/* Audio Elements (cachés) */}
                    <audio 
                        ref={audioWithRef} 
                        src={currentTrack.avec} 
                        preload="metadata"
                        onEnded={() => setIsPlaying(false)}
                    />
                    <audio 
                        ref={audioWithoutRef} 
                        src={currentTrack.sans} 
                        preload="metadata"
                        onEnded={() => setIsPlaying(false)}
                    />
                    
                    {/* Header Section */}
                    <div className="text-center mb-8 sm:mb-12">
                        <div className="text-red-500 text-sm font-medium mb-6 tracking-wider uppercase animate-pulse">
                            Avec et sans le Vocal Kit
                        </div>
                        
                        {/* Sélecteur de fichiers - 4 pistes en grille responsive */}
                        <div className="mb-8">
                            <h3 className="text-white text-lg font-bold mb-6">Choisissez un fichier audio</h3>
                            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 max-w-2xl mx-auto">
                                {audioLibrary.map((track, index) => (
                                    <button
                                        key={track.id}
                                        onClick={() => selectTrack(index)}
                                        className={`p-3 sm:p-4 rounded-xl font-medium transition-all duration-300 transform hover:scale-105 ${
                                            selectedTrack === index
                                                ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/30'
                                                : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                        }`}
                                    >
                                        <FiMusic className="w-5 h-5 mx-auto mb-2" />
                                        <div className="text-xs sm:text-sm font-semibold">{track.name}</div>
                                    </button>
                                ))}
                            </div>
                        </div>
                        
                        {/* Lecteur Audio Interactif */}
                        <div className="bg-[#1a1a1a] border border-gray-800 rounded-2xl p-6 sm:p-8 max-w-xl mx-auto">
                            {/* Titre du lecteur */}
                            <div className="text-center mb-6">
                                <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">{currentTrack.name}</h3>
                                <p className="text-gray-400 text-sm">Basculez entre les versions avec et sans mix</p>
                            </div>
                            
                            {/* Boutons de basculement */}
                            <div className="flex justify-center gap-4 mb-8">
                                <button
                                    onClick={() => switchVersion('avec')}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                                        currentVersion === 'avec'
                                            ? 'bg-gradient-to-r from-red-500 to-pink-500 text-white shadow-lg shadow-red-500/30'
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                                >
                                    AVEC MIX
                                </button>
                                <button
                                    onClick={() => switchVersion('sans')}
                                    className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 ${
                                        currentVersion === 'sans'
                                            ? 'bg-gradient-to-r from-blue-500 to-cyan-500 text-white shadow-lg shadow-blue-500/30'
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                                    }`}
                                >
                                    SANS MIX
                                </button>
                            </div>
                            
                            {/* Contrôles de lecture */}
                            <div className="flex items-center gap-4 mb-6">
                                {/* Bouton Play/Pause */}
                                <button
                                    onClick={togglePlayPause}
                                    className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-full flex items-center justify-center text-white hover:scale-110 transition-transform duration-200 shadow-lg flex-shrink-0"
                                >
                                    {isPlaying ? <FiPause className="w-5 h-5" /> : <FiPlay className="w-5 h-5 ml-1" />}
                                </button>
                                
                                {/* Barre de progression */}
                                <div className="flex-1">
                                    <div
                                        ref={progressRef}
                                        onClick={handleProgressClick}
                                        className="h-2 bg-gray-700 rounded-full cursor-pointer relative overflow-hidden"
                                    >
                                        <div
                                            className="h-full bg-gradient-to-r from-red-500 to-pink-500 rounded-full transition-all duration-100"
                                            style={{ width: `${(currentTime / duration) * 100 || 0}%` }}
                                        />
                                        {/* Indicateur de position */}
                                        <div
                                            className="absolute top-1/2 transform -translate-y-1/2 w-4 h-4 bg-white rounded-full shadow-lg transition-all duration-100"
                                            style={{ left: `${(currentTime / duration) * 100 || 0}%`, marginLeft: '-8px' }}
                                        />
                                    </div>
                                </div>
                                
                                {/* Contrôle du volume */}
                                <div className="flex items-center gap-2 flex-shrink-0">
                                    <FiVolume2 className="w-4 h-4 text-gray-400" />
                                    <input
                                        type="range"
                                        min="0"
                                        max="1"
                                        step="0.1"
                                        value={volume}
                                        onChange={(e) => setVolume(parseFloat(e.target.value))}
                                        className="w-20 h-1 bg-gray-700 rounded-full appearance-none cursor-pointer"
                                    />
                                </div>
                            </div>
                            
                            {/* Temps */}
                            <div className="flex justify-between items-center text-sm text-gray-400">
                                <span className="font-mono">{formatTime(currentTime)}</span>
                                <span className={`font-medium px-3 py-1 rounded-full text-xs ${
                                    currentVersion === 'avec' 
                                        ? 'bg-red-500/20 text-red-400 border border-red-500/30' 
                                        : 'bg-blue-500/20 text-blue-400 border border-blue-500/30'
                                }`}>
                                    {currentVersion === 'avec' ? 'AVEC MIX' : 'SANS MIX'}
                                </span>
                                <span className="font-mono">{formatTime(duration)}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Ligne de séparation */}
            <hr className="mt-2 border-gray" />
        </>
    );
}

export default Vocalmix;