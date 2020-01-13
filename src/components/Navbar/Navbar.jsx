import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from 'react-router-dom';
import BlockFriendContainer from "./BlockFriend/BlockFriendContainer";

const Navbar = (props) => {
    return (
        <div className={s.nav}>
            <div className={s.container}>
                <div className={s.item}><NavLink to='/profile' activeClassName={s.itemActiveLink} className={s.itemLink}>Profile</NavLink></div>
                <div className={s.item}><NavLink to='/dialogs' activeClassName={s.itemActiveLink} className={s.itemLink}>Messages</NavLink></div>
                <div className={s.item}><NavLink to='/news' activeClassName={s.itemActiveLink} className={s.itemLink}>News</NavLink ></div>
                <div className={s.item}><NavLink to='/music' activeClassName={s.itemActiveLink} className={s.itemLink}>Music</NavLink ></div>
                <div className={s.item}><NavLink to='/settings' activeClassName={s.itemActiveLink} className={s.itemLink}>Settings</NavLink ></div>
                <div className={s.item}><NavLink to='/users' activeClassName={s.itemActiveLink} className={s.itemLink}>Users</NavLink ></div>
            </div>
            <div>
                <BlockFriendContainer/>
            </div>
        </div>

    );
};

export default Navbar;