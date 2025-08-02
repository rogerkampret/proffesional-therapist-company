import React from 'react';
import { ArrowRight, Calendar, Shield, Heart } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                Your Journey to
                <span className="text-blue-600 block">Mental Wellness</span>
                Starts Here
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed">
                Professional, compassionate therapy services to help you navigate life's challenges 
                and discover your path to healing and growth.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                onClick={scrollToContact}
                className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 font-semibold group"
              >
                <span>Schedule Consultation</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-200 font-semibold">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8">
              <div className="text-center">
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="text-blue-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">Licensed</h3>
                <p className="text-sm text-gray-600">Certified Professionals</p>
              </div>
              <div className="text-center">
                <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Heart className="text-green-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">Compassionate</h3>
                <p className="text-sm text-gray-600">Caring Approach</p>
              </div>
              <div className="text-center">
                <div className="bg-amber-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Calendar className="text-amber-600" size={24} />
                </div>
                <h3 className="font-semibold text-gray-900">Flexible</h3>
                <p className="text-sm text-gray-600">Convenient Scheduling</p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <img
                src="https://images.pexels.com/photos/7176026/pexels-photo-7176026.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Therapy session in a comfortable, welcoming environment"
                className="rounded-2xl shadow-2xl w-full h-[600px] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-full h-full bg-blue-200 rounded-2xl -z-10"></div>
            <div className="absolute -top-6 -left-6 w-32 h-32 bg-green-200 rounded-full -z-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;