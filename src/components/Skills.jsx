import SectionTitle from './SectionTitle'

import SkillsList from './SkillsList'

function Skills() {
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
        className="align-element py-20"
        id="skills">
        <SectionTitle text="tech stack" />

        <SkillsList />
      </section>
    </div>
  )
}

export default Skills
