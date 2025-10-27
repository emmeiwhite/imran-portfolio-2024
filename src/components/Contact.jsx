import contactImranSketch from '../assets/immi-sketch-3.jpeg'
import SectionTitle from './SectionTitle'

import { FaWhatsapp, FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa'

export default function Contact() {
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
      }}>
      <section
        className="py-20 "
        id="contact">
        <div className="align-element grid gap-16 md:grid-cols-2 items-center">
          <img
            src={contactImranSketch}
            alt="connect with me"
            className="w-full h-[320px] sm:h-[350px] object-contain [clip-path:polygon(10%_10%,90%_0%,100%_40%,85%_90%,50%_100%,15%_85%,0%_50%,5%_20%)] shadow-lg"
          />
          <article>
            <SectionTitle text="Get in Touch" />

            <p className="mt-4 ">
              <span className="flex gap-4 items-center">
                <FaMapMarkerAlt className="h-6 w-6 text-emerald-300 hover:text-emerald-500 transition-colors duration-300" />
                <span className="text-emerald-200 bg-emerald-600 px-3 py-1">Bangalore, India</span>
              </span>
            </p>
            <p className="mt-4 ">
              <a
                href="mailto:imranrafiqrather@gmail.com"
                target="_blank"
                className="flex gap-4 items-center">
                <FaEnvelope className="h-6 w-6 text-emerald-300 hover:text-emerald-500 transition-colors duration-300" />
                <span className="text-emerald-200 bg-emerald-600 px-3 py-1">
                  imranrafiqrather@gmail.com
                </span>
              </a>
            </p>

            <p className="mt-4">
              <a
                href="tel:+919538427852"
                target="_blank"
                className="flex gap-4 items-center">
                <FaPhone className="h-6 w-6 text-emerald-300 hover:text-emerald-500 transition-colors duration-300" />
                <span className="text-emerald-200 bg-emerald-600 px-3 py-1">+91 9538427852</span>
              </a>
            </p>
            <p className="mt-4 ">
              <a
                href="https://api.whatsapp.com/send?phone=917006312148"
                target="_blank"
                className="flex gap-4 items-center">
                <FaWhatsapp className="h-6 w-6 text-emerald-300 hover:text-emerald-500 transition-colors duration-300" />
                <span className="text-emerald-200 bg-emerald-600 px-3 py-1">+91 7006312148</span>
              </a>
            </p>
          </article>
        </div>
      </section>
    </div>
  )
}
