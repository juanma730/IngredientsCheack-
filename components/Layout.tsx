
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Search, Menu, X, Leaf, ShieldCheck, HelpCircle, BookOpen, Info } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/ingredient/${searchQuery.trim().toLowerCase().replace(/\s+/g, '-')}`);
      setSearchQuery('');
      setIsMenuOpen(false);
    }
  };

  const navLinks = [
    { name: 'Browse', path: '/browse', icon: <BookOpen className="w-4 h-4" /> },
    { name: 'FAQ', path: '/faq', icon: <HelpCircle className="w-4 h-4" /> },
    { name: 'About', path: '/about', icon: <Info className="w-4 h-4" /> },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 glass border-b border-white/10 px-4 md:px-8 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="bg-cyan-500/20 p-2 rounded-lg group-hover:bg-cyan-500/40 transition-colors">
            <ShieldCheck className="w-6 h-6 text-cyan-400" />
          </div>
          <span className="font-bold text-xl tracking-tight hidden sm:inline-block">Ingredient<span className="text-cyan-400">Checker</span></span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          <form onSubmit={handleSearch} className="relative group">
            <input
              type="text"
              placeholder="Search ingredient..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-white/5 border border-white/10 rounded-full py-1.5 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-cyan-500/50 w-64 transition-all"
            />
            <Search className="absolute left-3 top-2 w-4 h-4 text-gray-400" />
          </form>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-gray-400 hover:text-white flex items-center space-x-1.5 font-medium transition-colors"
            >
              {link.icon}
              <span>{link.name}</span>
            </Link>
          ))}
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-gray-400" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 bg-black/90 md:hidden pt-20 px-6">
          <form onSubmit={handleSearch} className="mb-8">
            <input
              type="text"
              placeholder="Search ingredient..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/10 border border-white/20 rounded-xl py-3 px-4 focus:outline-none focus:ring-2 focus:ring-cyan-500"
            />
          </form>
          <div className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                className="text-xl font-semibold text-gray-300 hover:text-white border-b border-white/5 pb-2"
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}

      <main className="flex-grow max-w-7xl mx-auto w-full px-4 md:px-8 py-8">
        {children}
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 mt-12 py-12 px-4 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <ShieldCheck className="w-5 h-5 text-cyan-400" />
              <span className="font-bold text-lg">IngredientChecker</span>
            </Link>
            <p className="text-gray-400 text-sm max-w-sm">
              Empowering consumers to make informed dietary choices. Search thousands of ingredients to see if they fit your lifestyle.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-cyan-400">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li><Link to="/browse" className="hover:text-white">Browse Ingredients</Link></li>
              <li><Link to="/faq" className="hover:text-white">Common Questions</Link></li>
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/about" className="hover:text-white">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4 text-cyan-400">Disclaimer</h4>
            <p className="text-xs text-gray-500 leading-relaxed">
              Information provided is for educational purposes only. Always consult product packaging and certified religious or nutritional experts for final rulings.
            </p>
          </div>
        </div>
        <div className="text-center mt-12 text-gray-600 text-[10px] tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Ingredient Checker. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
