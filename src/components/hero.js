import React from "react";
import { BsGithub } from "react-icons/bs";
import { SiLinkedin } from "react-icons/si";
import { WordDocumentPage } from "./docViewer";

export const Hero = () => {
  return (
    <div className="flex flex-col justify-evenly mt-11">
      <div>
        <h1 className="text-slate-200 text-4xl font-bold sm:text-5xl mt-8">
          Hemanta Pathak
        </h1>
        <h2 className="text-slate-200 text-lg mt-3">
          Former Application Developer Intern at DXC Technology
        </h2>
        <p className="mt-3 ">
          I am proficient in <span className="font-bold text-white">React</span>
          , Next.js, Java, SpringBoot, ...
        </p>
      </div>
      <div>
        <ul></ul>
      </div>
      <div className="lg:absolute lg:bottom-10 flex gap-3 mt-4 mb-8">
        <a href="https://github.com/pathakHemanta" target="_blank">
          <BsGithub size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/hemanta-pathak-073aaa191/"
          target="_blank"
        >
          <SiLinkedin size={25} />
        </a>
      </div>
    </div>
  );
};
