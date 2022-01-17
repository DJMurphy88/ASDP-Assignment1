import React from "react"
import './App.css';
import { useState, useEffect } from "react";
import { Routes, Route } from 'react-router-dom';
import { Reviews, Submit } from "./Pages";

export function App() {
  const [movies, setMovies] = useState(null);
  
  useEffect(() => {
    fetch('./movies.json')
      .then((response) => response.json())
      .then(setMovies)
  }, []);

  if( movies == null) return null;

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Reviews movies={movies} />}/>
        <Route path="/submit" element={<Submit />}/>
      </Routes>
    </div>
  );
}

export function Movie(props) {
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
