import React, {useEffect, useState} from 'react' ;


import './App.css';
import Movie from './components/Movie'

const FEATURED_API = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=827dd9ca8f6bd53c2b13c07da44036c9&page=1";

const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=827dd9ca8f6bd53c2b13c07da44036c9&query="
function App() {
  const [movies, setMovies ]= useState([]);
  const [searchTerm, setSearchTerm ]= useState([]);
  useEffect(() => {
    getMovies(FEATURED_API)
  },[])

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      })
  }

const handleOnSubmit = (e) => {
  e.preventDefault();

  if (searchTerm) {
    getMovies(SEARCH_API + searchTerm)
    
    setSearchTerm('');
  }
};

const handleOnChange = (e) => {
  setSearchTerm(e.target.value);
}
  return (
    <>
        
      <header>
        <a href="/"> 
        <img className="homeicon"src="https://i.pinimg.com/originals/6b/4a/73/6b4a738dd051ec314307435efa574807.png" alt=""/>
        </a>
        <form onSubmit={handleOnSubmit}>
        <input className="search" type="search" placeholder="search..." value={searchTerm} onChange={handleOnChange}/>
        </form>
        
      </header>
      <div className="movie-container">
     
        {movies.length > 0 && movies.map(movie => (
        <Movie key={movie.id} {...movie}/>
      ))}
      </div>
    </>
  );
}

export default App;
