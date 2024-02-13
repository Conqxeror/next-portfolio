import React from 'react';
import { FaLinkedin, FaGithub } from 'react-icons/fa'; 

const Info = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      {/* Profile Picture */}
      <img
        src="https://avatars.githubusercontent.com/u/110852661?s=400&u=761f3488752f5b9605f5e1b380bc8a10239c450b&v=4" // Replace with your profile picture URL
        alt="Profile Picture"
        className="rounded-full w-40 h-40 mb-4"
      />
      {/* Name */}
      <h1 className="text-3xl font-bold mb-2">Wali Mohammad Kadri</h1>
      {/* Short Description */}
      <p className="text-lg text-gray-600 mb-4">Web Developer | Frontend Engineer</p>
      {/* Social Logos with Links */}
      <div className="flex space-x-4 mb-4">
        <a href="https://www.linkedin.com/in/walimohammadkadri/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="text-blue-500 hover:text-blue-700 w-8 h-8" />
        </a>
        <a href="https://github.com/Conqxeror" target="_blank" rel="noopener noreferrer">
          <FaGithub className="text-gray-700 hover:text-gray-900 w-8 h-8" />
        </a>
      </div>
      {/* Download Resume Button */}
      <a
        href="../../public/resume/Wali_Mohammad_Resume.pdf" // Replace with the URL to download your resume
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full text-lg transition duration-300"
        download
      >
        Download Resume
      </a>
    </div>
  );
};

export default Info;
