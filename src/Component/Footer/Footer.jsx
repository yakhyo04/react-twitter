import React from 'react';
import './Footer.scss';
import search from '../Assets/Image/search.svg';
import Dots from '../Assets/Image/Dots.svg';
import Setting from '../Assets/Image/Setting.svg';
import Mushtariy from '../Assets/Image/Mushtariy.svg';
import Shuhratbek from '../Assets/Image/Shuhratbek.svg';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer__div">
                <img src={search} alt="" />
                <input className="footer__input" type="text" placeholder="Search Twitter" />
            </div>
            <ul className="footer__list">
                <li className="footer__item">
                    <h3>Trends for you</h3>
                    <img src={Setting} alt="" />
                </li>
                <li className="footer__item">
                    <nav>
                    <p className="footer__text">Trending in Germany</p>
                    <h4>Revolution</h4>
                    <p className="footer__text">50.4K Tweets</p>
                    </nav>
                    <nav>
                        <img src={Dots} alt="" />
                    </nav>
                </li>
                <li className="footer__item">
                    <nav>
                    <p className="footer__text">Trending in Germany</p>
                    <h4>Revolution</h4>
                    <p className="footer__text">50.4K Tweets</p>
                    </nav>
                    <nav>
                        <img src={Dots} alt="" />
                    </nav>
                </li>
                <li className="footer__item">
                    <nav>
                    <p className="footer__text">Trending in Germany</p>
                    <h4>Revolution</h4>
                    <p className="footer__text">50.4K Tweets</p>
                    </nav>
                    <nav>
                        <img src={Dots} alt="" />
                    </nav>
                </li>
                <li className="footer__item">
                    <p><a href="#" className="footer__link">Show more</a></p>
                </li>
            </ul>
            <ul className="footer__list">
                <li className="footer__item">
                    <h3>You might like</h3>
                </li>
                <li className="footer__item">
                    <nav>
                        <img src={Mushtariy} alt="" />
                    </nav>
                    <nav>
                        <h4>Mushtariy</h4>
                        <p className="footer__text">@Mushtar565266</p>
                    </nav>
                    <nav>
                        <a href="#" className="footer__follow">Follow</a>
                    </nav>
                </li>
                <li className="footer__item">
                    <nav>
                        <img src={Shuhratbek} alt="" />
                    </nav>
                    <nav>
                        <h4>Shuhratbek</h4>
                        <p className="footer__text">@mrshukhrat</p>
                    </nav>
                    <nav>
                        <a href="#" className="footer__follow">Follow</a>
                    </nav>
                </li>
                <li>
                    <a href="#" className="footer__link">Show more</a>
                </li>
            </ul>
            <p className="footer__text">Terms of Service  Privacy Policy  Cookie Policy</p>
            <p className="footer__text">Imprint  Ads Info  More ···  © 2021 Twitter, Inc.</p>
        </div>
    );
}

export default Footer;
