import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
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
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscibe = onAuthStateChanged(auth, (CurrentUser) => {
      setUser(CurrentUser);
    });

    return () => unsubscibe();
  }, []);

  return (
    <div className="bg-base-300 shadow-sm h-auto min-h-screen">
      <BrowserRouter>
        <Toaster position="top-right" />
        <Navbar user={user} setUser={setUser} />
        <div className="flex">
          <Left />
          <div className="flex-1">
            <Routes>
              {/* Asosiy sahifa */}
              <Route
                path="/"
                element={
                  <ProtectedRoute user={user}>
                    <Home />
                  </ProtectedRoute>
                }
              />

              {/* Contact */}
              <Route
                path="/contact"
                element={
                  <ProtectedRoute user={user}>
                    <Contact />
                  </ProtectedRoute>
                }
              />

              {/* Kurslar */}
              <Route path="/courses" element={<Kurslar />} />

              {/* Loyihalar */}
              <Route path="/projects" element={<Loyihalar />} />

              {/* Kod manbalar */}
              <Route path="/source-code" element={<Kodmanbalar />} />

              {/* Profile */}
              <Route
                path="/profile"
                element={
                  <ProtectedRoute user={user}>
                    <Profile user={user} />
                  </ProtectedRoute>
                }
              />

              {/* Auth sahifalar */}
              <Route
                path="/login"
                element={user ? <Navigate to="/" /> : <Signin setUser={setUser} />}
              />
              <Route
                path="/register"
                element={user ? <Navigate to="/" /> : <Signup setUser={setUser} />}
              />

              {/* Darslar */}
              <Route path="/D1" element={<Dars1 />} />
              <Route path="/D2" element={<Dars2 />} />
              <Route path="/D3" element={<Dars3 />} />
              <Route path="/D4" element={<Dars4 />} />
              <Route path="/D5" element={<Dars5 />} />
              <Route path="/D6" element={<Dars6 />} />

              {/* Modullar */}
              <Route path="/FM" element={<FoundationM />} />
              <Route path="/RM" element={<ReactM />} />
              <Route path="/JM" element={<JavaScriptM />} />
              <Route path="/NM" element={<NextM />} />
              <Route path="/NdM" element={<NodeM />} />
              <Route path="/NsM" element={<NestM />} />
              <Route path="/RNM" element={<ReNaM />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
