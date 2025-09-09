import React, { useEffect, useState } from "react";
import { IoIosCall } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../Firebase/FireConfig";
import { signOut } from "firebase/auth";
import toast from "react-hot-toast";

const getThemeFromStorage = () => {
  return localStorage.getItem("theme") || "dark";
};

function Navbar({ user, setUser }) {
  const navigate = useNavigate();
  const [theme, setTheme] = useState(getThemeFromStorage);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
  };

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleOut = async () => {
    try {
      await signOut(auth);
      setUser(null);
      toast.success("Yaxshi boring 👋");
      navigate("/login");
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="Navbar w-[82%] absolute my-1 mx-[265px] h-[90px] rounded-md bg-base-300 shadow-sm flex items-center justify-between px-6">
      {/* Logo */}
      <Link to={"/"}>
        <img src="/img.png" alt="logo" className="h-12" />
      </Link>

      {/* Sovg'a modal */}
      <div className="mr-[550px]">
        <button
          className="btn"
          onClick={() => document.getElementById("my_modal_1").showModal()}
        >
          <span>SOVG'A</span>
        </button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <span className="py-4 text-2xl">
              BIRINCHI OCHIQ DARS UCHUN 100% CHEGIRMA QO'LGA KIRITDINGIZ.
              QUYIDAGI RAQAMLARGA QO'NG'IROQ QILISH ORQALI O'Z JOYINGIZNI BANT
              QILING
            </span>
            <div className="flex mt-4 text-2xl gap-[25px]">
              <h2>+998 91 058 57 17</h2>
              <span>:</span>
              <h2>+998 94 551 57 01</h2>
            </div>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn w-28">
                  <h2>Yopish</h2>
                </button>
              </form>
            </div>
          </div>
        </dialog>
      </div>

      {/* Dark/Light switch */}
      <label className="swap absolute swap-rotate ml-[900px] mr-24">
        <input
          type="checkbox"
          onChange={toggleTheme}
          checked={theme === "dark"}
        />
        {/* Moon icon */}
        <svg
          className="swap-off h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Z" />
        </svg>
        {/* Sun icon */}
        <svg
          className="swap-on h-10 w-10 fill-current"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Z" />
        </svg>
      </label>

      {/* Contact */}
      <Link className="absolute ml-[960px]" to={"/contact"}>
        <IoIosCall className="text-4xl" />
      </Link>

      {/* User info */}
      <div className="flex rounded-full ml-10 items-center gap-4">
        <h1>{user?.displayName || "Anonim"}</h1>
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn rounded-full btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full overflow-hidden">
              <img
                alt="User avatar"
                src={user?.photoURL || "/image copy 23.png"}
              />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <Link to="/profile">
              <li>
                <h1 className="text-xl">Profile</h1>
              </li>
            </Link>
            <li>
              <span className="text-xl" onClick={handleOut}>
                Logout
              </span>
            </li>
          </ul>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;
