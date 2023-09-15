import React from 'react'
// import Swiper bundle with all modules installed
import { Swiper, SwiperSlide } from 'swiper/react';

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';

// import styles bundle
import 'swiper/css/bundle';
import '../Styles/Hero.css'
import { Button } from './Button';
import play from '../Assets/Icons/Play.svg'
import imdb from '../Assets/Icons/imdb.svg'
import rate from '../Assets/Icons/apple.svg'


const Hero = ({hero}) => {


  return (
    <div className='hero'>
        <Swiper
            direction={'vertical'}
            pagination={{
              clickable: true,
            }}

            modules={[Pagination]}
            className="mySwiper"
          >
        {hero.slice(7, 12).map((herr, index) => (
            <SwiperSlide className='hero_slide' style={{backgroundImage: `url('https://image.tmdb.org/t/p/original/${herr.backdrop_path}')`}}>
                <div className="slide_info" key={index}>
                    <h2>{herr.original_title}</h2>
                    <div className='hero_rating'><span><img src={imdb} alt="Rating" /> <p>{herr.vote_count}</p></span> <span><img src={rate} alt="Rating" /> <p>{herr.vote_average}</p></span></div>
                    <p>{herr.overview.slice(0, 130)}</p>
                    <Button onClick={()=>{
                        alert('Hello World!');
                    }}><img src={play} alt="play" />Watch Trailer</Button>
                </div>
            </SwiperSlide>
        ))}
          </Swiper>

    </div>
  )
}

export default Hero