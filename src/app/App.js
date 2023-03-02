import React from "react";
import GetMovies from "./getmovies";
import AccessManager from "./access/accessmanager";



function App() {
  return (
    <>
      <AccessManager />
      <GetMovies />
    </>
    
  )
}

export default App;
