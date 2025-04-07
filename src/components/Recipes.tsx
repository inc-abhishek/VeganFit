import React, { useState } from 'react';
import { Clock, Users as ServingsIcon, Flame, ChefHat, BookmarkPlus } from 'lucide-react';

const categories = ["All", "Breakfast", "Lunch", "Dinner", "Snacks", "High-Protein", "Quick Meals"];

const recipes = [
  {
    id: 1,
    title: "High-Protein Tofu Scramble",
    chef: "Chef Maria Chen",
    image: "https://images.unsplash.com/photo-1546007600-8c2e5a9b8ea7?auto=format&fit=crop&w=800&q=80",
    time: "20 mins",
    servings: 2,
    calories: 380,
    protein: "24g",
    difficulty: "Easy",
    category: "Breakfast",
    tags: ["High-Protein", "Quick Meals"]
  },
  {
    id: 2,
    title: "Quinoa Buddha Bowl",
    chef: "Chef Alex Rivera",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=800&q=80",
    time: "30 mins",
    servings: 2,
    calories: 450,
    protein: "18g",
    difficulty: "Medium",
    category: "Lunch",
    tags: ["High-Protein", "Meal Prep"]
  },
  {
    id: 3,
    title: "Chickpea Curry Bowl",
    chef: "Chef Priya Sharma",
    image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=800&q=80",
    time: "35 mins",
    servings: 4,
    calories: 420,
    protein: "15g",
    difficulty: "Medium",
    category: "Dinner",
    tags: ["Comfort Food", "Spicy"]
  },
  {
    id: 4,
    title: "Green Protein Smoothie",
    chef: "Chef Tom Wilson",
    image: "https://images.unsplash.com/photo-1623065422902-30a2d299bbe4?auto=format&fit=crop&w=800&q=80",
    time: "5 mins",
    servings: 1,
    calories: 280,
    protein: "20g",
    difficulty: "Easy",
    category: "Snacks",
    tags: ["Quick Meals", "Pre-Workout"]
  },
  {
    id: 5,
    title: "Lentil Shepherd's Pie",
    chef: "Chef Maria Chen",
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=800&q=80",
    time: "50 mins",
    servings: 6,
    calories: 420,
    protein: "22g",
    difficulty: "Advanced",
    category: "Dinner",
    tags: ["Comfort Food", "High-Protein"]
  },
  {
    id: 6,
    title: "Protein Pancakes",
    chef: "Chef Alex Rivera",
    image: "https://images.unsplash.com/photo-1528207776546-365bb710ee93?auto=format&fit=crop&w=800&q=80",
    time: "15 mins",
    servings: 2,
    calories: 340,
    protein: "26g",
    difficulty: "Easy",
    category: "Breakfast",
    tags: ["High-Protein", "Quick Meals"]
  }
];

const Recipes = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredRecipes = selectedCategory === "All" 
    ? recipes 
    : recipes.filter(recipe => 
        recipe.category === selectedCategory || recipe.tags.includes(selectedCategory)
      );

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Discover Delicious Vegan Recipes
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Explore our collection of chef-crafted vegan recipes
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-colors
                ${selectedCategory === category
                  ? 'bg-green-600 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredRecipes.map((recipe) => (
            <div key={recipe.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative">
                <img
                  src={recipe.image}
                  alt={recipe.title}
                  className="w-full h-48 object-cover"
                />
                <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md hover:bg-gray-50">
                  <BookmarkPlus className="h-5 w-5 text-green-600" />
                </button>
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {recipe.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {recipe.title}
                </h3>
                <div className="flex items-center mb-4 text-gray-600 text-sm">
                  <ChefHat className="h-4 w-4 mr-1" />
                  <span>{recipe.chef}</span>
                </div>
                <div className="grid grid-cols-3 gap-4 text-gray-600 text-sm mb-4">
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    {recipe.time}
                  </div>
                  <div className="flex items-center">
                    <ServingsIcon className="h-4 w-4 mr-1" />
                    {recipe.servings}
                  </div>
                  <div className="flex items-center">
                    <Flame className="h-4 w-4 mr-1" />
                    {recipe.calories}
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm font-medium text-green-600">
                    {recipe.protein} protein
                  </span>
                  <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
                    View Recipe
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Recipes;