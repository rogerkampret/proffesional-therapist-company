import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl font-bold text-blue-600">
              MindWell Therapy
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('home')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              About Us
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('therapists')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Our Team
            </button>
            <button
              onClick={() => scrollToSection('testimonials')}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              Testimonials
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Contact Info */}
          <div className="hidden lg:flex items-center space-x-4 text-sm text-gray-600">
            <a href="tel:+1234567890" className="flex items-center space-x-1 hover:text-blue-600">
              <Phone size={16} />
              <span>(123) 456-7890</span>
            </a>
            <a href="mailto:info@mindwelltherapy.com" className="flex items-center space-x-1 hover:text-blue-600">
              <Mail size={16} />
              <span>info@mindwelltherapy.com</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100"
            aria-label="Toggle mobile menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection('home')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('therapists')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Our Team
              </button>
              <button
                onClick={() => scrollToSection('testimonials')}
                className="text-left text-gray-700 hover:text-blue-600 transition-colors duration-200"
              >
                Testimonials
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="text-left bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors duration-200 w-fit"
              >
                Contact
              </button>
              <div className="pt-4 border-t border-gray-200 space-y-2">
                <a href="tel:+1234567890" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                  <Phone size={16} />
                  <span>(123) 456-7890</span>
                </a>
                <a href="mailto:info@mindwelltherapy.com" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600">
                  <Mail size={16} />
                  <span>info@mindwelltherapy.com</span>
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;