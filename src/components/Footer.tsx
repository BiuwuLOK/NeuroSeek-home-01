import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBrain } from '@fortawesome/free-solid-svg-icons';
import { faTwitter, faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <FontAwesomeIcon icon={faBrain} className="w-6 h-6 text-indigo-400" />
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
                <FontAwesomeIcon icon={faTwitter} className="w-6 h-6" />
              </a>
              <a href="#linkedin" className="text-gray-400 hover:text-indigo-400">
                <FontAwesomeIcon icon={faLinkedin} className="w-6 h-6" />
              </a>
              <a href="#github" className="text-gray-400 hover:text-indigo-400">
                <FontAwesomeIcon icon={faGithub} className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} NeuroSeek. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
