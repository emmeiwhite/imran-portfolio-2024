import { nanoid } from 'nanoid'
import { FaHtml5, FaJs, FaReact } from 'react-icons/fa'
import velocityKashmir from './assets/velocity-kashmir.png'
import constructAfrica from './assets/construct-africa.png'
import able from './assets/able.png'
import axelerant from './assets/axelerant.png'
import giveIndia from './assets/give-india.png'
import photon from './assets/photon.png'
import experis from './assets/experis-it.png'

export const links = [
  { id: nanoid(), href: '#home', text: 'home' },
  { id: nanoid(), href: '#about', text: 'about' },
  { id: nanoid(), href: '#skills', text: 'skills' },
  { id: nanoid(), href: '#projects', text: 'projects' },
  { id: nanoid(), href: '#contact', text: 'contact' }
]

export const skills = [
  {
    id: nanoid(),
    title: 'HTML5 & CSS3',
    icon: <FaHtml5 className="h-16 w-16 text-emerald-500" />,
    skillsInfo: [
      'HTML5 and CSS3',
      'Accessible Development | a11y',
      'Responsive Mobile First Web Development',
      'Tailwind CSS',
      'SCSS',
      'CSS3 Animations'
    ]
  },
  {
    id: nanoid(),
    title: 'JavaScript',
    icon: <FaJs className="h-16 w-16 text-emerald-500" />,
    skillsInfo: [
      'Modern JavaScript (ES6+)',
      'TypeScript',
      'Axios',
      'Functional Programming',
      'Zod',
      'Git/Github'
    ]
  },
  {
    id: nanoid(),
    title: 'ReactJS',
    icon: <FaReact className="h-16 w-16 text-emerald-500" />,
    skillsInfo: [
      'ReactJS-18+',
      'Redux Toolkit',
      'React Query',
      'React-Router 6.4+',
      'NextJS-15',
      'React Testing Library | Jest/Vitest',
      'NodeJS, Express',
      'MongoDB, Mongoose, Postman Client | UpSkilling'
    ]
  }
]

export const projects = [
  {
    id: nanoid(),
    img: velocityKashmir,
    url: 'https://velocitykashmir.com/',
    url2: 'https://velocitykashmir.com/',
    github: 'https://github.com/emmeiwhite/velocity-kashmir',
    role: 'Senior Software Engineer',
    title: 'Velocity Kashmir Tour & Travels  (04-2024 to Present)',
    text: 'Led the complete frontend development of Velocity Kashmir Tour & Travels website. Collaborated closely with a junior developer to deliver a seamless user experience.'
  },
  {
    id: nanoid(),
    img: constructAfrica,
    url: 'https://constructafrica.com/',
    url2: 'https://projects.constructafrica.com/',
    url3: 'https://mstechlabs.com/',
    github: 'https://github.com/emmeiwhite',
    role: 'Senior Frontend Developer | Drupal ',
    title: 'MsTechLabs  (07-2023 to 03-2024)',
    text: 'Led front-end development for the Construct Africa project, overseeing responsive layouts, Drupal theming, and intricate JS logic. Additionally, contributed to the Project Pipeline utilizing SCSS for enhanced styling'
  },
  {
    id: nanoid(),
    img: able,
    url: 'https://www.able.do/',
    url2: 'https://www.keus.in/',
    github: 'https://github.com/emmeiwhite',
    role: 'Senior Frontend Developer',
    title: 'Able.do (08-2022 to 07-2023)',
    text: 'Skillfully crafted the Able website, utilizing Svelte, Tailwind, and JavaScript animations to enhance user experience. Additionally, contributed expertise to the Keus website, implementing GSAP and JavaScript for captivating interactions.'
  },
  {
    id: nanoid(),
    img: axelerant,
    url: 'https://www.axelerant.com/',
    url2: 'https://uel.ac.uk/',
    url3: 'https://www.ohchr.org/en/ohchr_homepage',
    url4: 'https://franklin-madison.com/',
    github: 'https://github.com/emmeiwhite',
    role: 'Frontend Developer II | Drupal ',
    title: 'Axelerant  (02-2021 to 08-2022)',
    text: 'Front-end development for the Franklin Madison project at Axelerant, also contributing as a Drupal Themer for University of East London, OHCHR, and Axelerant projects, integrating interactive JavaScript elements.'
  },
  {
    id: nanoid(),
    img: giveIndia,
    url: 'https://www.giveindia.org/',
    url2: 'https://give.do/',
    github: 'https://github.com/emmeiwhite',
    role: 'Frontend Developer I',
    title: 'GiveIndia (02-2019 to 02-2020)',
    text: "Optimized GiveIndia's online platform with ReactJS, Redux, and NextJS, enriching user experiences. Led feature development to ensure scalability and performance."
  },
  {
    id: nanoid(),
    img: photon,
    url: 'https://www.photon.com/',
    url2: 'https://www.photon.com/',
    github: 'https://github.com/emmeiwhite',
    role: 'Software Engineer',
    title: 'Photon (08-2018 to 02-2019)',
    text: 'Engaged in collaborative efforts for the Photon website project, drawing upon ReactJS expertise cultivated and polished during comprehensive training sessions.'
  },

  {
    id: nanoid(),
    img: experis,
    url: 'https://www.experis.com/en',
    url2: 'https://www.telecompetitor.com',
    url3: 'https://www.ibm.com/in-en',
    github: 'https://github.com/emmeiwhite',
    role: 'Software Associate',
    title: 'IBM India [via Experis IT] (2017)',
    text: 'Employed at IBM India Bangalore, I contributed to a US-based project for Boost Mobile, now Telecompetitor (https://www.telecompetitor.com/), specializing in HTML, CSS, JavaScript, and JQuery'
  }
]
