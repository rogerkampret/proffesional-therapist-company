import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle } from 'lucide-react';

const FAQ: React.FC = () => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const faqs = [
    {
      question: "How do I know if therapy is right for me?",
      answer: "Therapy can be beneficial for anyone looking to improve their mental health, work through challenges, or enhance their overall well-being. If you're experiencing persistent stress, anxiety, depression, relationship issues, or simply want personal growth, therapy might be helpful. We offer free consultations to discuss your specific needs and determine the best approach."
    },
    {
      question: "What should I expect in my first therapy session?",
      answer: "Your first session, often called an intake session, focuses on getting to know you and understanding your concerns. Your therapist will ask about your background, current challenges, goals for therapy, and any relevant medical history. This session helps establish a treatment plan tailored to your needs. It's normal to feel nervous, and your therapist will work to create a comfortable, non-judgmental environment."
    },
    {
      question: "How long does therapy typically take?",
      answer: "The length of therapy varies greatly depending on individual circumstances, the nature of your concerns, and your personal goals. Some people benefit from short-term therapy (8-12 sessions), while others may engage in longer-term treatment. Many clients see improvements within the first few sessions, and you and your therapist will regularly discuss your progress and treatment duration."
    },
    {
      question: "Do you accept my insurance?",
      answer: "We accept most major insurance plans including Aetna, Blue Cross Blue Shield, Cigna, UnitedHealth, and many others. We recommend contacting your insurance provider to understand your mental health benefits, including copays and deductibles. Our intake coordinators can help verify your coverage and explain your benefits before your first appointment."
    },
    {
      question: "What's the difference between a psychologist, therapist, and counselor?",
      answer: "These terms are often used interchangeably, but there are some distinctions. Psychologists typically have doctoral degrees and can provide psychological testing. Licensed therapists and counselors have master's degrees and provide talk therapy. All our providers are licensed mental health professionals trained in evidence-based treatments. The most important factor is finding someone you feel comfortable working with."
    },
    {
      question: "Can I switch therapists if it's not a good fit?",
      answer: "Absolutely. The therapeutic relationship is crucial for successful outcomes, and it's important to find a therapist you feel comfortable with. If you feel your current therapist isn't the right match, we can help you transition to another provider within our practice. This is more common than you might think and is completely acceptable."
    },
    {
      question: "What if I need support between sessions?",
      answer: "We provide several support options between sessions. For non-urgent matters, you can email your therapist, and they'll typically respond within 24-48 hours. For urgent concerns, we have a crisis line available 24/7 at (123) 456-7891. We also provide coping strategies and homework assignments to help you practice new skills between sessions."
    },
    {
      question: "Is my information confidential?",
      answer: "Yes, confidentiality is fundamental to therapy and protected by law (HIPAA). We cannot share your information without your written consent, except in specific circumstances: if there's risk of harm to yourself or others, suspected child or elder abuse, or if required by court order. We'll always discuss these limits of confidentiality with you during your first session."
    },
    {
      question: "What types of therapy do you offer?",
      answer: "We offer various evidence-based approaches including Cognitive Behavioral Therapy (CBT), Dialectical Behavior Therapy (DBT), EMDR for trauma, Acceptance and Commitment Therapy (ACT), family systems therapy, and mindfulness-based interventions. Your therapist will work with you to determine which approaches might be most effective for your specific concerns and goals."
    },
    {
      question: "Can I do therapy online or via telehealth?",
      answer: "Yes, we offer secure telehealth sessions through a HIPAA-compliant platform. Online therapy has been shown to be as effective as in-person therapy for many conditions. This option provides flexibility and convenience, especially for those with busy schedules, transportation challenges, or who prefer the comfort of their own space. We'll help you determine if telehealth is right for you."
    },
    {
      question: "What if I can't afford therapy?",
      answer: "We believe mental health care should be accessible to everyone. We offer several options including insurance coverage, sliding scale fees based on income, Employee Assistance Programs (EAP), and payment plans. During your initial consultation, we'll work with you to find a payment solution that fits your budget. Don't let cost prevent you from getting the help you need."
    },
    {
      question: "How do I prepare for my first therapy session?",
      answer: "Come as you are - there's no special preparation needed. However, you might find it helpful to think about what brought you to therapy, any specific goals you have, and questions you'd like to ask. Arrive a few minutes early to complete any remaining paperwork. Most importantly, be open and honest with your therapist to get the most benefit from your sessions."
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev => 
      prev.includes(index) 
        ? prev.filter(item => item !== index)
        : [...prev, index]
    );
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
            <HelpCircle className="text-blue-600" size={32} />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find answers to common questions about therapy, our services, and what to expect. 
            Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-200"
                aria-expanded={openItems.includes(index)}
                aria-controls={`faq-answer-${index}`}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                <div className="flex-shrink-0">
                  {openItems.includes(index) ? (
                    <ChevronUp className="text-blue-600" size={24} />
                  ) : (
                    <ChevronDown className="text-blue-600" size={24} />
                  )}
                </div>
              </button>
              
              <div
                id={`faq-answer-${index}`}
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItems.includes(index) ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                  {faq.answer}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="mt-12 text-center bg-blue-600 rounded-2xl p-8 text-white">
          <h3 className="text-xl font-bold mb-3">Still Have Questions?</h3>
          <p className="text-blue-100 mb-6">
            Our team is here to help you understand how therapy can benefit you. 
            Get in touch for a free consultation.
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
            Contact Us Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQ;