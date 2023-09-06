import React from "react";
import ReactDOM from "react-dom/client";
import { CookiesProvider } from "react-cookie";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import ImageState from "./context/images/imageStates";
import AuthStates from "./context/auths/authStates";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthStates>
      <ImageState>
        <CookiesProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </CookiesProvider>
      </ImageState>
    </AuthStates>
  </React.StrictMode>
);
