import SectionTitle from "./SectionTitle";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      className="py-20 align-element"
      id="projects"
    >
      <SectionTitle text="Portfolio Projects" />

      <div className="py-16 grid gap-6 md:gap-4 lg:gap-x-3  lg:gap-y-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 ">
        {projects.map((project) => (
          <ProjectCard
            {...project}
            key={project.id}
          />
        ))}
      </div>
    </section>
  );
}
