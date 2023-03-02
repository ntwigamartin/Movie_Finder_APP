import React from "react";

function MovieListing({title, year}){
    return (
        <div>
            <ul>
                <li>
                    <h2>Movie Title: {title} </h2>
                    <h2>Year: {year}</h2>
                </li>
            </ul>
        </div>
    )
}

export default MovieListing;