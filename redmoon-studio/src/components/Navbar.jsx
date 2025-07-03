import React, { useState, useEffect } from 'react';
import { FiPhoneCall, FiX, FiMessageCircle, FiCopy, FiCheck } from 'react-icons/fi';
import { MdGraphicEq, MdClose, MdMenu } from 'react-icons/md';
import { FaDrum, FaShoppingCart } from 'react-icons/fa';
import { HiOutlinePhone } from 'react-icons/hi';
import Logo from '../assets/img/logo.png';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

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
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-inter ${isScrolled
                ? 'bg-black/90 backdrop-blur-md border-b border-red-700/30 shadow-lg'
                : 'bg-black/80 backdrop-blur-sm'
                }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-16 lg:h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 flex items-center">
                            <img
                                src={Logo}
                                alt="Rec Yourself"
                                className="h-14 sm:h-20 lg:h-24 w-auto object-contain transition-all duration-300 hover:scale-110 drop-shadow-lg"
                            />
                        </div>
                        {/* Desktop Navigation */}
                        <div className="hidden lg:flex items-center flex-1 justify-center mx-8">
                            <div className="flex items-center space-x-10">
                                <a href="#" className="text-gray-200 hover:text-red-400 font-semibold text-lg transition-colors duration-200 relative group">
                                    Home
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                                <a href="#" className="text-gray-200 hover:text-red-400 font-semibold text-lg transition-colors duration-200 relative group">
                                    Studio
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                                <a href="#" className="text-gray-200 hover:text-red-400 font-semibold text-lg transition-colors duration-200 relative group">
                                    Prods
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                                <a href="#" className="text-gray-200 hover:text-red-400 font-semibold text-lg transition-colors duration-200 relative group">
                                    Contact
                                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-red-500 transition-all duration-300 group-hover:w-full"></span>
                                </a>
                            </div>
                            <div className="h-6 w-px bg-gray-700 mx-8"></div>
                            <div className="flex items-center space-x-8">
                                <a href="#" className="flex items-center text-red-400 hover:text-red-300 font-semibold transition-all duration-200 group">
                                    <MdGraphicEq className="mr-2 text-xl group-hover:animate-pulse" />
                                    <span>Vocal Kit</span>
                                </a>
                                <a href="#" className="flex items-center text-red-400 hover:text-red-300 font-semibold transition-all duration-200 group">
                                    <FaDrum className="mr-2 text-xl group-hover:animate-bounce" />
                                    <span>Instrumental Kit</span>
                                </a>
                            </div>
                        </div>
                        {/* Desktop Actions */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <button className="flex items-center bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white px-5 py-2 rounded-xl border border-red-700/50 transition-all duration-300 font-semibold shadow-lg hover:shadow-red-500/25 group">
                                <span>Panier</span>
                                <FaShoppingCart className="ml-2 text-lg group-hover:animate-bounce" />
                            </button>
                        </div>
                        {/* Mobile Menu Button */}
                        <button
                            onClick={toggleMenu}
                            className="lg:hidden absolute right-4 top-1/2 transform -translate-y-1/2 p-2 rounded-lg text-gray-300 hover:text-white hover:bg-gray-800/50 transition-all duration-200"
                        >
                            {isMenuOpen ? <MdClose size={28} /> : <MdMenu size={28} />}
                        </button>
                    </div>
                </div>
                {/* Mobile Menu */}
                <div className={`lg:hidden transition-all duration-300 ease-in-out overflow-hidden ${isMenuOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
                    <div className="bg-black/95 backdrop-blur-md border-t border-red-700/40">
                        <div className="px-4 py-6 space-y-4">
                            <div className="space-y-3">
                                <a href="#" className="block text-gray-200 hover:text-red-400 font-semibold py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                                    Home
                                </a>
                                <a href="#" className="block text-gray-200 hover:text-red-400 font-semibold py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                                    Studio
                                </a>
                                <a href="#" className="block text-gray-200 hover:text-red-400 font-semibold py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                                    Prods
                                </a>
                                <a href="#" className="block text-gray-200 hover:text-red-400 font-semibold py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                                    Contact
                                </a>
                            </div>
                            <div className="h-px bg-gray-700 my-4"></div>
                            <div className="space-y-3">
                                <a href="#" className="flex items-center text-red-400 hover:text-red-300 font-semibold py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                                    <MdGraphicEq className="mr-3 text-xl" />
                                    <span>Vocal Kit</span>
                                </a>
                                <a href="#" className="flex items-center text-red-400 hover:text-red-300 font-semibold py-2 px-3 rounded-lg hover:bg-gray-800/50 transition-all duration-200">
                                    <FaDrum className="mr-3 text-xl" />
                                    <span>Instrumental Kit</span>
                                </a>
                            </div>
                            <div className="h-px bg-gray-700 my-4"></div>
                            <div className="space-y-3">
                                <button className="w-full flex items-center justify-center bg-gradient-to-r from-red-900 to-red-800 hover:from-red-800 hover:to-red-700 text-white px-4 py-3 rounded-xl border border-red-700/50 transition-all duration-300 font-semibold shadow-lg">
                                    <span>Panier</span>
                                    <FaShoppingCart className="ml-2 text-lg" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Spacer for fixed navbar */}
            <div className="h-16 lg:h-20"></div>
        </>
    );
}

export default Navbar;
