import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, Search, User } from 'lucide-react';

const Navbar = () => {
  const location = useLocation();

  const isActive = (path: string) => {
    return location.pathname === path ? 'text-green-600' : 'text-gray-700 hover:text-green-600';
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <button className="p-2 rounded-md text-gray-600 lg:hidden">
              <Menu className="h-6 w-6" />
            </button>
            <Link to="/" className="flex-shrink-0 flex items-center ml-4 lg:ml-0">
              <span className="text-2xl font-bold text-green-600">VeganFit</span>
            </Link>
          </div>
          
          <div className="hidden lg:flex lg:items-center lg:space-x-8">
            <Link to="/products" className={`${isActive('/products')} transition-colors duration-200`}>
              Products
            </Link>
            <Link to="/recipes" className={`${isActive('/recipes')} transition-colors duration-200`}>
              Recipes
            </Link>
            <Link to="/community" className={`${isActive('/community')} transition-colors duration-200`}>
              Community
            </Link>
            <Link to="/chef-zone" className={`${isActive('/chef-zone')} transition-colors duration-200`}>
              Chef Zone
            </Link>
            <Link to="/plans" className={`${isActive('/plans')} transition-colors duration-200`}>
              Plans
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button className="p-2 rounded-md text-gray-600 hover:text-green-600 transition-colors">
              <Search className="h-5 w-5" />
            </button>
            <button className="p-2 rounded-md text-gray-600 hover:text-green-600 transition-colors">
              <User className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;