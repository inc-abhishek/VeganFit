import React from 'react';
import { Check, Star } from 'lucide-react';

const plans = [
  {
    name: "Starter",
    price: "₹1",
    description: "Perfect for beginners starting their vegan journey",
    features: [
      "Basic meal plans",
      "5 recipes per week",
      "Community access",
      "Basic macro tracking",
      "Email support"
    ],
    popular: false
  },
  {
    name: "Pro",
    price: "₹499",
    description: "Ideal for committed vegans looking to optimize their diet",
    features: [
      "Personalized meal plans",
      "Unlimited recipes",
      "Priority community access",
      "Advanced macro tracking",
      "24/7 chat support",
      "1 chef consultation/month",
      "Shopping list generator"
    ],
    popular: true
  },
  {
    name: "Elite",
    price: "₹999",
    description: "For athletes and professionals seeking maximum results",
    features: [
      "Custom athlete meal plans",
      "Unlimited everything",
      "VIP community access",
      "Advanced analytics",
      "24/7 priority support",
      "Weekly chef consultations",
      "Nutrition coaching",
      "Personal shopping assistant"
    ],
    popular: false
  }
];

const PlansPage = () => {
  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            Choose Your Plan
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Select the perfect plan for your vegan journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-white rounded-2xl shadow-lg overflow-hidden
                ${plan.popular ? 'ring-2 ring-green-500' : ''}
              `}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-green-500 text-white px-4 py-1 rounded-bl-lg">
                  Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="flex items-baseline mb-4">
                  <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                  <span className="text-gray-500 ml-2">/month</span>
                </div>
                <p className="text-gray-600 mb-6">
                  {plan.description}
                </p>
                <button
                  className={`w-full py-3 px-6 rounded-lg font-medium transition-colors
                    ${plan.popular
                      ? 'bg-green-600 text-white hover:bg-green-700'
                      : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
                    }`}
                >
                  Get Started
                </button>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center text-gray-600">
                      <Check className="h-5 w-5 text-green-500 mr-3" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl font-bold text-gray-900 mb-8 text-center">
            What Our Members Say
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="text-center">
                <div className="flex justify-center mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className="h-5 w-5 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 mb-4">
                  "VeganFit has transformed my lifestyle. The meal plans and community support are incredible!"
                </p>
                <p className="font-medium text-gray-900">- Happy Member {i}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlansPage;