/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { Helmet } from "react-helmet";
// eslint-disable-next-line no-unused-vars
import Typewriter from "typewriter-effect";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faJs } from "@fortawesome/free-brands-svg-icons";
import { faReact } from "@fortawesome/free-brands-svg-icons";
import { faNodeJs } from "@fortawesome/free-brands-svg-icons";
import { faPhp } from "@fortawesome/free-brands-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Home() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <>
      <Helmet>
        <title>Home Page - PepetGoodboy</title>
      </Helmet>
      <div className="h-screen bg-parallax2 bg-cover bg-center bg-no-repeat bg-gray-400 bg-blend-multiply">
        <div>
          <div className="flex flex-col md:flex-row pt-28 lg:pt-20">
            <div
              className="w-full pt-24 px-2 md:px-0 h-64 text-center md:w-1/2 md:ml-4 md:pt-20"
              data-aos="fade-down"
            >
              <h1 className="text-xl font-barlow font-bold text-primary md:text-2xl lg:text-3xl">
                Hallo Everyone ✋, I'm{" "}
              </h1>
              <h1 className="text-white font-silkscreen text-2xl md:text-3xl mt-2 lg:mt-4 lg:text-4xl">
                <Typewriter
                  options={{
                    strings: ["Muhammad Iqbal Mudzaki", "Pepet Goodboy"],
                    autoStart: true,
                    loop: true,
                    deleteSpeed: 50,
                  }}
                />
              </h1>
              <h2 className="font-bold font-barlow text-secondary md:ml-5 text-lg mb-3 md:text-xl lg:text-2xl">
                Student & <span className="text-white">Web Developer</span>
              </h2>
              <p className="font-bold font-montserrat text-sm lg:text-xl text-secondary mb-8 lg:mt-8 leading-relaxed">
                Just learn first and be{" "}
                <span className="text-white font-bold">good</span> at it later.
              </p>
              <div>
                <FontAwesomeIcon
                  icon={faJs}
                  className="text-primary1 hover:text-primary w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10" 
                />
                <FontAwesomeIcon
                  icon={faReact}
                  className="text-primary1 hover:text-primary ml-2 md:ml-3 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
                <FontAwesomeIcon
                  icon={faNodeJs}
                  className="text-primary1 hover:text-primary ml-2 md:ml-3 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
                <FontAwesomeIcon
                  icon={faPhp}
                  className="text-primary1 hover:text-primary ml-2 md:ml-3 w-7 h-7 md:w-8 md:h-8 lg:w-10 lg:h-10"
                />
              </div>
              <div className="lg:mt-10 mt-5 font-montserrat">
                <a
                  href="https://www.instagram.com/iqbalmudzakii_/"
                  rel="noreferrer"
                  target="_blank"
                  className="text-xs lg:text-xl font-semibold text-white bg-primary py-3 px-8 rounded-full hover:bg-primary1 hover:opacity-80 transition duration-300 ease-in-out"
                >
                  Get in Touch
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
