import Image from "next/image";
import { projects } from "../db";

const Projects = () => {
  return (
    <div className="bg-secondary h-[100vh]">
      <div className="container px-4 mx-auto py-10">
        <h1 className="text-3xl font-bold text-center text-white mb-8">
          My Projects
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-accent text-center overflow-hidden shadow-md rounded-lg  border-[3px] border-primary"
            >
              <Image src={project.img} alt="" />
              <div className="p-6">
                <h2 className="text-xl text-white">{project.title}</h2>
                <p className="mt-2 text-white">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-white hover:border-blue-600 hover:text-blue-600 hover:bg-white px-3 py-4 rounded-md border-[3px] border-white"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
