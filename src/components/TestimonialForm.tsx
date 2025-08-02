import React, { useState } from 'react';
import { Star, Send, CheckCircle, User, MessageSquare, AlertCircle } from 'lucide-react';

const TestimonialForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    location: '',
    email: '',
    rating: 5,
    treatment: '',
    testimonial: '',
    allowPublic: false,
    allowName: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  const treatmentOptions = [
    'Individual Therapy',
    'Couples Therapy', 
    'Family Therapy',
    'Child & Adolescent Therapy',
    'Group Therapy',
    'Crisis Intervention',
    'EMDR Therapy',
    'Addiction Recovery',
    'Other'
  ];

  const validateForm = () => {
    const newErrors: any = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.testimonial.trim()) newErrors.testimonial = 'Please share your experience';
    if (formData.testimonial.length < 50) newErrors.testimonial = 'Please provide at least 50 characters';
    if (!formData.treatment) newErrors.treatment = 'Please select your treatment type';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      setIsSubmitted(true);
      setTimeout(() => {
        setIsSubmitted(false);
        // Reset form
        setFormData({
          name: '',
          location: '',
          email: '',
          rating: 5,
          treatment: '',
          testimonial: '',
          allowPublic: false,
          allowName: false
        });
      }, 5000);
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    const finalValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    
    setFormData(prev => ({
      ...prev,
      [name]: finalValue
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleRatingChange = (rating: number) => {
    setFormData(prev => ({ ...prev, rating }));
  };

  return (
    <section id="testimonial-form" className="py-20 bg-gray-50">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl shadow-xl p-8">
          <div className="text-center mb-8">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageSquare className="text-blue-600" size={32} />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Share Your Story
            </h2>
            <p className="text-xl text-gray-600">
              Help others by sharing your therapy experience with MindWell Therapy. 
              Your story could inspire someone to take that first step toward healing.
            </p>
          </div>

          {isSubmitted ? (
            <div className="text-center py-12">
              <CheckCircle className="text-green-600 mx-auto mb-6" size={64} />
              <h3 className="text-2xl font-semibold text-gray-900 mb-4">Thank You!</h3>
              <p className="text-gray-600 text-lg">
                We appreciate you sharing your experience with us. Your testimonial will be 
                reviewed and may be featured on our website to help others seeking mental health support.
              </p>
              <div className="mt-6 p-4 bg-blue-50 rounded-lg">
                <p className="text-blue-800 text-sm">
                  <strong>What's next?</strong> Our team will review your submission and may contact you 
                  if we have any questions. Thank you for helping others on their healing journey.
                </p>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal Information */}
              <div className="space-y-6">
                <div className="flex items-center space-x-2 mb-4">
                  <User className="text-blue-600" size={20} />
                  <h3 className="text-lg font-semibold text-gray-900">Personal Information</h3>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.name ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="Your full name"
                    />
                    {errors.name && (
                      <p className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.name}
                      </p>
                    )}
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-2">
                      Location (Optional)
                    </label>
                    <input
                      type="text"
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="City, State"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.email ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="text-red-600 text-sm mt-1 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.email}
                    </p>
                  )}
                  <p className="text-gray-500 text-sm mt-1">
                    We'll only use this to contact you about your testimonial
                  </p>
                </div>
              </div>

              {/* Treatment Information */}
              <div className="space-y-6">
                <h3 className="text-lg font-semibold text-gray-900">Treatment Information</h3>

                <div>
                  <label htmlFor="treatment" className="block text-sm font-medium text-gray-700 mb-2">
                    Type of Treatment Received *
                  </label>
                  <select
                    id="treatment"
                    name="treatment"
                    required
                    value={formData.treatment}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                      errors.treatment ? 'border-red-300 bg-red-50' : 'border-gray-300'
                    }`}
                  >
                    <option value="">Select treatment type</option>
                    {treatmentOptions.map(option => (
                      <option key={option} value={option}>{option}</option>
                    ))}
                  </select>
                  {errors.treatment && (
                    <p className="text-red-600 text-sm mt-1 flex items-center">
                      <AlertCircle size={16} className="mr-1" />
                      {errors.treatment}
                    </p>
                  )}
                </div>

                {/* Rating */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Overall Rating *
                  </label>
                  <div className="flex items-center space-x-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        key={star}
                        type="button"
                        onClick={() => handleRatingChange(star)}
                        className={`text-2xl transition-colors duration-200 hover:scale-110 ${
                          star <= formData.rating ? 'text-yellow-400' : 'text-gray-300'
                        }`}
                      >
                        <Star className={star <= formData.rating ? 'fill-current' : ''} />
                      </button>
                    ))}
                    <span className="ml-3 text-sm text-gray-600">
                      ({formData.rating} {formData.rating === 1 ? 'star' : 'stars'})
                    </span>
                  </div>
                </div>
              </div>

              {/* Testimonial */}
              <div>
                <label htmlFor="testimonial" className="block text-sm font-medium text-gray-700 mb-2">
                  Your Experience *
                </label>
                <textarea
                  id="testimonial"
                  name="testimonial"
                  required
                  rows={6}
                  value={formData.testimonial}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                    errors.testimonial ? 'border-red-300 bg-red-50' : 'border-gray-300'
                  }`}
                  placeholder="Share your experience with MindWell Therapy. How did our services help you? What would you tell someone considering therapy?"
                />
                {errors.testimonial && (
                  <p className="text-red-600 text-sm mt-1 flex items-center">
                    <AlertCircle size={16} className="mr-1" />
                    {errors.testimonial}
                  </p>
                )}
                <p className="text-gray-500 text-sm mt-1">
                  Minimum 50 characters. Current: {formData.testimonial.length}
                </p>
              </div>

              {/* Privacy Options */}
              <div className="space-y-4 bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Privacy Preferences</h3>
                
                <div className="space-y-3">
                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="allowPublic"
                      checked={formData.allowPublic}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-900">
                        I consent to my testimonial being displayed publicly
                      </span>
                      <p className="text-xs text-gray-600 mt-1">
                        Your testimonial may appear on our website, marketing materials, and social media to help others
                      </p>
                    </div>
                  </label>

                  <label className="flex items-start space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      name="allowName"
                      checked={formData.allowName}
                      onChange={handleChange}
                      className="mt-1 h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    />
                    <div>
                      <span className="text-sm font-medium text-gray-900">
                        I consent to using my first name and last initial
                      </span>
                      <p className="text-xs text-gray-600 mt-1">
                        If unchecked, we'll use initials only (e.g., "J.D.") or "Anonymous Client"
                      </p>
                    </div>
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isLoading}
                className="w-full bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-all duration-200 flex items-center justify-center space-x-2 font-semibold group disabled:opacity-50"
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <Send size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                    <span>Submit Testimonial</span>
                  </>
                )}
              </button>

              <p className="text-xs text-gray-600 text-center">
                By submitting this form, you acknowledge that your testimonial may be used by MindWell Therapy 
                according to your privacy preferences above. You can contact us at any time to modify or remove your testimonial.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
};

export default TestimonialForm;