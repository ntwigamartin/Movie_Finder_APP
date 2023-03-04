import React from 'react'
import { useEffect, useState } from 'react';
import MovieListing from './movielisting'
import './movie.css'

function GetMovies (){
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    
    useEffect(()=> {
        fetch("http://127.0.0.1:9292/movies")
        .then(res=>res.json())
        .then(data=>setMovies(data)) 
    },[])

    const displayedmovies = movies.filter(movie => 
        movie.title.toLowerCase().includes(searchTerm.toLowerCase()) || String(movie.year).includes(searchTerm)
        )

    const listmovies = displayedmovies.map(m => {
        return (
            <MovieListing 
            key={m.id}
            title={m.title}
            year={m.year}
            
            />
        )
    })


    

    return (
        <div className='movie-container'>
            <input type="text" placeholder='search movies here' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
            <h2>List of All Movies</h2>
            {listmovies}
            {/* {displayedmovies.map(m=>( */}
        </div>
    )

}

export default GetMovies;