import React from 'react'
import Hero from '../Components/Hero'
import MovieCard from '../Components/MovieCard'
import '../Styles/Card.css'
import '../Styles/Home.css'
import Footer from '../Components/Footer'
import Nav from '../Components/Nav'

const Homepage = ({movies, hero, search, searchKeyword}) => {
    if (search.length===0) {
        return (
        <div>
        <Nav search={search} searchKeyword={searchKeyword} />
        <Hero movies={movies} hero={hero} />
        <div className="movies_container">
                <div id="movies_title">
                <h2>Featured Movies</h2>
                <span>
                    <a href>See more &#8250;</a>
                </span>
            </div>
            <div className="movies_wrap">
            {
            movies.slice(0, 12).map((movie, index)=>(
                <MovieCard key={index} {...movie} />
            ))
            }
            </div>
        </div>
        <Footer />
    </div>
        )
    }
  return (
    <div>
                <Nav search={search} searchKeyword={searchKeyword} />
        <div id="search_boxx">
            <span>
            <h1>Search Movie: </h1>
            <p>{search}</p>
            </span>
        </div>
        <div className="movies_container">
                <div id="movies_title">
                <h2>Search Result</h2>
                <span>
                    <a href>See more &#8250;</a>
                </span>
            </div>
            <div className="movies_wrap">
            {
            movies.slice(0, 12).map((movie, index)=>(
                <MovieCard key={index} {...movie} />
            ))
            }
            </div>
        </div>
        <Footer />
    </div>
  )
}

export default Homepage