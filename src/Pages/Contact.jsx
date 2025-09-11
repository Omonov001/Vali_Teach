import React from "react";
import { Link } from "react-router-dom";
import { href } from "../Config";

function Contact() {
  return (
    <div className="ReactNative flex flex-col p-6 sm:p-10 text-center justify-center items-center gap-8">
      <div className="flex flex-col gap-5 max-w-3xl">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
          Biz bilan bog'laning
        </h1>

        <div className="flex flex-col items-center gap-2 text-xl sm:text-2xl">
          <div className="flex text-2xl sm:text-3xl md:text-4xl items-center gap-2">
            <h6 className="font-semibold">Vali_</h6>
            <span>Teach</span>
          </div>
          <p>
            Savol yoki takliflaringiz bo'lsa, biz bilan bog'lanish <br className="hidden sm:block" />
            uchun quyidagi ma'lumotlarni ishlatishingiz mumkin <br className="hidden sm:block" />
            yoki formani to'ldirishingiz mumkin.
          </p>
        </div>

        {/* buttonlar responsiv */}
        <div className="flex flex-col sm:flex-row flex-wrap gap-4 sm:gap-6 mt-6 justify-center">
          {href.map((hr, idx) => (
            <Link key={idx} to={hr.href} target="_blank" className="w-full sm:w-auto">
              <button className="btn w-full sm:w-64 h-14 sm:h-20 text-lg sm:text-2xl rounded-xl">
                {hr.text}
              </button>
            </Link>
          ))}
          <button className="btn w-full sm:w-64 h-14 sm:h-20 text-lg sm:text-2xl rounded-xl">
            Tel: (94) 551 57 01
          </button>
        </div>
      </div>
    </div>
  );
}

export default Contact;
