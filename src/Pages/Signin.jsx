import {
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth, db, googleProvider } from "../Firebase/FireConfig";
import toast from "react-hot-toast";
import { doc, getDoc, setDoc } from "firebase/firestore";

function Signin({ setUser }) {
  const [email, setEmail] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();
  const [ForgotPassword, setForgotPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Welcome back");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };
  const handleGooglelogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

      console.log(auth);

      const userRef = doc(db, "users", user.uid);
      const userSnap = await getDoc(userRef);

      if (!userSnap.exists()) {
        await setDoc(userRef, {
          email: user.email,
          username: user.displayName,
          createdAt: new Date(),
        });
      }
      setUser({
        uid: user.uid,
        email: user.email,
        username: user.displayName,
      });

      toast.success("Google orqali tizimga kirildi!");
      navigate("/");
    } catch (error) {
      console.log(error.message);
    }
  };
  const handleForgotPassword = () => {
    if (!ForgotPassword || ForgotPassword.trim() === "") {
      toast.error("Email manzilini kiriting!");
      return;
    }

    sendPasswordResetEmail(auth, ForgotPassword)
      .then(() => {
        toast.success("Parol tiklash linki emailga yuborildi ✅");
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Xatolik: " + error.message);
      });
  };
  return (
    <div className="Login w-full h-screen bg-base-300 flex">
      <div className="w-1/2 h-full bg-ttuPattern bg-cover bg-center"></div>

      <div className="w-1/2 h-full flex flex-col justify-center items-center p-10 gap-5">
        <h1 className="text-3xl">Sign in</h1>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
          </svg>
          <input
            type="text"
            className="grow"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
              clipRule="evenodd"
            />
          </svg>
          <input
            type="password"
            className="grow"
            placeholder="password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>
        <div className="flex gap-16 items-center justify-center">
          <button onClick={handleLogin} className="btn btn-outline btn-primary">
            Sign in
          </button>
          <button
            onClick={handleGooglelogin}
            className="btn w-[100px] btn-outline btn-primary"
          >
            Google
          </button>
        </div>
        <div className="flex gap-8">
          <button
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Forgot Password
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Send reset password link.</h3>
              <div className="flex items-center justify-center mt-4 gap-4">
                <input
                  type="email"
                  className="w-96 h-12 outline-none pl-2 rounded-lg"
                  placeholder="Email manzilni kiriting"
                  onChange={(e) => setForgotPassword(e.target.value)}
                />
                <button
                  className="w-[100px] bg-green-800 rounded-lg h-[48px]"
                  onClick={handleForgotPassword}
                >
                  Send
                </button>
              </div>
            </div>
          </dialog>
          <Link
            className="text-blue-600 hover:underline text-left"
            to={"/register"}
          >
            Don't have a Acount
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
