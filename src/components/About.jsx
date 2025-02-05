import immiAboutImg from '../assets/immi-sketch-2.jpeg'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <section
      className="bg-white py-20 "
      id="about">
      <div className="align-element grid gap-16 md:grid-cols-2 items-center">
        <img
          src={immiAboutImg}
          alt="about Imran - a FE Engineer"
          className="w-full h-96 object-fill [clip-path:polygon(50%_0%,90%_15%,100%_50%,80%_85%,50%_100%,15%_90%,0%_50%,10%_20%)] shadow-md"
        />
        <article>
          <SectionTitle text="My Story" />

          <p className="mt-4 text-slate-600">
            With 6+ years of expertise as a Front End Web Developer, I specialize in
            <span className="text-emerald-900 font-semibold">
              {' '}
              ReactJS and JavaScript programming
            </span>
            , crafting dynamic user interfaces with innovative techniques.
          </p>
          <p className="mt-4">
            Proficient in{' '}
            <span className="text-emerald-800 font-semibold">
              Tailwind CSS, TypeScript, Redux-toolkit, and React Query
            </span>
            I excel in delivering high-quality solutions.
          </p>
          <p className="mt-4 text-slate-600">
            <span className="text-emerald-800 font-bold">
              Seeking remote, full-time, long term ReactJS opportunities,
            </span>{' '}
            Diligent and dedicated to delivering excellence in every project,
          </p>
        </article>
      </div>
    </section>
  )
}
