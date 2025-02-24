import React from "react";
import Image from "next/image";
import { FaBriefcase, FaLinkedin } from "react-icons/fa";

const Hire = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-4">
      {/* Centered Circular Image */}
      <div className="w-32 h-32 rounded-full overflow-hidden mb-4">
        <Image
          src="/assets/profile.png"
          alt="Profile"
          width={128}
          height={128}
          className="object-cover"
        />
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-6 text-center">
        {"Let\'s Work Together!"}
      </h1>
      
      <div className="flex flex-col md:flex-row gap-6">
        <a
          href="https://www.linkedin.com/in/arynbht/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-6 py-3 bg-[#0077b5] text-white font-semibold rounded-xl shadow-md hover:bg-[#0077b5]/80 transition duration-300 ease-in-out transform hover:-translate-y-1"
        >
          <FaLinkedin className="mr-2" />
          Connect on LinkedIn
        </a>
      </div>
    </div>
  );
};

export default Hire;
