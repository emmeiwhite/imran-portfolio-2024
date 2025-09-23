import { links } from '../data'

function Navbar() {
  return (
    <nav
      className=""
      style={{
        backgroundImage: `
        repeating-linear-gradient(30deg, 
          rgba(255, 100, 0, 0.1) 0, 
          rgba(255, 100, 0, 0.1) 1px, 
          transparent 1px, 
          transparent 10px,
          rgba(255, 100, 0, 0.15) 11px, 
          rgba(255, 100, 0, 0.15) 12px, 
          transparent 12px, 
          transparent 40px
        )
      `
      }}>
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-2xl font-pacifico">
          Imran<span className="text-emerald-800 font-bold font-mono">FE</span>
        </h2>

        <div className="flex gap-x-3 mt-5 sm:mt-0 self-end">
          {links.map(link => {
            const { id, href, text } = link
            return (
              <a
                href={href}
                key={id}
                className="capitalize text-sm sm:text-lg tracking-wide text-gray-600 hover:text-gray-800 hover:underline duration-300"
                target={text.toLowerCase() === 'my resume' && '_blank'}>
                {text}
              </a>
            )
          })}
        </div>
      </div>
    </nav>
  )
}

export default Navbar
