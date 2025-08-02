import React, { useState } from 'react';
import { CreditCard, Shield, Lock, CheckCircle, AlertCircle } from 'lucide-react';

interface PaymentIntegrationProps {
  amount: number;
  service: string;
  onSuccess: () => void;
  onCancel: () => void;
}

const PaymentIntegration: React.FC<PaymentIntegrationProps> = ({ 
  amount, 
  service, 
  onSuccess, 
  onCancel 
}) => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [paymentData, setPaymentData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    name: '',
    email: '',
    billingAddress: {
      street: '',
      city: '',
      state: '',
      zipCode: ''
    }
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      setIsProcessing(false);
      onSuccess();
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    
    if (name.startsWith('billing.')) {
      const field = name.split('.')[1];
      setPaymentData(prev => ({
        ...prev,
        billingAddress: {
          ...prev.billingAddress,
          [field]: value
        }
      }));
    } else {
      setPaymentData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const formatCardNumber = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    const matches = v.match(/\d{4,16}/g);
    const match = matches && matches[0] || '';
    const parts = [];
    for (let i = 0, len = match.length; i < len; i += 4) {
      parts.push(match.substring(i, i + 4));
    }
    if (parts.length) {
      return parts.join(' ');
    } else {
      return v;
    }
  };

  const formatExpiryDate = (value: string) => {
    const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
    if (v.length >= 2) {
      return v.substring(0, 2) + '/' + v.substring(2, 4);
    }
    return v;
  };

  return (
    <div className="max-w-2xl mx-auto bg-white rounded-2xl shadow-lg p-8">
      <div className="text-center mb-8">
        <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
          <CreditCard className="text-blue-600" size={32} />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Secure Payment</h2>
        <p className="text-gray-600">Complete your therapy session booking</p>
      </div>

      {/* Order Summary */}
      <div className="bg-gray-50 rounded-lg p-6 mb-8">
        <h3 className="font-semibold text-gray-900 mb-4">Order Summary</h3>
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-gray-600">Service:</span>
            <span className="font-medium">{service}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-600">Duration:</span>
            <span className="font-medium">50 minutes</span>
          </div>
          <div className="flex justify-between border-t pt-2 mt-2">
            <span className="font-semibold">Total:</span>
            <span className="font-bold text-lg">${amount}.00</span>
          </div>
        </div>
      </div>

      {/* Security Notice */}
      <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-6">
        <div className="flex items-center space-x-2">
          <Shield className="text-green-600" size={20} />
          <div>
            <p className="text-green-800 font-medium">Secure Payment Processing</p>
            <p className="text-green-700 text-sm">
              Your payment is processed securely through Stripe. We never store your card details.
            </p>
          </div>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Card Information */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900 flex items-center space-x-2">
            <Lock size={16} />
            <span>Payment Information</span>
          </h3>
          
          <div>
            <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-2">
              Card Number
            </label>
            <input
              type="text"
              id="cardNumber"
              name="cardNumber"
              required
              maxLength={19}
              value={formatCardNumber(paymentData.cardNumber)}
              onChange={(e) => setPaymentData(prev => ({ ...prev, cardNumber: e.target.value }))}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="expiryDate" className="block text-sm font-medium text-gray-700 mb-2">
                Expiry Date
              </label>
              <input
                type="text"
                id="expiryDate"
                name="expiryDate"
                required
                maxLength={5}
                value={formatExpiryDate(paymentData.expiryDate)}
                onChange={(e) => setPaymentData(prev => ({ ...prev, expiryDate: e.target.value }))}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="MM/YY"
              />
            </div>
            <div>
              <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-2">
                CVV
              </label>
              <input
                type="text"
                id="cvv"
                name="cvv"
                required
                maxLength={4}
                value={paymentData.cvv}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="123"
              />
            </div>
          </div>

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Cardholder Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              value={paymentData.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="John Doe"
            />
          </div>
        </div>

        {/* Billing Address */}
        <div className="space-y-4">
          <h3 className="font-semibold text-gray-900">Billing Address</h3>
          
          <div>
            <label htmlFor="billing.street" className="block text-sm font-medium text-gray-700 mb-2">
              Street Address
            </label>
            <input
              type="text"
              id="billing.street"
              name="billing.street"
              required
              value={paymentData.billingAddress.street}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="123 Main Street"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="billing.city" className="block text-sm font-medium text-gray-700 mb-2">
                City
              </label>
              <input
                type="text"
                id="billing.city"
                name="billing.city"
                required
                value={paymentData.billingAddress.city}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Denver"
              />
            </div>
            <div>
              <label htmlFor="billing.state" className="block text-sm font-medium text-gray-700 mb-2">
                State
              </label>
              <input
                type="text"
                id="billing.state"
                name="billing.state"
                required
                value={paymentData.billingAddress.state}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="CO"
              />
            </div>
          </div>

          <div>
            <label htmlFor="billing.zipCode" className="block text-sm font-medium text-gray-700 mb-2">
              ZIP Code
            </label>
            <input
              type="text"
              id="billing.zipCode"
              name="billing.zipCode"
              required
              value={paymentData.billingAddress.zipCode}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              placeholder="80202"
            />
          </div>
        </div>

        {/* Terms and Conditions */}
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-start space-x-2">
            <AlertCircle className="text-blue-600 mt-0.5" size={16} />
            <div className="text-sm text-blue-800">
              <p className="font-medium mb-1">Cancellation Policy</p>
              <p>
                You may cancel or reschedule your appointment up to 24 hours in advance. 
                Late cancellations may be subject to a fee.
              </p>
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={onCancel}
            disabled={isProcessing}
            className="flex-1 border border-gray-300 text-gray-700 py-4 px-6 rounded-lg hover:bg-gray-50 transition-colors duration-200 disabled:opacity-50"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={isProcessing}
            className="flex-1 bg-blue-600 text-white py-4 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-200 disabled:opacity-50 flex items-center justify-center space-x-2"
          >
            {isProcessing ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                <span>Processing...</span>
              </>
            ) : (
              <>
                <CreditCard size={20} />
                <span>Pay ${amount}.00</span>
              </>
            )}
          </button>
        </div>
      </form>

      {/* Trust Indicators */}
      <div className="mt-8 text-center">
        <div className="flex items-center justify-center space-x-6 text-sm text-gray-500">
          <div className="flex items-center space-x-1">
            <Shield size={16} />
            <span>SSL Encrypted</span>
          </div>
          <div className="flex items-center space-x-1">
            <Lock size={16} />
            <span>PCI Compliant</span>
          </div>
          <div className="flex items-center space-x-1">
            <CheckCircle size={16} />
            <span>Stripe Secured</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentIntegration;