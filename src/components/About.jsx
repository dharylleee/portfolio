function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-gray-100 font-sans">
      {/* Hero Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/20 via-purple-500/20 to-pink-500/20 -z-10"></div>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Student Leader • Public Servant • IT Professional
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {/* Introduction Card */}
        <div className="mb-12 bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 md:p-8 shadow-xl border border-gray-700 hover:border-indigo-500/50 transition-all duration-300">
          <div className="flex items-start gap-4 md:gap-6">
            <div className="hidden md:block">
              <div className="w-24 h-24 rounded-full bg-gradient-to-r from-indigo-500 to-purple-500 flex items-center justify-center shadow-lg">
                <span className="text-3xl font-bold text-white">DA</span>
              </div>
            </div>
            <div className="flex-1">
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
                Dharylle Austria Alagao
              </h2>
              <p className="text-gray-300 leading-relaxed text-lg">
                A passionate 21-year-old student leader and public servant from Brgy. Gaddani, Tayum, Abra. 
                I proudly identify as non-binary and am dedicated to serving my community while pursuing 
                excellence in Information Technology.
              </p>
            </div>
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {/* Education Timeline */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                  <span className="text-white font-bold">🎓</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Education</h3>
              </div>
              
              <div className="space-y-6 relative pl-8 before:absolute before:left-4 before:top-0 before:bottom-0 before:w-0.5 before:bg-gradient-to-b before:from-blue-500 before:via-purple-500 before:to-pink-500">
                {[
                  {
                    level: "Pre-school",
                    school: "OISCA Gaddani Tayum Abra",
                    period: "2008-2009"
                  },
                  {
                    level: "Elementary",
                    school: "Tayum Central School (TCS)",
                    achievement: "Top 7",
                    period: "2009-2015"
                  },
                  {
                    level: "High School",
                    school: "Gaddani National High School (GNHS)",
                    achievement: "With Honors",
                    period: "2015-2019"
                  },
                  {
                    level: "Senior High",
                    school: "Data Center College of the Philippines",
                    achievement: "With Honors",
                    period: "2019-2021"
                  },
                  {
                    level: "College",
                    school: "University of Abra – Main Campus (UA)",
                    program: "BS Information Technology",
                    achievement: "Dean's Lister",
                    period: "2021-Present"
                  }
                ].map((edu, index) => (
                  <div key={index} className="relative">
                    <div className="absolute -left-8 top-1 w-4 h-4 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"></div>
                    <div className="bg-gray-900/50 rounded-xl p-4 border border-gray-800 hover:border-purple-500/50 transition-colors">
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-bold text-white">{edu.level}</h4>
                        <span className="text-sm text-gray-400">{edu.period}</span>
                      </div>
                      <p className="text-gray-300 font-medium">{edu.school}</p>
                      {edu.program && (
                        <p className="text-indigo-300 text-sm mt-1">{edu.program}</p>
                      )}
                      {edu.achievement && (
                        <span className="inline-block px-3 py-1 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs font-medium mt-2 border border-blue-500/30">
                          {edu.achievement}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Personal Info */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-pink-500 to-rose-500 flex items-center justify-center">
                  <span className="text-white font-bold">🌟</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Personal Identity</h3>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center">
                    <span className="text-white text-sm">🌈</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Gender Identity</p>
                    <p className="text-white font-medium">Non-binary</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-gray-900/50 rounded-lg">
                  <div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-cyan-500 flex items-center justify-center">
                    <span className="text-white text-sm">📍</span>
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">Hometown</p>
                    <p className="text-white font-medium">Brgy. Gaddani, Tayum, Abra</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Leadership & Service */}
          <div className="space-y-8">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-emerald-500 to-teal-500 flex items-center justify-center">
                  <span className="text-white font-bold">🏛️</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Public Service</h3>
              </div>
              
              <div className="space-y-6">
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 border border-gray-700 hover:border-emerald-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-white">SK Chairman</h4>
                    <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs font-medium border border-emerald-500/30">
                      Current
                    </span>
                  </div>
                  <p className="text-gray-300 mb-3">
                    Leading community initiatives and youth programs in Brgy. Gaddani, Tayum, Abra
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                    <p className="text-sm text-gray-400">Barangay Governance</p>
                  </div>
                </div>

                <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl p-5 border border-gray-700 hover:border-teal-500/50 transition-all duration-300">
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="text-xl font-bold text-white">SK Federation Treasurer</h4>
                    <span className="px-3 py-1 bg-teal-500/20 text-teal-300 rounded-full text-xs font-medium border border-teal-500/30">
                      Municipality Level
                    </span>
                  </div>
                  <p className="text-gray-300 mb-3">
                    Managing financial operations and budgeting for youth initiatives across Tayum municipality
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-teal-500"></div>
                    <p className="text-sm text-gray-400">Financial Management</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Values & Philosophy */}
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-amber-500 to-orange-500 flex items-center justify-center">
                  <span className="text-white font-bold">💫</span>
                </div>
                <h3 className="text-2xl font-bold text-white">Core Values</h3>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                {[
                  { title: "Integrity", desc: "Honest leadership", color: "from-blue-500 to-cyan-500" },
                  { title: "Service", desc: "Community first", color: "from-emerald-500 to-teal-500" },
                  { title: "Excellence", desc: "Academic achievement", color: "from-purple-500 to-pink-500" },
                  { title: "Inclusion", desc: "Diverse representation", color: "from-amber-500 to-orange-500" }
                ].map((value, index) => (
                  <div key={index} className="bg-gray-900/50 rounded-lg p-4 border border-gray-800 hover:border-gray-700 transition-colors">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${value.color} flex items-center justify-center mb-2`}>
                      <span className="text-white text-lg">✨</span>
                    </div>
                    <h5 className="font-bold text-white">{value.title}</h5>
                    <p className="text-sm text-gray-400">{value.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Signature */}
            <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl p-6 border border-gray-700 text-center">
              <div className="mb-4">
                <div className="inline-block px-6 py-2 bg-gradient-to-r from-indigo-500/20 to-purple-500/20 rounded-full border border-indigo-500/30">
                  <p className="text-indigo-300 font-medium text-sm">Official Signature</p>
                </div>
              </div>
              <p className="text-2xl font-bold text-white tracking-wider">ALAGAO, DHARYLLE AUSTRIA</p>
              <p className="text-gray-400 mt-2">Student Leader & Public Servant</p>
            </div>
          </div>
        </div>

        {/* Quote Section */}
        <div className="mt-12 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-2xl p-8 border border-gray-700 text-center">
          <p className="text-xl md:text-2xl text-gray-300 italic">
            "Combining academic excellence with community service to create meaningful impact"
          </p>
        </div>
      </div>
    </div>
  );
}

export default About;