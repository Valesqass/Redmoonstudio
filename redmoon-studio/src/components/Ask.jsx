import { useState } from 'react';

const Ask = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);

  const faqData = [
    {
      id: 1,
      question: "Contenu du Vocal Mix Kit",
      answer: "Notre Vocal Mix Kit contient des presets professionnels, des chaînes d'effets optimisées, et des templates de mixage pour sublimer vos voix."
    },
    {
      id: 2,
      question: "Information sur les plugins et logiciel",
      answer: "Compatible avec tous les DAW majeurs (Pro Tools, Logic Pro, Ableton Live, FL Studio). Plugins inclus : EQ, Compresseur, Reverb, Delay."
    },
    {
      id: 3,
      question: "Installation du Vocal Mix Kit",
      answer: "Installation simple en 3 étapes : téléchargement, extraction des fichiers, et importation dans votre DAW. Guide détaillé inclus."
    },
    {
      id: 4,
      question: "Nos garanties",
      answer: "Garantie satisfait ou remboursé 30 jours. Support technique gratuit à vie. Mises à jour gratuites pendant 1 an."
    }
  ];

  const toggleQuestion = (id) => {
    setActiveQuestion(activeQuestion === id ? null : id);
  };

  return (
    <div className="max-w-md mx-auto mt-8 px-4">
      <h2 className="text-lg font-semibold mb-6 text-white text-center">FAQ</h2>
      <div className="space-y-3">
        {faqData.map((item) => (
          <div 
            key={item.id} 
            className="bg-gray-900/50 border border-gray-800/50 rounded-lg overflow-hidden backdrop-blur-sm transition-all duration-300 hover:border-gray-700/50"
          >
            <button
              className="w-full text-left p-4 flex justify-between items-center text-white transition-all duration-200 hover:bg-gray-800/30 group"
              onClick={() => toggleQuestion(item.id)}
            >
              <span className="font-medium text-sm group-hover:text-gray-200 transition-colors">
                {item.question}
              </span>
              <span 
                className={`transform transition-all duration-300 text-gray-400 group-hover:text-white ${
                  activeQuestion === item.id ? 'rotate-180 text-red-400' : ''
                }`}
              >
                ▼
              </span>
            </button>
            <div 
              className={`overflow-hidden transition-all duration-300 ease-in-out ${
                activeQuestion === item.id 
                  ? 'max-h-96 opacity-100' 
                  : 'max-h-0 opacity-0'
              }`}
            >
              <div className="border-t border-gray-800/50 bg-gray-900/30">
                <p className="p-4 text-gray-300 text-sm leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ask;