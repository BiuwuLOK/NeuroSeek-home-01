import React from 'react';
import { Brain, Dna, Microscope, ChevronRight, Github, Linkedin, Twitter } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <nav className="absolute w-full z-10 px-6 py-4">
          <div className="max-w-7xl mx-auto flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <Brain className="w-8 h-8 text-indigo-600" />
              <span className="text-2xl font-bold text-gray-900">NeuroSeek</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#solutions" className="text-gray-600 hover:text-indigo-600">Solutions</a>
              <a href="#research" className="text-gray-600 hover:text-indigo-600">Research</a>
              <a href="#about" className="text-gray-600 hover:text-indigo-600">About</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600">Contact</a>
            </div>
          </div>
        </nav>
        
        <div className="relative pt-32 pb-16 sm:pb-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mb-8 lg:mb-0 lg:mt-12">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl">
                  <span className="block">Advancing</span>
                  <span className="block text-indigo-600">Neurotechnology</span>
                </h1>
                <p className="mt-6 text-xl text-gray-500">
                  Pioneering breakthrough solutions in neural interfaces and brain-computer interaction 
                  to enhance human cognitive capabilities.
                </p>
                <div className="mt-8 flex space-x-4">
                  <button className="bg-indigo-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-indigo-700 transition-colors flex items-center">
                    Get Started
                    <ChevronRight className="ml-2 w-4 h-4" />
                  </button>
                  <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                    Learn More
                  </button>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1626153651258-08c2e8b32df2?auto=format&fit=crop&w=800&q=80"
                  alt="Neural Network Visualization"
                  className="rounded-xl shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Features Section */}
      <section className="py-20 bg-white" id="solutions">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">Our Solutions</h2>
            <p className="mt-4 text-xl text-gray-500">Transforming neuroscience into practical applications</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-12">
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <Brain className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Neural Interfaces</h3>
              <p className="text-gray-600">Advanced brain-computer interfaces for seamless interaction with digital systems.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <Dna className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Cognitive Enhancement</h3>
              <p className="text-gray-600">Breakthrough technologies to amplify human cognitive capabilities.</p>
            </div>
            
            <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
              <Microscope className="w-12 h-12 text-indigo-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Neural Analytics</h3>
              <p className="text-gray-600">Advanced data analysis tools for understanding brain activity patterns.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Research Section */}
      <section className="py-20 bg-gray-50" id="research">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Cutting-edge Research</h2>
              <p className="text-xl text-gray-600 mb-8">
                Our team of researchers and engineers are pushing the boundaries of neurotechnology, 
                developing innovative solutions for tomorrow's challenges.
              </p>
              <ul className="space-y-4">
                {[
                  'Advanced neural signal processing',
                  'Machine learning for brain-computer interfaces',
                  'Non-invasive neural stimulation',
                  'Cognitive enhancement protocols'
                ].map((item, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <ChevronRight className="w-5 h-5 text-indigo-600" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 lg:mt-0">
              <img
                src="https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=800&q=80"
                alt="Research Lab"
                className="rounded-xl shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Brain className="w-6 h-6 text-indigo-400" />
                <span className="text-xl font-bold">NeuroSeek</span>
              </div>
              <p className="text-gray-400">Advancing human potential through neurotechnology</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#about" className="hover:text-indigo-400">About Us</a></li>
                <li><a href="#careers" className="hover:text-indigo-400">Careers</a></li>
                <li><a href="#contact" className="hover:text-indigo-400">Contact</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Resources</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#blog" className="hover:text-indigo-400">Blog</a></li>
                <li><a href="#research" className="hover:text-indigo-400">Research</a></li>
                <li><a href="#press" className="hover:text-indigo-400">Press Kit</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Connect</h4>
              <div className="flex space-x-4">
                <a href="#twitter" className="text-gray-400 hover:text-indigo-400">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#linkedin" className="text-gray-400 hover:text-indigo-400">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="#github" className="text-gray-400 hover:text-indigo-400">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} NeuroSeek. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;