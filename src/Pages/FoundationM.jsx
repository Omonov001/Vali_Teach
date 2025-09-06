import React from "react";
import { Link } from "react-router-dom";
import Left from "../Components/Left";

function FoundationM() {
  return (
    <div className="Foundation flex p-10">
      <div>
        <h1 className="text-5xl mb-5">Foundation</h1>
        <p className="w-[90%] p2">
          Foundation to'liq kurs o'zbek tilida. HTML, CSS, JavaScript (BEM),
          Bootstrap, SASS (SCSS) va amaliy loyihlar barchasi bitta kurs va
          asosiysi mutloqo bepul. O'zingizni birinchi web saytingizni
          yashashingiz mumkin va uni hosting joylashni ham sizga batafsil
          ma'lumot beramiz.
        </p>
        <div className="N mt-10">
          <h1 className="text-3xl mb-3">Nimalarni O'rganasiz</h1>
          <ul className="grid gap-1 grid-cols-2">
            <li>HTML</li>
            <li>JavaScript</li>
            <li>SASS</li>
            <li>Botstrap</li>
            <li>Portfoilo</li>
            <li>CSS</li>
            <li>BEM</li>
            <li>SCSS</li>
            <li>Web-Sayt</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center rounded-md">
        <img
          className="w-[1700px] h-80 mr-4 rounded-md"
          src="/public/image copy 6.png"
          alt=""
        />
        <Link to={"/D1"}>
          <button className="btn w-36 h-12 mt-10">Ko'rish →</button>
        </Link>
      </div>
    </div>
  );
}

export default FoundationM;
