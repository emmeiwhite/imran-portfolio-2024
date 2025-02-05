import resume from '../assets/Imran_Resume.pdf'

import heroImg from '../assets/immi-sketch-1.jpeg'
// import heroImg from '../assets/call-back-hell.jpeg'
import { FaGithubSquare, FaLinkedin, FaStackOverflow } from 'react-icons/fa'

function Hero() {
  return (
    <div className="bg-emerald-100 pb-24 md:py-24 font-dosis">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article className="order-2 md:order-1">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-wider">
            I&apos;m <span className="text-emerald-800">Imran</span>
          </h1>

          <p className="mt-4 text-3xl text-slate-900 capitalize tracking-wide">
            JavaScript Programmer & ReactJS Developer
          </p>

          <p className="mt-2 text-lg capitalize tracking-wide text-slate-800">
            turning ideas into web solutions
            {/* transforming ideas into Front-end Solutions */}
          </p>

          <div className="flex mt-4 gap-x-4">
            <a
              href="https://github.com/emmeiwhite"
              target="_blank">
              <FaGithubSquare className="h-8 w-8 text-emerald-900 hover:text-black duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/imran-rafiq-rather/"
              target="_blank">
              <FaLinkedin className="h-8 w-8 text-emerald-900 hover:text-black duration-300" />
            </a>

            <a
              href="https://stackoverflow.com/users/6938969/imran-rafiq-rather"
              target="_blank">
              <FaStackOverflow className="h-8 w-8 text-emerald-900 hover:text-black duration-300" />
            </a>
          </div>

          <div>
            <a
              href="https://contentful-cms-react-18.netlify.app/"
              target="_black"
              className="mt-6 text-xl text-emerald-700 font-medium capitalize tracking-wide block hover:text-emerald-900 underline">
              👨🏻‍💻 Solo Projects: ReactJS & JavaScript 🚀
            </a>

            <a
              href={resume}
              target="_black"
              className="text-xl pt-1 mt-3 underline font-medium text-emerald-700 block hover:text-emerald-900">
              📝 My Resume 🚀
            </a>
          </div>
        </article>

        {/* Hero Image */}

        <article className="order-1 md:order-2">
          <img
            src={heroImg}
            alt="hero banner"
            className="w-full h-[500px] object-contain object-center block mt-10 sm:mt-0 [clip-path:polygon(10%_10%,90%_0%,100%_40%,85%_90%,50%_100%,15%_85%,0%_50%,5%_20%)] shadow-lg"
          />
        </article>
      </div>
    </div>
  )
}

export default Hero
