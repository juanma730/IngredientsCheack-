
import React from 'react';
import { ShieldCheck, Mail, Heart, Scale } from 'lucide-react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-16">
        <h1 className="text-4xl md:text-5xl font-black mb-6">About Ingredient Checker</h1>
        <p className="text-gray-400 text-lg max-w-2xl mx-auto leading-relaxed">
          The ultimate utility for conscious consumers. We help you navigate the complex world of food labels with transparency and speed.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <Heart className="w-6 h-6 text-rose-400 mr-3" />
            Our Mission
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            Ingredient Checker was born out of frustration with vague food labels. Whether you are following a vegan lifestyle for the planet, a vegetarian diet for animal welfare, or a Halal diet for religious observance, finding clear information shouldn't be a chore.
          </p>
          <p className="text-gray-400 leading-relaxed">
            Our goal is to provide a central repository of ingredient data that is easy to search, easy to read, and always up-to-date.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-bold mb-4 flex items-center">
            <ShieldCheck className="w-6 h-6 text-cyan-400 mr-3" />
            Reliability & Trust
          </h2>
          <p className="text-gray-400 leading-relaxed mb-6">
            We source our data from reputable food science journals, religious certification bodies, and public manufacturing disclosures. Every ingredient is cross-referenced to ensure accuracy.
          </p>
          <div className="bg-white/5 p-4 rounded-2xl border border-white/10 text-xs italic text-gray-500">
            "Transparency is the foundation of our tool. If we aren't 100% sure of a source, we mark it as 'Depends' to ensure you make the safest choice."
          </div>
        </div>
      </div>

      <section className="bg-rose-500/5 border border-rose-500/20 p-8 md:p-12 rounded-3xl mb-20">
        <div className="flex items-center space-x-3 mb-6 text-rose-400">
          <Scale className="w-8 h-8" />
          <h2 className="text-2xl font-bold">Important Disclaimer</h2>
        </div>
        <div className="space-y-4 text-gray-300 text-sm leading-relaxed">
          <p>
            <strong>NOT MEDICAL OR RELIGIOUS ADVICE:</strong> The information on Ingredient Checker is for educational purposes only. It is not intended as a substitute for professional medical advice, diagnosis, or treatment, nor is it a formal religious ruling (Fatwa).
          </p>
          <p>
            <strong>MANUFACTURING CHANGES:</strong> Ingredients and sourcing can change without notice. Cross-contamination in manufacturing facilities is a reality for many products. We recommend users with severe allergies or strict religious adherence to contact manufacturers directly.
          </p>
          <p>
            <strong>ACCURACY:</strong> While we strive for 100% accuracy, Ingredient Checker assumes no liability for errors or omissions in the content of this site.
          </p>
        </div>
      </section>

      <div className="text-center">
        <h2 className="text-2xl font-bold mb-6">Get in Touch</h2>
        <div className="inline-flex items-center space-x-2 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer text-lg font-medium">
          <Mail className="w-5 h-5" />
          <span>hello@ingredientchecker.com</span>
        </div>
      </div>
    </div>
  );
};

export default About;
