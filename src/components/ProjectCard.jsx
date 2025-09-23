import { FaGithubSquare } from 'react-icons/fa'
import { TbWorldWww } from 'react-icons/tb'

export default function ProjectCard({ img, url, github, title, text, url2, url3, url4, role }) {
  return (
    <article className="bg-white rounded-lg shadow-lg hover:shadow-xl">
      <a
        href={url}
        target="_blank"
        className="block">
        <img
          src={img}
          alt={title}
          className="w-full object-cover object-top rounded-t-lg h-[240px]"
        />

        <div className="p-4">
          <div className="py-3 border-b border-emerald-400">
            <h2 className="text-base tracking-wide font-bold text-emerald-800">{title}</h2>
            <h3 className="text-sm tracking-wide font-semibold mt-1 text-emerald-700">{role}</h3>
          </div>

          <p className="mt-2 text-slate-700 leading-loose font-inter text-sm">{text}</p>

          <div className="flex gap-4 mt-4 bg-emerald-50 p-3">
            {url2 && (
              <a
                href={url2}
                target="_blank"
                title={url2}>
                <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
              </a>
            )}

            {url3 && (
              <a
                href={url3}
                target="_blank"
                title={url3}>
                <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
              </a>
            )}

            {url4 && (
              <a
                href={url4}
                target="_blank"
                title={url4}>
                <TbWorldWww className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
              </a>
            )}

            <a
              href={github}
              target="_blank"
              title={github}>
              <FaGithubSquare className="h-8 w-8 text-slate-500 hover:text-black duration-300" />
            </a>
          </div>

          {/* <div className="grid gap-4 ">
            <a
              href={url}
              target="_blank"
              className="font-inter text-sm"
            >
              {url}
            </a>

            {url2 && (
              <a
                href={url2}
                target="_blank"
                className="font-inter text-sm"
              >
                {url2}
              </a>
            )}
          </div> */}
        </div>
      </a>
    </article>
  )
}

//   {
//     id: nanoid(),
//     img: "https://images.pexels.com/photos/326503/pexels-photo-326503.jpeg?auto=compress&cs=tinysrgb&w=800",
//     url: "https://react-projects.netlify.app/",
//     github: "https://github.com/john-smilga",
//     title: "first project",
//     text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores aperiam porro impedit tenetur quo hic omnis doloribus dolores enim deleniti.",
//   },

// grid grid-cols-[180px_minmax(200px,_1fr)
