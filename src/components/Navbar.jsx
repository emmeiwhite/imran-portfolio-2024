import { links } from "../data";

function Navbar() {
  return (
    <nav className="bg-emerald-100">
      <div className="align-element py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <h2 className="text-2xl font-pacifico">
          Imran<span className="text-emerald-700 font-bold">FE</span>
        </h2>

        <div className="flex gap-x-3 mt-5 sm:mt-0 self-end">
          {links.map((link) => {
            const { id, href, text } = link;
            return (
              <a
                href={href}
                key={id}
                className="capitalize sm:text-lg tracking-wide hover:text-emerald-600 duration-300"
                target={text.toLowerCase() === "my resume" && "_blank"}
              >
                {text}
              </a>
            );
          })}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
