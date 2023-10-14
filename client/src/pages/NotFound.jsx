import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <div className="flex flex-col h-screen bg-white">
        <img
          src="https://img.freepik.com/premium-photo/magnifier-glass-with-red-triangle-caution-warning-sign-laptop-computer-keyboard-notification-error-maintenance-technology-exclamation-concept_50039-4613.jpg?w=740"
          alt=""
          className="object-cover w-[800px] h-80 mx-auto mt-20"
        />

        <div className="flex items-center justify-center flex-1">
          <div className="max-w-xl px-4 py-8 mx-auto text-center">
            <h1 className="text-2xl font-bold tracking-tight text-neutral-800 sm:text-4xl">
              We can't find that page.
            </h1>

            <p className="mt-4 text-neutral-700">
              Try again, or return home to start from the beginning.
            </p>

            <Link
              to="/"
              className="mt-8 inline-block rounded border border-neutral-800 bg-neutral-800 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-neutral-800 focus:outline-none focus:ring active:text-neutral-700"
            >
              Back to home
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
