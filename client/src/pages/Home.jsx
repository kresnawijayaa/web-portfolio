import kresnaImage from "../assets/profile-pict-github.png";
import React from "react";
import Typewriter from "typewriter-effect";
import "../AnimatedElement.css";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "linear-gradient(0deg, rgba(9,101,192,1) 0%, rgba(58,59,146,1) 100%)",
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
                    className="mx-auto my-auto h-[280px] object-cover rounded-full transition duration-300 transform hover:scale-105 hover:-rotate-12"
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
              <div className="mt-12 px-4 py-8 mt-20 border border-1 rounded-full transition duration-300 transform hover:scale-105">
                <p className="text-white text-md flex-1 mx-20 mt-2 transition duration-300 transform hover:scale-105">
                  🚀 Code explorer with an artistic touch 🎨 | Ex-designer
                  turned coding enthusiast 💻 | Cat and dog lover 🐱🐶, aspiring
                  to adopt a panther 🐆 | Novice Mobile Legends gamer 🎮
                </p>

                <a
                  className="mt-6 inline-block bg-white hover:bg-neutral-200 text-[#0965c0] font-semibold text-md py-2 px-8 rounded-full transition duration-300 transform hover:scale-105"
                  href="https://drive.google.com/file/d/1-dlmyPXQpQt5Kk7qQUQOd69hbGrV6x-_/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Dive into my CV
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
