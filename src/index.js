import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Meetup from './meetup';
import 'flowbite';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter as Router, Routes,Route} from "react-router-dom"
import { Sponsor } from './component/sponsor/sponsor';
import { Speaker } from './component/speaker/speaker';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route exact path="/" element={<Meetup />}/>
        <Route path='/sponsor' element={<Sponsor/>}/>
        <Route path='/speaker' element={<Speaker />}/>
      </Routes>
    </Router>
  </React.StrictMode>
);

reportWebVitals();
