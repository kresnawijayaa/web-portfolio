import kresnaImage from "../assets/profile-pict-github.png";
import React from "react";
import Typewriter from "typewriter-effect";
import "../AnimatedElement.css";
import { Link } from "react-router-dom";
import { FiExternalLink } from "react-icons/fi";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
  const scrollToTop = () => {
    window.scrollTo(0, 0); // Scrolls the page to the top
  };

  return (
    <div
      className="h-[calc(100vh-100px)]" // Ganti 200px dengan total tinggi header + footer
      style={{
        background:
          "linear-gradient(0deg, rgba(1,126,255,1) 0%, rgba(0,100,210,1) 100%)", // #017EFF (0) - #0064d2 (100)
      }}
    >
      <section className="flex items-center justify-center text-center py-12 sm:py-20">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-40">
          <div className="items-center my-auto">
            <div className="flex flex-col sm:flex-row gap-12">
              <div className="text-center">
                <img
                  alt="Kresna Wijaya's profile picture"
                  src={kresnaImage || "fallback-image-url.jpg"}
                  className="mx-auto w-[240px] h-[240px] sm:w-[280px] sm:h-[280px] object-cover rounded-full transition duration-300 transform hover:scale-105 hover:-rotate-12 shadow-lg"
                />
              </div>
              <div className="my-auto mx-4 sm:mx-0">
                <h1 className="text-center sm:text-left text-4xl sm:text-6xl font-bold text-white text-left mb-2 sm:mb-4 transition duration-300 transform hover:scale-105">
                  Hi, peeps! 👋
                </h1>
                <h1 className="text-center sm:text-left text-4xl sm:text-6xl font-bold text-white text-left mb-4 sm:mb-6 transition duration-300 transform hover:scale-105">
                  I'm Kresna Wijaya
                </h1>
                <div className="text-center sm:text-left text-lg sm:text-2xl text-white text-left transition duration-300 transform hover:scale-105">
                  <Typewriter
                    options={{
                      strings: [
                        "Full Stack Developer (JavaScript & C#)",
                        "Front End Developer (React.js, Vue.js)",
                        "Back End Developer (Node.js, ASP.NET, .NET Core)",
                        "Mobile Developer (React Native)",
                        "Database Management (PostgreSQL, Oracle)",
                        "UI/UX Enthusiast with a Creative Edge",
                        "1 Year Experience at Indomaret Group",
                      ],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </div>
              </div>
            </div>

            <div className="sif-b">
              <div className="sm:mt-20 mt-12 sm:px-4 sm:py-8 px-2 py-4 border border-2 sm:rounded-full rounded-3xl transition duration-300 transform hover:scale-105">
                <p className="text-white sm:text-lg text-sm flex-1 sm:mx-16 mt-2 transition duration-300 transform hover:scale-105">
                  🚀 Code explorer with an artistic flair 🎨 | Ex-designer
                  turned passionate coder 💻 | Cat lover 🐱 | Currently addicted
                  to running 🏃‍♂️
                </p>

                <div className="sm:mt-8 mt-6 flex gap-6 sm:gap-8 justify-center">
                  <a
                    href="https://drive.google.com/file/d/1-dlmyPXQpQt5Kk7qQUQOd69hbGrV6x-_/view?usp=sharing"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-white sm:text-lg text-sm my-auto transition duration-300 transform hover:scale-110 hover:border-b border-white flex items-center gap-1"
                  >
                    <button>Dive into my CV</button>
                    <FiExternalLink size={14} />
                  </a>
                  <p className="my-auto text-white sm:text-xl text-md transition duration-300 transform hover:scale-125">
                    or
                  </p>
                  <Link
                    to="/about"
                    onClick={scrollToTop}
                    className="font-bold text-white sm:text-lg text-sm my-auto transition duration-300 transform hover:scale-110 hover:border-b border-white flex items-center gap-1"
                  >
                    <button>View about me</button>
                    <AiOutlineArrowRight size={14} />
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
