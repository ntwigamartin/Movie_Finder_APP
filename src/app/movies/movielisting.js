import React from "react";

function MovieListing({title, year}){
    return (
        <div className="movie-list">
            <h4>Movie Title: {title} </h4>
            <h4>Year: {year}</h4>
        </div>
    )
}

export default MovieListing;