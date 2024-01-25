/* eslint-disable no-undef */
import { Helmet } from "react-helmet";
import { useEffect } from "react";
import LasleyVPN from "../assets/images/LasleyVPN.png";
import Mimnews from "../assets/images/Mimnews.png";
import PetDownloader from "../assets/images/PetDownloader.png";
import WebPorto from "../assets/images/WebPorto.png";
import Aos from "aos";
import "aos/dist/aos.css";

export default function Portofolio() {
  const data = [
    {
      id: 1,
      name: "Landing Page LasleyVPN",
      img: LasleyVPN,
      description: "LasleyVPN Landing Page created using ReactJS and Tailwind",
    },
    {
      id: 2,
      name: "MimNews",
      img: Mimnews,
      description:
        "Simple Blog Web Project created using only HTML, CSS, and Javascript.",
    },
    {
      id: 3,
      name: "PetDownloader",
      img: PetDownloader,
      description:
        "Youtube Downloader project with various formats created using API.",
    },
    {
      id: 4,
      name: "Portofolio Web",
      img: WebPorto,
      description: "Portfolio Website created using ReactJS and Tailwind.",
    },
  ];

  useEffect(() => {
    Aos.init({
      duration: 1500,
    });
  }, []);
  return (
    <div className="h-auto bg-parallax3 bg-cover bg-center bg-no-repeat bg-gray-700 bg-blend-multiply">
      <Helmet>
        <title>Portofolio - PepetGoodboy</title>
      </Helmet>
      <div className="pt-24 md:pt-28 font-barlow font-bold" data-aos="fade-down">
        <h1 className="text-secondary text-center text-2xl md:text-4xl mb-10">
          Porto<span className="text-primary">folio</span>
        </h1>
      </div>
      <div className="w-3/4 lg:pt-10 m-auto">
        <div className="flex flex-col md:grid md:grid-cols-2 md:gap-14">
          {data.map((datas) => (
            <div key={datas.id} data-aos="zoom-in">
              <div className="flex flex-col items-center">
                <img src={datas.img} className="w-full h-auto rounded-lg" />
              </div>
              <div className="text-secondary">
                <h1 className="font-montserrat text-primary text-sm font-bold md:text-xl lg:text-2xl md:mt-4 mb-2 ml-7">
                  {datas.name}
                </h1>
                <p className="font-barlow text-xs md:text-sm lg:text-xl font-medium mb-6 ml-7">
                  {datas.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
