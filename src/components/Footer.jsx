export default function Footer() {
  return (
    <div
      style={{
        backgroundImage: `
  repeating-linear-gradient(45deg, rgba(255, 0, 100, 0.2) 0, rgba(255, 0, 100, 0.2) 1px, transparent 1px, transparent 20px),
      repeating-linear-gradient(-45deg, rgba(0, 255, 200, 0.15) 0, rgba(0, 255, 200, 0.15) 1px, transparent 1px, transparent 20px)
        `,
        backgroundSize: '40px 40px'
      }}>
      <section className="py-20 ">
        <div className="align-element">
          <div className="flex gap-3 items-center">
            <p className="text-xl font-pacifico">
              Imran <span className="text-emerald-700 font-bold font-mono">FE </span>
            </p>
            <p className="flex gap-3 items-center">
              <span>Copyright &copy; &nbsp;{new Date().getFullYear()}</span>
              <span className="font-lato text-sm"> All Rights Reserved </span>
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
