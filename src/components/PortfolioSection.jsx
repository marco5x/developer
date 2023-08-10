import {
  SiBootstrap,
  SiReactrouter,
  SiRedux,
  SiHtml5,
  SiCss3,
  SiTailwindcss,
  SiJavascript,
  SiAstro,
  SiExpress,
  SiPostgresql,
} from "react-icons/si";
import { FaNodeJs, FaReact } from "react-icons/fa";
import MovieApp from "../assets/img/MovieApp.jpg";
import GifApp from "../assets/img/GifApp.jpg";
import MemeGenerator from "../assets/img/MemeGenerator.jpg";
import PI from "../assets/img/PI.jpg";
import Docs from "../assets/img/Docstools.jpg";
import EquidApp from "../assets/img/Equidapp.jpg";
import { ModalGif } from "./modals/ModalGif";
import { ModalMoviesApp } from "./modals/ModalMoviesApp";
import { ModalMeme } from "./modals/ModalMeme";
import { ModalCountries } from "./modals/ModalCountries";
import { ModalDocs } from "./modals/ModalDocs";
import { ModalEquidapp } from "./modals/ModalEquidapp";

export const PortfolioSection = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 " id="post-1">
      <p
        className="text-3xl text-center text-black pt-4 font-bold sm:text-4xl dark:text-white"
        id="portfolio"
      >
        Proyectos
      </p>
      <div className="flex flex-wrap justify-center pt-2 ">
        <div className="flex flex-col p-6 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-60 hover:bg-sky-100">
          <img src={EquidApp} alt="countriesApp" />
          <p className="mt-3 sm:text-2xl font-semibold text-center">equidApp</p>
          <div className="flex justify-center gap-2 my-2">
            <SiJavascript
              color="#efd81d"
              className=" text-3xl"
              title="JavaScript"
            />
            <SiHtml5 color="#e06a46" className=" text-3xl" title="Html5" />
            <SiTailwindcss
              color="#38bdf8"
              className=" text-3xl"
              title="TailwindCss"
            />
            <FaReact color="#2196f3" className=" text-3xl" title="ReactJs" />
            <SiRedux color="#4c0bce" className="text-3xl" title="Redux" />
          </div>
          <ModalEquidapp />
        </div>

        <div className="flex flex-col p-6 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-60 hover:bg-sky-100">
          <img src={Docs} alt="docsTools" />
          <p className="mt-3 sm:text-2xl font-semibold text-center">
            DocsToolsDev
          </p>
          <div className="flex justify-center gap-2 my-2">
            <SiAstro color="#3c3c3c" className=" text-3xl" title="Astro" />
            <SiHtml5 color="#e06a46" className=" text-3xl" title="Html5" />
            <SiCss3 color="#2962ff" className=" text-3xl" title="Css3" />
          </div>
          <ModalDocs />
        </div>

        <div className="flex flex-col p-6 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-60 hover:bg-sky-100">
          <img src={PI} alt="countriesApp" />
          <p className="mt-3 sm:text-2xl font-semibold text-center">
            CountriesApp
          </p>
          <div className="flex justify-center gap-2 my-2">
            <FaReact color="#2196f3" className=" text-3xl" title="ReactJs" />
            <SiCss3 color="#2962ff" className=" text-3xl" title="Css3" />
            <SiReactrouter
              color="#3c3c3c"
              className=" text-3xl"
              title="ReactRouterDom"
            />
            <SiRedux color="#4c0bce" className="text-3xl" title="Redux" />
            <FaNodeJs color="#026e00" className="text-3xl" title="NodeJs" />
            <SiExpress color="#259dff" className="text-3xl" title="ExpressJs" />
            <SiPostgresql
              color="#336791"
              className="text-3xl"
              title="PostgreeSql"
            />
          </div>
          <ModalCountries />
        </div>

        <div className="flex flex-col p-6 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-60 hover:bg-sky-100">
          <img src={MemeGenerator} alt="" />
          <p className="mt-3 sm:text-2xl font-semibold text-center">
            MemeGenerator
          </p>
          <div className="flex justify-center gap-2 my-2">
            <SiJavascript
              color="#efd81d"
              className=" text-3xl"
              title="JavaScript"
            />
            <FaReact color="#2196f3" className=" text-3xl" title="ReactJs" />
            <SiReactrouter
              color="#f44250"
              className=" text-3xl"
              title="ReactRouterDom"
            />
            <SiBootstrap
              color="#7b11f8"
              className="text-3xl"
              title="Bootstrap"
            />
          </div>
          <ModalMeme />
        </div>

        <div className="flex flex-col  p-6 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-60 hover:bg-sky-100 ">
          <img src={GifApp} alt="" />
          <p className="mt-1 sm:mt-3 sm:text-2xl font-semibold text-center">
            GifApp
          </p>
          <div className="flex justify-center gap-2 my-2">
            <SiJavascript
              color="#efd81d"
              className=" text-3xl"
              title="JavaScript"
            />
            <FaReact color="#2196f3" className=" text-3xl" title="ReactJs" />
            <SiTailwindcss
              color="#38bdf8"
              className=" text-3xl"
              title="TailwindCss"
            />
          </div>
          <ModalGif />
        </div>

        <div className="flex flex-col  p-6 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-60 hover:bg-sky-100">
          <img className="rounded" src={MovieApp} alt="" />
          <p className="mt-3 sm:text-2xl font-semibold text-center">
            MoviesApp
          </p>
          <div className="flex justify-center gap-2 my-2">
            <SiJavascript
              color="#efd81d"
              className=" text-3xl"
              title="JavaScript"
            />
            <SiCss3 color="#2962ff" className="text-3xl" title="Css3" />
            <FaReact color="#2196f3" className=" text-3xl" title="ReactJs" />
            <SiRedux color="#4c0bce" className="text-3xl" title="Redux" />
          </div>
          <ModalMoviesApp />
        </div>
      </div>
    </div>
  );
};
