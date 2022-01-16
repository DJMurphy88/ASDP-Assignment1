import React from "react"
import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/submit" element={<Submit />}/>
      </Routes>
    </div>
  );
}

export function Home() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('./movies.json')
      .then((response) => response.json())
      .then(setMovies)
  }, []);
   
  return (
      <div>
          <nav>
              Home <Link to="/Submit">Submit Review</Link>
          </nav>
          <h1>Home</h1>
          { movies.map( movie => { return <Movie info={movie}></Movie>}) }
      </div>

  )
}

export function Submit() {
  return (
  <div>
      <nav>
          <Link to="/">Home</Link> Submit
      </nav>
      <h1>Submit</h1>
  </div>
  )
}

function Movie(props) {
  console.log(props);
  return (
    <>
      <h2>{props.info.name}</h2>
      <img src={props.info.poster} alt='Movie Poster'></img>
      <p>Release Date: {props.info.date}</p>
      <p>Actors:
      <ul>
        {props.info.actors.map((actor) => <Actor actor={actor} />)}
      </ul></p>
      <p>Rating: {props.info.rating}/5</p>
    </>
  )
}

function Actor(props) {
  return <li>{ props.actor }</li>
}

export default App;
