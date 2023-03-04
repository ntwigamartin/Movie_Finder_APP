import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from './navbar/navbar'
import GetMovies from "./movies/getmovies";
import Register from "./register/register";
import AddMovie from "./movies/addmovie";



function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<Register />} ></Route>
      <Route path="/getmovies" element={<GetMovies />} ></Route>
      <Route path="/addmovie" element={<AddMovie />} ></Route>
      
    </Routes>
      
    </BrowserRouter>
    
  )
}

export default App;
