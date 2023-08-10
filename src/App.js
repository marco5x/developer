import React, { useState, useEffect } from "react";
import { AboutSection } from "./components/AboutSection";
import { CardUi } from "./components/CardUi";
import { ContactSection } from "./components/ContactSection";
import { FooterSection } from "./components/FooterSection";
import { SkillSection } from "./components/SkillSection";
import { Nav } from "./components/Nav";
import { PortfolioSection } from "./components/PortfolioSection";
import AOS from "aos";
import "aos/dist/aos.css";

export const App = () => {
  const [theme, setTheme] = useState(null);
  useEffect(() => {
    AOS.init();
  });

  useEffect(() => {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [theme]);

  const handleTheme = () => {
    setTheme(theme === "dark" ? "ligth" : "dark");
  };

  return (
    <div className="min-h-screen py-2 px-3 sm:px-5 bg-slate-100 dark:bg-gradient-to-t from-slate-500 to-slate-700">
      <div className="fixed z-30 my-6 right-6 md:my-14 md:right-12">
        <button className="btn-primary" onClick={handleTheme}>
          {theme === "dark" ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z"
              />
            </svg>
          )}
        </button>
      </div>
      <Nav />
      <div data-aos="fade-down" data-aos-duration="800">
        <CardUi />
      </div>
      <div data-aos="fade-up" data-aos-duration="800" data-aos-delay="400">
        <AboutSection />
      </div>
      <SkillSection />
      <PortfolioSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
};
