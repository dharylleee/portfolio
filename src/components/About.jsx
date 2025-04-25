function About() {
    return (
      <div
        className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 py-12"
        style={{
          backgroundImage: "url('/3.jpg')",
        }}
      >
        <div className="max-w-3xl mx-auto px-4 py-8 font-times italic">
          <h2 className="text-5xl font-extrabold text-red-500 mb-6">ABOUT ME</h2>
          <p className="text-lg text-black mb-4">
            Hello! I'm <span className="text-black mb-4 ">Dharylle Austria Alagao</span>, a passionate and community-driven 21-year-old student and public servant from <span className="text-black">Brgy. Gaddani, Tayum, Abra</span>. I proudly identify as <span className="text-black">non-binary</span>.
          </p>
          <p className="text-lg text-black mb-4">
            My educational journey began at <span className="text-black">OISCA Gaddani Tayum Abra</span> for pre-school. I completed elementary at <span className="text-black">Tayum Central School (TCS) Top 7</span> and graduated from <span className="text-black">Gaddani National High School (GNHS)</span> with honors. I continued to achieve academic success in senior high at <span className="text-black">Data Center College of the Philippines</span>, also graduating with honors.
          </p>
          <p className="text-lg text-black mb-4">
            Currently, I am pursuing my college degree at the <span className="text-black">University of Abra – Main Campus (UA). I'm currently taking up Bachelor of Science in Information Technology</span>, where I am honored to be a <span className="text-black">Dean's Lister</span>.
          </p>
          <p className="text-lg text-black mb-4">
            Beyond academics, I actively serve my community as the <span className="text-black">SK Chairman</span> of <span className="text-black">Brgy. Gaddani, Tayum, Abra</span>. I also hold the position of <span className="text-black">SK Federation Treasurer</span> in the whole municipality of Tayum — a role I’m proud to fulfill with dedication and integrity.
          </p>
          <p className="text-lg text-black mb-4">
            ALAGAO, DHARYLLE AUSTRIA <span className="text-black"></span>
          </p>
        </div>
      </div>
    );
  }
  
  export default About;
  