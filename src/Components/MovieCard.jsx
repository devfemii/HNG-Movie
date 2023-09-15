import React from 'react'
import { Link } from 'react-router-dom'
import imdb from '../Assets/Icons/imdb.svg'
import rate from '../Assets/Icons/apple.svg'
import '../Styles/Card.css'

const MovieCard = ({title, release_date, poster_path, vote_count, vote_average, id}) => {

  return (
    <>
        <Link to={`/movies/${id}`}>
            <div className='movie_card' data-testid='movie-card'>
            <img data-testid='movie-poster' src={`https://image.tmdb.org/t/p/original${poster_path}`} alt="Poster" />
            <div className="info_card">
                <p data-testid='movie-release-date'>{release_date}</p>
                <h3 data-testid='movie-title'>{title}</h3>
                <div className='hero_rating hr'><span><img src={imdb} alt="Rating" /> <p>{vote_count}</p></span> <span><img src={rate} alt="Rating" /> <p>{vote_average}</p></span></div>
            </div>
            
        </div>
        </Link>
    </>
  )
}

export default MovieCard