import kresnaImage from "../assets/profile-pict-github.png";
import React from "react";
import Typewriter from "typewriter-effect";
import "../AnimatedElement.css";
import { Link } from "react-router-dom";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scrolls the page to the top
  };

  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(0deg, rgba(1,126,255,1) 0%, rgba(0,100,210,1) 100%)", // #017EFF (0) - #0064d2 (100)
      }}
    >
      <section className="flex items-center justify-center text-center py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-40">
          <div className="items-center my-auto">
            <div className="flex gap-12">
              <div className="text-center">
                <div className="sif-l">
                  <img
                    alt="Party"
                    src={kresnaImage}
                    className="mx-auto my-auto h-[280px] object-cover rounded-full transition duration-300 transform hover:scale-105 hover:-rotate-12 shadow transition hover:shadow-lg"
                  />
                </div>
              </div>
              <div className="my-auto">
                <div className="sif-r">
                  <h1 className="text-6xl font-bold text-white my-auto text-left mb-4 transition duration-300 transform hover:scale-105">
                    Hi, peeps! 👋
                  </h1>
                  <h1 className="text-6xl font-bold text-white my-auto text-left mb-6 transition duration-300 transform hover:scale-105">
                    I'm Kresna Wijaya
                  </h1>
                  <div className="text-2xl font-medium text-white text-left transition duration-300 transform hover:scale-105">
                    <Typewriter
                      options={{
                        strings: [
                          "Full Stack Developer (JavaScript)",
                          "Front End Developer (React.js, Vue.js)",
                          "Back End Developer (Node.js)",
                          "Mobile Developer (React Native)",
                          "UI/UX and Graphic Designer Enthusiast",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="sif-b">
              <div className="mt-12 px-4 py-8 mt-20 border border-2 rounded-full transition duration-300 transform hover:scale-105">
                <p className="text-white text-lg flex-1 mx-16 mt-2 transition duration-300 transform hover:scale-105">
                  🚀 Code explorer with an artistic touch 🎨 | Ex-designer
                  turned coding enthusiast 💻 | Cat and dog lover 🐱🐶, aspiring
                  to adopt a panther 🐆 | Novice Mobile Legends gamer 🎮
                </p>

                <div className="flex gap-8 justify-center mt-10 mb-2">
                  <a
                    href="https://drive.google.com/file/d/1-dlmyPXQpQt5Kk7qQUQOd69hbGrV6x-_/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-lg my-auto transition duration-300 transform hover:scale-110 hover:border-b border-white"
                  >
                    <button>Dive into my CV ↗</button>
                  </a>
                  <p className="my-auto text-white text-xl transition duration-300 transform hover:scale-125">
                    or
                  </p>
                  <Link
                    to="/about"
                    onClick={scrollToTop}
                    className="text-white text-lg my-auto transition duration-300 transform hover:scale-110 hover:border-b border-white"
                  >
                    <button>View about me ↗</button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
