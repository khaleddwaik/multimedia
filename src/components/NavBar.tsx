
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { Heart } from 'lucide-react';

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <NavLink to="/" className="flex items-center gap-2">
            <Heart className={`h-6 w-6 ${scrolled ? 'text-earth' : 'text-white'}`} />
            <span className={`text-xl font-bold font-playfair ${scrolled ? 'text-gray-800' : 'text-white'}`}>
              BreatheFree
            </span>
          </NavLink>
          
          <nav className="hidden md:flex space-x-1">
            <NavLink to="/" className={({isActive}) => 
              `nav-link ${scrolled ? '' : 'text-white hover:text-white'} ${isActive ? 'active-nav' : ''}`
            } end>
              Home
            </NavLink>
            <NavLink to="/resources" className={({isActive}) => 
              `nav-link ${scrolled ? '' : 'text-white hover:text-white'} ${isActive ? 'active-nav' : ''}`
            }>
              Resources
            </NavLink>
            <NavLink to="/success-stories" className={({isActive}) => 
              `nav-link ${scrolled ? '' : 'text-white hover:text-white'} ${isActive ? 'active-nav' : ''}`
            }>
              Success Stories
            </NavLink>
            <NavLink to="/activities" className={({isActive}) => 
              `nav-link ${scrolled ? '' : 'text-white hover:text-white'} ${isActive ? 'active-nav' : ''}`
            }>
              Activities
            </NavLink>
            <NavLink to="/community" className={({isActive}) => 
              `nav-link ${scrolled ? '' : 'text-white hover:text-white'} ${isActive ? 'active-nav' : ''}`
            }>
              Community
            </NavLink>
            <NavLink to="/contact" className={({isActive}) => 
              `nav-link ${scrolled ? '' : 'text-white hover:text-white'} ${isActive ? 'active-nav' : ''}`
            }>
              Contact
            </NavLink>
          </nav>
          
          <div className="md:hidden">
            <button 
              className={`p-2 ${scrolled ? 'text-gray-800' : 'text-white'}`}
              onClick={toggleMobileMenu}
              aria-label="Toggle menu"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
            
            {mobileMenuOpen && (
              <div className="absolute top-full left-0 right-0 bg-white shadow-lg py-4 px-4">
                <div className="flex flex-col space-y-2">
                  <NavLink 
                    to="/" 
                    className={({isActive}) => `px-4 py-2 ${isActive ? 'text-earth' : 'text-gray-800'}`}
                    onClick={() => setMobileMenuOpen(false)}
                    end
                  >
                    Home
                  </NavLink>
                  <NavLink 
                    to="/resources" 
                    className={({isActive}) => `px-4 py-2 ${isActive ? 'text-earth' : 'text-gray-800'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Resources
                  </NavLink>
                  <NavLink 
                    to="/success-stories" 
                    className={({isActive}) => `px-4 py-2 ${isActive ? 'text-earth' : 'text-gray-800'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Success Stories
                  </NavLink>
                  <NavLink 
                    to="/activities" 
                    className={({isActive}) => `px-4 py-2 ${isActive ? 'text-earth' : 'text-gray-800'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Activities
                  </NavLink>
                  <NavLink 
                    to="/community" 
                    className={({isActive}) => `px-4 py-2 ${isActive ? 'text-earth' : 'text-gray-800'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Community
                  </NavLink>
                  <NavLink 
                    to="/contact" 
                    className={({isActive}) => `px-4 py-2 ${isActive ? 'text-earth' : 'text-gray-800'}`}
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    Contact
                  </NavLink>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
