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
      <div className={`hidden md:fixed md:inset-0 md:z-40 md:pointer-events-none ${isOpen ? 'md:block' : 'md:pointer-events-none'}`}>
        {/* Sliding Panel Background - Full Screen */}
        <div className={`fixed inset-0 bg-gradient-to-l from-gray-900 via-gray-900 to-gray-950 backdrop-blur-lg transition-all duration-500 pointer-events-auto ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          {/* Content Container */}
          <div className="h-full overflow-y-auto flex flex-col">`
            {/* Close Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="absolute top-6 right-6 z-50 w-12 h-12 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 hover:border-indigo-500/50 transition-all duration-300"
              aria-label="Close social links"
            >
              <FaChevronRight className="text-xl" />
            </button>

            {/* Header Image */}
            <div className="relative h-80 overflow-hidden flex-shrink-0">
              <img 
                src="/2.jpg" 
                alt="Profile"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-950"></div>
            </div>

            {/* Header */}
            <div className="px-12 py-8">
              <h2 className="text-5xl font-bold text-white mb-3">Connect With Me</h2>
              <p className="text-gray-300 text-lg">Find me on social platforms and get in touch</p>
            </div>

            {/* Social Links Container - Grid Layout for Desktop */}
            <div className="px-12 pb-12 flex-grow grid grid-cols-1 md:grid-cols-2 gap-6 auto-rows-max content-start">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`flex items-center gap-6 p-6 rounded-2xl ${link.bgColor} border border-gray-700/50 hover:border-indigo-500/50 group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-indigo-500/20`}
                  aria-label={link.label}
                  onMouseEnter={() => setHoveredIcon(index)}
                  onMouseLeave={() => setHoveredIcon(null)}
                >
                  {/* Icon */}
                  <div className="w-16 h-16 rounded-full bg-gray-900/50 backdrop-blur-sm flex items-center justify-center text-white text-4xl flex-shrink-0 group-hover:scale-110 transition-transform">
                    {link.icon}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="text-white font-bold text-lg md:text-xl group-hover:text-indigo-300 transition-colors">
                      {link.label}
                    </h3>
                    <p className="text-gray-300 text-sm md:text-base truncate">
                      {link.username}
                    </p>
                  </div>

                  {/* Arrow */}
                  <FaExternalLinkAlt className="text-gray-400 text-xl group-hover:text-white group-hover:translate-x-2 transition-all flex-shrink-0" />

                  {/* Pulse Animation on Hover */}
                  {hoveredIcon === index && (
                    <div className="absolute inset-0 border-2 border-white/10 rounded-2xl animate-pulse"></div>
                  )}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Toggle Button - Fixed - Only show when closed */}
        {!isOpen && (
          <button
            onClick={() => setIsOpen(true)}
            className="fixed right-6 top-1/2 -translate-y-1/2 z-50 w-14 h-14 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 border border-gray-700 flex items-center justify-center text-white text-2xl shadow-lg shadow-indigo-500/40 hover:shadow-indigo-500/60 transition-all duration-300 pointer-events-auto hover:scale-110"
            aria-label="Show social links"
          >
            <FaChevronLeft />
          </button>
        )}
      </div>

      {/* Mobile Version - Full Screen Overlay */}
      <div className="md:hidden fixed inset-0 z-40 pointer-events-none">
        {/* Sliding Panel Background */}
        <div className={`fixed inset-y-0 right-0 w-full xs:w-3/4 sm:w-2/3 bg-gradient-to-l from-gray-900/95 via-gray-900/90 to-transparent backdrop-blur-lg transition-all duration-500 pointer-events-auto ${
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

          {/* Header Image */}
          <div className="relative h-40 overflow-hidden">
            <img 
              src="/2.jpg" 
              alt="Profile"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900/90"></div>
          </div>

          {/* Header */}
          <div className="p-6 pt-4">
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
        {!isOpen && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 border border-gray-700 flex items-center justify-center text-white text-lg shadow-lg shadow-indigo-500/30 active:scale-95 transition-all pointer-events-auto"
            aria-label="Show social links"
          >
            <FaChevronLeft />
          </button>
        )}
      </div>
    </>
  );
}

export default SocialLinks;
