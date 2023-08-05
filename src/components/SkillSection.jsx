import React from "react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import {
  SiCss3,
  SiTailwindcss,
  SiExpress,
  SiHtml5,
  SiJavascript,
  SiRedux,
  SiPostgresql,
  SiAstro,
  SiNextdotjs,
  SiFirebase,
} from "react-icons/si";
import { Arrow } from "./Arrow";

export const SkillSection = () => {
  return (
    <div className="max-w-6xl mx-auto sm:py-12 pt-28 pb-12" id="tech">
      <p className="text-3xl text-center text-black pt-4 font-bold sm:text-4xl dark:text-white ">
        Habilidades Técnicas
      </p>
      <div className="flex flex-wrap justify-center pt-6 sm:pt-2">
        <div className="skill-card">
          <SiHtml5 color="#e06a46" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">Html5</p>
        </div>
        <div className="skill-card">
          <SiCss3 color="#2962ff" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">Css3</p>
        </div>
        <div className="skill-card">
          <SiAstro color="#272829" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">Astro</p>
        </div>
        <div className="skill-card">
          <SiJavascript color="#e8d535" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-xl font-semibold text-center">
            Javascript (ES6)
          </p>
        </div>
        <div className="skill-card">
          <SiTailwindcss color="#00C0A3" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">
            TailwindCSS
          </p>
        </div>
        <div className="skill-card">
          <FaReact color="#2196f3" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">
            React (Hooks)
          </p>
        </div>
        <div className="skill-card">
          <SiNextdotjs color="#272829" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">NextJs</p>
        </div>
        <div className="skill-card">
          <SiRedux color="#7a4ac0" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">
            Redux (Toolkit)
          </p>
        </div>
        <div className="skill-card">
          <FaNodeJs color="#026e00" className="mx-auto text-4xl" />{" "}
          <p className="mt-6 sm:text-2xl font-semibold text-center">NodeJs</p>
        </div>
        <div className="skill-card">
          <SiExpress color="#259dff" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">
            ExpressJs
          </p>
        </div>
        <div className="skill-card">
          <SiFirebase color="#ffcb2f" className="mx-auto text-4xl" />
          <p className="mt-6 sm:text-2xl font-semibold text-center">Firebase</p>
        </div>
        <div className="skill-card">
          <SiPostgresql color="#336791" className="mx-auto text-4xl" />{" "}
          <p className="mt-6 sm:text-2xl font-semibold text-center">
            PostgreSql (15)
          </p>
        </div>
      </div>
      <Arrow />
    </div>
  );
};
