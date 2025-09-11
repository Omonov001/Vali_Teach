import React from "react";
import { courses } from "../Config";
import { Link } from "react-router-dom";

function Kurslar() {
  return (
    <div className="Kurslar flex flex-col bg-base-300 shadow-sm items-start">
      <div className="Hkurslar flex ml-3 flex-col gap-5 mt-5">
        <div className="flex gap-2">
          <h1 className="h5 text-7xl">Kurslar</h1>
          <Link to="/courses">
            <h1 className="h2 text-7xl ml-2">→</h1>
          </Link>
        </div>
        <div className="K grid grid-cols-3 gap-5">
          {courses.map((course, idx) => (
            <Link key={idx} to={course.location}>
              <div className="card1 cursor-pointer flex flex-col bg-base-200 rounded-md w-[380px]">
                <img
                  className="w-[99.9%] rounded-md m-auto"
                  src={course.logo}
                  alt={course.text}
                />
                <h1 className="text-4xl font-bold font-mono m-2">
                  {course.text}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>{" "}
    </div>
  );
}

export default Kurslar;
