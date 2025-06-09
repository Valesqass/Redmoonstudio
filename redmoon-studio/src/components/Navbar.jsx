import React from "react";
import { MdGraphicEq } from "react-icons/md";
import { FaDrum, FaShoppingCart } from "react-icons/fa";
import Logo from "../assets/img/logo.png";

export default function Navbar() {
    return (
        <nav className="bg-black text-white py-3 font-inter relative">
            {/* Desktop Navbar */}
            <div className="hidden md:flex justify-between items-center px-6">
                {/* Left Section */}
                <div className="flex items-center space-x-4">
                    <img src={Logo} alt="Rec Yourself" className="w-32" />

                    {/* Nav Links */}
                    <div className="flex space-x-6 text-gray-300">
                        <a href="#" className="font-semibold">Home</a>
                        <a href="#" className="font-semibold">Studio</a>
                        <a href="#" className="font-semibold">Prods</a>
                        <a href="#" className="font-semibold">Contact</a>
                    </div>

                    {/* Kits */}
                    <div className="flex items-center space-x-4 ml-4">
                        <a href="#" className="flex items-center text-red-500 font-bold">
                            <MdGraphicEq className="mr-1" />
                            <span className="font-extrabold">Vocal Kit</span>
                        </a>
                        <a href="#" className="flex items-center text-red-500 font-bold">
                            <FaDrum className="mr-1" />
                            <span className="font-extrabold">Instrumental Kit</span>
                        </a>
                    </div>
                </div>

                {/* Right Section */}
                <div className="flex items-center space-x-4">
                    <a href="#" className="text-gray-300 font-semibold">
                        Contacter un Ingé
                    </a>
                    <button className="flex items-center bg-red-900 text-red-400 text-sm px-3 py-1 rounded-md border border-red-800 hover:bg-red-800 font-bold">
                        <span className="font-extrabold">Panier</span> <FaShoppingCart className="ml-2" />
                    </button>
                </div>
            </div>

            {/* Mobile (responsive) — Full-width Logo */}
            <div className="md:hidden flex justify-center items-center px-4">
                <img
                    src={Logo}
                    alt="Rec Yourself"
                    className="w-full max-w-[280px] sm:max-w-[320px] object-contain"
                />
            </div>
        </nav>
    );
}
