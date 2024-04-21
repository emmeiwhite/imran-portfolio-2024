export default function Footer() {
  return (
    <section className="py-20 align-element">
      <p>
        Imran<span className="text-emerald-700 font-bold">FE </span> &nbsp;
        &copy; Copyright &nbsp;
        {new Date().getFullYear()}
      </p>
    </section>
  );
}
