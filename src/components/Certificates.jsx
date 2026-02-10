import { FaCertificate, FaExternalLinkAlt } from "react-icons/fa";
import { useState } from "react";

function Certificates() {
  const [hoveredCert, setHoveredCert] = useState(null);

  const certificates = [
    {
      name: "CISCO",
      description: "Cisco Networking Academy Certification",
      icon: "🌐",
      color: "from-blue-500 to-cyan-500",
      details: "Professional certification in networking fundamentals and IT essentials",
      link: "#"
    },
    {
      name: "Webinars",
      description: "Professional Development & Training Sessions",
      icon: "🎓",
      color: "from-purple-500 to-pink-500",
      details: "Completed various industry-leading webinars and online training courses",
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
              <FaCertificate className="text-2xl text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Certifications & Training
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Professional credentials and continuous learning achievements
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 max-w-4xl mx-auto">
          {certificates.map((cert, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
              onMouseEnter={() => setHoveredCert(index)}
              onMouseLeave={() => setHoveredCert(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative p-8 h-full flex flex-col">
                {/* Certificate Icon */}
                <div className="mb-6">
                  <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-4xl">{cert.icon}</span>
                  </div>
                </div>

                {/* Certificate Name & Description */}
                <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-indigo-300 transition-colors">
                  {cert.name}
                </h3>
                <p className="text-gray-400 mb-2 font-medium">
                  {cert.description}
                </p>
                <p className="text-gray-500 mb-6 flex-grow">
                  {cert.details}
                </p>

                {/* Action Button */}
                <a
                  href={cert.link}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 group/btn w-full"
                >
                  View Credential
                  <FaExternalLinkAlt className="group-hover/btn:scale-110 transition-transform" />
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
        <div className="mt-16 max-w-3xl mx-auto">
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700">
            <h2 className="text-2xl font-bold text-white mb-4">Continuous Learning</h2>
            <p className="text-gray-400 mb-4">
              I'm committed to staying current with industry standards and best practices through professional certifications and webinar participation. These credentials demonstrate my dedication to professional development and technical excellence.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h4 className="text-indigo-300 font-semibold mb-2">Professional Growth</h4>
                <p className="text-sm text-gray-400">Pursuing industry-recognized certifications</p>
              </div>
              <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
                <h4 className="text-indigo-300 font-semibold mb-2">Knowledge Sharing</h4>
                <p className="text-sm text-gray-400">Engaged in webinars and training sessions</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Certificates;
