import { skills } from "../data";
import SkillCard from "./SkillCard";
export default function SkillsList() {
  return (
    <div className="py-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {skills.map((skill) => {
        return (
          <SkillCard
            {...skill}
            key={skill.id}
          />
        );
      })}
    </div>
  );
}
