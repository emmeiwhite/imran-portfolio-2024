export default function Footer() {
  return (
    <section className="py-20 bg-gradient-to-tr  from-emerald-50  to-emerald-100">
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
  )
}
