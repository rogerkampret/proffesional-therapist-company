import React, { useState } from 'react';
import { Brain, Heart, Users, Baby, Zap, Shield, X, ArrowRight } from 'lucide-react';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<any>(null);

  const services = [
    {
      icon: Brain,
      title: 'Individual Therapy',
      description: 'One-on-one sessions to address anxiety, depression, trauma, and personal growth.',
      features: ['Cognitive Behavioral Therapy', 'Mindfulness-Based Therapy', 'EMDR Trauma Treatment'],
      fullDescription: 'Our individual therapy sessions provide a safe, confidential space for you to explore your thoughts, feelings, and behaviors. We use evidence-based approaches tailored to your specific needs and goals.',
      duration: '50 minutes',
      frequency: 'Weekly or bi-weekly',
      price: '$150 per session',
      approaches: [
        'Cognitive Behavioral Therapy (CBT)',
        'Dialectical Behavior Therapy (DBT)',
        'EMDR for trauma processing',
        'Acceptance and Commitment Therapy (ACT)',
        'Mindfulness-based interventions'
      ]
    },
    {
      icon: Heart,
      title: 'Couples Therapy',
      description: 'Strengthen relationships and improve communication with your partner.',
      features: ['Relationship Counseling', 'Pre-marital Counseling', 'Conflict Resolution'],
      fullDescription: 'Our couples therapy helps partners develop better communication skills, resolve conflicts, and strengthen their emotional connection. We work with couples at all stages of their relationship.',
      duration: '60 minutes',
      frequency: 'Weekly',
      price: '$180 per session',
      approaches: [
        'Emotionally Focused Therapy (EFT)',
        'Gottman Method Couples Therapy',
        'Imago Relationship Therapy',
        'Communication skills training',
        'Conflict resolution techniques'
      ]
    },
    {
      icon: Users,
      title: 'Family Therapy',
      description: 'Heal family dynamics and improve relationships between family members.',
      features: ['Family Systems Therapy', 'Parenting Support', 'Teen Counseling'],
      fullDescription: 'Family therapy addresses issues that affect the entire family unit. We help families improve communication, resolve conflicts, and create healthier dynamics for all members.',
      duration: '60-75 minutes',
      frequency: 'Weekly or bi-weekly',
      price: '$200 per session',
      approaches: [
        'Family Systems Therapy',
        'Structural Family Therapy',
        'Narrative Therapy',
        'Parent-Child Interaction Therapy',
        'Multi-generational therapy approaches'
      ]
    },
    {
      icon: Baby,
      title: 'Child Therapy',
      description: 'Specialized care for children dealing with behavioral and emotional challenges.',
      features: ['Play Therapy', 'Behavioral Interventions', 'School-Related Issues'],
      fullDescription: 'Our child therapy services are designed specifically for children ages 3-17. We use age-appropriate techniques including play therapy, art therapy, and family involvement.',
      duration: '45-50 minutes',
      frequency: 'Weekly',
      price: '$140 per session',
      approaches: [
        'Play Therapy',
        'Art and Expressive Therapies',
        'Cognitive Behavioral Therapy for children',
        'Parent coaching and involvement',
        'School consultation services'
      ]
    },
    {
      icon: Zap,
      title: 'Crisis Intervention',
      description: '24/7 support for mental health emergencies and crisis situations.',
      features: ['Emergency Support', 'Safety Planning', 'Immediate Intervention'],
      fullDescription: 'Our crisis intervention services provide immediate support during mental health emergencies. We offer 24/7 crisis line support and rapid response for urgent situations.',
      duration: 'As needed',
      frequency: '24/7 availability',
      price: 'Contact for rates',
      approaches: [
        '24/7 crisis hotline support',
        'Emergency assessment',
        'Safety planning',
        'Immediate stabilization',
        'Referral to appropriate resources'
      ]
    },
    {
      icon: Shield,
      title: 'Group Therapy',
      description: 'Connect with others facing similar challenges in a supportive group setting.',
      features: ['Support Groups', 'Skills Training', 'Peer Connection'],
      fullDescription: 'Group therapy provides a supportive environment where individuals facing similar challenges can share experiences, learn from each other, and practice new skills.',
      duration: '75-90 minutes',
      frequency: 'Weekly',
      price: '$60 per session',
      approaches: [
        'Process-oriented group therapy',
        'Skills-based groups (DBT, CBT)',
        'Support groups for specific issues',
        'Psychoeducational groups',
        'Peer support facilitation'
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
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
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center space-x-2 text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-blue-600 rounded-full"></div>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button 
                  onClick={() => setSelectedService(service)}
                  className="w-full text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 group/btn"
                >
                  <span>Learn More</span>
                  <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform duration-200" />
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
            <button 
              onClick={scrollToContact}
              className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
            >
              Schedule a Consultation
            </button>
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="bg-blue-100 w-12 h-12 rounded-full flex items-center justify-center">
                  <selectedService.icon className="text-blue-600" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-gray-900">
                  {selectedService.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedService(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
                aria-label="Close modal"
              >
                <X size={24} />
              </button>
            </div>

            <div className="p-6 space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed">
                {selectedService.fullDescription}
              </p>

              <div className="grid md:grid-cols-3 gap-6 bg-gray-50 rounded-lg p-6">
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Session Duration</h4>
                  <p className="text-blue-600">{selectedService.duration}</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Frequency</h4>
                  <p className="text-blue-600">{selectedService.frequency}</p>
                </div>
                <div className="text-center">
                  <h4 className="font-semibold text-gray-900 mb-2">Investment</h4>
                  <p className="text-blue-600">{selectedService.price}</p>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Therapeutic Approaches</h3>
                <ul className="grid md:grid-cols-2 gap-3">
                  {selectedService.approaches.map((approach: string, index: number) => (
                    <li key={index} className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                      <span className="text-gray-700">{approach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold text-gray-900 mb-2">Getting Started</h4>
                <p className="text-gray-700 mb-4">
                  Ready to begin your journey with {selectedService.title.toLowerCase()}? 
                  Our team is here to help you take the first step towards healing and growth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <button
                    onClick={() => {
                      setSelectedService(null);
                      scrollToContact();
                    }}
                    className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 font-semibold"
                  >
                    Schedule Consultation
                  </button>
                  <button
                    onClick={() => setSelectedService(null)}
                    className="border border-gray-300 text-gray-700 px-6 py-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                  >
                    Browse Other Services
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Services;