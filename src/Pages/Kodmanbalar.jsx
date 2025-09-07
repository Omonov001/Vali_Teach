import React from "react";
import { source_code } from "../Config";
import { Link } from "react-router-dom";

function Kodmanbalar() {
  return (
    <div className="Kodmanbalar bg-base-300">
      <h1 className="text-7xl mb-5 m-5">Kod manbasi</h1>
      <div className="K ml-2 grid grid-cols-3 gap-5">
        {source_code.map((Code, idx) => (
          <Link to={Code.location} target="_blank" key={idx}>
            <div className="card1 cursor-pointer pl-5 mb-2 flex bg-base-200 items-center justify-around rounded-md w-[380px]">
              <h1 className="text-4xl font-bold font-mono">{Code.text}</h1>
              <img
                className="w-[50px] rounded-md m-2"
                src={Code.logo}
                alt={Code.text}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Kodmanbalar;
