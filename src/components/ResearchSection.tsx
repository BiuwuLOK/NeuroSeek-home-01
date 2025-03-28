import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';

const ResearchSection = () => {
  return (
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
                  <FontAwesomeIcon icon={faChevronRight} className="w-5 h-5 text-indigo-600" />
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
  );
};

export default ResearchSection;
