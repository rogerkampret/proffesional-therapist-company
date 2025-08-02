import React from 'react';
import { Phone, Mail, MapPin, Facebook, Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-blue-400">MindWell Therapy</h3>
            <p className="text-gray-300 leading-relaxed">
              Professional mental health services dedicated to helping you achieve 
              wellness and personal growth in a supportive, caring environment.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-400 transition-colors duration-200">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button 
                  onClick={() => scrollToSection('home')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('about')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  About Us
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('therapists')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Our Team
                </button>
              </li>
              <li>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-gray-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Services</h4>
            <ul className="space-y-2 text-gray-300">
              <li>Individual Therapy</li>
              <li>Couples Therapy</li>
              <li>Family Therapy</li>
              <li>Child & Adolescent</li>
              <li>Group Therapy</li>
              <li>Crisis Intervention</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-blue-400" />
                <div>
                  <p className="text-gray-300">(123) 456-7890</p>
                  <p className="text-xs text-gray-400">Main Line</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone size={16} className="text-red-400" />
                <div>
                  <p className="text-gray-300">(123) 456-7891</p>
                  <p className="text-xs text-gray-400">Crisis Line (24/7)</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail size={16} className="text-blue-400" />
                <p className="text-gray-300">info@mindwelltherapy.com</p>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin size={16} className="text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>123 Wellness Way</p>
                  <p>Denver, CO 80202</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-gray-400">
              <p>&copy; 2025 MindWell Therapy. All rights reserved.</p>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">Privacy Policy</a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">Terms of Service</a>
                <a href="#" className="hover:text-blue-400 transition-colors duration-200">HIPAA Notice</a>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-sm text-gray-400">
              <span>Made with</span>
              <Heart size={16} className="text-red-400 fill-current" />
              <span>for mental wellness</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;