import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';
import AppsIcon from '@material-ui/icons/Apps';
import { Avatar } from '@material-ui/core';
import Search from './Search';

function Home() {
    return (
        <div className='home' >
            <div className="home__header">
                <div className="header__left">
                    <Link to='/about'>About</Link>
                    <Link to='/store'>Store</Link>
                </div>
                <div className="header__right">
                <Link to='/gmail'>Gmail</Link>
                <Link to='/images'>Images</Link>
                <AppsIcon/>
                <Avatar/>
                </div>

            </div>
            <div className="home__body">
                <img src="https://www.freepnglogos.com/uploads/google-logo-png/file-google-logo-svg-wikimedia-commons-23.png" alt="Google"/>
                <div className="home__searchcontainer">
                    <Search />
                </div>
            </div>
        </div>
    )
}

export default Home
