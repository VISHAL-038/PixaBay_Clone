// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./assets/components/Navbar";
import Home from "./assets/components/home/Home";
import Image from "./assets/components/image/Image";
import Video from "./assets/components/video/Video";
import Footer from "./assets/components/Footer";


const App = () => {
  return (
    <div className="container">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Image"  element={<Image/>} />
          <Route path="/Video"  element={<Video/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
