import React, { useRef, useEffect, useState, forwardRef } from "react";

export const About = forwardRef((props, ref) => {
  return (
    <div>
      <div>
        <h1 id="about" className="section-headers">
          About Me
        </h1>
        <p className="">
          I am a Computer Science graduate with ample experience in software
          development. I am eager to leverage my skills and knowledge to
          contribute to a dynamic team in a challenging software development
          position. My passion for learning and my record of accomplishment of
          successful collaboration have allowed me to deliver high-quality
          results under pressure. I am committed to delivering superior
          performance and meeting objectives on time and on budget.
        </p>
      </div>
      <div ref={ref}>
        <h1 id="experience" className="section-headers">
          Experience
        </h1>
        <div className="grid grid-col grid-cols-4">
          <h1 className="col-span-1">Jun - Aug 2022</h1>
          <div className="col-span-3 flex flex-col">
            <span className="text-slate-200 font-bold">
              DXC Technology - New Orleans, LA
            </span>
            <span className="font-medium text-slate-500">Technical Intern</span>
            <div>
              <p>
                During my technical internship at DXC Technology, I played a key
                role in enhancing the efficiency and effectiveness of log
                processing and visualization in AWS CloudWatch. By leading the
                development of a log interface in OpenSearch, we achieved a
                significant 30% improvement in monitoring and analysis compared
                to the previous system. Additionally, I spearheaded the design
                of a modular software architecture using various AWS products
                like Lambda, EC2, and S3 bucket, which resulted in a remarkable
                25% reduction in system maintenance efforts. Furthermore, I
                contributed to the application's analytics capabilities by
                developing and integrating 15 metrics classes in JavaScript and
                Python, leading to a 20% increase in data-driven
                decision-making. To streamline the deployment process, I
                automated it through a Jenkins pipeline, reducing deployment
                time by 40% and ensuring a more reliable and error-free delivery
                process. This internship allowed me to apply my technical skills
                effectively, resulting in significant improvements for the
                project.
              </p>
              <div className="text-slate-400 mt-4 mb-4">
                <ul className="mt-2 flex flex-wrap">
                  <li>
                    <div className="skill-bubble">OpenSearch</div>
                  </li>
                  <li>
                    <div className="skill-bubble">CloudWatch</div>
                  </li>
                  <li>
                    <div className="skill-bubble">Jira</div>
                  </li>
                  <li>
                    <div className="skill-bubble">JavaScript</div>
                  </li>
                  <li>
                    <div className="skill-bubble">Python</div>
                  </li>
                  <li>
                    <div className="skill-bubble">Jenkins</div>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <h1 className="col-span-1">Jun - Aug 2021</h1>
          <div className="col-span-3 flex flex-col">
            <span className="text-slate-200 font-bold">
              Charter Communications - Greenwood Village, CO
            </span>
            <span className="font-medium text-slate-500">
              Software Developer Intern
            </span>
            <div>
              <p>
                During my summer internship at Charter Communications, I
                spearheaded the technical advancement of an Event Management
                System using Python and Django. This entailed integrating
                third-party APIs for seamless payment processing and SMS
                notifications, while ensuring top-tier security through
                role-based access control. Active participation in code reviews
                fortified code quality and compliance with best practices, while
                the development of an intuitive user interface underscored
                responsiveness across diverse devices. This experience bolstered
                my development prowess and strategic collaboration within a
                dynamic team environment.
              </p>
              <ul className="text-slate-400 mt-4 mb-4">
                <li>
                  <ul className="mt-2 flex flex-wrap">
                    <li>
                      <div className="skill-bubble">Python</div>
                    </li>
                    <li>
                      <div className="skill-bubble">Django</div>
                    </li>
                    <li>
                      <div className="skill-bubble">HTML</div>
                    </li>
                    <li>
                      <div className="skill-bubble">JavaScript</div>
                    </li>
                    <li>
                      <div className="skill-bubble">CSS</div>
                    </li>
                    <li>
                      <div className="skill-bubble">API</div>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div id="project" className="section-headers">
        Projects
      </div>
    </div>
  );
});
