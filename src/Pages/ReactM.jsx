import React from "react";
import { Link } from "react-router-dom";

function ReactM() {
  return (
    <div className="React flex p-10">
      <div>
        <h1 className="text-5xl mb-5">React JS & Redux</h1>
        <p className="w-[90%] p-2">
          Xozirda mashhur JavaScript frameworklaridan biri ReactJSni <br /> to'liq
          o'rganing. ReactJS darslari to'liq kurs o'zbek tilida. ReactJS <br />
          amaliyot va loyihalar. Ushbu kursda siz ReactJS ga oid barcha keraklik
          ko'nikmalarga ega bo'lasiz va hamma bilimlarni amaliy loyihalar <br />
          yordamida mustahkamlaysiz. Redux va Redux toolkit nima ekanligini va
          uni qanday qo'llash kerakligi haqida ham keraklik ma'lumotlarni ushbu
          kursda topishingiz mumkin, va albatta loyihalar yordamida
          bilimlarimizni mustahkamlaymiz.
        </p>
        <div className="N mt-10">
          <h1 className="text-3xl mb-3">Nimalarni O'rganasiz</h1>
          <ul className="grid gap-1 grid-cols-2">
            <li>Class component</li>
            <li>Hooklar</li>
            <li>API bilan ishlash</li>
            <li>Redux toolkit</li>
            <li>Function component</li>
            <li>Custom hooklar</li>
            <li>Redux</li>
            <li>Amaliy loyihalar</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center rounded-md">
        <img
          className="w-[1700px] h-80 mr-4 rounded-md"
          src="/image copy 8.png"   // ✅ to‘g‘rilandi
          alt="React kurs rasmi"
        />
        <Link to="/D3">
          <button className="btn w-36 h-12 mt-10">Ko'rish →</button>
        </Link>
      </div>
    </div>
  );
}

export default ReactM;
