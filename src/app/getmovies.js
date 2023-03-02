import React from 'react'
import { useEffect, useState } from 'react';
import MovieListing from './movielisting'

function GetMovies (){
    const [movies, setMovies] = useState([])

    useEffect(()=> {
        fetch("http://127.0.0.1:9292/movies")
        .then(res=>res.json())
        .then(data=>setMovies(data)) 
    },[])

    const listmovies = movies.map(m => {
        return (
            <MovieListing 
            key={m.id}
            title={m.title}
            year={m.year}
            
            />
        )
    })
    return (
        <div>
            {listmovies}
        </div>
    )

}

export default GetMovies;