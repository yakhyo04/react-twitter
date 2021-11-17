import React from 'react';
import './Left.scss';

import Twitter from '../Assets/Image/Twitter.svg';
import Bobur from '../Assets/Image/Bobur.svg';
import Home from '../Assets/Image/Home.svg';
import Explore from '../Assets/Image/Explore.svg';
import Notifications from '../Assets/Image/Notifications.svg';
import Messages from '../Assets/Image/Messages.svg';
import Bookmarks from '../Assets/Image/Bookmarks.svg';
import Lists from '../Assets/Image/Lists.svg';
import Profile from '../Assets/Image/Profile.svg';
import More from '../Assets/Image/More.svg';
import login from '../Assets/Image/login.png';
import {NavLink} from 'react-router-dom';



const Left = () => {
    return (
        <>
        <div >
        <div className="left">
            <div >
        <div>
            <ul className="left__list">
                <li className="left__item"><img src={Twitter} alt="" /></li>

                <li className="left__item"><img className="left__login--img" src={login} alt="" />
                <NavLink className="left__link" to="/login">Login</NavLink></li>

                <li className="left__item"><img src={Home} alt="" />
                <NavLink className="left__link" to="/main">Home</NavLink></li>

                <li className="left__item"><img src={Explore} alt="" />
                <NavLink className="left__link" to="/">Explore</NavLink></li>

                <li className="left__item"><img src={Notifications} alt="" />
                <NavLink className="left__link" to="/">Notifications</NavLink>
                </li>

                <li className="left__item"><img src={Messages} alt="" />
                <NavLink className="left__link" to="/">Messages</NavLink>
                </li>

                <li className="left__item"><img src={Bookmarks} alt="" />
                <NavLink className="left__link" to="/">Bookmarks</NavLink>
                </li>

                <li className="left__item"><img src={Lists} alt="" />
                <NavLink className="left__link" to="/">Lists</NavLink>
                </li>

                <li className="left__item"><img src={Profile} alt="" />
                <NavLink className="left__link" to="/profile">Profile</NavLink></li>

                <li className="left__item"><img src={More} alt="" />
                <NavLink className="left__link" to="/">More</NavLink>
                </li>

                <li className="left__item"><a className="left__btn" href="#">Tweet</a></li>
                
            </ul>
        </div>
        <nav className="left__profile">
            <img style={{marginTop: '15px'}} src={Bobur} alt="" />
            <div>
            <p>Bobur</p>
            <span style={{color: 'grey'}}>@bobur_mavlonov</span>
            </div>
        </nav>
        </div></div>
        </div>
        {/* <hr className="left__hr"/> */}
        </>
    );
}

export default Left;
