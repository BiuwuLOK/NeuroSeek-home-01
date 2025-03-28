import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SolutionsSection from './components/SolutionsSection';
import ResearchSection from './components/ResearchSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <Navbar />
        <HeroSection />
      </header>

      <SolutionsSection />
      <ResearchSection />
      <Footer />
    </div>
  );
}

export default App;
