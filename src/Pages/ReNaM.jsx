import React from "react";
import { Link } from "react-router-dom";

function ReNaM() {
  return (
    <div className="ReactNative flex p-10">
      <div>
        <h1 className="text-5xl mb-5">React Native</h1>
        <p className="w-[90%] p2">
          React Native-ni faqat real loyihalarga qaratilgan amaliy kursimiz
          bilan o'rganing. Amaliy, loyihaga asoslangan o'rganish orqali React
          Native-ni o'zlashtirib, mobil ilovalarni ishlab chiqishga sho'ng'ing.
          Karyerangizni bugun boshlang!
        </p>
        <div className="N mt-10">
          <h1 className="text-3xl mb-3">Nimalarni O'rganasiz</h1>
          <ul className="grid gap-1 grid-cols-2">
            <li>React native</li>
            <li>XCode</li>
            <li>API</li>
            <li>Mobil ilovalar</li>
            <li>Expo</li>
            <li>Android studio</li>
            <li>To'liq loyihalar</li>
            <li>IOS va Android mobil dastur</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center rounded-md">
        <img
          className="w-[1700px] h-80 mr-4 rounded-md"
          src="/public/image copy 12.png"
          alt=""
        />
        <Link
          to={"/D5"}
        >
          <button className="btn w-36 h-12 mt-10">Ko'rish →</button>
        </Link>
      </div>
    </div>
  );
}

export default ReNaM;
