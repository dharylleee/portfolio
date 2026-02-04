import { FaExternalLinkAlt, FaGithub, FaCode, FaEye } from "react-icons/fa";
import { useState } from "react";

function Projects() {
  const [hoveredProject, setHoveredProject] = useState(null);

  const projects = [
    {
      name: "Calculator Application",
      href: "calculator/index.html",
      description: "A responsive calculator with advanced mathematical functions and intuitive UI design",
      tech: ["JavaScript", "HTML5", "CSS3"],
      icon: "🧮",
      github: "#",
      color: "from-blue-500 to-cyan-500"
    },
    {
      name: "Loop Analysis Tool",
      href: "array objects/index.html",
      description: "Interactive tool for analyzing and visualizing loop patterns with real-time feedback",
      tech: ["JavaScript", "DOM", "Algorithms"],
      icon: "🔄",
      github: "#",
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Currency Converter",
      href: "converter-activity/index.html",
      description: "Real-time currency conversion application with multiple international exchange rates",
      tech: ["JavaScript", "API", "Responsive Design"],
      icon: "💱",
      github: "#",
      color: "from-green-500 to-emerald-500"
    },
    {
      name: "Array Manager",
      href: "array objects/index.html",
      description: "Data structure visualization tool for managing and manipulating arrays with graphical interface",
      tech: ["JavaScript", "Data Structures", "UI/UX"],
      icon: "📊",
      github: "#",
      color: "from-orange-500 to-amber-500"
    },
    {
      name: "To-Do List Manager",
      href: "https://to-do-client-iq6f.vercel.app/",
      description: "Full-featured task management application with drag-and-drop functionality and persistence",
      tech: ["React", "LocalStorage", "Tailwind CSS"],
      icon: "✅",
      github: "#",
      color: "from-indigo-500 to-purple-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
              <FaCode className="text-2xl text-white" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Showcasing my journey in web development through practical applications and innovative solutions
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800/50 to-gray-900/30 backdrop-blur-sm border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:shadow-xl hover:shadow-indigo-500/10"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
              
              {/* Content */}
              <div className="relative p-6 h-full flex flex-col">
                {/* Project Icon */}
                <div className="mb-6">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                    <span className="text-3xl">{project.icon}</span>
                  </div>
                </div>

                {/* Project Title & Description */}
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-indigo-300 transition-colors">
                  {project.name}
                </h3>
                <p className="text-gray-400 mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-gray-800/50 text-gray-300 text-xs rounded-full border border-gray-700 group-hover:border-gray-600 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 mt-auto">
                  <a
                    href={project.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-medium rounded-lg hover:shadow-lg hover:shadow-indigo-500/25 transition-all duration-300 group/btn"
                  >
                    <FaEye className="group-hover/btn:scale-110 transition-transform" />
                    Live Demo
                  </a>
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-4 py-2.5 bg-gray-800/50 border border-gray-700 text-gray-300 font-medium rounded-lg hover:bg-gray-800/70 hover:border-gray-600 hover:text-white transition-all duration-300 flex items-center justify-center"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                  )}
                </div>
              </div>

              {/* Hover Effect Indicator */}
              <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${project.color} transform transition-transform duration-300 ${
                hoveredProject === index ? 'translate-y-0' : 'translate-y-full'
              }`}></div>
            </div>
          ))}
        </div>

        {/* Project Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { label: "Total Projects", value: "10+", color: "from-blue-500 to-cyan-500" },
            { label: "Technologies", value: "8+", color: "from-purple-500 to-pink-500" },
            { label: "Code Hours", value: "500+", color: "from-green-500 to-emerald-500" },
            { label: "Live Demos", value: "100%", color: "from-orange-500 to-amber-500" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-gray-800/30 backdrop-blur-sm rounded-xl p-6 border border-gray-700 hover:border-gray-600 transition-all duration-300 text-center"
            >
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-gray-800/50 to-gray-900/30 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 max-w-2xl">
            <h3 className="text-2xl font-bold text-white mb-3">
              Have a project in mind?
            </h3>
            <p className="text-gray-400 mb-6">
              Let's collaborate and build something amazing together
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-indigo-600 to-purple-600 text-white font-semibold rounded-lg hover:shadow-xl hover:shadow-indigo-500/25 transition-all duration-300 transform hover:-translate-y-1"
            >
              <FaExternalLinkAlt />
              Start a Conversation
            </a>
          </div>
        </div>
      </div>

      {/* Custom CSS for subtle animations */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}

export default Projects;