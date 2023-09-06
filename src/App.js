import React, { useEffect, useContext } from "react";
import Home from "./components/Home";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import FaceRecognition from "./components/FaceRecognition";
import About from "./components/About";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
// import { useCookies } from "react-cookie";
import UploadImage from "./components/UploadImage";
import AuthContext from "./context/auths/authContext";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  // const [cookies, setCookie] = useCookies(["user"]);
  const context = useContext(AuthContext);
  const { user, token, isLogin, getUser } = context;
  // console.log(user,'user')
  // console.log(token,'token')
  // console.log(isLogin, 'islogin')

  useEffect(() => {
    console.log("run");
    if (location.pathname === "/signup") {
      navigate("/signup");
    } else {
      if (!token) {
        if (localStorage.getItem('authToken')) {
          // getUser(cookies.authToken);
          getUser(localStorage.getItem('authToken'));
        } else {
          navigate("/login");
        }
      } else {
        if (Object.keys(user).length === 0) {
          getUser(token);
        }
      }
    }
  }, [token, isLogin, location.pathname]);

  return (
    // <Fragment>
    <Routes>
      <Route exact path="/" element={<Home user={user} />} />
      <Route exact path="/login" element={<Login />} />
      <Route exact path="/signup" element={<SignUp />} />
      <Route exact path="/uploadimage" element={<UploadImage />} />
      <Route exact path="/facerecognition" element={<FaceRecognition />} />
      <Route exact path="/about" element={<About />} />
    </Routes>
    // </Fragment>
  );
}

export default App;
