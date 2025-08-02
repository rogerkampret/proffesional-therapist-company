import React from 'react';
import { Users, Award, Clock, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, number: '500+', label: 'Clients Helped' },
    { icon: Award, number: '15+', label: 'Years Experience' },
    { icon: Clock, number: '24/7', label: 'Crisis Support' },
    { icon: MapPin, number: '3', label: 'Locations' },
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About MindWell Therapy
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We are dedicated to providing exceptional mental health services in a warm, 
            supportive environment where healing and growth can flourish.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed">
              At MindWell Therapy, we believe that everyone deserves access to quality mental health care. 
              Our mission is to provide compassionate, evidence-based therapy services that empower individuals, 
              couples, and families to overcome challenges and achieve lasting positive change.
            </p>
            <p className="text-gray-600 leading-relaxed">
              We understand that seeking therapy takes courage, and we honor that bravery by creating 
              a safe, non-judgmental space where you can explore your thoughts, feelings, and experiences 
              with trained professionals who genuinely care about your wellbeing.
            </p>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-600">Evidence-based therapeutic approaches tailored to your unique needs</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-600">Culturally sensitive and inclusive treatment environment</p>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2"></div>
                <p className="text-gray-600">Collaborative approach focused on your goals and values</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/7176305/pexels-photo-7176305.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Comfortable therapy office with natural lighting"
              className="rounded-2xl shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="bg-blue-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4">
                <stat.icon className="text-blue-600" size={32} />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-1">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;