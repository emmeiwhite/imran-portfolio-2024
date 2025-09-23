import { links } from '../data'

function Navbar() {
  return (
    <nav
      className=""
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage: `
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     `,
        backgroundSize: '10px 10px',
        imageRendering: 'pixelated'
      }}>
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-2xl font-pacifico">
          <span className="text-emerald-200">Imran</span>
          <span className="text-emerald-600 font-bold font-mono">FE</span>
        </h2>

        <div className="flex gap-x-3 mt-5 sm:mt-0 self-end">
          {links.map(link => {
            const { id, href, text } = link
            return (
              <a
                href={href}
                key={id}
                className="capitalize text-sm sm:text-base tracking-wide text-emerald-200 hover:text-emerald-400 hover:underline transition-colors duration-300"
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
