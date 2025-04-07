import React from 'react';
import { Truck, Clock, ShoppingBag } from 'lucide-react';

const DeliverySection = () => {
  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Get Ingredients Delivered
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Quick delivery from our partners Zepto and Blinkit
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-purple-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1556740738-b6a63e27c4df?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Zepto Delivery"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold text-purple-600 mb-4">Zepto</h3>
            <p className="text-gray-600 mb-6">
              Get your ingredients delivered in 10 minutes or less. Fresh, quality products at your doorstep.
            </p>
            <button className="w-full bg-purple-600 text-white py-3 rounded-lg hover:bg-purple-700 transition-colors">
              Order with Zepto
            </button>
          </div>

          <div className="bg-yellow-50 rounded-xl p-8 hover:shadow-lg transition-shadow">
            <img
              src="https://images.unsplash.com/photo-1542838132-92c53300491e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
              alt="Blinkit Delivery"
              className="w-full h-48 object-cover rounded-lg mb-6"
            />
            <h3 className="text-2xl font-bold text-yellow-600 mb-4">Blinkit</h3>
            <p className="text-gray-600 mb-6">
              Wide selection of vegan products and fresh produce delivered within minutes.
            </p>
            <button className="w-full bg-yellow-600 text-white py-3 rounded-lg hover:bg-yellow-700 transition-colors">
              Order with Blinkit
            </button>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <Truck className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Quick Delivery</h4>
              <p className="text-gray-600">10-minute delivery</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <Clock className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">Live Tracking</h4>
              <p className="text-gray-600">Track your order live</p>
            </div>
          </div>
          <div className="flex items-center">
            <div className="bg-green-100 p-3 rounded-full">
              <ShoppingBag className="h-6 w-6 text-green-600" />
            </div>
            <div className="ml-4">
              <h4 className="text-lg font-semibold">No Minimum Order</h4>
              <p className="text-gray-600">Order any amount</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeliverySection;