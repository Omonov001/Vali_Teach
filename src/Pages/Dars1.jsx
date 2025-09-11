import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Dars1() {
  const [Video, setVideo] = useState(
    "https://www.youtube.com/embed/WVHcX-oYlgA?si=BgqX0AbEBnhlWa6a"
  );
  return (
    <>
      <div className="Dars1  flex p-10 text-2xl">
        <div className="w-40 h-96">
          <Link to={'/'}>
            <button className="btn5 btn w-[220px] flex justify-normal items-center gap-4 text-xl">
              <FaHome className="text-3xl" /> <h1>Home</h1>
            </button>
          </Link>
          <div className="join join-vertical w-[220px] flex flex-col gap-5 bg-base-100 p-2">
            <div className="H collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title font-semibold">Foundation</div>
              <div className="collapse-content text-x1 flex flex-col gap-2 items-baseline">
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/WVHcX-oYlgA?si=BgqX0AbEBnhlWa6a"
                    );
                  }}
                >
                  Dars - 1
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/lRjECaLlucg?si=ribi4hrX7w10HBqc"
                    );
                  }}
                >
                  Dars - 2
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/mBgnni6Zx5Q?si=Fj5A_5K1vEWZh2VG"
                    );
                  }}
                >
                  Dars - 3
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/n_yLBmwL33s?si=yXg1UJTGO622qWZj"
                    );
                  }}
                >
                  Dars - 4
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/vPPJKPgCScI?si=1JzIOMsROP1-0iue"
                    );
                  }}
                >
                  Dars - 5
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/z9ThkVOEH5s?si=jRXYP0Xq54JXGCDW"
                    );
                  }}
                >
                  Dars - 6
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/SoGNlZLhog0?si=ZBxbZDOC7NaR0aAE"
                    );
                  }}
                >
                  Dars - 7
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/Vxr-i9TYmX8?si=fHH9Jf1x_dOpcok_"
                    );
                  }}
                >
                  Dars - 8
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/n_quaz-aiD4?si=Ub7Q0TgkJyLcMLdu"
                    );
                  }}
                >
                  Dars - 9
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/LARoSjFc6eg?si=zezvXc60ex5r4kGx"
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

export default Dars1;
