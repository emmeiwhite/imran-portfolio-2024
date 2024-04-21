import aboutSvg from "../assets/about-2.svg";
import SectionTitle from "./SectionTitle";

export default function About() {
  return (
    <section
      className="bg-white py-20 "
      id="about"
    >
      <div className="align-element grid gap-16 md:grid-cols-2 items-center">
        <img
          src={aboutSvg}
          alt="about Imran - a FE Engineer"
          className="w-full h-64"
        />
        <article>
          <SectionTitle text="My Story" />

          <p className="mt-4 text-slate-500">
            An adept Front End Web Developer with over 6 years of experience,
            specializing in ReactJS and JavaScript programming. Dedicated to
            creating dynamic user interfaces through innovative JavaScript and
            CSS3 techniques.
          </p>
          <p className="mt-4 text-slate-500">
            Eager to leverage skills and experience in a collaborative team
            environment. Open to exciting full-time opportunities
          </p>
        </article>
      </div>
    </section>
  );
}
