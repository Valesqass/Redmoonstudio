import React, { useState, useEffect } from "react";
import { MdGraphicEq, MdMenu, MdClose } from "react-icons/md";
import { FaDrum, FaShoppingCart } from "react-icons/fa";
import { HiOutlinePhone } from "react-icons/hi";
import Logo from "../assets/img/logo.png";

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Effet de scroll pour la navbar
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            {/* Navbar principale */}
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-inter ${isScrolled
                ? 'bg-black/95 backdrop-blur-md border-b border-gray-800/50 shadow-lg'
                : 'bg-black/80 backdrop-blur-sm'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 lg:h-20">

                        {/* Logo - Centré sur mobile */}
                        <div className="flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
                            <img
                                src={Logo}
                                alt="Rec Yourself"
                                className="h-16 sm:h-20 lg:h-24 w-auto object-contain transition-all duration-300 hover:scale-105 drop-shadow-lg"
                            />
                        </div>

                        {/* Navigation Desktop - Centrée */}
                        <div className="hidden lg:flex items-center justify-center flex-1 mx-8">
                            <div className="flex items-center space-x-8">
                                {/* Liens de navigation */}
                                <div className="flex space-x-8">
                                    <a href="#" className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group">
                                        Home
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group">
                                        Studio
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group">
                                        Prods
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                    <a href="#" className="text-gray-300 hover:text-white font-medium transition-colors duration-200 relative group">
                                        Contact
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                                    </a>
                                </div>

                                {/* Séparateur */}
                                <div className="h-6 w-px bg-gray-700"></div>

                                {/* Kits */}
                                <div className="flex items-center space-x-6">
                                    <a href="#" className="flex items-center text-red-400 hover:text-red-300 font-semibold transition-all duration-200 group">
                                        <MdGraphicEq className="mr-2 text-lg group-hover:animate-pulse" />
                                        <span>Vocal Kit</span>
                                    </a>
                                    <a href="#" className="flex items-center text-red-400 hover:text-red-300 font-semibold transition-all duration-200 group">
                                        <FaDrum className="mr-2 text-lg group-hover:animate-bounce" />
                                        <span>Instrumental Kit</span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Actions Desktop */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <a href="#" className="flex items-center text-gray-300 hover:text-white font-medium transition-colors duration-200 group">
                                <HiOutlinePhone className="mr-2 text-lg group-hover:animate-pulse" />
                                Contacter un Ingé
                            </a>
                            <button className="flex items-center bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white px-4 py-2 rounded-lg border border-red-700/50 transition-all duration-300 font-semibold shadow-lg hover:shadow-red-500/25 group">
                                <span>Panier</span>
                                <FaShoppingCart className="ml-2 text-sm group-hover:animate-bounce" />
                            </button>
                        </div>

                        {/* Bouton Menu Mobile */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                        >
                            {isMenuOpen ? <MdClose size={24} /> : <MdMenu size={24} />}
                        </button>
                    </div>
                </div>

                {/* Menu Mobile */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                    <div className="bg-black/95 backdrop-blur-md border-t border-gray-800/50">
                        <div className="px-4 py-6 space-y-4">
                            {/* Navigation Links */}
                            <div className="space-y-3">
                                <a href="#" className="block text-gray-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                                    Home
                                </a>
                                <a href="#" className="block text-gray-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                                    Studio
                                </a>
                                <a href="#" className="block text-gray-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                                    Prods
                                </a>
                                <a href="#" className="block text-gray-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                                    Contact
                                </a>
                            </div>

                            {/* Séparateur */}
                            <div className="h-px bg-gray-700 my-4"></div>

                            {/* Kits */}
                            <div className="space-y-3">
                                <a href="#" className="flex items-center text-red-400 hover:text-red-300 font-semibold py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                                    <MdGraphicEq className="mr-3 text-lg" />
                                    <span>Vocal Kit</span>
                                </a>
                                <a href="#" className="flex items-center text-red-400 hover:text-red-300 font-semibold py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                                    <FaDrum className="mr-3 text-lg" />
                                    <span>Instrumental Kit</span>
                                </a>
                            </div>

                            {/* Séparateur */}
                            <div className="h-px bg-gray-700 my-4"></div>

                            {/* Actions */}
                            <div className="space-y-3">
                                <a href="#" className="flex items-center text-gray-300 hover:text-white font-medium py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                                    <HiOutlinePhone className="mr-3 text-lg" />
                                    Contacter un Ingé
                                </a>
                                <button className="w-full flex items-center justify-center bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white px-4 py-3 rounded-lg border border-red-700/50 transition-all duration-300 font-semibold shadow-lg">
                                    <span>Panier</span>
                                    <FaShoppingCart className="ml-2 text-sm" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Spacer pour compenser la navbar fixe */}
            <div className="h-16 lg:h-20"></div>
        </>
    );
}
