import React from "react";
import {Link} from "react-router-dom";

export function Home() {
    return (
        <div>
            <nav>
                <Link to="Reviews">Reviews</Link>
                <Link to="Submit">Submit Review</Link>
            </nav>
            <h1>Home</h1>
        </div>
    )
}

export function Reviews() {
    return (
    <div>
        <nav>
            <Link to="Home">Home</Link>
            <Link to="Submit">Submit Review</Link>
        </nav>
        <h1>Reviews</h1>
    </div>
    )
}

export function Submit() {
    return (
    <div>
        <nav>
            <Link to="Home">Home</Link>
            <Link to="Submit">Submit Review</Link>
        </nav>
        <h1>Submit</h1>
    </div>
    )
}