import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FaHouse, FaBook, FaDiagramProject, FaCode, FaTelegram, FaInstagram, FaYoutube, FaLinkedinIn, FaGithub } from "react-icons/fa6";

const malumot = [
  { id: 1, text: "Bosh sahifa", logo: <FaHouse />, href: "/" },
  { id: 2, text: "Kurslar", logo: <FaBook />, href: "/courses" },
  { id: 3, text: "Loyihalar", logo: <FaDiagramProject />, href: "/projects" },
  { id: 4, text: "Kod manbasi", logo: <FaCode />, href: "/source-code" },
];

function Left() {
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "dark");
  const [none, setnone] = useState('')

  useEffect(() => {
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.getAttribute("data-theme"));
    });
    observer.observe(document.documentElement, { attributes: true });

    return () => observer.disconnect();
  }, []);

  return (
    <div style={{ display: none,}} className=" Left w-[16%] h-[99vh] rounded-md bg-base-300 shadow-sm mx-1 my-1 fixed">
      <p className="text-2xl pt-2 pl-2 font-mono">Sahifalar</p>
      <div className="flex flex-col gap-6 mt-4">
        {malumot.map((item, idx) => (
          <Link key={idx} to={item.href}>
            <div className="flex items-center gap-4 px-4 py-4 w-[90%] mx-auto rounded-md bg-base-100 shadow-sm cursor-pointer hover:bg-slate-500 der">
              <span
                className={`text-2xl ${
                  theme === "dark" ? "text-white" : "text-black"
                }`}
              >
                {item.logo}
              </span>
              <h1 className="text-xl font-bold">{item.text}</h1>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 mt-80 ">
        <FaTelegram className="cursor-pointer"/>
        <FaInstagram className="cursor-pointer"/>
        <FaYoutube  className="cursor-pointer"/>
        <FaLinkedinIn  className="cursor-pointer"/>
        <FaGithub className="cursor-pointer"/>
      </div>
    </div>
  );
}

export default Left;
