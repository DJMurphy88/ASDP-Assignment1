import React from "react";
import { Link } from "react-router-dom";
import { Movie } from "./App";

export function Reviews({movies}) {
    return (
        <div>
            <nav>
                Reviews <Link to="/Submit">Submit Review</Link>
            </nav>
            <h1>Reviews</h1>
            { movies.map( movie => { return <Movie info={movie}></Movie>}) }
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

