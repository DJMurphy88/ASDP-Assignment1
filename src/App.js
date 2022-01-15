import React from "react"
import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Home, Reviews, Submit } from './pages'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/reviews" element={<Reviews />}/>
        <Route path="/submit" element={<Submit />}/>
      </Routes>
    </div>
  );
}

/*
Get data from movies.json

const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch('./movies.json')
      .then((response) => response.json())
      .then(setMovies)
  }, []);

Data from movies.json

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

Actor data from movies.json

function Actor(props) {
  return <li>{ props.actor }</li>
} */

export default App;
