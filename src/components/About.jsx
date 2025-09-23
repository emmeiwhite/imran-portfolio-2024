import immiAboutImg from '../assets/immi-sketch-2.jpeg'
import SectionTitle from './SectionTitle'

export default function About() {
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
        className=""
        id="about">
        <div className="align-element grid gap-16 md:grid-cols-2 items-center">
          <img
            src={immiAboutImg}
            alt="about Imran - a FE Engineer"
            className="w-full h-[320px] sm:h-[400px] object-contain [clip-path:polygon(12%_8%,88%_0%,100%_30%,85%_85%,60%_100%,15%_95%,0%_65%,5%_20%)] shadow-lg "
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
                Seeking remote, full-time, long term React.js/Next.js Frontend Roles.
              </span>{' '}
              Diligent and dedicated to delivering excellence in every project,
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
