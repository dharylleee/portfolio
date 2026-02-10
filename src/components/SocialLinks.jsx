import { useState, useEffect } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight
} from 'react-icons/fa';

function SocialLinks() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [hoveredIcon, setHoveredIcon] = useState(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const socialLinks = [
    {
      icon: <FaGithub />,
      href: "https://github.com/dharylleee",
      label: "GitHub",
      color: "from-gray-800 to-gray-900",
      hoverColor: "hover:text-gray-300",
      bgColor: "bg-gray-900"
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/dharylleaustria-alagao-023258362/",
      label: "LinkedIn",
      color: "from-blue-700 to-blue-900",
      hoverColor: "hover:text-blue-300",
      bgColor: "bg-blue-900"
    },
    {
      icon: <FaFacebook />,
      href: "https://www.facebook.com/dharylle.austria.alagao",
      label: "Facebook",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:text-blue-200",
      bgColor: "bg-blue-800"
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/ryllebitchhh/",
      label: "Instagram",
      color: "from-pink-600 to-purple-600",
      hoverColor: "hover:text-pink-300",
      bgColor: "bg-gradient-to-br from-pink-600 to-purple-600"
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:alagaodharylle@gmail.com",
      label: "Email",
      color: "from-red-600 to-red-800",
      hoverColor: "hover:text-red-300",
      bgColor: "bg-red-800"
    }
  ];

  return (
    <>
      {/* Desktop Version - Full Screen Overlay */}
      {isOpen && (
        <div className="hidden md:fixed md:inset-0 md:z-40 md:bg-black/30 md:backdrop-blur-sm">
          {/* Close on backdrop click */}
          <div 
            className="fixed inset-0"
            onClick={() => setIsOpen(false)}
          />
        </div>
      )}

      {/* Desktop Version - Full Screen Panel */}
      <div className={`hidden md:fixed md:inset-0 md:z-50 md:flex md:items-center md:justify-center transition-all duration-500 pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}`}>
        {/* Full Screen Social Panel */}
        <div className={`w-full h-full md:w-auto md:h-auto md:bg-gradient-to-br md:from-gray-900 md:via-gray-800 md:to-gray-900 md:rounded-2xl md:p-12 md:border md:border-gray-700 md:shadow-2xl md:shadow-indigo-500/20 md:max-w-2xl transition-all duration-500 ${isOpen ? 'md:scale-100 md:opacity-100' : 'md:scale-95 md:opacity-0 pointer-events-none'}`}>
          
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 md:relative md:top-0 md:right-0 md:mb-8 md:ml-auto md:block w-10 h-10 md:w-12 md:h-12 rounded-full bg-gray-800/80 hover:bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
            aria-label="Close social links"
          >
            <FaChevronRight className="text-lg md:text-xl" />
          </button>

          {/* Header */}
          <div className="mb-8 md:text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Connect With Me</h2>
            <p className="text-gray-400 text-sm md:text-base">Find me on social platforms</p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center p-6 md:p-8 rounded-xl md:rounded-2xl ${link.bgColor} border border-gray-700 hover:border-indigo-500/50 group transition-all duration-300 hover:scale-105 hover:shadow-lg md:hover:shadow-xl`}
                aria-label={link.label}
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                {/* Icon */}
                <div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-gray-900/50 backdrop-blur-sm flex items-center justify-center text-white text-2xl md:text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>

                {/* Label */}
                <h3 className="text-white font-semibold text-sm md:text-lg text-center group-hover:text-indigo-300 transition-colors">
                  {link.label}
                </h3>

                {/* Pulse Animation on Hover */}
                {hoveredIcon === index && (
                  <div className="absolute inset-0 border-2 border-white/10 rounded-xl md:rounded-2xl animate-pulse"></div>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Toggle Button - Fixed */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 border border-gray-700 flex-col items-center justify-center text-white text-xl shadow-lg shadow-indigo-500/30 hover:shadow-indigo-500/50 transition-all hover:scale-110"
        aria-label={isOpen ? "Hide social links" : "Show social links"}
      >
        {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
      </button>

      {/* Mobile Version - Full Screen Panel */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 z-40 bg-black/30 backdrop-blur-sm" onClick={() => setIsOpen(false)} />
      )}
      
      <div className={`md:hidden fixed inset-0 z-50 flex flex-col overflow-y-auto transition-all duration-500 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'}`}>
        {/* Full Screen Mobile Panel */}
        <div className="flex-1 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col p-6">
          
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="self-end w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300 mb-6"
            aria-label="Close social links"
          >
            <FaChevronRight className="text-lg" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-white mb-2">Connect With Me</h2>
            <p className="text-gray-400 text-sm">Find me on social platforms</p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 gap-4 flex-1">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex flex-col items-center justify-center p-6 rounded-xl ${link.bgColor} border border-gray-700 hover:border-indigo-500/50 group transition-all duration-300 active:scale-95`}
                aria-label={link.label}
              >
                {/* Icon */}
                <div className="text-4xl mb-3">
                  {link.icon}
                </div>

                {/* Label */}
                <h3 className="text-white font-semibold text-sm text-center">
                  {link.label}
                </h3>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 border border-gray-700 flex items-center justify-center text-white text-xl shadow-lg shadow-indigo-500/40 active:scale-95 transition-all"
        aria-label={isOpen ? "Hide social links" : "Show social links"}
      >
        {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
      </button>
    </>
  );
}

export default SocialLinks;
