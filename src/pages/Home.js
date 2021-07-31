import React from 'react' ;
import './Home.css';
import { Link } from 'react-router-dom';
import AppsIcon from '@material-ui/icons/Apps';
import {Avatar} from '@material-ui/core';
import Search from './Search'
function Home() {
    return (
        <div className="home">
        <div className="home__header">
            <div className="home__headerLeft">
                <Link to="/about">About</Link>
                <Link to="/store">Store</Link>

            </div>
            <div className="home__headerRight">
                <Link to="/gmail">Gmail</Link>
                <Link to="/images">Images</Link>
                <AppsIcon />
                <Avatar />
                
            </div>

        </div>
        <div className="home__body">
            <img src="https://media2.giphy.com/media/2epS8zhisYtHDCKrWv/200w.webp?cid=ecf05e471gw7kepsfqr9l11jkk5af0ci68lc2xnk7iytzmzx&rid=200w.webp&ct=s" alt="" />
            <div className="home__inputContainer">
                <Search />
            </div>
        </div>
        </div>
    )
}

export default Home
