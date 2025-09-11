import { Link } from "react-router-dom";
import { courses, Projects, source_code } from "../Config";
import IMG2 from "/image copy 5.png"; // public ichida bo‘lsa shunday qoladi

function Home() {
  return (
    <div className="Home bg-base-300 shadow-sm items-start">
      <div className="H1 rounded-md w-[98%] h-[600px]">
        <img
          className="BIG w-[97.8%] h-[598px] rounded-md"
          src={IMG2}
          alt="banner"
        />
        <div className="Ie flex">
          {/* ❌ src="/public/img.png"  ->  ✅ faqat /img.png */}
          <img
            className="m-10 w-[260px] z-10 h-[90px] shadow-sm"
            src="/img.png"
            alt="logo"
          />
          <h1 className="h1 text-4xl mt-[60px] ml-[-20px] font-bold">
            Ayti <span>Kurslari</span>
          </h1>
        </div>
        <br />
        <p className="p1 text-xl ml-14 font-bold mt-[-50px]">
          Vali <span>Teach</span> - bu sizga <span>dasturlashni</span>{" "}
          <span>o'rganishda</span> yordam beradigan platforma.{" "}
          <span>Pullik darslardagi</span> <br /> ma'lumotlarni bepul olishingiz{" "}
          <span>mumkin.</span> Barchasi bir <span>joyda!</span>
        </p>
        <div className="ml-14 flex gap-4 mt-5">
          <Link to={"/courses"}>
            <button className="btn1 bg-base-300">Kurslar</button>
          </Link>
          <Link to={"/Projects"}>
            <button className="btn2 bg-base-300">Loyihalar</button>
          </Link>
        </div>
      </div>

      {/* Kurslar */}
      <div className="Hkurslar flex ml-3 flex-col gap-5 mt-5">
        <div className="flex gap-2">
          <h1 className="h5 text-7xl">Kurslar</h1>
          <Link to="/courses">
            <h1 className="h2 text-7xl ml-2">→</h1>
          </Link>
        </div>
        <div className="K grid grid-cols-3 gap-5">
          {courses.map((course, idx) => (
            <Link key={idx} to={course.location}>
              <div className="card1 cursor-pointer flex flex-col bg-base-200 rounded-md w-[380px]">
                <img
                  className="w-[99.9%] rounded-md m-auto"
                  src={course.logo}
                  alt={course.text}
                />
                <h1 className="text-4xl font-bold font-mono m-2">
                  {course.text}
                </h1>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Loyihalar */}
      <div className="flex mt-4 cursor-pointer items-center">
        <h1 className="h6 text-7xl mb-5 m-5">Loyihalar</h1>
        <Link to="/Projects">
          <h1 className="h7 text-7xl ml-2">→</h1>
        </Link>
      </div>
      <div className="L ml-2 grid grid-cols-3 gap-5">
        {Projects.map((Project, idx) => (
          <Link key={idx} to={Project.location} target="_blank">
            <div className="card2 mb-2 flex flex-col cursor-pointer bg-base-200 rounded-md w-[380px]">
              <img
                className="w-[99.9%] rounded-md m-auto"
                src={Project.logo}
                alt={Project.text}
              />
              <h1 className="text-4xl font-bold font-mono m-2">
                {Project.text}
              </h1>
            </div>
          </Link>
        ))}
      </div>

      {/* Kod manbasi */}
      <div className="flex gap-2 items-center mb-4">
        <h1 className="h8 text-7xl mb-5 m-5">Kod manbasi</h1>
        <Link to="/source-code">
          <h1 className="h9 text-7xl ml-2">→</h1>
        </Link>
      </div>
      <div className="KM ml-2 grid grid-cols-3 gap-5">
        {source_code.map((Code, idx) => (
          <Link key={idx} to={Code.location} target="_blank">
            <div className="card3 pl-5 mb-2 flex bg-base-200 cursor-pointer items-center justify-around rounded-md w-[380px]">
              <h1 className="text-4xl font-bold font-mono">{Code.text}</h1>
              <img
                className="w-[50px] rounded-md m-2"
                src={Code.logo}
                alt={Code.text}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Home;
