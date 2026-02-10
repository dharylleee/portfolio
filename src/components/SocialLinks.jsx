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
      {/* Full Screen Backdrop */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40 bg-black/30 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Full Screen Modal */}
      <div className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-500 pointer-events-none ${isOpen ? 'pointer-events-auto' : ''}`}>
        <div className={`w-full max-w-2xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 rounded-2xl border border-gray-700 p-8 md:p-12 shadow-2xl shadow-indigo-500/20 transition-all duration-500 ${isOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0'}`}>
          
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 right-6 w-10 h-10 rounded-full bg-gray-800/80 hover:bg-gray-800 border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
            aria-label="Close social links"
          >
            <FaChevronRight className="text-lg" />
          </button>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Connect With Me</h2>
            <p className="text-gray-400 text-sm md:text-base">Find me on social platforms</p>
          </div>

          {/* Social Links Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
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
                <div className="text-4xl md:text-5xl mb-3 group-hover:scale-110 transition-transform">
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

      {/* Toggle Button - Desktop */}
      <button
        onClick={() => setIsOpen(true)}
        className="hidden md:fixed md:right-6 md:top-1/2 md:-translate-y-1/2 md:z-50 md:flex md:w-14 md:h-14 md:rounded-full md:bg-gradient-to-r md:from-indigo-600 md:to-purple-600 md:border md:border-gray-700 md:items-center md:justify-center md:text-white md:text-xl md:shadow-lg md:shadow-indigo-500/40 md:hover:shadow-indigo-500/60 md:transition-all md:hover:scale-110"
        aria-label="Show social links"
      >
        <FaChevronLeft />
      </button>

      {/* Toggle Button - Mobile */}
      <button
        onClick={() => setIsOpen(true)}
        className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 border border-gray-700 flex items-center justify-center text-white text-xl shadow-lg shadow-indigo-500/40 active:scale-95 transition-all"
        aria-label="Show social links"
      >
        <FaChevronLeft />
      </button>
    </>
  );
}

export default SocialLinks;
