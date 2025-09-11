import React from "react";
import { Link } from "react-router-dom";

function FoundationM() {
  return (
    <div className="Foundation flex p-10">
      <div>
        <h1 className="text-5xl mb-5">Foundation</h1>
        <p className="w-[90%] p2 z-10">
          Foundation to'liq kurs o'zbek tilida. HTML, CSS, JavaScript (BEM),
          Bootstrap, SASS (SCSS) va amaliy loyihalar barchasi bitta kurs va
          asosiysi mutloqo bepul. O'zingizni birinchi web saytingizni
          yaratishingiz mumkin va uni hostingga joylashni ham sizga batafsil
          o'rgatamiz.
        </p>
        <div className="N mt-10">
          <h1 className="text-3xl mb-3">Nimalarni O'rganasiz</h1>
          <ul className="grid gap-1 grid-cols-2">
            <li>HTML</li>
            <li>JavaScript</li>
            <li>SASS</li>
            <li>Bootstrap</li>
            <li>Portfolio</li>
            <li>CSS</li>
            <li>BEM</li>
            <li>SCSS</li>
            <li>Web-sayt</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center rounded-md">
        <img
          className="w-[1700px] h-80 mr-4 rounded-md"
          src="/image copy 6.png"
          alt="Foundation kursi rasmi"
        />
        <Link to="/D1">
          <button className="btn7 btn w-36 h-12 mt-10">Ko'rish →</button>
        </Link>
      </div>
    </div>
  );
}

export default FoundationM;
