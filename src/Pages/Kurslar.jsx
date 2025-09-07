import React from "react";
import { courses } from "../Config";
import { Link } from "react-router-dom";

function Kurslar() {
  return (
    <div className="Kurslar flex flex-col bg-base-300 shadow-sm items-start">
      <div className="m-5 gap-5 cursor-pointer mt-5">
        <h1 className="text-7xl mb-5 ml-[-4px]">Kurslar</h1>
        <div className="K grid grid-cols-3 gap-5">
          {courses.map((course, idx) => (
            <Link key={idx} to={course.location}>
              <div className="card1 cursor-pointer flex flex-col bg-base-200 rounded-md w-[380px] hover:shadow-lg transition">
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
      </div>
    </div>
  );
}

export default Kurslar;
