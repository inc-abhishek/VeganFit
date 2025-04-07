import React from 'react';
import { ChefHat, Star, Users, Award, ArrowRight } from 'lucide-react';

const chefs = [
  {
    id: 1,
    name: "Chef Maria Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    specialty: "High-Protein Vegan",
    rating: 4.9,
    students: 1234,
    featured: true,
    description: "Specializing in high-protein vegan meals that are both delicious and nutritious. Former chef at Michelin-starred restaurants.",
    certifications: ["Certified Nutritionist", "Plant-Based Cooking Expert"]
  },
  {
    id: 2,
    name: "Chef Alex Rivera",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    specialty: "Mexican Vegan Cuisine",
    rating: 4.8,
    students: 856,
    featured: true,
    description: "Transforming traditional Mexican dishes into healthy vegan alternatives without compromising on taste.",
    certifications: ["Culinary Arts Master", "Vegan Cuisine Expert"]
  },
  {
    id: 3,
    name: "Chef Priya Sharma",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    specialty: "Indian Vegan Fusion",
    rating: 4.9,
    students: 2100,
    featured: true,
    description: "Creating innovative fusion dishes combining Indian flavors with global cuisine, all plant-based.",
    certifications: ["Plant-Based Nutrition", "Ayurvedic Cooking"]
  }
];

const ChefZone = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Learn from Expert Vegan Chefs
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Get personalized meal plans and cooking guidance from certified vegan chefs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {chefs.map((chef) => (
            <div key={chef.id} className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="p-6">
                <div className="flex items-center mb-6">
                  <img
                    src={chef.avatar}
                    alt={chef.name}
                    className="h-16 w-16 rounded-full border-2 border-green-500"
                  />
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold text-gray-900">
                      {chef.name}
                    </h3>
                    <p className="text-green-600 font-medium">{chef.specialty}</p>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-4">
                  <div className="flex items-center text-yellow-500">
                    <Star className="h-5 w-5 fill-current" />
                    <span className="ml-1 font-medium">{chef.rating}</span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Users className="h-5 w-5" />
                    <span className="ml-1">{chef.students} students</span>
                  </div>
                </div>

                <p className="text-gray-600 mb-4">{chef.description}</p>

                <div className="mb-6">
                  {chef.certifications.map((cert, index) => (
                    <div key={index} className="flex items-center text-gray-600 mb-2">
                      <Award className="h-4 w-4 mr-2 text-green-600" />
                      <span className="text-sm">{cert}</span>
                    </div>
                  ))}
                </div>

                <div className="flex space-x-4">
                  <button className="flex-1 bg-green-600 text-white py-2 px-4 rounded-lg hover:bg-green-700 transition-colors flex items-center justify-center">
                    View Meal Plans
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </button>
                  <button className="flex-1 border border-green-600 text-green-600 py-2 px-4 rounded-lg hover:bg-green-50 transition-colors">
                    Message
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button className="inline-flex items-center px-8 py-3 border border-green-600 text-green-600 rounded-full hover:bg-green-50 transition-colors font-medium">
            View All Chefs
            <ArrowRight className="h-4 w-4 ml-2" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChefZone;