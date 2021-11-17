import React from 'react';
import './Main.scss';
import Mainimg from '../Assets/Image/Main.svg';
import Bobur from '../Assets/Image/Bobur.svg';
import Image from '../Assets/Image/Image.svg';
import Gif from '../Assets/Image/Gif.svg';
import Stats from '../Assets/Image/Stats.svg';
import Smile from '../Assets/Image/Smile.svg';
import Schedule from '../Assets/Image/Schedule.svg';
import Users from '../Users/Users';

const Main = () => {
    return (
        <>
        <hr />
        {/* <div className="container"> */}
        <div className="main">
            <div className="">
                <nav className="main__nav">
                    <h1>Home</h1>
                    <img className="main__image" src={Mainimg} alt="" />
                </nav>
                <hr className="main__href" />
                <div className="main__div">
                    <img className="main__bobur" src={Bobur} alt="" />
                    <input className="main__input" type="text" placeholder="What's happening" />
                </div>
                    <ul className="main__list">
                        <li className="main__item"><img src={Image} alt="" /></li>
                        <li className="main__item"><img src={Gif} alt="" /></li>
                        <li className="main__item"><img src={Stats} alt="" /></li>
                        <li className="main__item"><img src={Smile} alt="" /></li>
                        <li className="main__item"><img src={Schedule} alt="" /></li>
                        <li><a className="main__link" href="#">Tweet</a></li>
                    </ul>
                    <hr className="main__href" />

                    <Users/>
            </div>
        <hr className="main__hr" />
        </div>
        {/* </div> */}
        </>
    );
}

export default Main;
