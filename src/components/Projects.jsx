import SectionTitle from './SectionTitle'
import { projects } from '../data'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <section
      className="py-20 align-element"
      id="projects"
    >
      <SectionTitle text="Portfolio Projects" />

      <div className="py-16 project-list">
        {projects.map(project => (
          <ProjectCard
            {...project}
            key={project.id}
          />
        ))}
      </div>
    </section>
  )
}
