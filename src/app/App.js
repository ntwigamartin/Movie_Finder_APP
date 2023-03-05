import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './navbar/navbar'
import GetMovies from "./movies/getmovies";
import Register from "./register/register";



function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Register />} ></Route>
      <Route path="/getmovies" element={<GetMovies />} ></Route>
      
    </Routes>
      
    </BrowserRouter>
    
  )
}

export default App;
