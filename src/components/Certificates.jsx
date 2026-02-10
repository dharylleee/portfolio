import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

function Certificates() {
  const [hoveredCert, setHoveredCert] = useState(null);

  const certificates = [
    {
      name: "Introduction to Data Science",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/627252421_1427033968822304_8086437507582855168_n-DJ2sMZog5moN0acNjspnU2NIm1OF0s.jpg",
      category: "CISCO",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Apply AI: Update Your Resume",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/624068205_1225811055680531_2338087888542024665_n-Sz1vEf0XHumvv5gQbcyy2WdLzHeKKY.jpg",
      category: "CISCO",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Apply AI: Analyze Customer Reviews",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/624041432_1250898826982483_7680468677895671523_n-3uV1XG6EyHmHYqoo2SheGoQVu0c0s3.jpg",
      category: "CISCO",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "JavaScript Essentials 1",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/623695595_1275369171280194_5979031292199685215_n-cDcnjowFMt5pDtcD3m4Yl0zsOu7pHq.jpg",
      category: "CISCO",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Introduction to Modern AI",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/621667783_2108496266579066_7348979714758304277_n-ULA6MItrQjMysZOVeL7jbipxnM3v6M.jpg",
      category: "CISCO",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "AI Fundamentals with IBM SkillsBuild",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/621452096_1381265199876472_3409907723395541969_n-7sVG9s6E2PQMaVeSfFqP3Yf8a11xYU.jpg",
      category: "CISCO",
      color: "from-blue-500 to-cyan-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 py-8 sm:py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
              <FaCertificate className="text-2xl text-white" />
            </div>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              My Certifications
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-base sm:text-lg">
            Professional achievements in data science, AI, and web development
          </p>
        </div>

        {/* Certificates Grid - Responsive */}
        <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 auto-rows-max">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-lg sm:rounded-xl bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-700 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/20 h-full"
              onMouseEnter={() => setHoveredCert(index)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              {/* Certificate Image */}
              <div className="relative w-full h-56 sm:h-64 md:h-72 overflow-hidden bg-gray-800">
                <img 
                  src={cert.image} 
                  alt={cert.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent"></div>
              </div>
              
              {/* Content */}
              <div className="relative p-4 sm:p-6 flex flex-col">
                {/* Category Badge */}
                <span className="inline-block w-fit px-3 py-1 sm:px-4 sm:py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white text-xs sm:text-sm font-semibold rounded-full mb-3">
                  {cert.category}
                </span>

                {/* Certificate Name */}
                <h3 className="text-lg sm:text-xl font-bold text-white mb-4 group-hover:text-indigo-300 transition-colors line-clamp-2">
                  {cert.name}
                </h3>

                {/* View Button */}
                <a
                  href="#"
                  className="inline-flex items-center justify-center gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium text-sm sm:text-base rounded-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 group/btn w-full mt-auto"
                >
                  View Certificate
                  <FaExternalLinkAlt className="text-sm group-hover/btn:scale-110 transition-transform" />
                </a>
              </div>

              {/* Hover Effect Indicator */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${cert.color} transform transition-transform duration-300 ${
                hoveredCert === index ? 'translate-y-0' : 'translate-y-full'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="mt-12 sm:mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-xl sm:rounded-2xl p-6 sm:p-8 border border-gray-700">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">Continuous Learning</h2>
            <p className="text-gray-400 mb-4 text-sm sm:text-base">
              I'm committed to staying current with industry standards and best practices through professional certifications. These credentials demonstrate my dedication to professional development, AI expertise, and technical excellence.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h4 className="text-indigo-300 font-semibold mb-2 text-sm sm:text-base">Data Science & AI</h4>
                <p className="text-xs sm:text-sm text-gray-400">Specialized in AI fundamentals and data science</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h4 className="text-indigo-300 font-semibold mb-2 text-sm sm:text-base">Web Development</h4>
                <p className="text-xs sm:text-sm text-gray-400">JavaScript and modern web technologies</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
