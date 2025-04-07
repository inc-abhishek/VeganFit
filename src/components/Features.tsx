import React from 'react';
import { TrendingUp, Utensils, Users, ShoppingCart } from 'lucide-react';

const features = [
  {
    icon: <TrendingUp className="h-6 w-6" />,
    title: "Macro Tracking",
    description: "Access our comprehensive database of vegan products with detailed nutritional information."
  },
  {
    icon: <Utensils className="h-6 w-6" />,
    title: "AI Recipe Generator",
    description: "Get personalized recipe suggestions based on your ingredients and preferences."
  },
  {
    icon: <Users className="h-6 w-6" />,
    title: "Community Support",
    description: "Connect with like-minded individuals, share recipes, and get expert advice."
  },
  {
    icon: <ShoppingCart className="h-6 w-6" />,
    title: "Instant Grocery",
    description: "Order ingredients directly through Blinkit & Zepto integration."
  }
];

const Features = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Everything You Need for Your Vegan Journey
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Comprehensive tools and support to make your vegan lifestyle easy and enjoyable
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature, index) => (
            <div
              key={index}
              className="relative p-6 bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-lg transition-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-green-100 text-green-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Features;