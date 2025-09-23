import { FaAngleDoubleRight } from 'react-icons/fa'
export default function SkillCard({ icon, title, skillsInfo }) {
  return (
    <article>
      <span>{icon}</span>
      <h3 className="mt-6 font-bold text-emerald-400 border-b-4  border-emerald-500 inline-block w-32">
        {title}
      </h3>
      <ul className="mt-2 text-slate-700 leading-loose">
        {skillsInfo.map(skill => {
          return (
            <li
              key={skill}
              className="flex gap-2 items-center">
              <FaAngleDoubleRight className="text-emerald-300" /> &nbsp;
              <p className="text-emerald-400"> {skill}</p>
            </li>
          )
        })}
      </ul>
    </article>
  )
}
