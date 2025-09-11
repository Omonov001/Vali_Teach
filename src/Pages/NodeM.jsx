import React from "react";
import { Link } from "react-router-dom";

function NodeM() {
  return (
    <div className="Node Foundation flex p-10">
      <div>
        <h1 className="text-5xl mb-5">NodeJS & ExpressJS</h1>
        <p className="w-[90%] p-2">
          Kurs NodeJS-ni o'rnatishdan tortib, tugallangan dasturni joylashtirish
          va uni serverda joylashtirishgacha bo'lgan asosiy ma'lumotlarni taqdim
          etadi. NodeJS o'zbek tilida to'liq kurs
        </p>
        <div className="N mt-10">
          <h1 className="text-3xl mb-3">Nimalarni O'rganasiz</h1>
          <ul className="grid gap-1 grid-cols-2">
            <li>NodeJS</li>
            <li>Backend</li>
            <li>MongoDB</li>
            <li>Web Applications</li>
            <li>Authorization</li>
            <li>ExpressJS</li>
            <li>Project</li>
            <li>Weather CLI</li>
            <li>Handlebars</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center rounded-md">
        <img
          className="w-[1700px] h-80 mr-4 rounded-md"
          src="/image copy 10.png"   // ✅ to‘g‘rilandi
          alt="NodeJS kurs rasmi"
        />
        <Link to="/D4">
          <button className="btn btn7 w-36 h-12 mt-10">Ko'rish →</button>
        </Link>
      </div>
    </div>
  );
}

export default NodeM;
