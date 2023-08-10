import React from "react";
import { FaChevronDown } from "react-icons/fa";
import ScrollIntoView from "react-scroll-into-view";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Frontend Developer",
          "Backend Developer",
          "PERN Stack Developer",
          "Full Stack Web Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export const AboutSection = () => {
  return (
    <div className="max-w-4xl mt-20 sm:mt-11 mx-auto">
      <p className=" text-xl  text-black  dark:text-zinc-100 sm:text-4xl font-bold text-center">
        Hola bienvenido!! <p className=" hover:rotate-45 duration-100">👋 </p>{" "}
        Yo soy,
      </p>
      <p className=" text-base sm:text-xl text-center text-gray-600 dark:text-zinc-100 mt-4 leading-relaxed">
        <p className="text-4xl font-bold">{Type()}</p>
      </p>
      <ScrollIntoView selector="#tech">
        <div className="mx-auto pt-20 md:pt-8 p-12 ">
          <FaChevronDown className="mx-auto text-3xl animate-bounce text-blue-500 cursor-pointer" />
        </div>
      </ScrollIntoView>
    </div>
  );
};
