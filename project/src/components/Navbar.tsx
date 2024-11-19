import React from 'react';
import { Play, Search, Bell, User } from 'lucide-react';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-gradient-to-b from-black/80 to-transparent backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 text-red-600 flex items-center gap-2">
              <Play size={24} fill="currentColor" />
              <span className="text-white font-bold text-xl">TomokariTV</span>
            </div>
            <div className="hidden md:block ml-10">
              <div className="flex items-center space-x-4">
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Home</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Series</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">Movies</a>
                <a href="#" className="text-gray-300 hover:text-white px-3 py-2">My List</a>
              </div>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Search className="text-gray-300 hover:text-white cursor-pointer" size={20} />
            <Bell className="text-gray-300 hover:text-white cursor-pointer" size={20} />
            <User className="text-gray-300 hover:text-white cursor-pointer" size={20} />
          </div>
        </div>
      </div>
    </nav>
  );
}