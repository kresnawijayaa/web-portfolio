import React from "react";
import { Disclosure } from "@headlessui/react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Header() {
  const location = useLocation();
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/project" },
    { name: "Playground", href: "/playground" },
  ];

  const isActive = (href) => location.pathname === href;

  return (
    <Disclosure as="nav" className="bg-neutral-900" style={{ backgroundColor: "#0064d2" }}>
      {({ open }) => (
        <>
          <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
              <Link to="/" className="text-2xl text-neutral-100 font-bold hover:text-neutral-100/75">
                K R S N.
              </Link>
              <div className="flex items-center md:hidden">
                <Disclosure.Button className="text-neutral-100 inline-flex items-center justify-center p-2">
                  {open ? <AiOutlineClose size={24} /> : <AiOutlineMenu size={24} />}
                </Disclosure.Button>
              </div>
              <div className="hidden md:flex items-center space-x-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={`text-neutral-100 font-semibold ${
                      isActive(item.href) ? "border-b-2 border-white" : "hover:text-neutral-100/75"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Mobile Menu with smooth transition */}
          <Disclosure.Panel className={`sm:hidden ${open ? 'transition-all ease-in-out duration-300 transform translate-x-0' : 'transition-all ease-in-out duration-300 transform -translate-x-full'}`}>
            <div className="space-y-1 px-2 pb-3 pt-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`block rounded-md px-3 py-2 text-base font-medium ${
                    isActive(item.href)
                      ? "bg-white text-blue-600"
                      : "text-white hover:bg-white hover:text-blue-600"
                  }`}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
