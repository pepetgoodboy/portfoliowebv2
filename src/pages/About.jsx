/* eslint-disable react/no-unescaped-entities */
import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Typewriter from "typewriter-effect";
import Aos from "aos";
import "aos/dist/aos.css";

export default function About() {
  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="h-screen bg-parallax bg-cover bg-center bg-no-repeat bg-gray-700 bg-blend-multiply">
      <Helmet>
        <title>About Me - PepetGoodboy</title>
      </Helmet>
      <div className="pt-28 font-barlow" data-aos="fade-down">
        <h1 className="text-secondary font-bold text-center text-3xl md:text-4xl mb-10">
          Know Who <span className="text-primary">I'm</span>
        </h1>
      </div>
      <div className="flex flex-col md:flex-row lg:pt-1">
        <div className="w-full md:w-1/2 md:mt-10 font-montserrat" data-aos="fade-left">
          <p className="text-secondary font-semibold ml-6 lg:ml-16 md:text-xl">
            Hi Everyone, I am{" "}
            <span className="text-primary">Muhammad Iqbal Mudzaki</span> from
            <span className="text-primary"> Bandung, Indonesia.</span> <br />
            <br /> I am studying at Praktisi Polytechnic Businness Digital.
            <br /> I'm currently learning ReactJS, NextJS, NodeJS, PHP and ExpressJS.
          </p>
        </div>
        <div className="w-full md:w-1/2 font-semibold mt-6 md:mt-10 md:text-xl">
          <p className="text-secondary ml-6 font-montserrat" data-aos="fade-right">
            Apart from coding, some other activities <br />
            that I love to do!
          </p>
          <div className="text-secondary md:mt-6 ml-8 font-montserrat" data-aos="fade-right">
            <p>🎮 Playing Games</p>
            <p>🛵 Travelling</p>
            <p>⚽ Playing Football</p>
          </div>
          <div className="md:hidden font-silkscreen">
            <p className="text-white text-center text-xs mt-6">
              <Typewriter
                options={{
                  strings: [
                    "“Change your thoughts and you change your world!”",
                  ],
                  autoStart: true,
                  loop: true,
                  deleteSpeed: 20,
                }}
              />
            </p>
            <p className="text-primary1 text-center font-normal text-xs">
              -PepetGoodboy
            </p>
          </div>
        </div>
      </div>
      <div className="flex-col justify-center md:mt-10 lg:mt-16 hidden md:block font-silkscreen" data-aos="fade-up">
        <p className="text-white text-center text-xs md:text-[16px] lg:text-xl font-semibold">
          <Typewriter
            options={{
              strings: ["“Change your thoughts and you change your world!”"],
              autoStart: true,
              loop: true,
              deleteSpeed: 20,
            }}
          />
        </p>
        <p className="text-primary1 text-center text-xs">-PepetGoodboy</p>
      </div>
    </div>
  );
}
