import { createUserWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import {  updateProfile } from "firebase/auth";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { auth, db, googleProvider } from "../Firebase/FireConfig";
import { doc, getDoc, setDoc } from "firebase/firestore";

export default function Signup({ setUser }) {
  const [email, setEmail] = useState("");
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [confirmpass, setconfirmpassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

const handleRegister = async () => {
  if (password !== confirmpass) {
    toast.error("Parollar mos emas");
    return;
  }
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

  
    await updateProfile(user, {
      displayName: username,
      photoURL: ""
    });

    await setDoc(doc(db, "users", user.uid), {
      uid: user.uid,
      email: user.email,
      username: username,
      createdAt: new Date(),
    });

    toast.success("Muvaffaqiyatli ro'yxatdan o'tdingiz!");
    setUser(user);
    navigate("/");
  } catch (error) {
    toast.error(error.message);
  }
};
  const handleGooglelogin = async () => {
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
    }
  };

  return (
    <div className="Register w-full bg-base-300 flex">
      <div className="w-1/2 h-full bg-ttuPattern bg-cover bg-center"></div>
      <div className="w-1/2 h-full flex flex-col justify-center items-center p-10 gap-5">
        <h1 className="text-3xl">Register</h1>
        <label className="input input-bordered flex items-center gap-2">
          <input
            type="text"
            className="grow"
            placeholder="Username"
            onChange={(e) => setusername(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <input
            type="email"
            className="grow"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <input
            type="password"
            className="grow"
            placeholder="Password"
            onChange={(e) => setpassword(e.target.value)}
          />
        </label>

        <label className="input input-bordered flex items-center gap-2">
          <input
            type="password"
            className="grow"
            placeholder="Confirm password"
            onChange={(e) => setconfirmpassword(e.target.value)}
          />
        </label>

        <div className="flex gap-16 items-center justify-center">
          <button
            className="btn w-[100px] btn-outline btn-primary"
            onClick={handleRegister}
          >
            Sign up
          </button>
          <button
            className="btn w-[100px] btn-outline btn-primary"
            onClick={handleGooglelogin}
          >
            Google
          </button>
        </div>
      </div>
    </div>
  );
}
