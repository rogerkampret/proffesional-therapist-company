import React, { useState } from 'react';
import { X, Calendar, Clock, User, CreditCard, CheckCircle } from 'lucide-react';

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  therapist: {
    name: string;
    gender: string;
    specialties: string[];
  };
}

const BookingModal: React.FC<BookingModalProps> = ({ isOpen, onClose, therapist }) => {
  const [step, setStep] = useState(1);
  const [bookingData, setBookingData] = useState({
    date: '',
    time: '',
    service: '',
    notes: '',
    paymentMethod: 'insurance'
  });
  const [isBooked, setIsBooked] = useState(false);

  const availableTimes = [
    '9:00 AM', '10:00 AM', '11:00 AM', '1:00 PM', 
    '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
  ];

  const services = [
    { id: 'individual', name: 'Individual Therapy', price: 150 },
    { id: 'couples', name: 'Couples Therapy', price: 180 },
    { id: 'family', name: 'Family Therapy', price: 200 },
    { id: 'consultation', name: 'Initial Consultation', price: 120 }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (step < 3) {
      setStep(step + 1);
    } else {
      // Process booking
      setIsBooked(true);
      setTimeout(() => {
        setIsBooked(false);
        setStep(1);
        onClose();
      }, 3000);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setBookingData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  if (!isOpen) return null;

  const selectedService = services.find(s => s.id === bookingData.service);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        <div className="p-6 border-b border-gray-200 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">
            Book with {therapist.name}
          </h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
          >
            <X size={24} />
          </button>
        </div>

        <div className="p-6">
          {isBooked ? (
            <div className="text-center py-12">
              <CheckCircle className="text-green-600 mx-auto mb-4" size={64} />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Booking Confirmed!</h3>
              <p className="text-gray-600">
                Your appointment with {therapist.name} has been scheduled. 
                You'll receive a confirmation email shortly.
              </p>
            </div>
          ) : (
            <>
              {/* Progress Indicator */}
              <div className="flex items-center justify-center mb-8">
                {[1, 2, 3].map((stepNum) => (
                  <React.Fragment key={stepNum}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                      step >= stepNum ? 'bg-blue-600 text-white' : 'bg-gray-200 text-gray-600'
                    }`}>
                      {stepNum}
                    </div>
                    {stepNum < 3 && (
                      <div className={`w-12 h-1 ${
                        step > stepNum ? 'bg-blue-600' : 'bg-gray-200'
                      }`} />
                    )}
                  </React.Fragment>
                ))}
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <Calendar className="text-blue-600 mx-auto mb-4" size={48} />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Select Date & Time</h3>
                      <p className="text-gray-600">Choose your preferred appointment slot</p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="date" className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Date
                        </label>
                        <input
                          type="date"
                          id="date"
                          name="date"
                          required
                          value={bookingData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split('T')[0]}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        />
                      </div>

                      <div>
                        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-2">
                          Preferred Time
                        </label>
                        <select
                          id="time"
                          name="time"
                          required
                          value={bookingData.time}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select time</option>
                          {availableTimes.map(time => (
                            <option key={time} value={time}>{time}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                        Service Type
                      </label>
                      <select
                        id="service"
                        name="service"
                        required
                        value={bookingData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select service</option>
                        {services.map(service => (
                          <option key={service.id} value={service.id}>
                            {service.name} - ${service.price}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <User className="text-blue-600 mx-auto mb-4" size={48} />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Additional Information</h3>
                      <p className="text-gray-600">Help us prepare for your session</p>
                    </div>

                    <div>
                      <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-2">
                        What would you like to work on? (Optional)
                      </label>
                      <textarea
                        id="notes"
                        name="notes"
                        rows={4}
                        value={bookingData.notes}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        placeholder="Share any specific concerns or goals for your session..."
                      />
                    </div>

                    <div className="bg-blue-50 rounded-lg p-4">
                      <h4 className="font-semibold text-gray-900 mb-2">Your Selected Therapist</h4>
                      <p className="text-gray-700">
                        <strong>{therapist.name}</strong> ({therapist.gender})
                      </p>
                      <p className="text-sm text-gray-600">
                        Specializes in: {therapist.specialties.join(', ')}
                      </p>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-6">
                    <div className="text-center">
                      <CreditCard className="text-blue-600 mx-auto mb-4" size={48} />
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Payment & Confirmation</h3>
                      <p className="text-gray-600">Review your booking details</p>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6">
                      <h4 className="font-semibold text-gray-900 mb-4">Booking Summary</h4>
                      <div className="space-y-2 text-sm">
                        <div className="flex justify-between">
                          <span>Therapist:</span>
                          <span className="font-medium">{therapist.name}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Date:</span>
                          <span className="font-medium">{bookingData.date}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Time:</span>
                          <span className="font-medium">{bookingData.time}</span>
                        </div>
                        <div className="flex justify-between">
                          <span>Service:</span>
                          <span className="font-medium">{selectedService?.name}</span>
                        </div>
                        <div className="border-t pt-2 mt-2 flex justify-between font-semibold">
                          <span>Total:</span>
                          <span>${selectedService?.price}.00</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="paymentMethod" className="block text-sm font-medium text-gray-700 mb-2">
                        Payment Method
                      </label>
                      <select
                        id="paymentMethod"
                        name="paymentMethod"
                        value={bookingData.paymentMethod}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="insurance">Insurance Coverage</option>
                        <option value="self-pay">Self-Pay (Credit Card)</option>
                        <option value="eap">Employee Assistance Program</option>
                      </select>
                    </div>

                    {bookingData.paymentMethod === 'self-pay' && (
                      <div className="bg-amber-50 rounded-lg p-4">
                        <p className="text-amber-800 text-sm">
                          <strong>Secure Payment:</strong> Your payment will be processed securely through Stripe. 
                          You can cancel or reschedule up to 24 hours before your appointment.
                        </p>
                      </div>
                    )}
                  </div>
                )}

                <div className="flex space-x-4">
                  {step > 1 && (
                    <button
                      type="button"
                      onClick={() => setStep(step - 1)}
                      className="flex-1 border border-gray-300 text-gray-700 py-3 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="submit"
                    className="flex-1 bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200"
                  >
                    {step === 3 ? 'Confirm Booking' : 'Continue'}
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookingModal;