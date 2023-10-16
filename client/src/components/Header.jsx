import React from "react";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="bg-neutral-900" style={{ backgroundColor: "#0064d2" }}>
      <div className="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8 justify-between">
        <Link to="/" className="block">
          <p className="text-2xl text-neutral-100 hover:text-neutral-100/75 font-bold">
            K R S N.
          </p>
        </Link>

        <div className="items-center justify-end md:justify-between">
          <nav aria-label="Global">
            <ul className="flex items-center lg:gap-8 gap-4 lg:text-sm text-xs">
              <li>
                <Link
                  to="/"
                  className="text-neutral-100 hover:text-neutral-100/75 font-semibold"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="text-neutral-100 hover:text-neutral-100/75 font-semibold"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/project"
                  className="text-neutral-100 hover:text-neutral-100/75 font-semibold"
                >
                  Projects
                </Link>
              </li>

              <li>
                <Link
                  to="/playground"
                  className="text-neutral-100 hover:text-neutral-100/75 font-semibold"
                >
                  Playground
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
