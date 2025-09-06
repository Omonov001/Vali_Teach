import React from "react";
import { Projects } from "../Config";
import { Link } from "react-router-dom";

function Loyihalar() {
  return (
    <div className="Loyihalar bg-base-300">
      <h1 className="text-7xl mb-5 m-5">Loyihalar</h1>
      <div className="K ml-2 grid grid-cols-3 gap-5">
        {Projects.map((Project, idx) => (
          <Link to={Project.location} target="_blank">
            <div
              key={idx}
              className="card1 cursor-pointer mb-2 flex flex-col bg-base-200 rounded-md w-[380px]"
            >
              <img
                className="w-[99.9%] rounded-md m-auto"
                src={Project.logo}
                alt=""
              />
              <h1 className="text-4xl font-bold font-mono m-2">
                {Project.text}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Loyihalar;
