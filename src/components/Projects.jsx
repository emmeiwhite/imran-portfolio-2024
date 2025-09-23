import SectionTitle from './SectionTitle'
import { projects } from '../data'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div
      style={{
        backgroundImage: `
        repeating-linear-gradient(30deg, 
          rgba(255, 100, 0, 0.1) 0, 
          rgba(255, 100, 0, 0.1) 1px, 
          transparent 1px, 
          transparent 10px,
          rgba(255, 100, 0, 0.15) 11px, 
          rgba(255, 100, 0, 0.15) 12px, 
          transparent 12px, 
          transparent 40px
        )
      `
      }}>
      <section
        className="py-20 align-element"
        id="projects">
        <SectionTitle text="Career Highlights" />

        <div className="py-16 project-list">
          {projects.map(project => (
            <ProjectCard
              {...project}
              key={project.id}
            />
          ))}
        </div>
      </section>
    </div>
  )
}
