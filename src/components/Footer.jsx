export default function Footer() {
  return (
    <section className="py-20 bg-emerald-100">
      <div className="align-element">
        <p>
          Imran
          <span className="text-emerald-700 font-bold ">FE </span> &nbsp; &copy;
          Copyright &nbsp;
          {new Date().getFullYear()}
        </p>
      </div>
    </section>
  );
}
