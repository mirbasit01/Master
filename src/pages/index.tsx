// pages/index.tsx

import React from 'react';

const Home = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-500 to-purple-600 text-white px-4">
      <h1 className="text-5xl font-bold mb-4 animate-fade-in">
        Welcome to Basit Next.js World
      </h1>
      <p className="text-xl mb-6 text-center max-w-xl">
        This is a beautifully crafted home page using <span className="font-semibold">TypeScript</span>, <span className="font-semibold">Next.js</span> & <span className="font-semibold">Tailwind CSS</span>.
      </p>
      <button className="bg-white text-indigo-600 font-semibold py-2 px-6 rounded-2xl shadow-lg hover:bg-indigo-100 transition">
        Explore More
      </button>
    </main>
  );
};

export default Home;
