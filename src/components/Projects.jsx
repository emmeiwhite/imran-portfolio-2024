import SectionTitle from "./SectionTitle";
import { projects } from "../data";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  return (
    <section
      className="py-20 align-element"
      id="projects"
    >
      <SectionTitle text="Web Creation" />

      <div className="py-16 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
