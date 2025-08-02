import React, { useState, useEffect } from 'react';
import { Search, X, User, FileText, MapPin, Phone, Star } from 'lucide-react';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface SearchResult {
  type: 'therapist' | 'service' | 'location' | 'faq';
  title: string;
  description: string;
  category: string;
  action?: () => void;
  rating?: number;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<SearchResult[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const searchData: SearchResult[] = [
    // Therapists
    {
      type: 'therapist',
      title: 'Dr. Sarah Mitchell',
      description: 'Licensed Clinical Psychologist specializing in Anxiety, Depression, and Trauma Recovery',
      category: 'Therapist',
      rating: 4.9,
      action: () => scrollToSection('therapists')
    },
    {
      type: 'therapist',
      title: 'Michael Rodriguez',
      description: 'Licensed Marriage & Family Therapist specializing in Couples and Family Counseling',
      category: 'Therapist',
      rating: 4.8,
      action: () => scrollToSection('therapists')
    },
    {
      type: 'therapist',
      title: 'Dr. Emily Chen',
      description: 'Licensed Clinical Social Worker specializing in Child & Adolescent Therapy',
      category: 'Therapist',
      rating: 4.9,
      action: () => scrollToSection('therapists')
    },
    {
      type: 'therapist',
      title: 'James Thompson',
      description: 'Licensed Professional Counselor specializing in Addiction Recovery and Crisis Intervention',
      category: 'Therapist',
      rating: 4.7,
      action: () => scrollToSection('therapists')
    },
    
    // Services
    {
      type: 'service',
      title: 'Individual Therapy',
      description: 'One-on-one sessions for anxiety, depression, trauma, and personal growth',
      category: 'Service',
      action: () => scrollToSection('services')
    },
    {
      type: 'service',
      title: 'Couples Therapy',
      description: 'Relationship counseling to strengthen communication and resolve conflicts',
      category: 'Service',
      action: () => scrollToSection('services')
    },
    {
      type: 'service',
      title: 'Family Therapy',
      description: 'Heal family dynamics and improve relationships between family members',
      category: 'Service',
      action: () => scrollToSection('services')
    },
    {
      type: 'service',
      title: 'Child Therapy',
      description: 'Specialized care for children with behavioral and emotional challenges',
      category: 'Service',
      action: () => scrollToSection('services')
    },
    {
      type: 'service',
      title: 'Crisis Intervention',
      description: '24/7 support for mental health emergencies and crisis situations',
      category: 'Service',
      action: () => scrollToSection('services')
    },
    {
      type: 'service',
      title: 'Group Therapy',
      description: 'Connect with others facing similar challenges in supportive group settings',
      category: 'Service',
      action: () => scrollToSection('services')
    },
    
    // Locations
    {
      type: 'location',
      title: 'Denver Office',
      description: 'Main Office: 123 Wellness Way, Denver, CO 80202',
      category: 'Location',
      action: () => scrollToSection('contact')
    },
    {
      type: 'location',
      title: 'Boulder Office',
      description: '456 Mountain View Dr, Boulder, CO 80301',
      category: 'Location',
      action: () => scrollToSection('contact')
    },
    {
      type: 'location',
      title: 'Fort Collins Office',
      description: '789 Harmony Rd, Fort Collins, CO 80526',
      category: 'Location',
      action: () => scrollToSection('contact')
    },
    
    // FAQ Topics
    {
      type: 'faq',
      title: 'How do I know if therapy is right for me?',
      description: 'Learn about the signs that indicate therapy might be helpful for your situation',
      category: 'FAQ',
      action: () => scrollToSection('faq')
    },
    {
      type: 'faq',
      title: 'What should I expect in my first session?',
      description: 'Understanding the intake process and what happens in your first therapy session',
      category: 'FAQ',
      action: () => scrollToSection('faq')
    },
    {
      type: 'faq',
      title: 'Do you accept my insurance?',
      description: 'Information about insurance coverage and payment options',
      category: 'FAQ',
      action: () => scrollToSection('insurance')
    },
    {
      type: 'faq',
      title: 'How long does therapy take?',
      description: 'Understanding therapy duration and what factors influence treatment length',
      category: 'FAQ',
      action: () => scrollToSection('faq')
    },
    {
      type: 'faq',
      title: 'Is therapy confidential?',
      description: 'Learn about privacy, HIPAA protection, and confidentiality in therapy',
      category: 'FAQ',
      action: () => scrollToSection('faq')
    }
  ];

  const scrollToSection = (sectionId: string) => {
    onClose();
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    if (query.length < 2) {
      setResults([]);
      return;
    }

    setIsLoading(true);
    
    // Simulate search delay
    const timer = setTimeout(() => {
      const filtered = searchData.filter(item => 
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      );
      setResults(filtered);
      setIsLoading(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [query]);

  const getIcon = (type: string) => {
    switch (type) {
      case 'therapist': return User;
      case 'service': return FileText;
      case 'location': return MapPin;
      case 'faq': return FileText;
      default: return FileText;
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Therapist': return 'bg-blue-100 text-blue-800';
      case 'Service': return 'bg-green-100 text-green-800';
      case 'Location': return 'bg-amber-100 text-amber-800';
      case 'FAQ': return 'bg-purple-100 text-purple-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-start justify-center z-50 p-4 pt-20">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-gray-200">
          <div className="flex items-center space-x-4">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search therapists, services, locations..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-lg"
                autoFocus
              />
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X size={24} />
            </button>
          </div>
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          {query.length < 2 ? (
            <div className="p-8 text-center text-gray-500">
              <Search className="mx-auto mb-4 text-gray-300" size={48} />
              <p className="text-lg">Start typing to search our therapists, services, and resources</p>
              <p className="text-sm mt-2">Try searching for "anxiety", "couples therapy", or a therapist's name</p>
            </div>
          ) : isLoading ? (
            <div className="p-8 text-center">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Searching...</p>
            </div>
          ) : results.length === 0 ? (
            <div className="p-8 text-center text-gray-500">
              <Search className="mx-auto mb-4 text-gray-300" size={48} />
              <p className="text-lg">No results found for "{query}"</p>
              <p className="text-sm mt-2">Try searching for different keywords or browse our services below</p>
              <div className="mt-4 space-x-2">
                <button 
                  onClick={() => scrollToSection('services')}
                  className="text-blue-600 hover:underline text-sm"
                >
                  View All Services
                </button>
                <span className="text-gray-300">|</span>
                <button 
                  onClick={() => scrollToSection('therapists')}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Meet Our Team
                </button>
                <span className="text-gray-300">|</span>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="text-blue-600 hover:underline text-sm"
                >
                  Contact Us
                </button>
              </div>
            </div>
          ) : (
            <div className="divide-y divide-gray-100">
              {results.map((result, index) => {
                const Icon = getIcon(result.type);
                return (
                  <button
                    key={index}
                    onClick={result.action}
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-200 flex items-start space-x-4"
                  >
                    <div className="bg-gray-100 p-2 rounded-lg">
                      <Icon className="text-gray-600" size={20} />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-3 mb-2">
                        <h3 className="font-semibold text-gray-900 truncate">{result.title}</h3>
                        <span className={`px-2 py-1 text-xs rounded-full ${getCategoryColor(result.category)}`}>
                          {result.category}
                        </span>
                        {result.rating && (
                          <div className="flex items-center space-x-1">
                            <Star className="text-yellow-400 fill-current" size={14} />
                            <span className="text-sm text-gray-600">{result.rating}</span>
                          </div>
                        )}
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{result.description}</p>
                    </div>
                  </button>
                );
              })}
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>Emergency: 988</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone size={14} />
              <span>Crisis Line: (123) 456-7891</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchModal;