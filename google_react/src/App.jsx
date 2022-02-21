import { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import { Navbar } from "./components/navbar";



function App() {





  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/search/:query" element={<Navbar />}></Route>
      </Routes>
    </div>
  );
}

export default App;
