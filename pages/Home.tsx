
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
// Added ShieldCheck to the imports
import { Search, ChevronRight, Zap, Globe, Sparkles, ShieldCheck } from 'lucide-react';
import AdPlaceholder from '../components/AdPlaceholder';

const Home: React.FC = () => {
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/ingredient/${query.trim().toLowerCase().replace(/\s+/g, '-')}`);
    }
  };

  const popular = ['Gelatin', 'E471', 'Whey', 'Carmine', 'Lecithin', 'Glycerin'];

  return (
    <div className="flex flex-col items-center">
      {/* Hero Section */}
      <section className="text-center mt-8 md:mt-20 max-w-3xl w-full">
        <div className="inline-flex items-center space-x-2 bg-cyan-500/10 border border-cyan-500/20 px-3 py-1 rounded-full text-cyan-400 text-xs font-medium mb-6 animate-pulse">
          <Sparkles className="w-3 h-3" />
          <span>Real-time Ingredient Safety Check</span>
        </div>
        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-white via-white to-gray-500 bg-clip-text text-transparent">
          Is it safe for <span className="text-cyan-400">your diet?</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-10 max-w-2xl mx-auto leading-relaxed">
          Instantly check if any food ingredient is <span className="text-white font-medium">Vegetarian</span>, <span className="text-white font-medium">Vegan</span>, or <span className="text-white font-medium">Halal</span>.
        </p>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="relative group max-w-2xl mx-auto mb-6">
          <input
            type="text"
            autoFocus
            placeholder="Enter ingredient name (e.g. Gelatin, E471)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full bg-white/5 border-2 border-white/10 rounded-2xl py-4 md:py-6 px-6 md:px-8 md:pl-16 text-xl focus:outline-none focus:border-cyan-500/50 focus:ring-4 focus:ring-cyan-500/10 transition-all shadow-2xl"
          />
          <Search className="hidden md:block absolute left-6 top-1/2 -translate-y-1/2 w-6 h-6 text-gray-500 group-focus-within:text-cyan-400 transition-colors" />
          <button
            type="submit"
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 bg-cyan-500 hover:bg-cyan-400 text-white p-2 md:p-3 rounded-xl transition-all active:scale-95"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </form>

        <div className="flex flex-wrap justify-center gap-3 text-sm">
          <span className="text-gray-500">Popular:</span>
          {popular.map((item) => (
            <Link
              key={item}
              to={`/ingredient/${item.toLowerCase()}`}
              className="text-gray-400 hover:text-cyan-400 transition-colors underline decoration-white/10 hover:decoration-cyan-400/30"
            >
              {item}
            </Link>
          ))}
        </div>
      </section>

      <AdPlaceholder className="mt-16" />

      {/* Features */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20 w-full">
        <div className="glass-card p-8 rounded-3xl">
          <div className="w-12 h-12 bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-6">
            <Zap className="w-6 h-6 text-emerald-400" />
          </div>
          <h3 className="text-xl font-bold mb-3">Instant Analysis</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Powered by comprehensive databases and AI to give you results in milliseconds.
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl">
          <div className="w-12 h-12 bg-amber-500/20 rounded-2xl flex items-center justify-center mb-6">
            <Globe className="w-6 h-6 text-amber-400" />
          </div>
          <h3 className="text-xl font-bold mb-3">Halal & Vegan</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Specific insights into animal-derived compounds and religious dietary compliance.
          </p>
        </div>

        <div className="glass-card p-8 rounded-3xl">
          <div className="w-12 h-12 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6">
            <ShieldCheck className="w-6 h-6 text-purple-400" />
          </div>
          <h3 className="text-xl font-bold mb-3">Trustworthy Data</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Explanations that go beyond "Yes" or "No" to tell you the 'why' behind the result.
          </p>
        </div>
      </section>

      <div className="mt-20 text-center max-w-xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">Why check ingredients?</h2>
        <p className="text-gray-400 leading-relaxed text-sm">
          Processed foods often contain hidden animal derivatives under vague names like "E-numbers" or "Natural Flavors". We help you decode these labels so you can eat with peace of mind.
        </p>
      </div>
      
      <AdPlaceholder className="mt-12" />
    </div>
  );
};

export default Home;
