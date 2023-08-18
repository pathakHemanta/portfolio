import React, { useRef, useEffect, useState } from "react";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";

function Component() {
  const [myAboutElementIsVisible, setAboutElementIsVisible] = useState();
  const [myExperienceElementIsVisible, setExperienceElementIsVisible] =
    useState();
  const [myProjectElementIsVisible, setProjectElementIsVisible] = useState();

  const aboutRef = useRef(null);

  useEffect(() => {
    const about = document.getElementById("about");
    const experience = document.getElementById("experience1");
    const project = document.getElementById("project");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.target.id === "about") {
            setAboutElementIsVisible(entry.isIntersecting);
          }
          if (entry.target.id === "experience1") {
            setExperienceElementIsVisible(entry.isIntersecting);
          }
          if (entry.target.id === "project") {
            setProjectElementIsVisible(entry.isIntersecting);
          }
        });
      },
      { threshold: 0.5 }
    );
    observer.observe(about);
    observer.observe(experience);
    observer.observe(project);
  }, []);

  return (
    <main className="pt-7 px-5  selection:bg-teal-300 selection:text-teal-900 font-['Poppins']">
      <div className="lg:flex lg:justify-between lg:gap-10 max-w-[1200px] mx-auto py-6">
        <div className="flex flex-col lg:max-w-[300px] lg:h-[90svh]">
          <Hero />
          <div
            id="hello"
            className="lg:flex lg:flex-col invisible lg:visible mt-16"
          >
            <a
              href="#about"
              className={myAboutElementIsVisible ? "texth1" : "texth"}
            >
              <span>About</span>
            </a>
            <a
              href="#experience"
              className={myExperienceElementIsVisible ? "texth1" : "texth"}
            >
              Experience
            </a>
            <a
              href="#project"
              className={myProjectElementIsVisible ? "texth1" : "texth"}
            >
              Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-[600px] lg:h-[90svh] overflow-y-auto scrollbar-hide scroll-smooth">
          <About ref={aboutRef} />
        </div>
      </div>
    </main>
  );
}

export default Component;
