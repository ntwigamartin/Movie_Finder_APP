import React from 'react'
import { useEffect, useState } from 'react';
import MovieListing from './movielisting'
import AddMovie from './addmovie'
import './movie.css'

function GetMovies (){
    const [movies, setMovies] = useState([])
    const [searchTerm, setSearchTerm] = useState("")
    
    useEffect(()=> {
        fetch("https://sinemazone.onrender.com/movies")
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
        <div className='main'>
            <div className='movie-container'>
                <input type="text" placeholder='search movies here' value={searchTerm} onChange={(e)=>setSearchTerm(e.target.value)} />
                <h2>List of All Movies</h2>
                <div className='list-container'>
                   {listmovies}
                </div>
            </div>
            <div>
                <AddMovie />
            </div>
        </div>
    )

}

export default GetMovies;