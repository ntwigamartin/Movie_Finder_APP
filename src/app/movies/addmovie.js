import React from "react";
import { useState } from "react";

function AddMovie(){
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")
    const [addedMovie, setAddedMovie] = useState({})


    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch("https://sinemazone.onrender.com/movies", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                title: title,
                year: year
            })
        })
            .then(r=>r.json())
            .then(data=>
                setAddedMovie(data)
                )
    }
   
    return (
        <div className="form_container">
            <div className="register_forms">
                <h2>Add New Movie</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="movie title" value={title} onChange={(e)=>setTitle(e.target.value)} />

                    <label htmlFor="year">Year</label>
                    <input type="number" name="year" placeholder="year" value={year} onChange={(e)=>setYear(e.target.value)} />

                    <button type="submit">Submit</button>
                </form>
                <div className="movie-list">
                    <h2>Added Movie</h2>
                    <h4>Movie Title:{addedMovie.title}</h4>
                    <h4>Year:{addedMovie.year}</h4>
                </div>
            </div>
        </div>
    )
}

export default AddMovie;