import React, { useState, useEffect } from 'react';

function Movie() {
  const URL = 'https://swapi.dev/api/films/?format=json';
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initialize the movies array to empty
  }, []);

  const handleFetchMovies = () => {
    setLoading(true);
    fetch(URL)
   .then(response => response.json())
   .then(data => {
        setMovies(data.results);
        setLoading(false);
      })
   .catch(error => {
        console.error(error);
        setLoading(false);
      });
  };

  return (
    <div className="movie-container">
      <h1>Hello World</h1>
      <h2>I am movie</h2>
      <button onClick={handleFetchMovies} className="fetch-button">Fetch Movies</button>
      {loading? (
        <p>Loading...</p>
      ) : (
        <div className="movie-cards-container">
          {movies.slice(0, 3).map(movie => (
            <div key={movie.episode_id} className="movie-card">
              <h3>{movie.title}</h3>
              <p>Episode ID: {movie.episode_id}</p>
              <p>Opening Crawl: {movie.opening_crawl}</p>
              <p>Director: {movie.director}</p>
              <p>Producer: {movie.producer}</p>
              <p>Release Date: {movie.release_date}</p>
            </div>
          ))}
          {movies.slice(3).map(movie => (
            <div key={movie.episode_id} className="movie-card">
              <h3>{movie.title}</h3>
              <p>Episode ID: {movie.episode_id}</p>
              <p>Opening Crawl: {movie.opening_crawl}</p>
              <p>Director: {movie.director}</p>
              <p>Producer: {movie.producer}</p>
              <p>Release Date: {movie.release_date}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Movie;