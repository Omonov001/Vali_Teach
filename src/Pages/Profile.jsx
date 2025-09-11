import { updateEmail } from "firebase/auth";
import React, { useState } from "react";
import { auth } from "../Firebase/FireConfig";
import toast from "react-hot-toast";

function Profile({ user }) {
  const [email, setEmail] = useState("");

  const changeEmail = () => {
    updateEmail(auth.currentUser, email)
      .then(() => {
        toast.success("Muvaffaqiyatli o'zgartirildi🎉");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error.message);
        toast.error("Xatolik. 😒");
      });
  };

  return (
    <div className="P  w-[95%] h-[600px] mx-auto pt-12">
      <div className="PP w-[90%] h-[400px] bg-base-300 mx-auto flex items-center justify-center mb-20">
        <div className="im w-[40%]">
          <img
            src={user?.photoURL ? user?.photoURL : "/user.jpg"}
            alt="avatar"
            className="w-[65%] rounded-full"
          />
        </div>
        <div className="grid grid-cols-2 gap-10">
          <h1 className="h10">Name: {user?.displayName}</h1>
          <h1 className="h11">Email: {user?.email}</h1>
          <button
            className="btn w-44"
            onClick={() => document.getElementById("my_modal_3").showModal()}
          >
            Change email
          </button>
          <dialog id="my_modal_3" className="modal">
            <div className="modal-box">
              <form method="dialog">
                <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                  ✕
                </button>
              </form>
              <h3 className="font-bold text-lg">Hello!</h3>
              <div className="flex items-center justify-center mt-4 gap-4">
                <input
                  type="text"
                  className="w-96 h-12 outline-none pl-2 rounded-lg"
                  placeholder="Change email address"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <button
                  className="w-[100px] bg-green-800 rounded-lg h-[48px]"
                  onClick={changeEmail}
                >
                  Change
                </button>
              </div>
            </div>
          </dialog>
        </div>
      </div>
    </div>
  );
}

export default Profile;
