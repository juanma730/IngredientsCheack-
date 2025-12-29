
import React from 'react';
import { HelpCircle, ChevronRight } from 'lucide-react';
import AdPlaceholder from '../components/AdPlaceholder';

const FAQ: React.FC = () => {
  const faqs = [
    {
      q: "Is ingredient checking accurate?",
      a: "We use high-quality databases and AI to provide the most accurate information available. However, manufacturers frequently change their sourcing. Always check the physical product label for the most current information."
    },
    {
      q: "Does Halal status depend on the source?",
      a: "Yes. Many ingredients like E471 or Gelatin can be sourced from either animals (non-Halal unless certified) or plants. When we mark an item as 'Depends', it means you should look for a Halal certification symbol on the packaging."
    },
    {
      q: "Is this medical advice?",
      a: "Absolutely not. This tool is for informational and educational purposes regarding dietary preferences and religious guidelines. If you have severe allergies or medical conditions, consult a doctor or a certified nutritionist."
    },
    {
      q: "How can I be sure a product is 100% Vegan?",
      a: "Look for certified Vegan logos. Some ingredients are chemically vegan but might involve animal-based processes (like bone char in sugar processing). Our tool highlights these nuances where possible."
    }
  ];

  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-black mb-6">Frequently Asked Questions</h1>
      <p className="text-gray-400 mb-12">Clear answers to common questions about dietary restrictions and ingredient safety.</p>

      <div className="space-y-6">
        {faqs.map((faq, idx) => (
          <div key={idx} className="glass-card p-6 rounded-3xl border border-white/5">
            <div className="flex items-start space-x-4">
              <div className="bg-cyan-500/10 p-2 rounded-xl mt-1">
                <HelpCircle className="w-5 h-5 text-cyan-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold mb-3">{faq.q}</h3>
                <p className="text-gray-400 leading-relaxed text-sm">
                  {faq.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AdPlaceholder className="mt-12" />

      <div className="mt-16 bg-gradient-to-br from-cyan-500/10 to-transparent p-10 rounded-3xl border border-cyan-500/20 text-center">
        <h2 className="text-2xl font-bold mb-4">Have more questions?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">We're constantly updating our database. If you have a specific ingredient you'd like us to research, let us know.</p>
        <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:bg-gray-200 transition-colors">
          Contact Support
        </button>
      </div>
    </div>
  );
};

export default FAQ;
