import React from 'react';
import './Users.scss';

import Designsta from '../Assets/Image/Designsta.svg';
import Cloute from '../Assets/Image/Cloute.svg';
import Creative from '../Assets/Image/Creative.svg';
import Comment from '../Assets/Image/Comment.svg';
import Retweet from '../Assets/Image/Retweet.svg';
import Heart from '../Assets/Image/Heart.svg';
import Download from '../Assets/Image/Download.svg';
import Statistik from '../Assets/Image/Statistik.svg';
import Shashlik from '../Assets/Image/shashlik.png';

const Users = () => {
    return (
        <div className="users">
            <ul className="users__list">
                <li className="users__item">
                    <nav className="users__nav">
                        <div>
                    <img src={Designsta} alt="" />
                        </div>
                        <div style={{marginLeft: '20px'}}>
                    <b>Designsta</b>
                    <span style={{color: 'grey', marginLeft: '30px'}}>@inner . 25m</span>
                    <p>Twitterdagi ayol-erkak qarama-qarshiliginglardan o'zinglar zerikmadinglarmi?</p>
                        </div >
                    </nav>
                    <ul className="users__submenu">
                        <li className="users__subitem"><img src={Comment} alt="" /></li>
                        <li className="users__subitem"><img src={Retweet} alt="" /></li>
                        <li className="users__subitem"><img src={Heart} alt="" /></li>
                        <li className="users__subitem"><img src={Download} alt="" /></li>
                        <li className="users__subitem"><img src={Statistik} alt="" /></li>
                    </ul>
                    <hr />
                </li>
                <li className="users__item">
                    <nav className="users__nav">
                        <div>
                    <img src={Cloute} alt="" />
                        </div>
                        <div style={{marginLeft: '20px'}}>
                    <b>cloutexhibition</b>
                    <span style={{color: 'grey', marginLeft: '30px'}}>@RajLahoti · 22m</span>
                    <p>YPIP dasturining bu yilgi sezoni ham o’z nihoyasiga yetmoqda. Mentorlik davomida talaba va yangi bitiruvchilarni o’sayotganini ko’rib hursand bo’ladi odam.</p>
                        </div >
                    </nav>
                    <ul className="users__submenu">
                        <li className="users__subitem"><img src={Comment} alt="" /></li>
                        <li className="users__subitem"><img src={Retweet} alt="" /></li>
                        <li className="users__subitem"><img src={Heart} alt="" /></li>
                        <li className="users__subitem"><img src={Download} alt="" /></li>
                        <li className="users__subitem"><img src={Statistik} alt="" /></li>
                    </ul>
                    <hr />
                </li>
                <li className="users__item">
                    <nav className="users__nav">
                        <div>
                    <img src={Creative} alt="" />
                        </div>
                        <div style={{marginLeft: '20px'}}>
                    <b>CreativePhoto</b>
                    <span style={{color: 'grey', marginLeft: '30px'}}>@cloutexhibition · 1h</span>
                    <p>Обетда..... <br /> Кечиринглар</p>
                        </div >
                    </nav>
                    <img style={{marginLeft: '30px'}} src={Shashlik} alt="" />
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

export default Users;
