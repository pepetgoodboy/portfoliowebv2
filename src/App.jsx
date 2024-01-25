/* eslint-disable no-unused-vars */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Portofolio from "./pages/Portofolio";
import About from "./pages/About";
import NotFound from "./pages/NotFound";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { useState } from "react";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portofolio" element={<Portofolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

function Layout() {
  const menu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Portfolio", link: "/portofolio" },
    { id: 4, name: "Contact", link: "/contact" },
  ];

  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="w-full fixed top-0 left-0 bg-[#FFFFF0] bg-opacity-70 border-slate-200 shadow-sm backdrop-blur-sm">
        <div className="md:flex items-center justify-between bg-[#FFFFF0] py-2 md:px-10 px-7">
          <div className="font-barlow uppercase font-semibold text-2xl md:text-xl lg:text-3xl cursor-pointer flex items-center text-primary">
            <span className="text-secondary">iqbal</span>mudzaki;
          </div>
          <div
            onClick={() => setOpen(!open)}
            className="text-3xl text-primary absolute flex items-center right-8 top-2 cursor-pointer md:hidden"
          >
            <ion-icon name={open ? "close" : "menu"}></ion-icon>
          </div>
          <ul
            className={`md:flex md:items-center font-barlow font-medium md:pb-0 pb-12 absolute md:static bg-[#FFFFF0] md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-7 lg:mr-12 transition-all duration-500 ease-in ${
              open
                ? "top-10 h-screen opacity-100"
                : "top-[-490px] md:opacity-100 opacity-0"
            }`}
          >
            {menu.map((menus) => (
              <li
                onClick={() => setOpen(false)}
                key={menus.id}
                className="md:ml-5 lg:ml-8 text-xl md:text-[0.95rem] lg:text-xl md:my-0 my-7"
              >
                <Link
                  to={menus.link}
                  className="text-secondary hover:text-primary duration-500"
                >
                  {menus.name}
                </Link>
              </li>
            ))}
          </ul>
          <div
            onClick={() => setOpen(false)}
            className={`md:gap-3 lg:gap-5 md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#FFFFF0] text-3xl md:text-2xl lg:text-3xl text-primary1  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
              open
                ? "top-[550px] h-screen opacity-100"
                : "top-[-490px] md:opacity-100 opacity-0"
            }`}
          >
            <a
              href="https://github.com/pepetgoodboy"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className="hover:text-primary "
              />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-iqbal-mudzaki-84a02824a/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faLinkedin}
                className="hover:text-primary ml-4 md:ml-0"
              />
            </a>
            <a
              href="https://www.instagram.com/iqbalmudzakii_/"
              rel="noreferrer"
              target="_blank"
            >
              <FontAwesomeIcon
                icon={faInstagram}
                className="hover:text-primary ml-4 md:ml-0"
              />
            </a>
          </div>
          <div className="text-secondary font-montserrat hover:text-primary cursor-pointer text-[8px] absolute mt-[570px] md:mt-[1180px]">
            <p>Iqbal Mudzaki ©2023</p>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
}

export default App;
