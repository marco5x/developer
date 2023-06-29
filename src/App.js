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
    <div className="min-h-screen bg-gray-100 dark:bg-slate-600 py-2 px-3 sm:px-5">
      <div className="fixed z-30 my-14 right-16">
        <button className="btn-primary" onClick={handleTheme}>
          MODO {theme === "dark" ? "🌞" : "🌛"}
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
