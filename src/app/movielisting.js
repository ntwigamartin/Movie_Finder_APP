import React from "react";

function MovieListing({title, year}){
    return (
        <div>
            <ul>
                <li>
                    <h3>Movie Title: {title} </h3>
                    <h4>Year: {year}</h4>
                </li>
            </ul>
        </div>
    )
}

export default MovieListing;