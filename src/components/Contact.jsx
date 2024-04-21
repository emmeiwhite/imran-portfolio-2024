import contactSVG from "../assets/contact.svg";
import SectionTitle from "./SectionTitle";

export default function Contact() {
  return (
    <section
      className="bg-white py-20 "
      id="about"
    >
      <div className="align-element grid gap-16 md:grid-cols-2 items-center">
        <img
          src={contactSVG}
          alt="connect with me"
          className="w-full h-64 order-1 md:order-2"
        />
        <article className="order-2 md:order-1">
          <SectionTitle text="Get in Touch" />

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
