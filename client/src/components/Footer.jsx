export default function Footer() {
  const scrollToTop = () => {
    const navbarElement = document.getElementById("Navbar");
    if (navbarElement) {
      navbarElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <hr />
      <footer className="bg-white">
        <div className="relative mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 lg:pt-24">
          <div className="absolute end-4 top-4 sm:end-6 sm:top-6 lg:end-8 lg:top-8">
            <a
              className="inline-block rounded-full bg-neutral-800 p-2 text-white shadow transition hover:bg-neutral-700 sm:p-3 lg:p-4"
              href="#"
              onClick={scrollToTop}
            >
              <span className="sr-only">Back to top</span>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>

          <div className="lg:flex lg:items-end lg:justify-between">
            <div>
              <a
                className="block text-neutral-800 hover:text-neutral-700"
                href="/"
              >
                <p className="text-2xl font-bold">K R S N .</p>
              </a>

              <p className="mx-auto mt-6 max-w-xl text-center leading-relaxed text-neutral-700 lg:text-left">
                This portfolio provides a brief overview of my professional
                journey, highlighting key skills and experiences, but it doesn't
                fully encapsulate who I am. If you'd like to get to know me
                better, please don't hesitate to reach out!
              </p>
            </div>

            <p className="mt-12 text-center text-sm text-neutral-700 lg:text-right">
              Created by <span className="font-bold">Kresna Wijaya</span>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
