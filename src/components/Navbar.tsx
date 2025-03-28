import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  return (
    <nav className="fixed w-full z-10 px-6 py-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-8 py-3 bg-white rounded-lg shadow-lg shadow-indigo-400/40 border border-indigo-200">
        <div className="flex items-center space-x-2">
          <FontAwesomeIcon icon={faBrain} className="w-8 h-8 text-indigo-600" />
          <a href="#" className="text-2xl font-bold text-gray-900">NeuroSeek</a>
        </div>
        <div className="hidden md:flex space-x-8">
          <a href="#solutions" className="text-gray-600 hover:text-indigo-600 transition-colors">Solutions</a>
          <a href="#research" className="text-gray-600 hover:text-indigo-600 transition-colors">Research</a>
          <a href="#about" className="text-gray-600 hover:text-indigo-600 transition-colors">About</a>
          <a href="#contact" className="text-gray-600 hover:text-indigo-600 transition-colors">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
