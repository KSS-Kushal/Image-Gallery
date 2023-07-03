import React, { Fragment } from 'react';
import Home from './components/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import FaceRecognition from './components/FaceRecognition';
import About from './components/About';

function App() {
  return (
    <Fragment>
      <BrowserRouter>
        <Routes>
          <Route exact path='/' element={< Home />}></Route>
          <Route exact path='/facerecognition' element={< FaceRecognition />}></Route>
          <Route exact path='/about' element={< About />}></Route>
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
