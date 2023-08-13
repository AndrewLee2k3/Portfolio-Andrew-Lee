import Title from "../layouts/Title";
import ProjectCard from "./ProjectCard";
import { projectsData } from "@/data/data";
const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-gray-300"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        {projectsData.map((item) => (
          <ProjectCard
            key={item.id}
            title={item.title}
            des={item.des}
            src={item.src}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;
