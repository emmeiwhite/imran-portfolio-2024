import immiAboutImg from '../assets/immi-sketch-2.jpeg'
import SectionTitle from './SectionTitle'

export default function About() {
  return (
    <div
      style={{
        background: '#000000',
        backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
      `,
        backgroundSize: '20px 20px, 20px 20px, 20px 20px',
        backgroundPosition: '0 0, 0 0, 0 0'
      }}
      className="py-20">
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

            <p className="mt-4 text-emerald-200 bg-emerald-800 px-3 py-1">
              I’m a Frontend Engineer with over 4+ years of experience working on
              <span className="text-emerald-300 font-semibold">
                {' '}
                real-world web applications using React and modern JavaScript.
              </span>
            </p>
            <p className="mt-4 text-emerald-200 bg-emerald-800 px-3 py-1">
              My journey includes building products for non-profits, startups, and contract clients,
              and currently leading frontend development for a live platform. I enjoy turning
              complex requirements into simple, usable interfaces and continuously improving my
              craft through hands-on work.
            </p>
            <p className="mt-4 text-emerald-200 bg-emerald-800 px-3 py-1">
              <span className="text-emerald-300 font-bold">
                Currently seeking full-time, long term Frontend roles.
              </span>{' '}
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
