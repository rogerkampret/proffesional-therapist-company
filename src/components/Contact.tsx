import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, Filter, CreditCard, User, Briefcase, AlertCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    gender: '',
    employmentStatus: '',
    therapistGenderPreference: '',
    message: '',
    urgency: 'routine',
    paymentMethod: 'insurance'
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [filteredTherapists, setFilteredTherapists] = useState([]);
  const [errors, setErrors] = useState<any>({});
  const [isLoading, setIsLoading] = useState(false);

  // Mock therapist data with gender information
  const therapists = [
    { id: 1, name: 'Dr. Sarah Mitchell', gender: 'female', specialties: ['Anxiety & Depression', 'Trauma Recovery'] },
    { id: 2, name: 'Michael Rodriguez', gender: 'male', specialties: ['Couples Therapy', 'Family Counseling'] },
    { id: 3, name: 'Dr. Emily Chen', gender: 'female', specialties: ['Child & Adolescent', 'Behavioral Issues'] },
    { id: 4, name: 'James Thompson', gender: 'male', specialties: ['Addiction Recovery', 'Crisis Intervention'] },
    { id: 5, name: 'Dr. Lisa Park', gender: 'female', specialties: ['Individual Therapy', 'Mindfulness'] },
    { id: 6, name: 'Robert Williams', gender: 'male', specialties: ['Group Therapy', 'PTSD Treatment'] }
  ];

  const validateForm = () => {
    const newErrors: any = {};
    
    if (!formData.name.trim()) newErrors.name = 'Name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (formData.phone && !/^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/.test(formData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) return;
    
    setIsLoading(true);
    
    // Simulate API call
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      if (formData.paymentMethod === 'self-pay') {
        setShowPayment(true);
      } else {
        setIsSubmitted(true);
        setTimeout(() => setIsSubmitted(false), 5000);
      }
    } catch (error) {
      console.error('Submission failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value
    };
    
    setFormData(newFormData);
    
    // Clear error when user starts typing
    if (errors[e.target.name]) {
      setErrors({
        ...errors,
        [e.target.name]: ''
      });
    }
    
    // Filter therapists based on gender preference
    if (e.target.name === 'therapistGenderPreference' && e.target.value) {
      const filtered = therapists.filter(therapist => 
        therapist.gender === e.target.value
      );
      setFilteredTherapists(filtered);
    }
  };

  const handlePayment = async () => {
    setIsLoading(true);
    // Simulate payment processing
    try {
      await new Promise(resolve => setTimeout(resolve, 3000));
      setShowPayment(false);
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get Started Today
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Take the first step towards better mental health. We're here to support you 
            every step of the way.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8 space-y-6">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Schedule a Consultation</h3>
            
            {isSubmitted ? (
              <div className="text-center py-12">
                <CheckCircle className="text-green-600 mx-auto mb-4" size={64} />
                <h4 className="text-xl font-semibold text-gray-900 mb-2">Thank You!</h4>
                <p className="text-gray-600">
                  We've received your message and will contact you within 24 hours to schedule your consultation.
                </p>
              </div>
            ) : showPayment ? (
              <div className="space-y-6">
                <div className="text-center">
                  <CreditCard className="text-blue-600 mx-auto mb-4" size={48} />
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Secure Payment</h4>
                  <p className="text-gray-600 mb-6">
                    Complete your consultation booking with secure payment processing
                  </p>
                </div>
                
                <div className="bg-white rounded-lg p-6 border">
                  <h5 className="font-semibold text-gray-900 mb-4">Consultation Summary</h5>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span>Service:</span>
                      <span className="font-medium">{formData.service || 'Individual Therapy'}</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Duration:</span>
                      <span className="font-medium">50 minutes</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Therapist Preference:</span>
                      <span className="font-medium capitalize">{formData.therapistGenderPreference || 'No preference'}</span>
                    </div>
                    <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                      <span>Total:</span>
                      <span>$150.00</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-4">
                  <p className="text-blue-800 text-sm">
                    <strong>Note:</strong> Payment will be processed securely through Stripe. 
                    You'll receive a confirmation email with your appointment details.
                  </p>
                </div>
                
                <div className="flex space-x-4">
                  <button
                    onClick={() => setShowPayment(false)}
                    disabled={isLoading}
                    className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50"
                  >
                    Back to Form
                  </button>
                  <button
                    onClick={handlePayment}
                    disabled={isLoading}
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center space-x-2 disabled:opacity-50"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Processing...</span>
                      </>
                    ) : (
                      <>
                        <CreditCard size={20} />
                        <span>Pay $150.00</span>
                      </>
                    )}
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
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
                      aria-describedby={errors.name ? 'name-error' : undefined}
                    />
                    {errors.name && (
                      <p id="name-error" className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.name}
                      </p>
                    )}
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
                      aria-describedby={errors.email ? 'email-error' : undefined}
                    />
                    {errors.email && (
                      <p id="email-error" className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.email}
                      </p>
                    )}
                  </div>
                </div>

                {/* Personal Information Section */}
                <div className="bg-white rounded-lg p-6 border">
                  <div className="flex items-center space-x-2 mb-4">
                    <User className="text-blue-600" size={20} />
                    <h4 className="font-semibold text-gray-900">Personal Information</h4>
                  </div>
                  
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="gender" className="block text-sm font-medium text-gray-700 mb-2">
                        Gender
                      </label>
                      <select
                        id="gender"
                        name="gender"
                        value={formData.gender}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="non-binary">Non-binary</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="employmentStatus" className="block text-sm font-medium text-gray-700 mb-2">
                        Employment Status
                      </label>
                      <select
                        id="employmentStatus"
                        name="employmentStatus"
                        value={formData.employmentStatus}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Select employment status</option>
                        <option value="employed-full-time">Employed (Full-time)</option>
                        <option value="employed-part-time">Employed (Part-time)</option>
                        <option value="self-employed">Self-employed</option>
                        <option value="unemployed">Unemployed</option>
                        <option value="student">Student</option>
                        <option value="retired">Retired</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Therapist Preferences Section */}
                <div className="bg-white rounded-lg p-6 border">
                  <div className="flex items-center space-x-2 mb-4">
                    <Filter className="text-blue-600" size={20} />
                    <h4 className="font-semibold text-gray-900">Therapist Preferences</h4>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="therapistGenderPreference" className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Therapist Gender
                      </label>
                      <select
                        id="therapistGenderPreference"
                        name="therapistGenderPreference"
                        value={formData.therapistGenderPreference}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">No preference</option>
                        <option value="male">Male therapist</option>
                        <option value="female">Female therapist</option>
                      </select>
                    </div>
                    
                    {filteredTherapists.length > 0 && (
                      <div>
                        <h5 className="text-sm font-medium text-gray-700 mb-2">Available Therapists:</h5>
                        <div className="space-y-2">
                          {filteredTherapists.map(therapist => (
                            <div key={therapist.id} className="bg-blue-50 rounded-lg p-3">
                              <div className="font-medium text-gray-900">{therapist.name}</div>
                              <div className="text-sm text-gray-600">
                                Specializes in: {therapist.specialties.join(', ')}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 ${
                        errors.phone ? 'border-red-300 bg-red-50' : 'border-gray-300'
                      }`}
                      placeholder="(123) 456-7890"
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                    />
                    {errors.phone && (
                      <p id="phone-error" className="text-red-600 text-sm mt-1 flex items-center">
                        <AlertCircle size={16} className="mr-1" />
                        {errors.phone}
                      </p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select a service</option>
                      <option value="individual">Individual Therapy</option>
                      <option value="couples">Couples Therapy</option>
                      <option value="family">Family Therapy</option>
                      <option value="child">Child Therapy</option>
                      <option value="group">Group Therapy</option>
                      <option value="crisis">Crisis Intervention</option>
                    </select>
                  </div>
                </div>

                {/* Payment Method Section */}
                <div className="bg-white rounded-lg p-6 border">
                  <div className="flex items-center space-x-2 mb-4">
                    <CreditCard className="text-blue-600" size={20} />
                    <h4 className="font-semibold text-gray-900">Payment Method</h4>
                  </div>
                  
                  <div>
                    <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-2">
                      How would you like to pay?
                    </label>
                    <select
                      id="paymentMethod"
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="insurance">Insurance Coverage</option>
                      <option value="self-pay">Self-Pay ($150/session)</option>
                      <option value="eap">Employee Assistance Program (EAP)</option>
                      <option value="sliding-scale">Sliding Scale (Income-based)</option>
                    </select>
                    
                    {formData.paymentMethod === 'self-pay' && (
                      <div className="mt-3 p-3 bg-amber-50 rounded-lg">
                        <p className="text-amber-800 text-sm">
                          <strong>Self-Pay Rate:</strong> $150 per 50-minute session. 
                          Payment will be processed securely through Stripe.
                        </p>
                      </div>
                    )}
                    
                    {formData.paymentMethod === 'sliding-scale' && (
                      <div className="mt-3 p-3 bg-green-50 rounded-lg">
                        <p className="text-green-800 text-sm">
                          <strong>Sliding Scale:</strong> We offer reduced rates based on income. 
                          Our intake coordinator will discuss options during your consultation.
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label htmlFor="urgency" className="block text-sm font-medium text-gray-700 mb-2">
                    Urgency Level
                  </label>
                  <select
                    id="urgency"
                    name="urgency"
                    value={formData.urgency}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  >
                    <option value="routine">Routine - Within 1-2 weeks</option>
                    <option value="urgent">Urgent - Within 2-3 days</option>
                    <option value="crisis">Crisis - Immediate attention needed</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Tell us about your situation
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    placeholder="Please share what you'd like to work on or any questions you have..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className={`w-full py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 font-semibold group disabled:opacity-50 ${
                    formData.paymentMethod === 'self-pay' 
                      ? 'bg-green-600 hover:bg-green-700 text-white' 
                      : 'bg-blue-600 hover:bg-blue-700 text-white'
                  }`}
                >
                  {isLoading ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Submitting...</span>
                    </>
                  ) : (
                    <>
                      <span>
                        {formData.paymentMethod === 'self-pay' ? 'Proceed to Payment' : 'Send Message'}
                      </span>
                      {formData.paymentMethod === 'self-pay' ? (
                        <CreditCard size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                      ) : (
                        <Send size={20} className="group-hover:translate-x-1 transition-transform duration-200" />
                      )}
                    </>
                  )}
                </button>

                <p className="text-sm text-gray-600 text-center">
                  * Required fields. Your information is confidential and secure.
                </p>
              </form>
            )}
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-100 p-3 rounded-lg">
                    <Phone className="text-blue-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <p className="text-gray-600">Main: (123) 456-7890</p>
                    <p className="text-gray-600">Crisis Line: (123) 456-7891</p>
                    <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-green-100 p-3 rounded-lg">
                    <Mail className="text-green-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <p className="text-gray-600">info@mindwelltherapy.com</p>
                    <p className="text-gray-600">appointments@mindwelltherapy.com</p>
                    <p className="text-sm text-gray-500">Response within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-amber-100 p-3 rounded-lg">
                    <MapPin className="text-amber-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Locations</h4>
                    <p className="text-gray-600">Main Office: 123 Wellness Way, Denver, CO 80202</p>
                    <p className="text-gray-600">Boulder: 456 Mountain View Dr, Boulder, CO 80301</p>
                    <p className="text-gray-600">Fort Collins: 789 Harmony Rd, Fort Collins, CO 80526</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-purple-100 p-3 rounded-lg">
                    <Clock className="text-purple-600" size={24} />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Office Hours</h4>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sunday: By appointment only</p>
                    <p className="text-sm text-gray-500">Crisis support available 24/7</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Insurance & Payment */}
            <div className="bg-blue-50 rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-4">Insurance & Payment</h4>
              <div className="space-y-2 text-sm text-gray-600">
                <p>✓ Most major insurance plans accepted</p>
                <p>✓ Sliding scale fees available</p>
                <p>✓ Employee Assistance Programs (EAP)</p>
                <p>✓ HSA/FSA eligible</p>
                <p>✓ Secure online payments via Stripe</p>
                <p>✓ Self-pay rate: $150 per session</p>
              </div>
            </div>

            {/* Emergency Notice */}
            <div className="bg-red-50 border border-red-200 rounded-2xl p-6">
              <h4 className="font-bold text-red-800 mb-2">Crisis Support</h4>
              <p className="text-red-700 text-sm mb-3">
                If you're experiencing a mental health emergency, please call our crisis line 
                at (123) 456-7891 or call 911 immediately.
              </p>
              <p className="text-red-600 text-xs">
                National Suicide Prevention Lifeline: 988
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;