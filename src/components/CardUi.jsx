import React from "react";
import MarcosDev from "../assets/img/MarcosDev.jpg";
import { FaGithub, FaLinkedin, FaRegEnvelope } from "react-icons/fa";

export const CardUi = () => {
  return (
    <div className="w-full sm:mt-0">
      <div className="flex flex-col justify-center max-w-xs mx-auto bg-white shadow-2xl rounded-xl pt-5 pb-2">
        <div className="relative max-w-xs overflow-hidden bg-cover bg-no-repeat">
          <img
            src={MarcosDev}
            className="max-w-[180px] mx-auto shadow-xl rounded-full transition duration-300 ease-in-out hover:scale-125"
            alt="Marcos"
          />
        </div>
        {/**
        <div>
          <img
            className="w-32 mx-auto shadow-xl rounded-full drop-shadow-sm"
            src={MarcosDev}
            alt="profile"
          />
        </div>
  */}
        <div className="text-center mt-5">
          <p className="text-xl sm:text-2xl font-semibold text-gray-900">
            MARCOS CRUZ
          </p>
          <p className="text-xs sm:text-base text-gray-600 pt-2 pb-4 px-5 w-auto inline-block border-b-2">
            Full Stack Web - Developer
          </p>
          <div className="flex align-center justify-center mt-2">
            <a
              className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-gray-800 hover:bg-gray-800 rounded-full hover:text-white transition-colors duration-300"
              href="https://github.com/Marco5X"
              target="_blank"
              rel="noreferrer"
            >
              <FaGithub />
              <span className="sr-only">Github</span>
            </a>
            <a
              href="https://www.linkedin.com/in/marcos-cruz-dev/"
              className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-blue-500 hover:bg-blue-500 rounded-full hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaLinkedin />
              <span className="sr-only">Linkedin</span>
            </a>
            <a
              href="mailto:marcosmc86@gmail.com"
              className="text-2xl m-1 p-1 sm:m-2 sm:p-2 text-red-600 hover:bg-black rounded-full hover:text-white transition-colors duration-300"
              target="_blank"
              rel="noreferrer"
            >
              <FaRegEnvelope />
              <span className="sr-only">Email</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
