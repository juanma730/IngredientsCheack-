
import React from 'react';
import { Link } from 'react-router-dom';
import { INITIAL_INGREDIENTS } from '../data/ingredients';
import AdPlaceholder from '../components/AdPlaceholder';

const Browse: React.FC = () => {
  // Sort ingredients alphabetically
  const sorted = [...INITIAL_INGREDIENTS].sort((a, b) => a.name.localeCompare(b.name));

  // Group by first letter
  const groups = sorted.reduce((acc, curr) => {
    const letter = curr.name[0].toUpperCase();
    if (!acc[letter]) acc[letter] = [];
    acc[letter].push(curr);
    return acc;
  }, {} as Record<string, typeof INITIAL_INGREDIENTS>);

  const letters = Object.keys(groups).sort();

  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-black mb-4">Browse Ingredients</h1>
      <p className="text-gray-400 mb-12">Search our extensive database of common food additives and compounds.</p>

      <div className="flex flex-wrap gap-2 mb-12 sticky top-20 z-10 py-2 glass rounded-2xl px-4">
        {letters.map(l => (
          <a key={l} href={`#letter-${l}`} className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-cyan-500/20 text-gray-400 hover:text-cyan-400 font-bold transition-all">
            {l}
          </a>
        ))}
      </div>

      <AdPlaceholder />

      <div className="space-y-12">
        {letters.map(letter => (
          <div key={letter} id={`letter-${letter}`} className="scroll-mt-32">
            <h2 className="text-3xl font-bold mb-6 text-cyan-400 border-b border-white/10 pb-2">{letter}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {groups[letter].map(ing => (
                <Link
                  key={ing.id}
                  to={`/ingredient/${ing.id}`}
                  className="glass-card p-4 rounded-xl flex items-center justify-between group"
                >
                  <span className="font-medium group-hover:text-cyan-400 transition-colors">{ing.name}</span>
                  <div className="flex space-x-1">
                    <span className={`w-2 h-2 rounded-full ${ing.vegan === 'Yes' ? 'bg-emerald-500' : ing.vegan === 'No' ? 'bg-rose-500' : 'bg-amber-500'}`}></span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>

      <AdPlaceholder className="mt-20" />
    </div>
  );
};

export default Browse;
