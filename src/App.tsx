import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Products from './pages/Products';
import RecipesPage from './pages/RecipesPage';
import CommunityPage from './pages/CommunityPage';
import ChefZonePage from './pages/ChefZonePage';
import PlansPage from './pages/PlansPage';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-green-50">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/recipes" element={<RecipesPage />} />
          <Route path="/community" element={<CommunityPage />} />
          <Route path="/chef-zone" element={<ChefZonePage />} />
          <Route path="/plans" element={<PlansPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;