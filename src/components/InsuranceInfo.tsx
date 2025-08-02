import React from 'react';
import { Shield, CheckCircle, CreditCard, FileText, Phone, AlertCircle } from 'lucide-react';

const InsuranceInfo: React.FC = () => {
  const acceptedInsurance = [
    {
      name: 'Blue Cross Blue Shield',
      logo: '🔵',
      coverage: 'Covers most therapy services',
      copay: '$20-40 typical copay'
    },
    {
      name: 'Aetna',
      logo: '🅰️',
      coverage: 'Individual & family therapy',
      copay: '$25-50 typical copay'
    },
    {
      name: 'Cigna',
      logo: '🔴',
      coverage: 'Mental health services covered',
      copay: '$30-45 typical copay'
    },
    {
      name: 'UnitedHealth',
      logo: '🟣',
      coverage: 'Comprehensive mental health',
      copay: '$20-35 typical copay'
    },
    {
      name: 'Anthem',
      logo: '🔺',
      coverage: 'Therapy & counseling services',
      copay: '$25-40 typical copay'
    },
    {
      name: 'Kaiser Permanente',
      logo: '🏥',
      coverage: 'In-network providers available',
      copay: '$15-30 typical copay'
    }
  ];

  const paymentOptions = [
    {
      title: 'Insurance Coverage',
      description: 'We work with most major insurance plans to maximize your benefits',
      icon: Shield,
      details: [
        'Direct billing to your insurance',
        'Pre-authorization handled by our team',
        'Claims processing assistance',
        'Verification of benefits before first visit'
      ]
    },
    {
      title: 'Self-Pay Options',
      description: 'Competitive rates for those paying out-of-pocket',
      icon: CreditCard,
      details: [
        'Individual therapy: $150 per session',
        'Couples therapy: $180 per session',
        'Family therapy: $200 per session',
        'Initial consultation: $120'
      ]
    },
    {
      title: 'Flexible Payment Plans',
      description: 'Payment solutions to fit your budget',
      icon: FileText,
      details: [
        'Sliding scale fees based on income',
        'Payment plans available',
        'HSA/FSA accepted',
        'Employee Assistance Program (EAP) billing'
      ]
    }
  ];

  const verificationSteps = [
    {
      step: 1,
      title: 'Contact Your Insurance',
      description: 'Call the number on your insurance card or check online'
    },
    {
      step: 2,
      title: 'Ask Key Questions',
      description: 'Inquire about mental health coverage, copays, and deductibles'
    },
    {
      step: 3,
      title: 'Verify Network Status',
      description: 'Confirm MindWell Therapy is in-network for your plan'
    },
    {
      step: 4,
      title: 'Understand Your Benefits',
      description: 'Learn about session limits and pre-authorization requirements'
    }
  ];

  return (
    <section id="insurance" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="text-blue-600" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Insurance & Payment Information
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We make mental health care accessible with flexible payment options 
            and comprehensive insurance support.
          </p>
        </div>

        {/* Accepted Insurance Plans */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Accepted Insurance Plans
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {acceptedInsurance.map((plan, index) => (
              <div 
                key={index}
                className="bg-gray-50 rounded-2xl p-6 border border-gray-200 hover:border-blue-300 hover:bg-blue-50 transition-all duration-200"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="text-3xl">{plan.logo}</div>
                  <div>
                    <h4 className="font-bold text-gray-900">{plan.name}</h4>
                    <p className="text-sm text-gray-600">{plan.copay}</p>
                  </div>
                </div>
                <p className="text-gray-700">{plan.coverage}</p>
                <div className="mt-3 flex items-center space-x-1 text-green-600">
                  <CheckCircle size={16} />
                  <span className="text-sm font-medium">In-Network Provider</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Options */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Payment Options
          </h3>
          <div className="grid md:grid-cols-3 gap-8">
            {paymentOptions.map((option, index) => (
              <div 
                key={index}
                className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6">
                  <option.icon className="text-blue-600" size={32} />
                </div>
                <h4 className="text-xl font-bold text-gray-900 mb-3">{option.title}</h4>
                <p className="text-gray-600 mb-6">{option.description}</p>
                <ul className="space-y-2">
                  {option.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-start space-x-2">
                      <CheckCircle size={16} className="text-green-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-gray-700">{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Insurance Verification Steps */}
        <div className="mb-16 bg-gradient-to-br from-blue-50 to-green-50 rounded-3xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            How to Verify Your Insurance Coverage
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {verificationSteps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="bg-blue-600 text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg mx-auto mb-4">
                  {step.step}
                </div>
                <h4 className="font-bold text-gray-900 mb-2">{step.title}</h4>
                <p className="text-sm text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Key Questions for Insurance */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            Important Questions to Ask Your Insurance
          </h3>
          <div className="bg-amber-50 rounded-2xl p-8 border border-amber-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <Phone className="text-amber-600 mr-2" size={20} />
                  Coverage Questions
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• What is my deductible for mental health services?</li>
                  <li>• What is my copay or coinsurance for therapy sessions?</li>
                  <li>• Do I need a referral from my primary care doctor?</li>
                  <li>• Is there a limit on the number of therapy sessions per year?</li>
                  <li>• Are telehealth sessions covered the same as in-person visits?</li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center">
                  <FileText className="text-amber-600 mr-2" size={20} />
                  Provider Questions
                </h4>
                <ul className="space-y-3 text-gray-700">
                  <li>• Is MindWell Therapy in my network?</li>
                  <li>• What are the out-of-network benefits if applicable?</li>
                  <li>• Do I need pre-authorization for therapy services?</li>
                  <li>• Can I see specialists (psychologists) without referral?</li>
                  <li>• What documentation is required for reimbursement?</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Support Notice */}
        <div className="bg-blue-600 rounded-2xl p-8 text-center text-white">
          <AlertCircle className="text-blue-200 mx-auto mb-4" size={48} />
          <h3 className="text-xl font-bold mb-3">We're Here to Help</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            Our experienced insurance specialists can help verify your benefits, 
            handle pre-authorizations, and work with you to understand your coverage. 
            Don't let insurance confusion prevent you from getting the care you need.
          </p>
          <button 
            onClick={() => {
              const element = document.getElementById('contact');
              if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
              }
            }}
            className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors duration-200"
          >
            Get Help with Insurance
          </button>
        </div>
      </div>
    </section>
  );
};

export default InsuranceInfo;