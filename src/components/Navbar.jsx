import { links } from "../data";

function Navbar() {
  return (
    <nav className="bg-emerald-100">
      <div className="mx-auto max-w-7xl px-8 py-4 flex flex-col sm:flex-row sm:gap-x-16 sm:items-center sm:py-8">
        <span>Imran Logo</span>
        <p>Links Goes here!</p>
      </div>
    </nav>
  );
}

export default Navbar;
