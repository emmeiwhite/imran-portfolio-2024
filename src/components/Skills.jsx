import SectionTitle from './SectionTitle'

import SkillsList from './SkillsList'

function Skills() {
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
        className="align-element py-20"
        id="skills">
        <SectionTitle text="tech stack" />

        <SkillsList />
      </section>
    </div>
  )
}

export default Skills
