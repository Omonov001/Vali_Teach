import React, { useState } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";

function Dars5() {
  const [Video, setVideo] = useState(
    "https://www.youtube.com/embed/WVHcX-oYlgA?si=BgqX0AbEBnhlWa6a"
  );
  return (
    <>
      <div className="Dars1 flex p-10 text-2xl">
        <div className="w-40 h-96">
          <Link to={"/"}>
            <button className="btn w-[220px] flex justify-normal items-center gap-4 text-xl">
              <FaHome className="text-3xl" /> <h1>Home</h1>
            </button>
          </Link>
          <div className="join w-[220px] join-vertical flex flex-col gap-5 bg-base-100 p-2">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked/>
              <div className="collapse-title font-semibold">React Native</div>
              <div className="collapse-content text-x1 flex flex-col gap-2 items-baseline">
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/8loeLkECSmA?si=3cEsY2QiPTPZ_nDq"
                    );
                  }}
                >
                  Dars - 1
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/tscW2Cp9cS8?si=MGogO3n5Uy0RHMkh"
                    );
                  }}
                >
                  Dars - 2
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/-POfcoTSzH0?si=3LaQ4nbqMilnlzGz"
                    );
                  }}
                >
                  Dars - 3
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/OkuDj7oWKYg?si=fejqRRYqZP6R2RkA"
                    );
                  }}
                >
                  Dars - 4
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/PxCBL1zZ6J8?si=TeUtW8BGSKm4dCBC"
                    );
                  }}
                >
                  Dars - 5
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/4NKe_MaoqLw?si=jxMeHZuRTbCeOUOS"
                    );
                  }}
                >
                  Dars - 6
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/-PBM6Tgox7E?si=ACMbvfLN8S2PG7xa"
                    );
                  }}
                >
                  Dars - 7
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/yUGJmUI1-oo?si=Np7PKvqCTmcWQEJo"
                    );
                  }}
                >
                  Dars - 8
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/DU2XximDRhw?si=tmkA5lFX-3A5L2SC"
                    );
                  }}
                >
                  Dars - 9
                </button>
                <button
                  onClick={() => {
                    setVideo(
                      "https://www.youtube.com/embed/0pn4Ga1vRAc?si=4yr8tSxBtzX9IG1g"
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

export default Dars5;
