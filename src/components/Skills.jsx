import SectionTitle from "./SectionTitle";

import SkillsList from "./SkillsList";

function Skills() {
  return (
    <section
      className="align-element py-20"
      id="skills"
    >
      <SectionTitle>
        <h2 className="text-3xl font-medium tracking-wider capitalize">
          Tech Stack
        </h2>
      </SectionTitle>

      <SkillsList />
    </section>
  );
}

export default Skills;
