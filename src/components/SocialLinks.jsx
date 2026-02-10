import { useState, useEffect } from 'react';
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
  FaChevronLeft,
  FaChevronRight,
  FaExternalLinkAlt
} from 'react-icons/fa';

function SocialLinks() {
  const [isOpen, setIsOpen] = useState(true);
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
      bgColor: "bg-gray-900",
      username: "@dharylleee"
    },
    {
      icon: <FaLinkedin />,
      href: "https://www.linkedin.com/in/dharylleaustria-alagao-023258362/",
      label: "LinkedIn",
      color: "from-blue-700 to-blue-900",
      hoverColor: "hover:text-blue-300",
      bgColor: "bg-blue-900",
      username: "Dharylle Austria Alagao"
    },
    {
      icon: <FaFacebook />,
      href: "https://www.facebook.com/dharylle.austria.alagao",
      label: "Facebook",
      color: "from-blue-600 to-blue-800",
      hoverColor: "hover:text-blue-200",
      bgColor: "bg-blue-800",
      username: "Dharylle Austria Alagao"
    },
    {
      icon: <FaInstagram />,
      href: "https://www.instagram.com/ryllebitchhh/",
      label: "Instagram",
      color: "from-pink-600 to-purple-600",
      hoverColor: "hover:text-pink-300",
      bgColor: "bg-gradient-to-br from-pink-600 to-purple-600",
      username: "@ryllebitchhh"
    },
    {
      icon: <FaEnvelope />,
      href: "mailto:alagaodharylle@gmail.com",
      label: "Email",
      color: "from-red-600 to-red-800",
      hoverColor: "hover:text-red-300",
      bgColor: "bg-red-800",
      username: "alagaodharylle@gmail.com"
    }
  ];

  return (
    <>
      {/* Desktop Version - Full Screen with Toggle */}
      <div className="hidden lg:block fixed inset-0 z-40 pointer-events-none">
        {/* Sliding Panel Background */}
        <div className={`fixed inset-y-0 right-0 w-full md:w-1/2 lg:w-96 bg-gradient-to-l from-gray-900/95 via-gray-900/90 to-transparent backdrop-blur-lg transition-all duration-500 pointer-events-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="absolute top-6 left-6 md:top-8 md:left-8 w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 hover:border-indigo-500/50 transition-all duration-300 group"
            aria-label="Close social links"
          >
            <FaChevronRight className="text-lg" />
          </button>

          {/* Header */}
          <div className="p-8 md:p-12 pt-20">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Connect With Me</h2>
            <p className="text-gray-400 text-sm md:text-base">Find me on social platforms and get in touch</p>
          </div>

          {/* Social Links Container */}
          <div className="px-8 md:px-12 pb-12">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 md:p-5 mb-4 rounded-xl ${link.bgColor} border border-gray-700/50 hover:border-indigo-500/50 group transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                aria-label={link.label}
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                {/* Icon */}
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gray-900/50 backdrop-blur-sm flex items-center justify-center text-white text-2xl md:text-3xl group-hover:scale-110 transition-transform">
                  {link.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm md:text-base group-hover:text-indigo-300 transition-colors">
                    {link.label}
                  </h3>
                  <p className="text-gray-300 text-xs md:text-sm truncate">
                    {link.username}
                  </p>
                </div>

                {/* Arrow */}
                <FaExternalLinkAlt className="text-gray-400 text-sm group-hover:text-white group-hover:translate-x-1 transition-all" />

                {/* Pulse Animation on Hover */}
                {hoveredIcon === index && (
                  <div className="absolute inset-0 border-2 border-white/10 rounded-xl animate-pulse"></div>
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Toggle Button - Fixed */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed right-4 md:right-6 top-1/2 -translate-y-1/2 z-50 w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 border border-gray-700 flex items-center justify-center text-white text-lg md:text-xl transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/50 pointer-events-auto group ${
            isOpen ? 'hidden' : 'flex'
          }`}
          aria-label="Show social links"
        >
          {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>

      {/* Mobile Version - Full Screen Overlay */}
      <div className="lg:hidden fixed inset-0 z-40 pointer-events-none">
        {/* Sliding Panel Background */}
        <div className={`fixed inset-y-0 right-0 w-full sm:w-2/3 bg-gradient-to-l from-gray-900/95 via-gray-900/90 to-transparent backdrop-blur-lg transition-all duration-500 pointer-events-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Close Button */}
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-6 left-6 w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white transition-all duration-300"
            aria-label="Close social links"
          >
            <FaChevronRight className="text-lg" />
          </button>

          {/* Header */}
          <div className="p-6 pt-20">
            <h2 className="text-2xl font-bold text-white mb-2">Connect With Me</h2>
            <p className="text-gray-400 text-sm">Find me on social platforms</p>
          </div>

          {/* Social Links Container */}
          <div className="px-6 pb-12 space-y-3">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`flex items-center gap-4 p-4 rounded-lg ${link.bgColor} border border-gray-700/50 active:scale-95 group transition-all`}
                aria-label={link.label}
              >
                {/* Icon */}
                <div className="w-12 h-12 rounded-full bg-gray-900/50 flex items-center justify-center text-white text-xl">
                  {link.icon}
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                  <h3 className="text-white font-semibold text-sm">
                    {link.label}
                  </h3>
                  <p className="text-gray-300 text-xs truncate">
                    {link.username}
                  </p>
                </div>

                {/* Arrow */}
                <FaExternalLinkAlt className="text-gray-400 text-sm" />
              </a>
            ))}
          </div>
        </div>

        {/* Toggle Button - Fixed Bottom Right for Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 border border-gray-700 flex items-center justify-center text-white text-lg shadow-lg shadow-indigo-500/30 active:scale-95 transition-all pointer-events-auto ${
            isOpen ? 'hidden' : 'flex'
          }`}
          aria-label="Show social links"
        >
          {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
        </button>
      </div>
    </>
  );
}

export default SocialLinks;
