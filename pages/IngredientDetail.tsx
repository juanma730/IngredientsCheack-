
import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { INITIAL_INGREDIENTS } from '../data/ingredients';
import { fetchIngredientWithAI } from '../services/geminiService';
import { Ingredient } from '../types';
import StatusBadge from '../components/StatusBadge';
import AdPlaceholder from '../components/AdPlaceholder';
import { Loader2, ArrowLeft, Info, ShoppingBag, SwitchCamera, Layers } from 'lucide-react';

const IngredientDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [ingredient, setIngredient] = useState<Ingredient | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadIngredient = async () => {
      setLoading(true);
      // Try local search first
      const found = INITIAL_INGREDIENTS.find(i => i.id === id || i.name.toLowerCase() === id?.replace(/-/g, ' '));
      
      if (found) {
        setIngredient(found);
        setLoading(false);
      } else if (id) {
        // Fallback to AI search for everything else
        const aiResult = await fetchIngredientWithAI(id.replace(/-/g, ' '));
        setIngredient(aiResult);
        setLoading(false);
      }
    };

    loadIngredient();
    window.scrollTo(0, 0);
  }, [id]);

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[60vh]">
        <Loader2 className="w-12 h-12 text-cyan-500 animate-spin mb-4" />
        <p className="text-gray-400 animate-pulse">Analyzing ingredient properties...</p>
      </div>
    );
  }

  if (!ingredient) {
    return (
      <div className="text-center py-20">
        <h2 className="text-3xl font-bold mb-4">Ingredient Not Found</h2>
        <p className="text-gray-400 mb-8">We couldn't find details for "{id}". Try a different search.</p>
        <Link to="/" className="text-cyan-400 flex items-center justify-center hover:underline">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back to Search
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto">
      <Link to="/" className="inline-flex items-center text-gray-500 hover:text-white transition-colors mb-8 group">
        <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to search
      </Link>

      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
        <div>
          <h1 className="text-4xl md:text-5xl font-black tracking-tight mb-2 capitalize">{ingredient.name}</h1>
          <p className="text-gray-400 text-lg">Detailed dietary analysis & safety report</p>
        </div>
        <div className="flex space-x-2">
          <button className="bg-white/5 border border-white/10 px-4 py-2 rounded-xl text-xs font-semibold hover:bg-white/10 transition-colors uppercase tracking-widest">
            Print Report
          </button>
        </div>
      </div>

      {/* Grid Status */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        <StatusBadge label="Vegetarian" status={ingredient.vegetarian} />
        <StatusBadge label="Vegan" status={ingredient.vegan} />
        <StatusBadge label="Halal" status={ingredient.halal} />
      </div>

      <AdPlaceholder label="Before Content Ad" />

      {/* Content Sections */}
      <div className="space-y-8">
        <section className="glass-card p-6 md:p-8 rounded-3xl">
          <div className="flex items-center space-x-3 mb-4 text-cyan-400">
            <Info className="w-6 h-6" />
            <h2 className="text-xl font-bold">What is it?</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            {ingredient.description}
          </p>
        </section>

        <section className="glass-card p-6 md:p-8 rounded-3xl">
          <div className="flex items-center space-x-3 mb-4 text-rose-400">
            <Layers className="w-6 h-6" />
            <h2 className="text-xl font-bold">Why people avoid it</h2>
          </div>
          <p className="text-gray-300 leading-relaxed">
            {ingredient.whyAvoid}
          </p>
        </section>

        <AdPlaceholder label="Mid Content Ad" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <section className="glass-card p-6 md:p-8 rounded-3xl h-full">
            <div className="flex items-center space-x-3 mb-4 text-amber-400">
              <ShoppingBag className="w-6 h-6" />
              <h2 className="text-xl font-bold">Common Products</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {ingredient.whereFound.map((item, idx) => (
                <li key={idx} className="hover:text-gray-200 transition-colors cursor-default">{item}</li>
              ))}
            </ul>
          </section>

          <section className="glass-card p-6 md:p-8 rounded-3xl h-full">
            <div className="flex items-center space-x-3 mb-4 text-emerald-400">
              <SwitchCamera className="w-6 h-6" />
              <h2 className="text-xl font-bold">Safe Alternatives</h2>
            </div>
            <ul className="list-disc list-inside space-y-2 text-gray-400">
              {ingredient.alternatives.map((item, idx) => (
                <li key={idx} className="hover:text-gray-200 transition-colors cursor-default">{item}</li>
              ))}
            </ul>
          </section>
        </div>

        {/* Similar Ingredients */}
        {ingredient.similarIngredients && ingredient.similarIngredients.length > 0 && (
          <section className="py-8">
            <h2 className="text-xl font-bold mb-6 flex items-center">
              <span className="w-8 h-px bg-cyan-500 mr-4"></span>
              Similar Ingredients
            </h2>
            <div className="flex flex-wrap gap-4">
              {ingredient.similarIngredients.map((item) => (
                <Link
                  key={item}
                  to={`/ingredient/${item.toLowerCase().replace(/\s+/g, '-')}`}
                  className="bg-white/5 border border-white/10 hover:border-cyan-500/50 px-6 py-3 rounded-2xl transition-all text-sm font-medium"
                >
                  {item}
                </Link>
              ))}
            </div>
          </section>
        )}
      </div>

      <AdPlaceholder label="Bottom Page Ad" />
    </div>
  );
};

export default IngredientDetail;
