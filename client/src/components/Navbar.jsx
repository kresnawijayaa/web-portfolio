import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <header className="bg-white">
        <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
          <a
            className="block text-neutral-800 hover:text-neutral-700 flex flex-1"
            href="/"
          >
            <p className="text-2xl font-bold">K R S N .</p>
          </a>

          <div className="items-center justify-end md:justify-between">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a
                    className="text-neutral-700 transition hover:text-neutral-700/75"
                    href="/"
                  >
                    Home
                  </a>
                </li>

                <li>
                  <a
                    className="text-neutral-700 transition hover:text-neutral-700/75"
                    href="/about"
                  >
                    About
                  </a>
                </li>

                <li>
                  <a
                    className="text-neutral-700 transition hover:text-neutral-700/75"
                    href="/project"
                  >
                    Projects
                  </a>
                </li>

                <li>
                  <a
                    className="text-neutral-700 transition hover:text-neutral-700/75"
                    href="/"
                  >
                    Contacts
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <hr />
    </>
  );
}
