import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { VideoPlayer } from './components/VideoPlayer';

function App() {
  return (
    <div className="min-h-screen bg-[#141414]">
      <Navbar />
      <Hero />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-2xl font-bold text-white mb-8">Continue Watching</h2>
        <div className="aspect-video w-full max-w-4xl mx-auto">
          <VideoPlayer 
            videoUrl="https://www.youtube.com/embed/e-o6BmvEUWU"
            thumbnailUrl="https://images.unsplash.com/photo-1536440136628-849c177e76a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=2225&q=80"
          />
        </div>
      </main>
    </div>
  );
}

export default App;