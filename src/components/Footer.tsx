
import React from 'react';
import { Link } from 'react-router-dom';
import { Heart, Mail, Users, Book, Calendar, Check } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Heart className="h-6 w-6 text-earth" />
              <span className="text-xl font-bold font-playfair">BreatheFree</span>
            </div>
            <p className="text-gray-400 mb-4">
              Supporting you on your journey to a smoke-free life. We provide resources, community support, and proven strategies to help you quit smoking for good.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-earth transition-colors" aria-label="Instagram">
                <Users className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-earth transition-colors" aria-label="YouTube">
                <Book className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-earth transition-colors" aria-label="Twitter">
                <Calendar className="h-5 w-5" />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-earth transition-colors" aria-label="Facebook">
                <Check className="h-5 w-5" />
              </a>
              <a href="mailto:help@breathefree.org" className="text-gray-400 hover:text-earth transition-colors" aria-label="Email">
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/" className="text-gray-400 hover:text-earth transition-colors">Home</Link></li>
              <li><Link to="/resources" className="text-gray-400 hover:text-earth transition-colors">Resources</Link></li>
              <li><Link to="/success-stories" className="text-gray-400 hover:text-earth transition-colors">Success Stories</Link></li>
              <li><Link to="/activities" className="text-gray-400 hover:text-earth transition-colors">Alternative Activities</Link></li>
              <li><Link to="/community" className="text-gray-400 hover:text-earth transition-colors">Community</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-earth transition-colors">Contact</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
            <p className="text-gray-400 mb-4">
              Subscribe to receive tips, encouragement and success stories to support your quit journey.
            </p>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-lg focus:outline-none text-gray-800 w-full"
              />
              <button className="bg-earth px-4 py-2 rounded-r-lg hover:bg-earth-dark transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500">
          <p>© {new Date().getFullYear()} BreatheFree. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
