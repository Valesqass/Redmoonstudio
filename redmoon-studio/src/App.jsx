import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import Vocalmix from './components/Vocalmix';
import Sub from './components/Subheading'; 
import Ask from './components/Ask';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div>
        <Hero />
        {/* Vocalmix et Ask centrés avec responsive */}
        <div className="flex justify-center px-4 sm:px-8 lg:px-20 -mt-8 bg-[#121212]">
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl">
            <Vocalmix />
            <Ask />
          </div>
        </div>
      </div>
      
      {/* Sub maintenant à l'extérieur du div principal, tout en bas */}
      <Sub />
    </div>
  );
}

export default App;