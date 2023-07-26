import React from "react";
import ProjectItem from "./ProjectItem";
import site1 from "../assets/site1.jpg";
import site2 from "../assets/site2.jpg";
import site3 from "../assets/site3.jpg";
import site4 from "../assets/site4.jpg";
const Projects = () => {
  return (
    <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
      <h1 className="text-4xl font-bold text-center text-[#001b5e]">
        Projects{" "}
      </h1>
      <p className="text-center py-8">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Similique hic,
        consectetur eum unde fugiat, minus omnis cum maiores eius ullam suscipit
        temporibus modi tenetur doloribus tempora quibusdam commodi?
        Perspiciatis, tenetur?
      </p>
      <div className="grid sm:grid-cols-2 gap-12">
        <ProjectItem img={site1} title="project1" />
        <ProjectItem img={site2} title="project2" />
        <ProjectItem img={site3} title="project3" />
        <ProjectItem img={site4} title="project4" />
      </div>
    </div>
  );
};

export default Projects;
