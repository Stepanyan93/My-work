import React from 'react';
import s from './FriendOnline.module.css';
import DefaultPhoto from './../../../../assets/img/user.png'
import {NavLink} from "react-router-dom";

const FriendOnline = (props) => {
    return (
        <div className={s.friendOnlineItems}>
            <NavLink to={props.isAuth?'/profile/' + props.id :'/login/'}>
                <img src={props.img ||DefaultPhoto} alt="" className={s.friendOnlineImg}/>
            </NavLink>

            <p>{props.name}</p>
        </div>
    )
};
export default FriendOnline;