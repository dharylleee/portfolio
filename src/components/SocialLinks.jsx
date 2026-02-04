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
      {/* Desktop Version - Vertical Sidebar */}
      <div className="hidden md:flex flex-col items-center fixed right-6 top-1/2 -translate-y-1/2 z-50">
        {/* Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="mb-4 w-10 h-10 rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center text-gray-300 hover:text-white hover:bg-gray-800 hover:border-indigo-500/50 transition-all duration-300 group"
          aria-label={isOpen ? "Hide social links" : "Show social links"}
        >
          {isOpen ? <FaChevronRight /> : <FaChevronLeft />}
        </button>

        {/* Social Links Container */}
        <div className={`space-y-4 transition-all duration-500 ${isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10 pointer-events-none'}`}>
          {socialLinks.map((link, index) => (
            <div key={index} className="relative group">
              {/* Tooltip */}
              <div className="absolute right-full mr-4 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none">
                <div className="bg-gray-900 text-white px-3 py-2 rounded-lg whitespace-nowrap text-sm border border-gray-700 shadow-xl">
                  <div className="font-medium">{link.label}</div>
                  <div className="text-xs text-gray-400 mt-1">{link.username}</div>
                </div>
                <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45 border-r border-b border-gray-700"></div>
              </div>

              {/* Social Icon */}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`w-12 h-12 rounded-full ${link.bgColor} border border-gray-700 flex items-center justify-center text-white text-xl transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-gray-900/30 ${link.hoverColor} relative overflow-hidden`}
                onMouseEnter={() => setHoveredIcon(index)}
                onMouseLeave={() => setHoveredIcon(null)}
                aria-label={link.label}
              >
                {/* Animated Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${link.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                <span className="relative z-10">{link.icon}</span>
                
                {/* Pulse Animation on Hover */}
                {hoveredIcon === index && (
                  <div className="absolute inset-0 border-2 border-white/30 rounded-full animate-ping"></div>
                )}
              </a>
            </div>
          ))}
        </div>

        {/* Connecting Line */}
        <div className="h-32 w-0.5 bg-gradient-to-b from-indigo-500/30 via-purple-500/30 to-pink-500/30 mt-4"></div>
      </div>

      {/* Mobile Version - Bottom Bar */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="bg-gray-900/90 backdrop-blur-lg rounded-full px-4 py-3 border border-gray-700 shadow-2xl flex items-center gap-3">
          {socialLinks.slice(0, 4).map((link, index) => (
            <a
              key={index}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`w-10 h-10 rounded-full ${link.bgColor} flex items-center justify-center text-white text-lg transition-all duration-300 active:scale-95 ${link.hoverColor} relative`}
              aria-label={link.label}
            >
              {/* Touch Feedback */}
              <div className="absolute inset-0 rounded-full bg-white/0 active:bg-white/10 transition-colors"></div>
              <span className="relative">{link.icon}</span>
            </a>
          ))}
        </div>
      </div>

      {/* Floating Email Button for Mobile */}
      <div className="md:hidden fixed bottom-6 right-6 z-50">
        <a
          href="mailto:alagaodharylle@gmail.com"
          className="w-12 h-12 rounded-full bg-gradient-to-br from-red-600 to-red-800 flex items-center justify-center text-white text-xl shadow-lg shadow-red-900/30 active:scale-95 transition-transform"
          aria-label="Send Email"
        >
          <FaEnvelope />
        </a>
      </div>
    </>
  );
}

export default SocialLinks;