import React from "react";
import { useState } from "react";

function AddMovie(){
    const [title, setTitle] = useState("")
    const [year, setYear] = useState("")


    const handleSubmit = (e) => {
        e.preventDefault();
        
        fetch("http://127.0.0.1:9292/movies", {
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
            .then(data=>console.log(data))
    }
    
    return (
        <div className="form_container">
            <div className="register_forms">
                <h2>Enter Movie Details</h2>
                <form onSubmit={handleSubmit}>
                    <label htmlFor="title">Title</label>
                    <input type="text" name="title" placeholder="movie title" value={title} onChange={(e)=>setTitle(e.target.value)} />

                    <label htmlFor="year">Year</label>
                    <input type="number" name="year" placeholder="year" value={year} onChange={(e)=>setYear(e.target.value)} />

                    <button type="submit">Submit</button>
                </form>
            </div>
        </div>
    )
}

export default AddMovie;