import React from 'react';
import { Search, Filter, TrendingUp } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Beyond Burger Patties",
    brand: "Beyond Meat",
    image: "https://images.unsplash.com/photo-1586816001966-79b736744398?auto=format&fit=crop&w=800&q=80",
    category: "Meat Alternatives",
    protein: "20g",
    calories: "230",
    price: "₹399",
    rating: 4.5,
    reviews: 128
  },
  {
    id: 2,
    name: "Organic Protein Powder",
    brand: "Vegan Pro",
    image: "https://images.unsplash.com/photo-1622485831129-a080d8dd8ccd?auto=format&fit=crop&w=800&q=80",
    category: "Supplements",
    protein: "25g",
    calories: "120",
    price: "₹1299",
    rating: 4.8,
    reviews: 256
  },
  {
    id: 3,
    name: "Almond Greek Yogurt",
    brand: "Plant Base",
    image: "https://images.unsplash.com/photo-1615485290382-441e4d049cb5?auto=format&fit=crop&w=800&q=80",
    category: "Dairy Alternatives",
    protein: "8g",
    calories: "150",
    price: "₹199",
    rating: 4.3,
    reviews: 89
  }
];

const Products = () => {
  return (
    <div className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Vegan Products</h1>
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
              />
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            </div>
            <button className="flex items-center px-4 py-2 bg-gray-100 rounded-lg text-gray-700 hover:bg-gray-200">
              <Filter className="h-5 w-5 mr-2" />
              Filters
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover"
                />
                <span className="absolute top-4 right-4 px-2 py-1 bg-green-100 text-green-700 text-sm rounded-full">
                  {product.category}
                </span>
              </div>
              <div className="p-6">
                <div className="text-sm text-gray-500 mb-1">{product.brand}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <TrendingUp className="h-4 w-4 text-green-600 mr-1" />
                    <span className="text-green-600 font-medium">{product.protein} protein</span>
                  </div>
                  <span className="text-gray-600">{product.calories} cal</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-gray-900">{product.price}</span>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;