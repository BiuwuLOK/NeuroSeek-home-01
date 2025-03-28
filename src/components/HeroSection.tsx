import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import neuralNetworkImage from '../assets/img/1685456246325.jpg';


const HeroSection = () => {
  return (
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
                <FontAwesomeIcon icon={faChevronRight} className="ml-2 w-4 h-4" />
              </button>
              <button className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg font-medium hover:border-indigo-600 hover:text-indigo-600 transition-colors">
                Learn More
              </button>
            </div>
          </div>
          <div className="relative">
            <img
              src={neuralNetworkImage}
              alt="Neural Network Visualization"
              className="rounded-xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
