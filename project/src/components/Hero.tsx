import React from 'react';
import { Play, Info } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative h-[80vh] w-full">
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent z-10" />
      <img
        src="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2225&q=80"
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="relative z-20 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">Brother Betrayal</h1>
          <p className="text-lg text-gray-300 max-w-xl mb-8">
            An epic tale of brotherhood, betrayal, and redemption. Watch as two siblings navigate
            through a web of deceit that will test their bonds to the limit.
          </p>
          <div className="flex space-x-4">
            <button className="flex items-center gap-2 bg-white text-black px-8 py-3 rounded-md hover:bg-gray-200 transition">
              <Play size={20} fill="currentColor" />
              Play
            </button>
            <button className="flex items-center gap-2 bg-gray-500/70 text-white px-8 py-3 rounded-md hover:bg-gray-500/90 transition">
              <Info size={20} />
              More Info
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}