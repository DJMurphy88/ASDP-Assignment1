import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "./App";

export function Reviews({movies = [], onRemoveMovie = f => f}) {
    if(!movies.length) return <div>No reviews listed.</div>;
    return (
        <div>
            <nav>
                Reviews <Link to="/Submit">Submit Review</Link>
            </nav>
            <h1>Reviews</h1>
            { movies.map(movie => <Movie key={movie.name} {...movie} onRemove={onRemoveMovie} />) }
        </div>
    )
  }
  
export function Submit() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link> Submit Review
            </nav>
            <h1>Submit</h1>
        </div>
    )
}

