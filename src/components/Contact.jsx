import contactSVG from '../assets/proj-9.svg'
import SectionTitle from './SectionTitle'

import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export default function Contact() {
  return (
    <section
      className="bg-white py-20 "
      id="contact"
    >
      <div className="align-element grid gap-16 md:grid-cols-2 items-center">
        <img
          src={contactSVG}
          alt="connect with me"
          className="w-full h-64 "
        />
        <article>
          <SectionTitle text="Get in Touch" />

          <p className="mt-4 text-slate-600">
            <span className="flex gap-4 items-center">
              <FaMapMarkerAlt className="h-6 w-6 text-emerald-600 hover:text-black duration-300" />
              <span>Address: Srinagar J&K, India</span>
            </span>
          </p>
          <p className="mt-4 text-slate-600">
            <a
              href="mailto:ratherimran99@gmail.com"
              target="_blank"
              className="flex gap-4 items-center"
            >
              <FaEnvelope className="h-6 w-6 text-emerald-600 hover:text-black duration-300" />
              <span>Email: ratherimran99@gmail.com</span>
            </a>
          </p>

          <p className="mt-4 text-slate-600">
            <a
              href="tel:+919538427852"
              target="_blank"
              className="flex gap-4 items-center"
            >
              <FaPhone className="h-6 w-6 text-emerald-600 hover:text-black duration-300" />
              <span>Phone: +91 9538427852</span>
            </a>
          </p>
          <p className="mt-4 text-slate-600">
            <a
              href="https://api.whatsapp.com/send?phone=917006312148"
              target="_blank"
              className="flex gap-4 items-center"
            >
              <FaWhatsapp className="h-6 w-6 text-emerald-600 hover:text-black duration-300" />
              <span>WhatsApp:+91 7006312148</span>
            </a>
          </p>
        </article>
      </div>
    </section>
  )
}
