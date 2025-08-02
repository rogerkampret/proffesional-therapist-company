import React, { useState } from 'react';
import { GraduationCap, Award, Clock, User } from 'lucide-react';
import BookingModal from './BookingModal';

const Therapists: React.FC = () => {
  const [selectedTherapist, setSelectedTherapist] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const therapists = [
    {
      name: 'Dr. Sarah Mitchell',
      title: 'Licensed Clinical Psychologist',
      gender: 'Female',
      specialties: ['Anxiety & Depression', 'Trauma Recovery', 'PTSD Treatment'],
      education: 'Ph.D. in Clinical Psychology, Harvard University',
      experience: '12 years',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Dr. Mitchell specializes in evidence-based treatments for anxiety, depression, and trauma-related disorders.',
      credentials: ['Licensed Psychologist', 'EMDR Certified', 'CBT Specialist']
    },
    {
      name: 'Michael Rodriguez',
      title: 'Licensed Marriage & Family Therapist',
      gender: 'Male',
      specialties: ['Couples Therapy', 'Family Counseling', 'Communication Skills'],
      education: 'M.A. in Marriage & Family Therapy, UCLA',
      experience: '8 years',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Michael helps couples and families build stronger relationships through improved communication and understanding.',
      credentials: ['LMFT', 'Gottman Method Certified', 'EFT Trained']
    },
    {
      name: 'Dr. Emily Chen',
      title: 'Licensed Clinical Social Worker',
      gender: 'Female',
      specialties: ['Child & Adolescent', 'Behavioral Issues', 'School Counseling'],
      education: 'Ph.D. in Clinical Social Work, Columbia University',
      experience: '10 years',
      image: 'https://images.pexels.com/photos/5212320/pexels-photo-5212320.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Dr. Chen provides specialized care for children and adolescents facing emotional and behavioral challenges.',
      credentials: ['LCSW', 'Play Therapy Certified', 'Adolescent Specialist']
    },
    {
      name: 'James Thompson',
      title: 'Licensed Professional Counselor',
      gender: 'Male',
      specialties: ['Addiction Recovery', 'Group Therapy', 'Crisis Intervention'],
      education: 'M.S. in Counseling Psychology, University of Denver',
      experience: '15 years',
      image: 'https://images.pexels.com/photos/5212700/pexels-photo-5212700.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'James brings extensive experience in addiction recovery and crisis intervention to help clients overcome challenges.',
      credentials: ['LPC', 'CADC Certified', 'Crisis Counselor']
    }
  ];

  const handleBooking = (therapist: any) => {
    setSelectedTherapist(therapist);
    setIsModalOpen(true);
  };

  return (
    <section id="therapists" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Meet Our Therapists
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our team of licensed mental health professionals brings years of experience 
            and specialized training to support your healing journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {therapists.map((therapist, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
            >
              <div className="p-8">
                <div className="flex flex-col sm:flex-row items-start space-y-4 sm:space-y-0 sm:space-x-6">
                  <div className="relative">
                    <img
                      src={therapist.image}
                      alt={therapist.name}
                      className="w-32 h-32 rounded-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center">
                      <Award size={16} />
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{therapist.name}</h3>
                    <p className="text-blue-600 font-semibold mb-3">{therapist.title}</p>
                    
                    <div className="flex items-center space-x-4 text-sm text-gray-600 mb-4">
                      <div className="flex items-center space-x-1">
                        <Clock size={14} />
                        <span>{therapist.experience}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <GraduationCap size={14} />
                        <span>Licensed</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <User size={14} />
                        <span>{therapist.gender}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4">{therapist.description}</p>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Specialties:</h4>
                      <div className="flex flex-wrap gap-2">
                        {therapist.specialties.map((specialty, specIndex) => (
                          <span 
                            key={specIndex}
                            className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm"
                          >
                            {specialty}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Credentials:</h4>
                      <div className="flex flex-wrap gap-2">
                        {therapist.credentials.map((credential, credIndex) => (
                          <span 
                            key={credIndex}
                            className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-sm"
                          >
                            {credential}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <button 
                      onClick={() => handleBooking(therapist)}
                      className="text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                    >
                      Schedule with {therapist.name.split(' ')[0]} →
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {selectedTherapist && (
        <BookingModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          therapist={selectedTherapist}
        />
      )}
    </section>
  );
};

export default Therapists;