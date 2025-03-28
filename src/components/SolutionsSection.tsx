import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain, faMicroscope } from '@fortawesome/free-solid-svg-icons';
import { faDna } from '@fortawesome/free-solid-svg-icons';

const SolutionsSection = () => {
  return (
    <section className="py-20 bg-white" id="solutions">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900">Our Solutions</h2>
          <p className="mt-4 text-xl text-gray-500">Transforming neuroscience into practical applications</p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-12">
          <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <FontAwesomeIcon icon={faBrain} className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Neural Interfaces</h3>
            <p className="text-gray-600">Advanced brain-computer interfaces for seamless interaction with digital systems.</p>
          </div>
          
          <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <FontAwesomeIcon icon={faDna} className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Cognitive Enhancement</h3>
            <p className="text-gray-600">Breakthrough technologies to amplify human cognitive capabilities.</p>
          </div>
          
          <div className="p-6 rounded-xl bg-gray-50 hover:bg-gray-100 transition-colors">
            <FontAwesomeIcon icon={faMicroscope} className="w-12 h-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Neural Analytics</h3>
            <p className="text-gray-600">Advanced data analysis tools for understanding brain activity patterns.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
