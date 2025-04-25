import {
    FaGithub,
    FaLinkedin,
    FaFacebook,
    FaInstagram,
  } from 'react-icons/fa';
  
  function SocialLinks() {
    return (
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-wrap justify-center gap-5 text-white text-7xl z-50">
        <a
          href="https://github.com/dharylleee"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.linkedin.com/in/dharylleaustria-alagao-023258362/" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://www.facebook.com/dharylle.austria.alagao"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
        >
          <FaFacebook />
        </a>
        <a
          href="https://www.instagram.com/ryllebitchhh/" 
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-red-500"
        >
          <FaInstagram />
        </a>
      </div>
    );
  }
  
  export default SocialLinks;
  