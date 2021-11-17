import React from 'react';
import './Profile.scss';
import Arrow from '../Assets/Image/Arrow.svg';
import boburmavlonov from '../Assets/Image/boburmavlonov.png';
import Bobur from '../Assets/Image/boburr.png';
import Location from '../Assets/Image/Location.svg';
import Link from '../Assets/Image/Link.svg';
import Born from '../Assets/Image/Born.svg';
import Joined from '../Assets/Image/Joined.svg';
import Tweets from '../Tweets/Tweets';

const Profile = () => {
    return (
        <>
        <hr />
        <div className="profile">
            <nav className="profile__nav">
                <img src={Arrow} alt="" />
                <nav className="profile__nav2">
                    <h4>Bobur</h4>
                    <p>1,070 Tweets</p>       
                </nav>
            </nav>
            <img width="750" src={boburmavlonov} alt="" />
            <div className="profile__div">
                <img src={Bobur} alt="" />
                <a href="#" className="profile__link">Edit profile</a>
            </div>
            <div className="profile__main">
                <h4>Bobur</h4>
                <p className="profile__text">@bobur_mavlonov</p>
                <p>UX&UI designer at <span>@abutechuz</span></p>
                <ul className="profile__list">
                    <li>
                        <img src={Location} alt="" />
                        <span className="profile__text">Mashag’daman</span>
                    </li>
                    <li>
                        <img src={Link} alt="" />
                        <span className="profile__tlink">t.me/boburjon_mavlonov</span>
                    </li>
                    <li>
                        <img src={Born} alt="" />
                        <span className="profile__text">Born November 24, 2000</span>
                    </li>
                    <li>
                        <img src={Joined} alt="" />
                        <span className="profile__text">Joined May 2020</span>
                    </li>
                </ul>
                <ul className="profile__submenu">
                    <li className="profile__subitem">
                        <b>67 </b>
                        <span className="profile__text"> Following</span>
                    </li>
                    <li className="profile__subitem">
                        <b>47 </b>
                        <span className="profile__text"> Followers</span>
                    </li>
                </ul>
            </div>
            <Tweets/>
        </div>
            <hr />
            </>
    );
}

export default Profile;
