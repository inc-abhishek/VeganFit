import React, { useState } from 'react';
import { MessageSquare, Heart, Share2, Award, Bookmark, TrendingUp } from 'lucide-react';

const posts = [
  {
    id: 1,
    author: "Sarah Chen",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    badge: "Top Contributor",
    content: "Just made this amazing high-protein vegan breakfast bowl! Who says vegans can't get enough protein? 💪🌱 Recipe in comments!",
    image: "https://images.unsplash.com/photo-1590301157890-4810ed352733?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    likes: 234,
    comments: 45,
    shares: 12,
    isTrending: true,
    timeAgo: "2 hours ago"
  },
  {
    id: 2,
    author: "Mike Peterson",
    avatar: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    badge: "Transformation Journey",
    content: "Week 4 of my vegan journey: Down 8 pounds and feeling more energetic than ever! Here's my go-to dinner recipe 🥗 #VeganTransformation",
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    likes: 156,
    comments: 23,
    shares: 8,
    isTrending: false,
    timeAgo: "5 hours ago"
  },
  {
    id: 3,
    author: "Lisa Wong",
    avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    badge: "Certified Nutritionist",
    content: "Here's a quick guide on essential vegan protein sources! Swipe through to learn more about incorporating these into your daily meals 📚",
    image: "https://images.unsplash.com/photo-1515543237350-b3eea1ec8082?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    likes: 892,
    comments: 76,
    shares: 145,
    isTrending: true,
    timeAgo: "1 day ago"
  }
];

const Community = () => {
  const [activeTab, setActiveTab] = useState('trending');

  return (
    <div className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
            VeganFit Community
          </h2>
          <p className="mt-4 text-xl text-gray-600">
            Share your journey, get inspired, and connect with fellow vegans
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <div className="flex space-x-1 rounded-lg bg-gray-100 p-1">
            <button
              onClick={() => setActiveTab('trending')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'trending' ? 'bg-white shadow text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Trending
            </button>
            <button
              onClick={() => setActiveTab('recent')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'recent' ? 'bg-white shadow text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Recent
            </button>
            <button
              onClick={() => setActiveTab('following')}
              className={`px-6 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'following' ? 'bg-white shadow text-green-600' : 'text-gray-600 hover:text-green-600'
              }`}
            >
              Following
            </button>
          </div>
        </div>

        {/* Create Post Button */}
        <div className="mb-8">
          <button className="w-full bg-white rounded-lg shadow-sm border border-gray-200 p-4 text-left text-gray-500 hover:border-green-500 transition-colors">
            Share your vegan journey or recipe...
          </button>
        </div>

        <div className="space-y-8">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-md overflow-hidden">
              <div className="p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <img
                      src={post.avatar}
                      alt={post.author}
                      className="h-12 w-12 rounded-full border-2 border-green-500"
                    />
                    <div className="ml-4">
                      <div className="flex items-center">
                        <h3 className="text-lg font-semibold text-gray-900">
                          {post.author}
                        </h3>
                        <span className="ml-2 px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full flex items-center">
                          <Award className="h-3 w-3 mr-1" />
                          {post.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500">{post.timeAgo}</p>
                    </div>
                  </div>
                  {post.isTrending && (
                    <div className="flex items-center text-orange-500 text-sm">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      Trending
                    </div>
                  )}
                </div>
                <p className="mt-4 text-gray-600">{post.content}</p>
                <img
                  src={post.image}
                  alt="Post"
                  className="mt-4 rounded-lg w-full"
                />
                <div className="mt-6 flex items-center justify-between border-t pt-4">
                  <button className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
                    <Heart className="h-5 w-5 mr-1" />
                    {post.likes}
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
                    <MessageSquare className="h-5 w-5 mr-1" />
                    {post.comments}
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
                    <Share2 className="h-5 w-5 mr-1" />
                    {post.shares}
                  </button>
                  <button className="flex items-center text-gray-600 hover:text-green-600 transition-colors">
                    <Bookmark className="h-5 w-5 mr-1" />
                    Save
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

export default Community;