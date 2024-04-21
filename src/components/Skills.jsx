import SectionTitle from "./SectionTitle";

import SkillsList from "./SkillsList";

function Skills() {
  return (
    <section
      className="align-element py-20"
      id="skills"
    >
      <SectionTitle text="tech stack" />

      <SkillsList />
    </section>
  );
}

export default Skills;
