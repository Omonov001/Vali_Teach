import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Dars2() {
  const [Video, setVideo] = useState(
    "https://www.youtube.com/embed/WVHcX-oYlgA?si=BgqX0AbEBnhlWa6a"
  );
  return (
    <>
      <div className="Dars1 flex p-10 text-2xl">
        <div className="w-40 h-96">
          <Link to={"/"}>
            <button className="btn btn5 w-[220px] flex justify-normal items-center gap-4 text-xl">
              <FaHome className="text-3xl" /> <h1>Home</h1>
            </button>
          </Link>
          <div className="join p-2 w-[220px] join-vertical flex flex-col gap-5 bg-base-100 ">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked/>
              <div className="collapse-title font-semibold">JavaScript</div>
              <div className="collapse-content text-x1 flex flex-col gap-2 items-baseline">
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/zJuDsji3IbE?si=TdcKoZbZV6tbjbvI"
                    );
                  }}
                >
                  Dars - 1
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/1Jy8UWjQ4JE?si=v5D-Bn6vHshYh7kc"
                    );
                  }}
                >
                  Dars - 2
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/E7_qUYYXazU?si=b7UFFLp-FLfAACrT"
                    );
                  }}
                >
                  Dars - 3
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/bPzy0_156Ws?si=u-Z_kqReYLdw6yzY"
                    );
                  }}
                >
                  Dars - 4
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/Z4E2xjTCyjM?si=Yo-IvY_4xkGJ5-J9"
                    );
                  }}
                >
                  Dars - 5
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/-Z1kqQp85n0?si=qIUOQ2VJV4M3VzU6"
                    );
                  }}
                >
                  Dars - 6
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/iEZM8mNtDvs?si=bHxU6rt5eWd-98Aa"
                    );
                  }}
                >
                  Dars - 7
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/uT62GDI-PnM?si=vE2yr2gwV4j4fSb_"
                    );
                  }}
                >
                  Dars - 8
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/WFItqQeWqF8?si=ajHoUTK-WIaInxVK"
                    );
                  }}
                >
                  Dars - 9
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/-bz1HWGOKwc?si=6SR_G-5S82GyIFpH"
                    );
                  }}
                >
                  Dars - 10
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="DHome">
          <iframe
            width="100%"
            height="100%"
            className="rounded-lg"
            src={Video}
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Dars2;
