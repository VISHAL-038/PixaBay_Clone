// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Video from "./assets/components/Video/Video";
import Image from "./assets/components/Image/Image";
import Home from "./assets/components/Home/Home";
import Navbar from "./assets/components/navbar";


const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/Home" element={<Home/>} />
          <Route path="/Image"  element={<Image/>} />
          <Route path="/Video"  element={<Video/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
