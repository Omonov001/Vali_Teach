import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Dars3() {
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
          <div className="w-[220px] join join-vertical flex flex-col gap-5 bg-base-100 p-2">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title font-semibold">React JS</div>
              <div className="collapse-content text-x1 flex flex-col gap-2 items-baseline">
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/i24GQAhdvoE?si=A7tTodFV-zoKDYvq"
                    );
                  }}
                >
                  Dars - 1
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/N7Z652uCe_g?si=M911VT9Jc6RB9fyG"
                    );
                  }}
                >
                  Dars - 2
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/aFfjXMHY3ao?si=IxVukuCOl4eKk_7w"
                    );
                  }}
                >
                  Dars - 3
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/NwuiC6jRvG0?si=cEGILc33jRzBRoHb"
                    );
                  }}
                >
                  Dars - 4
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/9rDW20zXjqo?si=FcrINzUxEDoAHY6-"
                    );
                  }}
                >
                  Dars - 5
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/JEGHigTmfC4?si=9mQ2hhJNjomtE74X"
                    );
                  }}
                >
                  Dars - 6
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/XHNPndYcn7E?si=36HTWwu3XIf-To3c"
                    );
                  }}
                >
                  Dars - 7
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/wjKNpzb0YfY?si=_vw3lHEXiRvw8dlf"
                    );
                  }}
                >
                  Dars - 8
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/zuDl6hpg8ag?si=z1dr1bn2eg_Emg04"
                    );
                  }}
                >
                  Dars - 9
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/doOMKMqS4wU?si=njuSty-tBHvZKVUp"
                    );
                  }}
                >
                  Dars - 10
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="DHome flex-1 h-[250px] sm:h-[300px] md:h-auto">
          <iframe
            width="100%"
            height="100%"
            className="rounded-lg"
            src={Video}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </>
  );
}

export default Dars3;
