import React from "react";
import { Link } from "react-router-dom";

function NestM() {
  return (
    <div className="Nest flex p-10">
      <div>
        <h1 className="text-5xl mb-5">Nest JS</h1>
        <p className="w-[90%] p-2">
          Backend olamidagi mashhur frameworklardan biri NestJS. O'zining
          arxitekturasi va strukturalari bilan ajralib turadi va ikki karra
          tezroq ishlaydi. NestJS o'zbek tilida, amaliy loyihalar bilan.
        </p>
        <div className="N mt-10">
          <h1 className="text-3xl mb-3">Nimalarni O'rganasiz</h1>
          <ul className="grid gap-1 grid-cols-2">
            <li>File struktura</li>
            <li>NestJS</li>
            <li>Backend arxitektura</li>
            <li>NextJS</li>
            <li>Hygraph</li>
            <li>CRUD sistemasi</li>
            <li>Server Side Rendering</li>
            <li>Blog loyihasi</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center rounded-md">
        <img
          className="w-[1700px] h-80 mr-4 rounded-md"
          src="/image copy 9.png"  // ✅ public/ bilan yozilmaydi
          alt="NestJS kurs rasmi"
        />
        <Link to="/D1">
          <button className="btn w-36 h-12 mt-10">Ko'rish →</button>
        </Link>
      </div>
    </div>
  );
}

export default NestM;
