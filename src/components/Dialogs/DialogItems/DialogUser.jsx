import React from 'react';
import s from './../Dialogs.module.css';
import {NavLink} from 'react-router-dom';

const DialogUser = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialogItem}>

            <NavLink to={path} activeClassName={s.dialogActiveLink} className={s.dialogLink}>
                <img src="https://img.favpng.com/25/1/17/avatar-user-computer-icons-software-developer-png-favpng-7SbFpNeqKqhhTrrrnHFUqk6U4.jpg" alt="" className={s.dialogUserImg}/>
                {props.name}
            </NavLink>
        </div>
    )
};
export default DialogUser;