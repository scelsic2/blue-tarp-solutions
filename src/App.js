import "./App.css";
import { Route, Routes, Navigate, BrowserRouter } from "react-router-dom";
import React, { Fragment } from 'react'

import Header from "./components/Header";
import Home from "./components/Home";
import Footer from "./components/Footer";
import AboutUs from "./components/AboutUs";
import WhatWeDo from "./components/WhatWeDo";
import HowWeDoIt from "./components/HowWeDoIt";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <div className="content-container">
          <Header />
            <main>

              <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/about" element={<AboutUs />}/>
                <Route path="/whatwedo" element={<WhatWeDo />}/>
                <Route path="/howwedoit" element={<HowWeDoIt />}/>
              </Routes>
           
            </main>
      
        </div>
        <div className="footer--pin">
          <Footer />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
