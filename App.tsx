
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import IngredientDetail from './pages/IngredientDetail';
import Browse from './pages/Browse';
import FAQ from './pages/FAQ';
import About from './pages/About';

const App: React.FC = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/ingredient/:id" element={<IngredientDetail />} />
          <Route path="/browse" element={<Browse />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Layout>
    </Router>
  );
};

export default App;
