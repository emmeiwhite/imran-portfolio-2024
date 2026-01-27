import resume from '../assets/Imran_Resume.pdf'

import heroImg from '../assets/immi-sketch-1.jpeg'
import { FaGithubSquare, FaLinkedin, FaStackOverflow } from 'react-icons/fa'

function Hero() {
  return (
    <section
      className="py-20"
      style={{
        background: '#000000',
        backgroundImage: `
        linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px),
        linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px),
        radial-gradient(circle, rgba(255,255,255,0.6) 1px, transparent 1px)
      `,
        backgroundSize: '20px 20px, 20px 20px, 20px 20px',
        backgroundPosition: '0 0, 0 0, 0 0'
      }}>
      <div>
        <div className="align-element grid md:grid-cols-2 items-center gap-8">
          <article className="order-2 md:order-1">
            <h1 className="text-5xl sm:text-7xl font-bold tracking-wider text-emerald-50">
              I&apos;m <span className="text-emerald-100">Imran</span>
            </h1>

            <p className="mt-4 text-3xl text-emerald-200 capitalize tracking-wide">
              Frontend Engineer | HTML5, CSS3, JavaScript (React)
            </p>

            <p className="mt-2  capitalize tracking-wide text-emerald-50 bg-emerald-800 px-3 py-2">
              Skilled in shipping organised, maintainable, performant and scalable web application
              UI
            </p>

            <div className="flex mt-4 gap-x-4">
              <a
                href="https://github.com/emmeiwhite"
                target="_blank"
                aria-label="Go to Github">
                <FaGithubSquare className="h-8 w-8 text-emerald-100 hover:text-emerald-400 duration-300" />
              </a>

              <a
                href="https://www.linkedin.com/in/imran-rafiq-rather/"
                target="_blank"
                aria-label="Go to Linkedin">
                <FaLinkedin className="h-8 w-8 text-emerald-100 hover:text-emerald-400 duration-300" />
              </a>

              <a
                href="https://stackoverflow.com/users/6938969/imran-rafiq-rather"
                target="_blank"
                aria-label="Go to Stackoverflow">
                <FaStackOverflow className="h-8 w-8 text-emerald-100 hover:text-emerald-400  duration-300" />
              </a>
            </div>

            <div>
              <a
                href="https://contentful-cms-react-18.netlify.app/"
                target="_black"
                className="mt-6 text-md text-emerald-300 font-medium capitalize tracking-wide block hover:text-emerald-500 transition-colors duration-300 underline">
                👨🏻‍💻 Personal Frontend Projects
              </a>

              <a
                href={resume}
                target="_black"
                className="text-md pt-1 mt-3 underline font-medium text-emerald-300 block hover:text-emerald-500 transition-colors duration-300">
                📝 My Resume
              </a>
            </div>
          </article>

          {/* Hero Image */}

          <article className="order-1 md:order-2">
            <img
              src={heroImg}
              alt="hero banner"
              className="w-full h-72 sm:h-[500px] object-contain object-center block mt-10 sm:mt-0 [clip-path:polygon(10%_10%,90%_0%,100%_40%,85%_90%,50%_100%,15%_85%,0%_50%,5%_20%)] shadow-lg"
            />
          </article>
        </div>
      </div>
    </section>
  )
}

export default Hero
