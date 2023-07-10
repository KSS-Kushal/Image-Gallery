import React, { Fragment, useEffect, useState } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import FaceRecognition from './components/FaceRecognition';
import About from './components/About';
import Login from './components/Login';
import SignUp from './components/SignUp';
import { useCookies } from 'react-cookie';

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const [isLoggedIn, setisLoggedIn] = useState(false);
  const [cookies, setCookie] = useCookies(['user']);
  const [user, setUser] = useState({name:"", phone:"", email:""})

  useEffect(() => {
    const checkLogin = async () => {
      const url = "http://localhost:5000/api/auth/user";
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': "application/json",
          "auth-token": cookies.authToken
        }
      });
      console.log(response)
      let data = await response.json();
      console.log(data)
      if (data.success) {
        setisLoggedIn(true);
        setUser({name: data.user.name, phone: data.user.phone, email: data.user.email});
      }
    }
    if (cookies.authToken) {
      checkLogin();
    }
  }, [])


  useEffect(() => {
    // Checking if user is not loggedIn
    if (!isLoggedIn) {
      navigate("/login");
    }else if(location.pathname === '/signup'){
      navigate("/signup");
    }
  }, [navigate, isLoggedIn]);
  return (
    // <Fragment>
      <Routes>
        <Route exact path='/' element={< Home user={user} isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />}></Route>
        <Route exact path='/login' element={< Login isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn}/>}></Route>
        <Route exact path='/signup' element={< SignUp isLoggedIn={isLoggedIn} setisLoggedIn={setisLoggedIn} />}></Route>
        <Route exact path='/facerecognition' element={< FaceRecognition />}></Route>
        <Route exact path='/about' element={< About />}></Route>
      </Routes>
    // </Fragment>
  );
}

export default App;
