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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const [forgotPassword, setForgotPassword] = useState("");

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      toast.success("Welcome back");
      navigate("/");
    } catch (error) {
      toast.error(error.message);
    }
  };

  const handleGoogleLogin = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;

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
      toast.error("Google login xatosi: " + error.message);
    }
  };

  const handleForgotPassword = () => {
    if (!forgotPassword.trim()) {
      toast.error("Email manzilini kiriting!");
      return;
    }

    sendPasswordResetEmail(auth, forgotPassword)
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

        {/* Email input */}
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        {/* Password input */}
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="password"
            className="grow"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>

        {/* Buttons */}
        <div className="flex gap-16 items-center justify-center">
          <button onClick={handleLogin} className="btn btn-outline btn-primary">
            Sign in
          </button>
          <button
            onClick={handleGoogleLogin}
            className="btn w-[100px] btn-outline btn-primary"
          >
            Google
          </button>
        </div>

        {/* Forgot password */}
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
              <h3 className="font-bold text-lg">Send reset password link</h3>
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
            Don't have an account
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Signin;
