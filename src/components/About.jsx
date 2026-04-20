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
          {/* <article>
            <SectionTitle text="My Story" />

            <p className="mt-4 text-emerald-200 bg-emerald-800 px-3 py-1">
              I’m a Frontend Engineer with 5+ years of experience building
              <span className="text-emerald-300 font-semibold">
                {' '}
                production web applications using React and JavaScript.
              </span>
            </p>
            <p className="mt-4 text-emerald-200 bg-emerald-800 px-3 py-1">
              Recently, I’ve been expanding into full-stack (MERN) development and learning how to
              integrate AI into real products. My goal is to work on user-facing AI products where
              strong UI and intelligent systems meet.
            </p>
            <p className="mt-4 text-emerald-200 bg-emerald-800 px-3 py-1">
              <span className="text-emerald-300 font-bold">
                Currently seeking full-time, consultant and long term roles.
              </span>{' '}
            </p>
          </article> */}
          <article>
            <SectionTitle text="My Story" />

            <p className="mt-4 text-emerald-200 bg-emerald-800 px-3 py-1">
              I’m a Frontend Engineer with 5+ years of industry experience, along with ongoing
              freelance and independent projects. I specialize in
              <span className="text-emerald-300 font-semibold"> HTML, CSS, and JavaScript</span>,
              building clean, responsive, and production-ready user interfaces.
            </p>

            <p className="mt-4 text-emerald-200 bg-emerald-800 px-3 py-1">
              My experience includes working across CMS platforms like Drupal, along with actively
              working and learning within WordPress, as well as React-based applications, with a
              strong focus on
              <span className="text-emerald-300 font-semibold">
                {' '}
                layout precision, spacing, typography, and consistency
              </span>
              .
            </p>

            <p className="mt-4 text-emerald-200 bg-emerald-800 px-3 py-1">
              Recently, I’ve been expanding into full-stack (MERN) development and exploring
              AI-driven products, aiming to build interfaces where strong UI and intelligent systems
              meet.
            </p>

            <p className="mt-4 text-emerald-200 bg-emerald-800 px-3 py-1">
              <span className="text-emerald-300 font-bold">
                Currently open to full-time, consulting, and long-term opportunities.
              </span>
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
