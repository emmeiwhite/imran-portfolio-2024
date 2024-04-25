export default function SkillCard({ icon, title, skillsInfo }) {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold text-emerald-800 border-b-4  border-emerald-700 inline-block w-32">
        {title}
      </h4>
      <ul className="mt-2 text-slate-700 leading-loose">
        {skillsInfo.map((skill) => {
          return <li key={skill}>⚡️ &nbsp;{skill}</li>;
        })}
      </ul>
    </article>
  );
}
