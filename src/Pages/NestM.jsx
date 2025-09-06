import React from "react";
import { Link } from "react-router-dom";

function NestM() {
  return (
    <div className="Nest flex p-10">
      <div>
        <h1 className="text-5xl mb-5">Nest JS</h1>
        <p className="w-[90%] p2">
          Backend olamidagi mashhur frameworklardan biri NestJS. O'zinig
          arxitekturasi va strukturulari bilan ajralib turadi. Va ikki kara
          tezroq ishlaydi. NestJS o'zbek tilida, amaliy loyihalar.
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
            <li>Server Side Render</li>
            <li>Blog loyihasi</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center rounded-md">
        <img
          className="w-[1700px] h-80 mr-4 rounded-md"
          src="/public/image copy 9.png"
          alt=""
        />
        <Link to={'/D1'}><button className="btn w-36 h-12 mt-10">Ko'rish →</button></Link>
      </div>
    </div>
  );
}

export default NestM;
