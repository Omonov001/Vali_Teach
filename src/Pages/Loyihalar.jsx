import React from "react";
import { Projects } from "../Config";
import { Link } from "react-router-dom";

function Loyihalar() {
  return (
    <div className="Loyihalar bg-base-300">
      <h1 className="text-7xl mb-5 m-5">Loyihalar</h1>
      <div className="K ml-2 grid grid-cols-3 gap-5">
        {Projects.map((project, idx) => (
          <Link key={idx} to={project.location} target="_blank" rel="noopener noreferrer">
            <div className="card1 cursor-pointer mb-2 flex flex-col bg-base-200 rounded-md w-[380px] hover:shadow-lg transition">
              <img
                className="w-[99.9%] rounded-md m-auto"
                src={project.logo}
                alt={`${project.text} logotipi`}
              />
              <h1 className="text-4xl font-bold font-mono m-2">
                {project.text}
              </h1>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Loyihalar;
