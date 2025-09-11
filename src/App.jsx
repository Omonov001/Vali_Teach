import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
} from "react-router-dom";
import Left from "./Components/Left";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Kurslar from "./Pages/Kurslar";
import Loyihalar from "./Pages/Loyihalar";
import Kodmanbalar from "./Pages/Kodmanbalar";
import FoundationM from "./Pages/FoundationM";
import JavaScriptM from "./Pages/JavaScriptM";
import ReactM from "./Pages/ReactM";
import NextM from "./Pages/NextM";
import NodeM from "./Pages/NodeM";
import NestM from "./Pages/NestM";
import ReNaM from "./Pages/ReNaM";
import Contact from "./Pages/Contact";
import Dars1 from "./Pages/Dars1";
import Dars2 from "./Pages/Dars2";
import Dars3 from "./Pages/Dars3";
import Dars4 from "./Pages/Dars4";
import Dars5 from "./Pages/Dars5";
import Dars6 from "./Pages/Dars6";
import Signin from "./Pages/Signin";
import Signup from "./Pages/Signup";
import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./Firebase/FireConfig";
import Profile from "./Pages/Profile";
import ProtectedRoute from "./Components/ProtectedRoute";
import { Toaster } from "react-hot-toast";

function App() {
  const login =
    location.pathname === "/Login" || location.pathname === "/register";
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (CurrentUser) => {
      setUser(CurrentUser);
    });

    return () => unsubscibe();
  }, []);

  return (
    <div className="bg-base-300  shadow-sm h-auto">
      <BrowserRouter>
        <div className="flex">
          <div className="flex-1 flex flex-col">
            <div className=" flex-1 ">
              <Routes>
                <Route
                  path="/"
                  element={
                    <ProtectedRoute user={user}>
                      <Navbar user={user} setUser={setUser} />
                      <div className="flex">
                        <Left />
                        <Home />
                      </div>
                    </ProtectedRoute>
                  }
                />
                <Route
                  path="/contact"
                  element={
                    <ProtectedRoute user={user}>
                      <Navbar   user={user} setUser={setUser} />
                      <div className="flex">
                        <Left />
                        <Contact />
                      </div>
                    </ProtectedRoute>
                  }
                />

                <Route
                  path="/courses"
                  element={
                    <div className="flex">
                      <Left />
                      <div className="flex ">
                        <Kurslar />
                        <Navbar  user={user} setUser={setUser}  />
                      </div>
                    </div>
                  }
                />
                <Route
                  path="/profile"
                  element={
                    <div className="flex">
                      <Left />
                      <div className="flex ">
                        <Profile user={user} />
                        <Navbar  user={user} setUser={setUser}  />
                      </div>
                    </div>
                  }
                />
                <Route
                  path="/login"
                  element={
                    user ? <Navigate to="/" /> : <Signin setUser={setUser} />
                  }
                />
                <Route
                  path="/register"
                  element={
                    user ? <Navigate to={"/"} /> : <Signup setUser={setUser} />
                  }
                />
                <Route
                  path="/projects"
                  element={
                    <div className="flex">
                      <Left />
                      <div className="flex ">
                        <Loyihalar />
                        <Navbar  user={user} setUser={setUser}  />
                      </div>
                    </div>
                  }
                />
                <Route
                  path="/source-code"
                  element={
                    <div className="flex">
                      <Left />
                      <div className="flex ">
                        <Kodmanbalar />
                        <Navbar  user={user} setUser={setUser}  />
                      </div>
                    </div>
                  }
                />
                <Route path="/D1" element={<Dars1 />} />
                <Route path="/D2" element={<Dars2 />} />
                <Route path="/D3" element={<Dars3 />} />
                <Route path="/D4" element={<Dars4 />} />
                <Route path="/D5" element={<Dars5 />} />
                <Route path="/D6" element={<Dars6 />} />
                <Route
                  path="/login"
                  element={
                    user ? <Navigate to="/" /> : <Signin setUser={setUser} />
                  }
                />
                <Route
                  path="/register"
                  element={
                    user ? <Navigate to="/" /> : <Signup setUser={setUser} />
                  }
                />

                <Route
                  path="/FM"
                  element={
                    <div className="flex">
                      <Left />
                      <div className="flex ">
                        <FoundationM />
                        <Navbar  user={user} setUser={setUser}  />
                      </div>
                    </div>
                  }
                />

                <Route
                  path="/RM"
                  element={
                    <div className="flex">
                      <Left />
                      <div className="flex ">
                        <ReactM />
                        <Navbar  user={user} setUser={setUser}  />
                      </div>
                    </div>
                  }
                />
                <Route
                  path="/JM"
                  element={
                    <div className="flex">
                      <Left />
                      <div className="flex ">
                        <JavaScriptM />
                        <Navbar  user={user} setUser={setUser}  />
                      </div>
                    </div>
                  }
                />
                <Route
                  path="/NM"
                  element={
                    <div className="flex">
                      <Left />
                      <div className="flex ">
                        <NextM />
                        <Navbar  user={user} setUser={setUser}  />
                      </div>
                    </div>
                  }
                />
                <Route
                  path="/NdM"
                  element={
                    <div className="flex">
                      <Left />
                      <div className="flex ">
                        <NodeM />
                        <Navbar  user={user} setUser={setUser}  />
                      </div>
                    </div>
                  }
                />
                <Route
                  path="/NsM"
                  element={
                    <div className="flex">
                      <Left />
                      <div className="flex ">
                        <NestM />
                        <Navbar  user={user} setUser={setUser}  />
                      </div>
                    </div>
                  }
                />
                <Route
                  path="/RNM"
                  element={
                    <div className="flex">
                      <Left />
                      <div className="flex ">
                        <ReNaM />
                        <Navbar  user={user} setUser={setUser}  />
                      </div>
                    </div>
                  }
                />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
