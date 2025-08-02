import React, { useState, useEffect } from 'react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const Testimonials: React.FC = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Jennifer M.',
      location: 'Denver, CO',
      rating: 5,
      text: 'The support I received at MindWell Therapy completely changed my life. Dr. Mitchell helped me work through years of anxiety and gave me tools I use every day.',
      treatment: 'Individual Therapy - Anxiety Treatment'
    },
    {
      name: 'Carlos and Maria R.',
      location: 'Boulder, CO',
      rating: 5,
      text: 'Michael Rodriguez saved our marriage. His couples therapy approach helped us rediscover why we fell in love and how to communicate better.',
      treatment: 'Couples Therapy'
    },
    {
      name: 'David L.',
      location: 'Fort Collins, CO',
      rating: 5,
      text: 'After struggling with addiction for years, James Thompson and the team at MindWell gave me hope and a path forward. Two years clean and stronger than ever.',
      treatment: 'Addiction Recovery Program'
    },
    {
      name: 'Amanda K.',
      location: 'Aurora, CO',
      rating: 5,
      text: 'Dr. Chen was incredible with my teenage daughter. She finally opened up and learned healthy coping strategies. Our family dynamic has improved so much.',
      treatment: 'Adolescent Therapy'
    },
    {
      name: 'Robert T.',
      location: 'Lakewood, CO',
      rating: 5,
      text: 'The group therapy sessions helped me realize I wasn\'t alone in my struggles. The peer support and professional guidance made all the difference.',
      treatment: 'Group Therapy'
    }
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const timer = setInterval(nextTestimonial, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Client Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear from clients who have found healing, growth, and renewed hope 
            through their therapy journey with our team.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 relative overflow-hidden">
            <div className="absolute top-6 left-6 text-blue-200">
              <Quote size={48} />
            </div>
            
            <div className="relative z-10">
              <div className="flex justify-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} className="text-yellow-400 fill-current" size={24} />
                ))}
              </div>
              
              <blockquote className="text-xl md:text-2xl text-gray-700 text-center leading-relaxed mb-8">
                "{testimonials[currentTestimonial].text}"
              </blockquote>
              
              <div className="text-center">
                <div className="font-bold text-gray-900 text-lg mb-1">
                  {testimonials[currentTestimonial].name}
                </div>
                <div className="text-gray-600 mb-2">
                  {testimonials[currentTestimonial].location}
                </div>
                <div className="text-blue-600 font-semibold text-sm bg-blue-50 inline-block px-4 py-2 rounded-full">
                  {testimonials[currentTestimonial].treatment}
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevTestimonial}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 group"
            aria-label="Previous testimonial"
          >
            <ChevronLeft className="text-gray-600 group-hover:text-blue-600" size={24} />
          </button>
          
          <button
            onClick={nextTestimonial}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-200 group"
            aria-label="Next testimonial"
          >
            <ChevronRight className="text-gray-600 group-hover:text-blue-600" size={24} />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">98%</div>
            <div className="text-gray-600">Client Satisfaction</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">500+</div>
            <div className="text-gray-600">Lives Transformed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
            <div className="text-gray-600">Years of Experience</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">4.9/5</div>
            <div className="text-gray-600">Average Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;