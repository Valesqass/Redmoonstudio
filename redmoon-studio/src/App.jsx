import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import Vocalmix from './components/Vocalmix';
import Sub from './components/Subheading'; 
import Ask from './components/Ask';
import Customer from './components/Customer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div>
        <Hero />
        {/* Vocalmix positionné à droite sur desktop, centré sur mobile */}
        <div className="flex justify-center lg:justify-end lg:pr-20 -mt-8 bg-[#121212] px-4 lg:px-0">
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl">
            <Vocalmix />
            <Ask />
          </div>
        </div>
      </div>
     
      {/* Sub maintenant à l'extérieur du div principal, tout en bas */}
      <Sub />
       <Customer />
    </div>
  );
}

export default App;