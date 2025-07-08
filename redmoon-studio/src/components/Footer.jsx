import React from "react";
import { FiInstagram, FiTwitter, FiYoutube } from "react-icons/fi";
import HeroImg from "../assets/img/hero.png";
import Logo from "../assets/img/logo.png";

export default function Footer() {
  return (
    <footer className="relative bg-black border-t border-red-900/40 text-gray-300 pt-16 pb-8 px-4 font-inter overflow-hidden">

      <img src={HeroImg} alt="Hero Art" className="absolute left-1/2 top-0 -translate-x-1/2 opacity-5 w-[600px] md:w-[800px] pointer-events-none select-none blur-sm" style={{ zIndex: 0 }} />
      <div className="relative z-10 max-w-7xl mx-auto flex flex-col md:flex-row md:items-end md:justify-between gap-10">


        <div className="flex flex-col items-start gap-3">
          <img src={Logo} alt="Logo" className="h-12 w-auto object-contain mb-2" />
          <span className="text-sm text-red-400 italic tracking-wide">Créez sans limites.</span>
        </div>


        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 flex-1 text-center md:text-left">
          <div>
            <div className="font-bold text-white mb-3 text-xs uppercase tracking-wider">Produits</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-400 transition">Vocal Kit</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Instrumental Kit</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Mixage</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Mastering</a></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white mb-3 text-xs uppercase tracking-wider">Catégories</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-400 transition">Pro Access</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Templates</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Presets</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Plugins</a></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white mb-3 text-xs uppercase tracking-wider">Company</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-400 transition">À propos</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Contact</a></li>
              <li><a href="#" className="hover:text-red-400 transition">News</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Blog</a></li>
            </ul>
          </div>

          <div>
            <div className="font-bold text-white mb-3 text-xs uppercase tracking-wider">Info</div>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-red-400 transition">Mentions légales</a></li>
              <li><a href="#" className="hover:text-red-400 transition">CGV</a></li>
              <li><a href="#" className="hover:text-red-400 transition">Confidentialité</a></li>
              <li><a href="#" className="hover:text-red-400 transition">FAQ</a></li>
            </ul>
          </div>
        </div>


        <div className="flex flex-col items-end gap-4">
          <div className="flex space-x-6 text-2xl">
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors duration-200"><FiInstagram /></a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors duration-200"><FiTwitter /></a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-red-400 transition-colors duration-200"><FiYoutube /></a>
          </div>
          <img src={HeroImg} alt="Hero" className="w-20 opacity-80 drop-shadow-lg mt-2 animate-bounce-slow" />
        </div>
      </div>


      <div className="relative z-10 mt-10 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} Redmoon Studio. Tous droits réservés.
      </div>
      <style>{`
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
      `}</style>
    </footer>
  );
}