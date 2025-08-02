import React from 'react';
import { Brain, Heart, Users, Baby, Zap, Shield } from 'lucide-react';

const Services: React.FC = () => {
  const services = [
    {
      icon: Brain,
      title: 'Individual Therapy',
      description: 'One-on-one sessions to address anxiety, depression, trauma, and personal growth.',
      features: ['Cognitive Behavioral Therapy', 'Mindfulness-Based Therapy', 'EMDR Trauma Treatment']
    },
    {
      icon: Heart,
      title: 'Couples Therapy',
      description: 'Strengthen relationships and improve communication with your partner.',
      features: ['Relationship Counseling', 'Pre-marital Counseling', 'Conflict Resolution']
    },
    {
      icon: Users,
      title: 'Family Therapy',
      description: 'Heal family dynamics and improve relationships between family members.',
      features: ['Family Systems Therapy', 'Parenting Support', 'Teen Counseling']
    },
    {
      icon: Baby,
      title: 'Child Therapy',
      description: 'Specialized care for children dealing with behavioral and emotional challenges.',
      features: ['Play Therapy', 'Behavioral Interventions', 'School-Related Issues']
    },
    {
      icon: Zap,
      title: 'Crisis Intervention',
      description: '24/7 support for mental health emergencies and crisis situations.',
      features: ['Emergency Support', 'Safety Planning', 'Immediate Intervention']
    },
    {
      icon: Shield,
      title: 'Group Therapy',
      description: 'Connect with others facing similar challenges in a supportive group setting.',
      features: ['Support Groups', 'Skills Training', 'Peer Connection']
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a comprehensive range of mental health services tailored to meet 
            your unique needs and support your journey to wellness.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="bg-blue-50 w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:bg-blue-100 transition-colors duration-300">
                <service.icon className="text-blue-600" size={32} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-gray-600 mb-6">{service.description}</p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                    <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              
              <button className="mt-6 text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200">
                Learn More →
              </button>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-blue-600 rounded-2xl p-8 text-center text-white">
          <h3 className="text-2xl font-bold mb-4">Not Sure Which Service is Right for You?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our experienced intake coordinators can help you determine the best treatment approach 
            for your specific situation and connect you with the right therapist.
          </p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;