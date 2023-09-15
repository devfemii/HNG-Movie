import { useEffect, useState } from 'react';
import { Routes, Route, useParams } from 'react-router-dom';
import axios from 'axios';
import './App.css';
import Homepage from './Pages/Homepage';
import Movies from './Pages/Movies';
function App() {

  const baseURL = 'https://api.themoviedb.org/3/movie'
  const [movies, setMovies] = useState([])
  let url = `${baseURL}/top_rated?api_key=f2d61ed8a5dcea9159dd0b365fa8538b&language=en-US&page=1`
  let heroURL = 'https://api.themoviedb.org/3/movie/top_rated?api_key=f2d61ed8a5dcea9159dd0b365fa8538b&language=en-US&page=1'
  const [hero, setHero] = useState([])
  const [murl, setUrl] = useState(url);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const searchKeyword = (e) =>{
      setSearch(e.target.value)
      console.log(e.target.value)
      setUrl(`https://api.themoviedb.org/3/search/movie?query=${search}&api_key=f2d61ed8a5dcea9159dd0b365fa8538b`);
    }

  useEffect(()=>{
    axios.get(heroURL)
    .then((response) => {
      setHero(response.data.results)
    })
    .catch(function (error) {
      console.error(error);
    });
    axios.get(murl)
    .then((response) => {
      setMovies(response.data.results)
    })
    .catch(function (error) {
      console.error(error);
    });
    setLoading(false)
  }, [murl, heroURL])

  let { id } = useParams();

  if (loading) {
    return (
      <div className="loading">
        <h5>Relax, just a sec &#128526;</h5>
        <div id="loading"></div>
      </div>
    )
  }
  return (
      <div className="app">
      {/* <Nav search={search} searchKeyword={searchKeyword} /> */}
      <Routes>
        <Route path='/' element={<Homepage hero={hero} movies={movies} search={search} searchKeyword={searchKeyword} />} />
        <Route path='/movies/:id' element={<Movies hero={hero} movies={movies} />} />
      </Routes>
    </div>
  );
  }

export default App;
