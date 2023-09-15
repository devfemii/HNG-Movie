import React from 'react'
import '../Styles/Nav.css'
import tv from '../Assets/Icons/tv.svg'
import searc from '../Assets/Icons/Search.svg'
import menu from '../Assets/Icons/Menu.svg'
import { Link } from 'react-router-dom'

const Nav = ({search, searchKeyword}) => {

  return (
    <div className="nav_container">
    <div className='navigation'>
      <Link to='/'>
        <div id="logo">
            <img src={tv} alt='MovieBox' />
            <h2>MovieBox</h2>
        </div>
      </Link>
        <div id="search_box">
        <form id='movie_search' onSubmit={(event) => event.preventDefault()}>
                <input value={search} 
                onChange={searchKeyword}
                type='text' placeholder='What do you want to watch?' />
                <img src={searc} alt='Search Movie' />
            </form>

        </div>
        <div id="hero_menu">
            <h2>Sign in</h2>
            <img src={menu} alt='Menu' />
        </div>
    </div>
    </div>
  )
}

export default Nav