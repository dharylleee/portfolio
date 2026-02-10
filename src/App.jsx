import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import FrontPage from './components/FrontPage';
import About from './components/About';
import Projects from './components/Projects';
import Certificates from './components/Certificates';
import SocialLinks from './components/SocialLinks';

function App() {
  const [currentSection, setCurrentSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'projects', label: 'Projects' },
    { id: 'certificates', label: 'Certificates' },
    { id: 'social', label: 'Social Link' },
  ];

  const handleNavClick = (sectionId) => {
    setCurrentSection(sectionId);
    setMobileMenuOpen(false);
  };

  const renderSection = () => {
    switch (currentSection) {
      case 'about':
        return <About />;
      case 'projects':
        return <Projects />;
      case 'certificates':
        return <Certificates />;
      case 'social':
        return <SocialLinks />;
      case 'home':
      default:
        return <FrontPage />;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Header with Welcome Text and Desktop Navigation */}
      <div className="hidden md:fixed md:top-6 md:left-6 md:right-6 md:z-50 md:flex md:items-center md:justify-between">
        {/* Welcome Text */}
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 bg-gradient-to-r from-indigo-400 to-purple-400 rounded-full animate-pulse"></span>
          <span className="text-sm font-medium text-indigo-300">Welcome to my portfolio</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="flex gap-2 flex-row">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => handleNavClick(item.id)}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              currentSection === item.id
                ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg shadow-indigo-500/50'
                : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
            }`}
          >
            {item.label}
          </button>
        ))}
        </nav>
      </div>

      {/* Mobile Navigation Header */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="p-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:shadow-lg hover:shadow-indigo-500/50 transition-all"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-0 top-16 z-40 bg-black/95 backdrop-blur-sm">
          <nav className="flex flex-col gap-2 p-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-4 py-3 rounded-lg font-medium text-left transition-all duration-300 ${
                  currentSection === item.id
                    ? 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white'
                    : 'text-gray-300 hover:text-white hover:bg-gray-800/50'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      )}

      {/* Rendered Content */}
      <main className="px-6 pt-24 md:px-24">
        {renderSection()}
      </main>
    </div>
  );
}

export default App;
