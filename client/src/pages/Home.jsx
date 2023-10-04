import { Link } from "react-router-dom";
import kresnaImage from "../assets/Kresna_Wijaya.jpeg";

export default function Home() {
  return (
    <>
      <section className="bg-white">
        <div className="mx-auto max-w-screen-xl px-4 py-12 lg:flex lg:h-screen/0.9 lg:items-center">
          <div className="mx-auto max-w-2xl text-center">
            <img
              src={kresnaImage}
              alt="KresnaImage"
              className="w-[200px] h-[200px] object-cover mx-auto rounded-full drop-shadow"
            />
            <h1 className="mt-6 text-3xl font-bold sm:text-5xl text-neutral-800">
              Hi, peeps!
            </h1>
            <p className="mt-6 sm:text-lg/relaxed text-neutral-700">
              I am <span className="font-bold">Kresna Wijaya</span>, a Full
              Stack Developer (JavaScript), a Computer Science graduate, a
              Hacktiv8 Indonesia Bootcamp graduate, with diverse experience in
              Graphic/UI-UX Design.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
