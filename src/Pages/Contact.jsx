import React from "react";
import { Link } from "react-router-dom";
import { href } from "../Config";

function Contact() {
  return (
    <div className="ReactNative flex flex-col p-10 text-center justify-center items-center gap-10">
      <div className="flex text-center flex-col gap-5">
        <h1 className="text-4xl">Biz bilan bog'laning</h1>
        <p className=" text-2xl">
          <div className="flex text-4xl ml-52 mb-4 text-center">
            <h6 className="h4">Vali_</h6> <span>Teach</span>
          </div>
          savol yoki takliflaringiz bo'lsa, biz bilan bog'lanish <br />
          uchun quyidagi ma'lumotlarni ishlatishingiz mumkin <br /> yokida
          formani to'ldirishingiz mumkin.
        </p>
        <div className="flex gap-14 mt-10">
          {href.map((hr, idx) => (
            <Link key={idx} to={hr.href} target="_blank">
              <button className="btn w-64 h-20 text-2xl rounded-xl">{hr.text}</button>
            </Link>
          ))}
          <button className="btn w-64 h-20 text-2xl rounded-xl">Tel: (94) 551 57 01</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
