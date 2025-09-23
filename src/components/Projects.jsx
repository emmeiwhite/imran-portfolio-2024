import SectionTitle from './SectionTitle'
import { projects } from '../data'
import ProjectCard from './ProjectCard'

export default function Projects() {
  return (
    <div
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage: `
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     `,
        backgroundSize: '10px 10px',
        imageRendering: 'pixelated'
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
