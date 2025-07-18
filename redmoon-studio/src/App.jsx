import Navbar from './components/Navbar'
import Hero from "./components/Hero";
import Vocalmix from './components/Vocalmix';
import Sub from './components/Subheading';
import Ask from './components/Ask';
import CustomerReviews from './components/CustomerReviews';
import TrustpilotSection from './components/TrustpilotSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <div>
        <Hero />
        <div className="flex justify-center lg:justify-end lg:pr-20 -mt-8 bg-[#121212] px-4 lg:px-0">
          <div className="w-full max-w-md sm:max-w-lg lg:max-w-2xl lg:mr-44">
            <Vocalmix />
            <Ask />
          </div>
        </div>
      </div>
      <Sub />
      <TrustpilotSection />
      <CustomerReviews />
      <Footer />

    </div>
  );
}

export default App;