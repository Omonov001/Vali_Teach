import React from "react";
import { Link } from "react-router-dom";

function JavaScriptM() {
  return (
    <div className="JavaScript Foundation flex p-10">
      <div>

        <h1 className="text-5xl mb-5">JavaScript</h1>
        <p className="w-[90%] p2">
          Eng mashhur dasturlash tillaridan biri xisoblangan JavaScript haqida <br />
          to'liq kurs. Ushbu kursda siz JavaScriptni to'liq amaliyot yordamida <br />
          o'rganishingiz mumkin, har bir nazariy bilimlarni amaliyotda qo'llab. <br />
          Telegram bot yordamida integratsiya qilib, loyihalar quramiz. Webpack
          yordamida loyihani modullarga bo'lish, JSON-server bilan ishlash,
          server bilan ishlash va yana juda ko'p kerakli texnologiyalar va
          ma'lumotlar.
        </p>
        <div className="N mt-10">
          <h1 className="text-3xl mb-3">Nimalarni O'rganasiz</h1>
          <ul className="grid gap-1 grid-cols-2">
            <li>JavaScript</li>
            <li>Server</li>
            <li>Git va Github</li>
            <li>AJAX</li>
            <li>Telegram Bot integratsiya</li>
            <li>JSON server</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center rounded-md">
                <img
          className="w-[1700px] h-80 mr-4 rounded-md"
          src="/image copy 7.png"
          alt="JavaScript kursi rasmi"
        />
        <Link to="/D2">
          <button className="btn btn7 w-36 h-12 mt-10">Ko'rish →</button>
        </Link>
      </div>
    </div>
  );
}

export default JavaScriptM;
