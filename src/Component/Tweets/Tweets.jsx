import React from 'react';
import './Tweets.scss';
import Pinned from '../Assets/Image/Pinned.svg';
import Comment from '../Assets/Image/Comment.svg';
import Retweet from '../Assets/Image/Retweet.svg';
import Heart from '../Assets/Image/Heart.svg';
import Download from '../Assets/Image/Download.svg';
import Statistik from '../Assets/Image/Statistik.svg';
import bobur6 from '../Assets/Image/bobur6.png';
import Dots from '../Assets/Image/Dots.svg';
import BoburImage from '../Assets/Image/bobur-image.png';

const Tweets = () => {
    return (
        <div className="tweets">
            <ul className="tweets__menu">
                <li className="tweets__item">
                    <a href="#" className="tweets__link">Tweets</a>
                </li>
                <li className="tweets__item">
                    <a href="#" className="tweets__link">Tweets & Replies</a>
                </li>
                <li className="tweets__item">
                    <a href="#" className="tweets__link">Media</a>
                </li>
                <li className="tweets__item">
                    <a href="#" className="tweets__link">Likes</a>
                </li>
            </ul>
            <hr />
            <p className="tweets__pinned"><img src={Pinned} alt="" />Pinned Tweets</p>
            <ul className="tweets__submenu">
                <li className="tweets__subitem">
                    <div className="tweets__div">
                    <nav>
                        <img src={bobur6} alt="" />
                    </nav>
                    <nav className="tweets__nav">
                        <p><b>Bobur </b><span className="tweets__span"> @bobur_mavlonov · Apr 1</span></p>
                        <p>4-kursni tugatgunimcha kamida bitta biznesim bo'lishini, uylanish uchun moddiy jihatdan to'la-to'kis tayyor bo'lishni, sog'lik va jismoniy holatni normallashtirishni reja qildim</p>
                    </nav>
                    <nav>
                        <img src={Dots} alt="" />
                    </nav>
                    </div>
                    <ul className="users__submenu">
                        <li className="users__subitem"><img src={Comment} alt="" /></li>
                        <li className="users__subitem"><img src={Retweet} alt="" /></li>
                        <li className="users__subitem"><img src={Heart} alt="" /></li>
                        <li className="users__subitem"><img src={Download} alt="" /></li>
                        <li className="users__subitem"><img src={Statistik} alt="" /></li>
                    </ul>
                    <hr />
                </li>
                <li className="tweets__subitem">
                    <div className="tweets__div">
                    <nav>
                        <img src={bobur6} alt="" />
                    </nav>
                    <nav className="tweets__nav">
                        <p><b>Bobur </b><span className="tweets__span"> @bobur_mavlonov · Apr 1</span></p>
                        <p>Bizda shunaqa bir illat bor: gap bo'lsa bo'ldi, nima deyayotganimizga qarab ham o'tirmaymiz. </p>
                        <p>Bitta biznes trener nito gapirib qo'ysa, hamma biznes trenerlar yomonga chiqadi slishkom aqlli odamlar nazdida.</p>
                        <p>Gap faqat biznes trenerlar haqida emas.</p>
                    </nav>
                    <nav>
                        <img src={Dots} alt="" />
                    </nav>
                    </div>
                    <ul className="users__submenu">
                        <li className="users__subitem"><img src={Comment} alt="" /></li>
                        <li className="users__subitem"><img src={Retweet} alt="" /></li>
                        <li className="users__subitem"><img src={Heart} alt="" /></li>
                        <li className="users__subitem"><img src={Download} alt="" /></li>
                        <li className="users__subitem"><img src={Statistik} alt="" /></li>
                    </ul>
                    <hr />
                </li>
                <li className="tweets__subitem">
                    <div className="tweets__div">
                    <nav>
                        <img src={bobur6} alt="" />
                    </nav>
                    <nav className="tweets__nav">
                        <p><b>Bobur </b><span className="tweets__span"> @bobur_mavlonov · Apr 1</span></p>
                        <p>A bo'pti maskamasman</p>
                        <img style={{padding: 0, marginLeft: -30}} src={BoburImage} alt="" />
                    </nav>
                    <nav>
                        <img src={Dots} alt="" />
                    </nav>
                    </div>
                    <ul className="users__submenu">
                        <li className="users__subitem"><img src={Comment} alt="" /></li>
                        <li className="users__subitem"><img src={Retweet} alt="" /></li>
                        <li className="users__subitem"><img src={Heart} alt="" /></li>
                        <li className="users__subitem"><img src={Download} alt="" /></li>
                        <li className="users__subitem"><img src={Statistik} alt="" /></li>
                    </ul>
                    <hr />
                </li>
            </ul>
        </div>
    );
}

export default Tweets;
