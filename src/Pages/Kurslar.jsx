import React from "react";
import { courses } from "../Config";
import { Link } from "react-router-dom";

function Kurslar() {
  return (
    <div className="Kurslar flex flex-col bg-base-300 shadow-sm items-start ">
      <div className="m-5 gap-5 cursor-pointer mt-5">
        <h1 className="text-7xl mb-5 ml-[-4px]">Kurslar</h1>
        <div className="K grid grid-cols-3 gap-5">
          {courses.map((courses, idx) => (
            <Link to={courses.location}>
              <div
                key={idx}
                className="card1 cursor-pointer flex flex-col bg-base-200 rounded-md w-[380px]"
              >
                <img
                  className="w-[99.9%] rounded-md m-auto"
                  src={courses.logo}
                  alt=""
                />
                <h1 className="text-4xl font-bold font-mono m-2">
                  {courses.text}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Kurslar;
