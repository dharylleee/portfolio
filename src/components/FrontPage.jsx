import { useState, useEffect } from "react";
import { FaArrowRight, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

function FrontPage() {
  const [textIndex, setTextIndex] = useState(0);
  const roles = ["Student Leader", "Public Servant", "IT Professional", "Community Advocate"];

  useEffect(() => {
    const interval = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white font-sans overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-gradient-to-r from-indigo-500/30 to-purple-500/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <div className="relative flex flex-col lg:flex-row min-h-screen items-center lg:items-center gap-8 lg:gap-0">
        {/* Left Content Section */}
        <div className="lg:w-1/2 flex flex-col justify-center px-6 sm:px-8 md:px-12 lg:px-12 py-12 lg:py-0 order-2 lg:order-1 w-full">
          <div className="max-w-xl">
            {/* Main Heading */}
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              <span className="block mb-2">Hello, I'm</span>
              <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                Dharylle Austria Alagao
              </span>
            </h1>

            {/* Animated Role Text */}
            <div className="h-12 mb-6">
              <div className="text-xl sm:text-2xl md:text-3xl text-gray-300 font-medium">
                <span className="text-gray-400">I am a </span>
                <span className="bg-gradient-to-r from-emerald-400 to-teal-300 bg-clip-text text-transparent font-bold animate-fade">
                  {roles[textIndex]}
                </span>
              </div>
            </div>

            {/* Tagline */}
            <p className="text-lg sm:text-xl text-gray-400 mb-8 max-w-xl leading-relaxed">
              "Transforming visionary ideas into impactful digital solutions while serving communities with dedication and integrity."
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <a
                href="#about"
                className="group px-8 py-3.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center gap-2"
              >
                Explore My Journey
                <FaArrowRight className="group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#contact"
                className="px-8 py-3.5 bg-gray-800/50 backdrop-blur-sm border border-gray-700 text-gray-300 font-semibold rounded-lg hover:bg-gray-800/70 hover:border-indigo-500/50 transition-all duration-300"
              >
                Get In Touch
              </a>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
              {[
                { label: "Years", value: "2+", desc: "Leadership" },
                { label: "Projects", value: "10+", desc: "Completed" },
                { label: "Awards", value: "5+", desc: "Honors" },
                { label: "Community", value: "Active", desc: "Service" },
              ].map((stat, idx) => (
                <div
                  key={idx}
                  className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-4 border border-gray-700 hover:border-indigo-500/50 transition-all duration-300"
                >
                  <div className="text-2xl font-bold text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                  <div className="text-xs text-indigo-400">{stat.desc}</div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-gray-500 text-sm">Follow me:</span>
              <div className="flex gap-3">
                {[
                  { icon: <FaGithub />, href: "#", label: "GitHub" },
                  { icon: <FaLinkedin />, href: "#", label: "LinkedIn" },
                  { icon: <FaTwitter />, href: "#", label: "Twitter" },
                ].map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-800/50 border border-gray-700 hover:border-indigo-400 hover:bg-gray-800/70 flex items-center justify-center transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-indigo-500/20"
                    aria-label={social.label}
                  >
                    <span className="text-gray-300 hover:text-white text-lg">
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Image Section */}
        <div className="lg:w-1/2 relative order-1 lg:order-2 flex items-center justify-center px-6 sm:px-8 md:px-12 lg:px-12 w-full">
          <div className="relative">
            {/* Instagram Style Profile Photo Container */}
            <div className="relative w-56 h-56 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
              {/* Gradient Border Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 via-purple-500 to-pink-500 rounded-3xl p-1 shadow-2xl shadow-purple-500/30">
                <div className="w-full h-full bg-gray-900 rounded-3xl overflow-hidden">
                  {/* Profile Image */}
                  <img 
                    src="/4.png" 
                    alt="Dharylle Austria Alagao"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              
              {/* Decorative Badge */}
              <div className="absolute -bottom-4 -right-4 w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 border-4 border-gray-900 flex items-center justify-center shadow-lg animate-bounce text-lg sm:text-2xl">
                <span>👋</span>
              </div>
            </div>

            {/* Floating Badge for larger screens */}
            <div className="hidden md:block absolute -bottom-20 left-1/2 -translate-x-1/2 bg-gray-900/90 backdrop-blur-sm rounded-xl p-3 border border-gray-700 whitespace-nowrap">
              <p className="text-xs sm:text-sm text-gray-300">
                "Technology & Community Service"
              </p>
            </div>
          </div>

          {/* Scroll Indicator for Mobile */}
          <div className="lg:hidden absolute bottom-4 left-1/2 -translate-x-1/2 flex justify-center">
            <div className="animate-bounce">
              <div className="w-6 h-10 border-2 border-indigo-500/50 rounded-full flex justify-center">
                <div className="w-1 h-3 bg-gradient-to-b from-indigo-400 to-purple-400 rounded-full mt-2 animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Custom CSS for animations */}
      <style jsx>{`
        @keyframes fade {
          0%, 100% { opacity: 0; }
          50% { opacity: 1; }
        }
        .animate-fade {
          animation: fade 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default FrontPage;
