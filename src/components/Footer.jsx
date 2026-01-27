import Logo from './Logo'

export default function Footer() {
  return (
    <div
      style={{
        backgroundColor: '#0a0a0a',
        backgroundImage: `
       radial-gradient(circle at 25% 25%, #222222 0.5px, transparent 1px),
       radial-gradient(circle at 75% 75%, #111111 0.5px, transparent 1px)
     `,
        backgroundSize: '10px 10px',
        imageRendering: 'pixelated'
      }}>
      <section className="py-20 ">
        <div className="align-element">
          <div className="flex gap-3 items-center justify-between flex-wrap">
            <Logo />
            <p className="flex gap-3 items-center text-emerald-200 text-sm">
              <span>Copyright &copy; &nbsp;{new Date().getFullYear()}</span>
              <span className="font-lato ">All Rights Reserved </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
