import React, { useRef, useEffect, useState } from "react";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";

function Component() {
  const [myElementIsVisible, setMyElementIsVisible] = useState();
  console.log("myElementIsVisible", myElementIsVisible);

  const aboutRef = useRef(null);
  const expRef = useRef(null);
  const projRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      console.log("entries", entries);
      setMyElementIsVisible(entry.isIntersecting);
      console.log("entry", entry);
    });
    observer.observe(aboutRef.current);
    console.log(aboutRef);
    console.log(expRef);
    console.log(projRef);
  }, []);

  return (
    <main className="pt-7 px-5  selection:bg-teal-300 selection:text-teal-900 font-['Poppins']">
      <div className="lg:flex lg:justify-between lg:gap-10 max-w-[1200px] mx-auto py-6">
        <div className="flex flex-col lg:max-w-[300px] lg:h-[90svh]">
          <Hero />
          <div className="lg:flex lg:flex-col invisible lg:visible mt-16">
            <a
              href="#about"
              className={myElementIsVisible ? "texth1" : "texth"}
            >
              <span>About</span>
            </a>
            <a
              href="#experience"
              className="transition hover:-translate-y-1 pt-3 font-bold  uppercase"
            >
              Experience
            </a>
            <a
              href="#project"
              className="transition hover:-translate-y-1 pt-3 font-bold uppercase"
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
