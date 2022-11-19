import {
    SiFirebase,
    SiReactrouter,
    SiRedux,
    SiHtml5,
    SiCss3,
    SiTailwindcss,
    SiJavascript,
} from "react-icons/si";
import { FaReact } from "react-icons/fa";
import MovieApp from "../assets/img/MovieApp.jpg";
import GifApp from "../assets/img/GifApp.jpg";
import { ModalGif } from "./modals/ModalGif";
import { ModalMoviesApp } from "./modals/ModalMoviesApp";
import { ModalMeme } from "./modals/ModalMeme";
import { ModalCountries } from "./modals/ModalCountries";

export const PortfolioSection = () => {
    return (
        <div className="max-w-4xl mx-auto py-12 " id="post-1">
            <p
                className="text-3xl text-center text-black pt-4 font-bold sm:text-4xl"
                id="portfolio"
            >
                Proyectos
            </p>
            <div className="flex flex-wrap justify-center pt-2 ">
                <div className="flex flex-col p-6 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-60 hover:bg-sky-100">
                    <img src={""} alt="" />
                    <p className="mt-3 sm:text-2xl font-semibold text-center">
                        CountiesApp
                    </p>
                    <div className="flex justify-center gap-2 mt-2">
                        <FaReact color="#2196f3" className=" text-3xl" />
                        <SiCss3 color="#2962ff" className=" text-3xl" />
                        <SiReactrouter color="#3c3c3c" className=" text-3xl" />
                        <SiRedux color="#4c0bce" className="text-3xl" />
                    </div>
                    <ModalCountries />
                </div>

                <div className="flex flex-col p-6 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-60 hover:bg-sky-100">
                    <img src={""} alt="" />
                    <p className="mt-3 sm:text-2xl font-semibold text-center">
                        MemeGenerator
                    </p>
                    <div className="flex justify-center gap-2 m-2">
                        <SiJavascript color="#efd81d" className=" text-3xl" />
                        <FaReact color="#2196f3" className=" text-3xl" />
                        <SiTailwindcss color="#38bdf8" className=" text-3xl" />
                        <SiFirebase color="#fcc203" className="text-3xl" />
                    </div>
                    <ModalMeme />
                </div>

                <div className="flex flex-col  p-6 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-60 hover:bg-sky-100 ">
                    <img src={GifApp} alt="" />
                    <p className="mt-1 sm:mt-3 sm:text-2xl font-semibold text-center">
                        GifApp
                    </p>
                    <div className="flex justify-center gap-1 m-2">
                        <SiJavascript color="#efd81d" className=" text-3xl" />
                        <FaReact color="#2196f3" className=" text-3xl" />
                        <SiTailwindcss color="#38bdf8" className=" text-3xl" />
                    </div>
                    <ModalGif />
                </div>

                <div className="flex flex-col  p-6 m-6 overflow-hidden bg-white shadow-2xl rounded-2xl sm:w-60 hover:bg-sky-100">
                    <img className="rounded" src={MovieApp} alt="" />
                    <p className="mt-3 sm:text-2xl font-semibold text-center">
                        MoviesApp
                    </p>
                    <div className="flex justify-center gap-2 m-2">
                        <SiHtml5 color="#e06a46" className=" text-3xl" />
                        <SiCss3 color="#2962ff" className="text-3xl" />
                        <FaReact color="#2196f3" className=" text-3xl" />
                        <SiRedux color="#4c0bce" className="text-3xl" />
                    </div>
                    <ModalMoviesApp />
                </div>
            </div>
        </div>
    );
};
