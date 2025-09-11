import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Dars4() {
  const [Video, setVideo] = useState(
    "https://www.youtube.com/embed/WVHcX-oYlgA?si=BgqX0AbEBnhlWa6a"
  );
  return (
    <>
      <div className="Dars1 flex p-10 text-2xl">
        <div className="w-40 h-96">
          <Link to={'/'}>
            <button className="btn btn5 w-[220px] flex justify-normal items-center gap-4 text-xl">
              <FaHome className="text-3xl" /> <h1>Home</h1>
            </button>
          </Link>
          <div className="join w-[220px] join-vertical flex flex-col gap-5 bg-base-100 p-3">
    
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked/>
              <div className="collapse-title font-semibold">Node JS</div>
              <div className="collapse-content text-x1 flex flex-col gap-2 items-baseline">
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/69pxFJF5SkY?si=YRVWpfySL0Nsnc9_"
                    );
                  }}
                >
                  Dars - 1
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/wmiLwVV19c4?si=4py05Tco5q-FRbeA"
                    );
                  }}
                >
                  Dars - 2
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/ciVKVY8WTBo?si=S4L7MR9O5KBR55Pd"
                    );
                  }}
                >
                  Dars - 3
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/I6LE9u9EvW0?si=1XSAgYD0aqwbsjPJ"
                    );
                  }}
                >
                  Dars - 4
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/J_oEYjMLLE4?si=ABdhr9rznfAshOJV"
                    );
                  }}
                >
                  Dars - 5
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/d3oEWncodF0?si=V0l6eVi2YKZPeIL0"
                    );
                  }}
                >
                  Dars - 6
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/52H74_tGFjU?si=UdNQO5DHJUwg0o6_"
                    );
                  }}
                >
                  Dars - 7
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/CtNJib4qDTY?si=V2KtZBx4lALvjhjv"
                    );
                  }}
                >
                  Dars - 8
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/NbEVy3lq_OI?si=IYKMNfxcNH9zj3Rv"
                    );
                  }}
                >
                  Dars - 9
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/pY1feQ1WFNI?si=RVUcx564IT0d7LDG"
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

export default Dars4;
