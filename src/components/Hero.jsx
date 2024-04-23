import { useState } from "react";
import heroImg from "../assets/hero-4.svg";
import { FaGithubSquare, FaLinkedin, FaStackOverflow } from "react-icons/fa";

function Hero() {
  return (
    <div className="bg-emerald-100 pb-24 md:py-24 font-dosis">
      <div className="align-element grid md:grid-cols-2 items-center gap-8">
        <article className="order-2 md:order-1">
          <h1 className="text-5xl sm:text-7xl font-bold tracking-wider">
            I&apos;m <span className="text-emerald-800">Imran</span>
          </h1>

          <p className="mt-4 text-3xl text-slate-700 capitalize tracking-wide">
            Front-End Developer
          </p>

          <p className="mt-2 text-lg capitalize tracking-wide text-slate-700">
            {/* turning ideas into interactive reality */}
            transforming ideas into Front-end Solutions
          </p>

          <div className="flex mt-4 gap-x-4">
            <a
              href="https://github.com/emmeiwhite"
              target="_blank"
            >
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>

            <a
              href="https://www.linkedin.com/in/imran-rafiq-rather/"
              target="_blank"
            >
              <FaLinkedin className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>

            <a
              href="https://stackoverflow.com/users/6938969/imran-rafiq-rather"
              target="_blank"
            >
              <FaStackOverflow className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>
        </article>

        {/* Hero Image */}

        <article className="order-1 md:order-2">
          <img
            src={heroImg}
            alt="hero banner"
            className="h-80 lg:h-96"
          />
        </article>
      </div>
    </div>
  );
}

export default Hero;
