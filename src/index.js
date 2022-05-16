import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Meetup from "./component/meetup-landingpage/meetup";
import "flowbite";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Sponsor } from "./component/sponsor/sponsor";
import { Speaker } from "./component/speaker/speaker";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";
import { config } from "./component/const/config";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <GoogleReCaptchaProvider reCaptchaKey={config.RECAPTCHA_KEY}>
      <Router>
        <Routes>
          <Route exact path="/" element={<Meetup />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/speaker" element={<Speaker />} />
        </Routes>
      </Router>
    </GoogleReCaptchaProvider>
  </React.StrictMode>
);

reportWebVitals();
