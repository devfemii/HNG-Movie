import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link, useParams } from 'react-router-dom'
import '../Styles/Movies.css'
import watch from '../Assets/wct.png'
import star from '../Assets/Icons/Star.svg'
import logo from '../Assets/Icons/tv.svg'
import home from '../Assets/Icons/sidebar/Home.svg';
import mv from '../Assets/Icons/sidebar/Movie Projector.svg'
import tv from '../Assets/Icons/sidebar/TV Show.svg'
import up from '../Assets/Icons/sidebar/Calendar.svg'
import log from '../Assets/Icons/sidebar/Logout.svg'
import show from '../Assets/Icons/sidebar/Two Tickets.svg'
import list from '../Assets/Icons/sidebar/List.svg'
import ban from '../Assets/btm.png'
import { Button } from '../Components/Button'

const Movies = () => {

    const {id} = useParams();

    const [details, setMdetails] = useState([]);

    useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=f2d61ed8a5dcea9159dd0b365fa8538b&language=en-US`)
        .then((response) => {
        // setMovies(response.data.results)
        console.log(response.data);
        setMdetails(response.data)
        })
        .catch(function (error) {
        console.error(error);
        });
    }, [id])

  return (
    <div className='movie_detail'>
        <div className="movie_sidebar">
            <Link to='/'>
                <div id="m_logo">
                    <img src={logo} alt="Movie" />
                    <h2>MovieBox</h2>
                </div>
            </Link>

            <span>
                <li><img src={home} alt="Homepage" /> <p>Home</p></li>
                <li><img src={mv} alt="Movie" /> <p>Movies</p></li>
                <li><img src={tv} alt="TV Show" /> <p>TV Series</p></li>
                <li><img src={up} alt="Upcoming Show" /> <p>Upcoming</p></li>
            </span>
            <div id="m_quiz">
                <h4>
                Play movie quizes
                and earn
                free tickets
                </h4>
                {/* <p>
                50k people are playing
                now
                </p> */}
                <div id="m_btn">
                    <button>start playing</button>
                </div>
            </div>
            <div id="m_logout">
                <button><img src={log} alt="Logout" /> <p>Logout</p></button>
            </div>
        </div>
        <div className="movie_container">
            <div className="trailer">
                <div id="img_container" style={{backgroundImage: `url('https://image.tmdb.org/t/p/original/${details.backdrop_path}')`}}>
                    <img src={watch} alt="Wathch Trailer" />
                </div>
                <div id="movie_info">
                    <div>
                    <span>
                        {/* <li>{details.belongs_to_collection
                                            ? details.belongs_to_collection.name
                                            : 'Collection Not Available'}</li> */}
                        <li data-testid='movie-title'>{details.original_title}</li>
                        <li data-testid='movie-release-date'>{details.release_date}</li>
                        <li data-testid='movie-runtime'>{details.runtime}</li>
                    </span>
                    <span>
                        
                    </span>
                    </div>
                    <div>
                        <span>
                            <img src={star} alt="Rating" />
                            <p>rate</p>
                        </span>
                        |
                        <p>350k</p>
                    </div>
                </div>
                <div className="movie_bottom">
                    <div className="m_left">
                        <p data-testid='movie-overview'>{details.overview}
                        </p>
                        <div className="starring">
                            <p>Director: <span>Director name</span></p>
                            <p>Writers: <span>Writers name</span></p>
                            <p>Stars: <span>Stars name</span></p>
                        </div>
                        <div className="m_extras">
                            <Button>Top Rated Movie</Button>
                        </div>
                    </div>
                    <div className="m_right">
                        <button className='btn'><img src={show} alt="Movie" />See Showtimes</button>
                        <button className='btn'><img src={list} alt="Movie" /> More watch options</button>
                        <img src={ban} alt="Movie" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Movies