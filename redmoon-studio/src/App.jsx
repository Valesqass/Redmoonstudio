import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import VocalKitSection from './components/Vocalmix';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <Hero />
      <VocalKitSection />
    </div>
  );
}

export default App;
