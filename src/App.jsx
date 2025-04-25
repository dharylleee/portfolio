import React, { useState } from 'react';
import FrontPage from './components/FrontPage';
import About from './components/About';
import Projects from './components/Projects';
import SocialLinks from './components/SocialLinks';

function App() {
  const [currentSection, setCurrentSection] = useState('home');

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'social':
        return <SocialLinks />;
      case 'home':
      default:
        return <FrontPage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Top Right Horizontal Navigation Bar */}
      <nav className="fixed top-4 right-6 z-50 flex space-x-6  px-6 py-2 shadow-lg">
        <button
          onClick={() => setCurrentSection('home')}
          className="text-white hover:text-red-500 text-lg transition"
        >
          Home
        </button>
        <button
          onClick={() => setCurrentSection('about')}
          className="text-white hover:text-red-500 text-lg transition"
        >
          About
        </button>
        <button
          onClick={() => setCurrentSection('projects')}
          className="text-white hover:text-red-500 text-lg transition"
        >
          Projects
        </button>
        <button
          onClick={() => setCurrentSection('social')}
          className="text-white hover:text-red-500 text-lg transition"
        >
          Social Link
        </button>
      </nav>

      {/* Rendered Content */}
      <main className="px-6 pt-24 md:px-24">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
