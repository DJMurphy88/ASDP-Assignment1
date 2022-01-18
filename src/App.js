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
        <Route path="/" element={<Reviews movies={movies} onRemoveMovie={name => {
          const newMovies = movies.filter(movie => movie.name !== name);
          setMovies(newMovies);
        }}/>}/>
        <Route path="/submit" element={<Submit />}/>
      </Routes>
    </div>
  );
}

export function Movie({name, date, actors, poster, rating, onRemove = f => f}) {
  return (
    <>
      <h2>{name}</h2>
      <img src={poster} alt='Movie Poster'></img>
      <p>Release Date: {date}</p>
    <p>Actors:</p>
    <ul>
      {actors.map((actor) => <Actor actor={actor} />)}
    </ul>
    <p>Rating: {rating}/5</p>
    <button onClick={() => onRemove(name)}>
    Remove
    </button>
  </>
)
}

function Actor(actors) {
  return <li>{ actors.actor }</li>
}

export default App;
