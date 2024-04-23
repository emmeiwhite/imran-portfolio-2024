export default function SkillCard({ icon, title, text }) {
  return (
    <article>
      <span>{icon}</span>
      <h4 className="mt-6 font-bold">{title}</h4>
      <p className="mt-2 text-slate-700 leading-loose">{text}</p>
    </article>
  );
}
