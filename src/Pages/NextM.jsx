import React from "react";
import { Link } from "react-router-dom";

function NextM() {
  return (
    <div className="Next flex p-10">
      <div>
        <h1 className="text-5xl mb-5">Next JS</h1>
        <p className="w-[90%] p-2">
          Bizning Nextjs kursimiz ikkala versiyada ham tajriba taklif etadi, bu
          sizga CMS integratsiyasidan foydalangan holda turli xil loyihalarni
          yaratishga yordam beradi. Amaliy o'rganish va real dasturlar bilan
          zamonaviy veb-ishlab chiqishni o'zlashtiring.
        </p>
        <div className="N mt-10">
          <h1 className="text-3xl mb-3">Nimalarni O'rganasiz</h1>
          <ul className="grid gap-1 grid-cols-2">
            <li>NextJS 12</li>
            <li>NextJS 14</li>
            <li>Image optimization</li>
            <li>HeadlessUI</li>
            <li>Parallel routes</li>
            <li>SEO</li>
            <li>NextJS 13</li>
            <li>Internet magazin</li>
            <li>Font optimization</li>
            <li>Shopping cart</li>
            <li>Server Side Rendering</li>
            <li>NProgress</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center rounded-md">
        <img
          className="w-[1700px] h-80 mr-4 rounded-md"
          src="/image copy 11.png"   // ✅ public dan chaqirish
          alt="NextJS kurs rasmi"
        />
        <Link to="/D6">
          <button className="btn w-36 h-12 mt-10">Ko'rish →</button>
        </Link>
      </div>
    </div>
  );
}

export default NextM;
